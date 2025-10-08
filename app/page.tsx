import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AvailableArtworks } from "@/components/sections/available-artworks"
import { PaintingPortfolio } from "@/components/sections/painting-portfolio"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="pt-0 md:pt-0">
      <SiteHeader />
      <Hero />
      <AvailableArtworks />
      <PaintingPortfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
