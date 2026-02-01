export type FetchOptions = RequestInit & {
  timeout?: number
  retries?: number
  retryDelay?: number
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

export class FetchError extends Error {
  public response?: Response
  public status?: number
  public details?: any
  constructor(message: string, response?: Response, details?: any) {
    super(message)
    this.name = 'FetchError'
    this.response = response
    this.status = response ? response.status : undefined
    this.details = details
  }
}

export async function fetchWithTimeout(input: RequestInfo, init?: FetchOptions): Promise<Response> {
  const timeout = init?.timeout ?? 15000
  const retries = init?.retries ?? 0
  const baseDelay = init?.retryDelay ?? 500

  // clone options for each attempt
  const attempt = async (attemptNumber: number): Promise<Response> => {
    const controller = new AbortController()
    const signal = controller.signal
    if (init && 'signal' in init && (init as any).signal) {
      // If a signal was provided by caller, propagate abort
      (init as any).signal.addEventListener('abort', () => controller.abort())
    }

    const timeoutId = window ? window.setTimeout(() => controller.abort(), timeout) : 0

    try {
      const response = await fetch(input, { ...(init || {}), signal })
      if (!response.ok) {
        const text = await safeReadResponse(response)
        throw new FetchError(`HTTP error: ${response.status}`, response, text)
      }
      return response
    } catch (err) {
      // If aborted due to timeout, treat accordingly
      const isAbort = err && (err.name === 'AbortError' || err.message === 'The user aborted a request.')
      if (attemptNumber < retries && !isAbort) {
        const backoff = baseDelay * Math.pow(2, attemptNumber)
        await delay(backoff)
        return attempt(attemptNumber + 1)
      }
      if (err instanceof FetchError) throw err
      throw new FetchError(err?.message ?? 'Network error', undefined, err)
    } finally {
      if (window) clearTimeout(timeoutId)
    }
  }

  return attempt(0)
}

async function safeReadResponse(res: Response) {
  try {
    const ct = res.headers.get('content-type') || ''
    if (ct.includes('application/json')) return await res.json()
    return await res.text()
  } catch (e) {
    return null
  }
}
