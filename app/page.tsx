import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="pt-0 md:pt-0">
      <SiteHeader />
      <Hero />
      <Footer />
    </main>
  )
}
