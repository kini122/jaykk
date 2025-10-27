"use client"

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const Analytics = dynamic(() => import('@vercel/analytics/next').then((mod) => mod.Analytics), { ssr: false })

export default function ClientAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const originalFetch = window.fetch.bind(window)
      window.fetch = (input: RequestInfo, init?: RequestInit) => {
        const url = typeof input === 'string' ? input : (input && (input as Request).url) || ''
        // Only intercept known FullStory endpoints to avoid hiding real app network errors
        if (typeof url === 'string' && url.includes('fullstory')) {
          return originalFetch(input, init).catch((err) => {
            // Log and return an empty successful response so consumers don't throw
            console.warn('Suppressed FullStory fetch error:', err)
            return Promise.resolve(new Response(null, { status: 204 }))
          })
        }
        return originalFetch(input, init)
      }
    } catch (err) {
      // If anything fails, don't crash the app
      console.warn('Failed to patch fetch for FullStory suppression', err)
    }
  }, [])

  return <Analytics />
}
