"use client"

import { useEffect, useState } from "react"

type LightboxProps = {
  images: string[]
  alts?: string[]
  initialIndex?: number
  onClose: () => void
}

export default function Lightbox({ images, alts = [], initialIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [index])

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  function handleClose() {
    setVisible(false)
    // wait for animation
    setTimeout(() => onClose(), 200)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* blurred background overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      >
        <div className="w-full h-full bg-white/30 backdrop-blur-sm" />
      </div>

      {/* modal content */}
      <div className={`relative z-10 max-w-5xl w-full mx-4 transition-transform duration-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <button
          aria-label="Close"
          className="absolute top-2 right-2 z-20 rounded-full bg-white/90 text-black p-2 shadow-md hover:bg-white"
          onClick={handleClose}
        >
          ✕
        </button>

        <button
          aria-label="Previous"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 text-black p-2 shadow-md hover:bg-white"
          onClick={prev}
        >
          ←
        </button>

        <div className="flex items-center justify-center">
          <img
            src={images[index]}
            alt={alts[index] ?? `Image ${index + 1}`}
            className="max-h-[80vh] w-auto max-w-full rounded-md shadow-lg mx-auto"
          />
        </div>

        <button
          aria-label="Next"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 text-black p-2 shadow-md hover:bg-white"
          onClick={next}
        >
          →
        </button>

        {/* caption */}
        <div className="mt-3 text-center text-sm text-black/90">
          {alts[index]}
        </div>
      </div>
    </div>
  )
}
