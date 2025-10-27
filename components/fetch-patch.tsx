"use client"

import { useEffect } from "react"

export default function FetchPatch() {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const originalFetch = window.fetch.bind(window)
      window.fetch = (input: RequestInfo, init?: RequestInit) => {
        try {
          const url = typeof input === "string" ? input : (input && (input as Request).url) || ''
          // Intercept calls to FullStory and other known third-party endpoints that may fail in preview
          if (typeof url === 'string' && (url.includes('fullstory') || url.includes('edge.fullstory.com') || url.includes('collectors'))) {
            return originalFetch(input, init).catch((err) => {
              console.warn('Suppressed third-party fetch error for', url, err)
              return Promise.resolve(new Response(null, { status: 204 }))
            })
          }
        } catch (e) {
          // fall through to default
        }
        return originalFetch(input, init)
      }
    } catch (err) {
      console.warn('Failed to patch window.fetch', err)
    }
  }, [])

  return null
}
