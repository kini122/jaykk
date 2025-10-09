import { SiteHeader } from "@/components/site-header"
import { PaintingPortfolio } from "@/components/sections/painting-portfolio"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <PaintingPortfolio />
      <Footer />
    </main>
  )
}
