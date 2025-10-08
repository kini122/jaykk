export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="mb-3 md:mb-0">© {year} akshay jayesh — All rights reserved</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
