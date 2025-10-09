"use client"

import { usePathname } from "next/navigation"
import React from "react"

export default function PagePadding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Keep home page unchanged, add extra top padding for all other routes
  const isHome = pathname === "/" || pathname === ""

  return (
    <div className={isHome ? undefined : "pt-20 md:pt-24 lg:pt-28"}>
      {children}
    </div>
  )
}
