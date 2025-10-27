"use client"

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const Analytics = dynamic(() => import('@vercel/analytics/next').then((mod) => mod.Analytics), { ssr: false })

export default function ClientAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const nav: any = navigator
      const cb = nav.clipboard
      if (cb && typeof cb.writeText === 'function' && !cb.__patchedByApp) {
        const original = cb.writeText.bind(cb)
        cb.__patchedByApp = true
        cb.writeText = async (text: string) => {
          try {
            return await original(text)
          } catch (err) {
            try {
              const textarea = document.createElement('textarea')
              textarea.value = String(text)
              textarea.style.position = 'fixed'
              textarea.style.top = '0'
              textarea.style.left = '0'
              textarea.style.width = '1px'
              textarea.style.height = '1px'
              textarea.style.padding = '0'
              textarea.style.border = 'none'
              textarea.style.outline = 'none'
              textarea.style.boxShadow = 'none'
              textarea.style.background = 'transparent'
              document.body.appendChild(textarea)
              textarea.focus()
              textarea.select()
              const success = document.execCommand('copy')
              document.body.removeChild(textarea)
              if (success) return Promise.resolve()
              return Promise.reject(err)
            } catch (e) {
              return Promise.reject(err)
            }
          }
        }
      }
    } catch (e) {
      // silent
    }
  }, [])

  return <Analytics />
}
