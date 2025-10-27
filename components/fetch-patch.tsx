"use client"

import { useEffect } from "react"

export default function FetchPatch() {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      // avoid double-patching
      if ((window as any).__fetchPatchedByApp) return

      const originalFetch = window.fetch.bind(window)

      window.fetch = (input: any, init?: any) => {
        let url = ""
        try {
          url = typeof input === "string" ? input : (input && input.url) || ''
        } catch (e) {
          // ignore
        }

        const shouldIntercept = typeof url === 'string' && (
          url.includes('fullstory') ||
          url.includes('edge.fullstory.com') ||
          url.includes('collectors') ||
          url.includes('edge.fullstory')
        )

        try {
          if (shouldIntercept) {
            return originalFetch(input, init).catch((err: any) => {
              console.warn('Suppressed third-party fetch error for', url, err)
              return Promise.resolve(new Response(null, { status: 204 }))
            })
          }

          // Call original fetch and catch any rejection so it doesn't bubble up as uncaught
          return originalFetch(input, init).catch((err: any) => {
            // If it's a third-party failure, swallow it; otherwise rethrow
            if (shouldIntercept) {
              console.warn('Suppressed fetch error for', url, err)
              return Promise.resolve(new Response(null, { status: 204 }))
            }
            throw err
          })
        } catch (syncErr) {
          // In some environments fetch may throw synchronously; handle gracefully
          console.warn('Synchronous fetch error suppressed for', url, syncErr)
          return Promise.resolve(new Response(null, { status: 204 }))
        }
      }

      ;(window as any).__fetchPatchedByApp = true
    } catch (err) {
      console.warn('Failed to patch window.fetch', err)
    }
  }, [])

  return null
}
