"use client"

import { useEffect, useRef, useState } from "react"

export function Hero() {
  // slides: first is the existing hero image, then examples from available artworks + portfolio
  const slides = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fc42a4f5004514145a01d1b1dcdf5f9d1%2Fd9fe598b6e854d319b96417b11b4c5a0?format=webp&width=800",
      alt: "JayKarun Artist logo",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fae9bbbb6b1574ea18e5c9df35e78f227?format=webp&width=1920&q=100",
      alt: "Loose Talk",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fff0b78b389b14489aabbbd73e5901810?format=webp&width=1920&q=100",
      alt: "Loose He & She",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F1c88167d5b49426c88ffd1bdffde3734?format=webp&width=1920&q=100",
      alt: "Gods own fruit",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fafff93b0b2b14a788ba45eda9fd8e0bc?format=webp&width=1920&q=100",
      alt: "A cat in my garden",
    },
  ]

  const [index, setIndex] = useState(0)
  const autoplayDelay = 5500 // ms
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // autoplay timer
    const start = () => {
      clearAutoplay()
      // @ts-ignore - window.setTimeout returns number
      timeoutRef.current = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length)
      }, autoplayDelay)
    }

    const clearAutoplay = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    start()
    return () => clearAutoplay()
  }, [index])

  // manual controls
  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length)
  }
  function goTo(i: number) {
    setIndex(i)
  }

  return (
    <section id="home" className="relative scroll-mt-24 md:scroll-mt-28">
      <div className="relative h-[480px] md:h-[720px] lg:h-[900px] overflow-hidden">
        {/* slides stacked */}
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ objectPosition: "center" }}
          />
        ))}

        {/* overlay text removed per DOM diff */}

        {/* bottom roles strip */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-foreground/80 text-background">
          <div className="mx-auto max-w-7xl px-6">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-xs md:text-sm">
              <li>Creative Director</li>
              <li>Graphic Designer</li>
              <li>Story Teller</li>
              <li>Poet</li>
              <li>Lyricist</li>
              <li>Photographer</li>
              <li>Tablist</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
