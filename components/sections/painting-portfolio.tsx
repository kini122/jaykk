"use client"

type Item = {
  title: string
  medium: string
  status: "Sold"
  alt: string
  imageUrl?: string
}

const items: Item[] = [
  { title: "Gods own fruit", medium: "Acrylic on canvas", status: "Sold", alt: "Gods own fruit", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F1c88167d5b49426c88ffd1bdffde3734?format=webp" },
  { title: "A cat in my garden", medium: "Acrylic on canvas", status: "Sold", alt: "A cat in my garden", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fafff93b0b2b14a788ba45eda9fd8e0bc?format=webp" },
  { title: "Lovers", medium: "Acrylic on canvas", status: "Sold", alt: "Lovers", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F985f74125da14709b1dc9bc63e9726ee?format=webp" },
  { title: "Summer Blooms", medium: "Acrylic on canvas", status: "Sold", alt: "Summer Blooms", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fe0b63ebef91a4b67b3dd9a5dd21948b6?format=webp" },
  { title: "Winter Arrivers", medium: "Acrylic on canvas", status: "Sold", alt: "Winter Arrivers", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F09e882876bb5460fb10f33716931144f?format=webp" },
  { title: "Misty Morning", medium: "Watercolor on paper", status: "Sold", alt: "Misty Morning", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd693e19dd6f74c6795ccf7eda66d1b33?format=webp" },
  { title: "Erotic Nature", medium: "Acrylic on canvas", status: "Sold", alt: "Erotic Nature", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F86f4d83882a64ceea6e739e5c948a3e6?format=webp" },
  { title: "Erotic Nature", medium: "Acrylic on canvas", status: "Sold", alt: "Erotic Nature", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F43224eb7d5864d4584c1eb6feea50340?format=webp" },
  { title: "Erotic Nature", medium: "Acrylic on canvas", status: "Sold", alt: "Erotic Nature", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fa43f8106fe8846b1834da3519c88791d?format=webp" },
  { title: "Erotic Nature", medium: "Acrylic on canvas", status: "Sold", alt: "Erotic Nature", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fc9086e821bab49acb226427e2c8c754b?format=webp" },
  { title: "Erotic Nature", medium: "Acrylic on canvas", status: "Sold", alt: "Erotic Nature", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fc042bb8a83de40e3b4c531dddddf409f?format=webp" },
  { title: "Waiting Pot", medium: "Acrylic on canvas", status: "Sold", alt: "Waiting Pot", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fc03c56cfa21c47df9fb40f5471750986?format=webp" },
  { title: "Wasted Land", medium: "Acrylic on canvas", status: "Sold", alt: "Wasted Land", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd1d3c821b168478cac444b20df11a94d?format=webp" },
  { title: "The Enchanted Nimph", medium: "Watercolor on paper", status: "Sold", alt: "The Enchanted Nimph", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F4d7931804eca4c7db5d77c9c6b6b1b3a?format=webp" },
  { title: "The Bath", medium: "Acrylic on canvas", status: "Sold", alt: "The Bath", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fa53f4c3e110e47a985c5f7dfbce9d487?format=webp" },
  { title: "Waiting for my reed player", medium: "Acrylic on canvas", status: "Sold", alt: "Waiting for my reed player", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F671bd4ac36ae4a189f8fb9208a57547c?format=webp" },
  { title: "Neo Marxian", medium: "Acrylic on canvas", status: "Sold", alt: "Neo Marxian", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F9c43b5fa7aee4ffcb22ebbf16361c09f?format=webp" },
  { title: "Neo Marxian", medium: "Acrylic on canvas", status: "Sold", alt: "Neo Marxian", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fa2e66c95174a47be89b91c8b8b0ddb45?format=webp" },
  { title: "Neo Marxian", medium: "Acrylic on canvas", status: "Sold", alt: "Neo Marxian", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fadfd3d091ed94cd1ae120f25a20eef12?format=webp" },
  { title: "An Unknown girl", medium: "Acrylic on canvas", status: "Sold", alt: "An Unknown girl", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fb3e443c9a47a4310ac60825704e43510?format=webp" },
  { title: "Hope of love", medium: "Watercolor on paper", status: "Sold", alt: "Hope of love", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F0805d206a9a3412a97e2735ca71c8bb8?format=webp" },
  { title: "Triangle", medium: "Acrylic on canvas", status: "Sold", alt: "Triangle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F7d0a2d4f663942d2b061a52603b9705d?format=webp" },
  { title: "Circle", medium: "Acrylic on canvas", status: "Sold", alt: "Circle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F3df628a6897a49dca32824f47ed7cdb0?format=webp" },
  { title: "Square", medium: "Acrylic on canvas", status: "Sold", alt: "Square", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F4932b425f44642be9e7e22bfad60b3a3?format=webp" },
  { title: "Tar Kettle", medium: "Acrylic on canvas", status: "Sold", alt: "Tar Kettle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F853383a2ec034bc9af7af6409053c80c?format=webp" },
  { title: "The Party", medium: "Acrylic on canvas", status: "Sold", alt: "The Party", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F7b9dcc78770b4823ba66ebf0dde63825?format=webp" },
  { title: "Three Friends", medium: "Acrylic on canvas", status: "Sold", alt: "Three Friends", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F945f2ab551294ec9ad0e005ee2222066?format=webp" },
  { title: "Convetsations", medium: "Watercolor on paper", status: "Sold", alt: "Convetsations", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F174880b048974585a7493c397dd14152?format=webp" },
  { title: "Cityscape", medium: "Acrylic on canvas", status: "Sold", alt: "Cityscape", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F2d546145618d4ed5b02e54c12c7a8e96?format=webp" },
  { title: "Dancer", medium: "Acrylic on canvas", status: "Sold", alt: "Dancer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fb3e443c9a47a4310ac60825704e43510?format=webp" },
  { title: "Violinist", medium: "Acrylic on canvas", status: "Sold", alt: "Violinist", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F0805d206a9a3412a97e2735ca71c8bb8?format=webp" },
  { title: "To a girl unknown", medium: "Acrylic on canvas", status: "Sold", alt: "To a girl unknown", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F7d0a2d4f663942d2b061a52603b9705d?format=webp" },
  { title: "Dancers in the mist", medium: "Acrylic on canvas", status: "Sold", alt: "Dancers in the mist", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F985f74125da14709b1dc9bc63e9726ee?format=webp" },
  { title: "Falling time", medium: "Acrylic on canvas", status: "Sold", alt: "Falling time", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fcd709b94ad2346a68b7e145d858fc864?format=webp" },
  { title: "Gods own fruit", medium: "Watercolor on paper", status: "Sold", alt: "Gods own fruit", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F52a94c60c7dc49c2806b5cc3ec2607be?format=webp" },
  { title: "The hat of santiago", medium: "Acrylic on canvas", status: "Sold", alt: "The hat of santiago", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F4fbfba77af674b64b9cd552f15716a4d?format=webp" },
  { title: "The Catch", medium: "Acrylic on canvas", status: "Sold", alt: "The Catch", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd1d3c821b168478cac444b20df11a94d?format=webp" },
  { title: "The arrow", medium: "Acrylic on canvas", status: "Sold", alt: "The arrow", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Ffe94a34e3a43444199833b2b919a9b2c?format=webp" },
  { title: "Eating Basket", medium: "Acrylic on canvas", status: "Sold", alt: "Eating Basket", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F2c5d601267624770b580c02df6a07c73?format=webp" },
]

import { useState } from "react"
import Lightbox from "@/components/lightbox"

export function PaintingPortfolio() {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const images = items.map((it) => it.imageUrl ?? "/placeholder.svg")
  const alts = items.map((it) => it.alt)

  function openAt(i: number) {
    setIndex(i)
    setIsOpen(true)
  }

  return (
    <section id="portfolio" className="section section-muted">
      <div className="mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-center">Painting Portfolio</h2>
        <div className="mt-8 flex justify-center">
          <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((it, idx) => (
              <article key={`${it.imageUrl ?? it.title}-${idx}`} className="group bg-muted/80 p-4 rounded-md cursor-pointer" onClick={() => openAt(idx)}>
                <img
                  src={it.imageUrl}
                  alt={it.alt}
                  className="w-full h-80 object-cover rounded-sm bg-muted"
                />
                <div className="mt-4 text-left">
                  <h3 className="text-lg font-medium">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Medium: {it.medium}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold">Status:</span> {it.status}</p>
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
