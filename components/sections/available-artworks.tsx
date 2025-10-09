"use client"

type Artwork = {
  title: string
  medium: string
  size: string
  alt: string
  placeholderQuery: string
}

const artworks: (Artwork & { imageUrl?: string })[] = [
  {
    title: "Loose Talk",
    medium: "Acrylic on canvas",
    size: "21 x 21 Inch",
    alt: "Three abstract figures with vibrant colors against gray.",
    placeholderQuery: "abstract three figures vibrant colors on gray background",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fae9bbbb6b1574ea18e5c9df35e78f227?format=webp",
  },
  {
    title: "Loose He & She",
    medium: "Acrylic on canvas",
    size: "21 x 21 Inch",
    alt: "Two abstract figures in blues and purples.",
    placeholderQuery: "two abstract figures blue and purple",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fff0b78b389b14489aabbbd73e5901810?format=webp",
  },
  {
    title: "Kite Flyers",
    medium: "Acrylic on canvas",
    size: "21 x 21 Inch",
    alt: "Bright abstract resembling kites in the sky.",
    placeholderQuery: "abstract kites flying bright yellow blue pink",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F19a06554e5c44d398057ca3724f6e2b4?format=webp",
  },
  {
    title: "Dogs Day",
    medium: "Acrylic on canvas",
    size: "36 x 36 Inch",
    alt: "Dogs walking in a dark forest at night.",
    placeholderQuery: "dogs walking at night forest dark blues browns painting",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Faa1f68d621bc427b8ae5e16513591865?format=webp",
  },
  {
    title: "Transformation",
    medium: "Acrylic on canvas",
    size: "18 x 18 Inch",
    alt: "Two animal-like figures on yellow backdrop.",
    placeholderQuery: "abstract animal figures yellow backdrop blue orange",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F2bfb0909bf344e9cbc3313cc99282a7a?format=webp",
  },
  {
    title: "Transformation",
    medium: "Watercolor on paper",
    size: "21 x 21 Inch",
    alt: "Watercolor cranes near water with delicate branches.",
    placeholderQuery: "watercolor cranes near water delicate branches blue white",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Ff09bf4a617084b86896e073dce003139?format=webp",
  },
]

import { useState } from "react"
import Lightbox from "@/components/lightbox"

export function AvailableArtworks() {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const images = artworks.map((a) => a.imageUrl ?? "/placeholder.svg")
  const alts = artworks.map((a) => a.alt)

  function openAt(i: number) {
    setIndex(i)
    setIsOpen(true)
  }

  return (
    <section id="available-works" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-center">Available Artworks</h2>
        <div className="mt-8 flex justify-center">
          <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((a, i) => (
              <article key={`${a.title}-${a.size}`} className="group bg-muted/80 p-4 rounded-md cursor-pointer" onClick={() => openAt(i)}>
                <img
                  src={a.imageUrl ?? '/placeholder.svg'}
                  alt={a.alt}
                  className="w-full h-80 object-cover rounded-sm bg-muted"
                />
                <div className="mt-4 text-left">
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Medium: {a.medium}</p>
                  <p className="text-sm text-muted-foreground">Size: {a.size}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {isOpen && <Lightbox images={images} alts={alts} initialIndex={index} onClose={() => setIsOpen(false)} />}
    </section>
  )
}
