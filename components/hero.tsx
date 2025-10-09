"use client"

export function Hero() {
  const imageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F4c04286fd49043edaf73277bf54f63c4?format=webp&width=1920&q=100"

  return (
    <section id="home" className="relative scroll-mt-24 md:scroll-mt-28">
      {/* full-bleed hero image */}
      <div className="relative h-[480px] md:h-[720px] lg:h-[900px]">
        <img
          src={imageUrl}
          alt="Black and white portrait facing right"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* overlay text placed on top of the image */}
        <div className="relative z-10 mx-auto max-w-6xl h-full px-4 flex items-center">
          <div className="text-black">
            <h1 className="font-serif leading-none tracking-tight text-6xl md:text-8xl lg:text-9xl">jaykarun</h1>
            <p className="mt-3 text-xl md:text-2xl">Visual Artist</p>
          </div>
        </div>

        {/* bottom roles strip */}
        <div className="absolute inset-x-0 bottom-0 bg-foreground/80 text-background">
          <div className="mx-auto max-w-6xl px-4">
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
