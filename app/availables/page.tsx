import { SiteHeader } from "@/components/site-header"
import { AvailableArtworks } from "@/components/sections/available-artworks"
import { Footer } from "@/components/footer"

export default function AvailablesPage() {
  return (
    <main>
      <SiteHeader />
      <AvailableArtworks />
      <Footer />
    </main>
  )
}
