"use client"

import { Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="mb-3 md:mb-0">© {year} jaykarun — All rights reserved</div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="flex items-center gap-2 hover:underline">
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <a href="#" aria-label="LinkedIn" className="flex items-center gap-2 hover:underline">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="#" aria-label="Facebook" className="flex items-center gap-2 hover:underline">
            <Facebook size={16} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
