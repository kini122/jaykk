"use client"

import { useEffect } from 'react'

export default function FetchPatch() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Only patch fetch in development to avoid interfering with third-party scripts in preview/production
    if (process.env.NODE_ENV !== 'development') return
    try {
      const globalAny: any = window
      if (!globalAny.fetch || globalAny.fetch.__patchedByApp) return
      const originalFetch = globalAny.fetch.bind(window)
      const patched = (...args: any[]) => {
        try {
          const result = originalFetch(...args)
          // Ensure the result is a Promise and catch to transform network errors
          if (result && typeof result.then === 'function') {
            return result.catch((err: any) => {
              // Normalize TypeError 'Failed to fetch' to a clearer FetchError
              if (err && err.name === 'TypeError' && /failed to fetch/i.test(err.message || '')) {
                const e = new Error('Network request failed (patched): ' + (err.message || 'Failed to fetch'))
                ;(e as any).original = err
                return Promise.reject(e)
              }
              return Promise.reject(err)
            })
          }
          return result
        } catch (err) {
          return Promise.reject(err)
        }
      }
      patched.__patchedByApp = true
      try {
        // preserve toString
        patched.toString = () => originalFetch.toString()
      } catch (e) {
        // ignore
      }
      globalAny.fetch = patched
    } catch (e) {
      // silent
    }
  }, [])

  return null
}
