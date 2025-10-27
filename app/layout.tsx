import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import ClientAnalytics from "@/components/client-analytics"
import PagePadding from "@/components/page-padding"


export const metadata: Metadata = {
  title: "jaykarun.com",
  description: "Visual Artist — Portfolio and Available Works",
  generator: "v0.app",
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* use sans for body, expose serif variable for headings */}
      <body className={`font-sans ${GeistSans.variable} ${playfair.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(typeof window==='undefined'||window.__fetchPatchedByApp)return;var o=window.fetch.bind(window);window.fetch=function(i,n){try{var u=typeof i==='string'?i:(i&&i.url)||'';if(typeof u==='string'&&(u.includes('fullstory')||u.includes('edge.fullstory')||u.includes('collectors'))){return o(i,n).catch(function(){return new Response(null,{status:204})})}return o(i,n);}catch(e){return Promise.resolve(new Response(null,{status:204}))}};window.__fetchPatchedByApp=true}catch(e){}})();` }} />
        <Suspense fallback={<div>Loading...</div>}>
          <FetchPatch />
          <PagePadding>{children}</PagePadding>
        </Suspense>
        <ClientAnalytics />
      </body>
    </html>
  )
}
