import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import ClientAnalytics from "@/components/client-analytics"
import PagePadding from "@/components/page-padding"
import FetchPatch from "@/components/fetch-patch"


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
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(typeof window==='undefined')return;/* idempotent */if(window.__fetchPatchedByApp&&window.__scriptsBlockedByApp)return;/* patch fetch */try{const originalFetch=window.fetch.bind(window);window.fetch=function(input,init){var url='';try{url=typeof input==='string'?input:input&&input.url||'';}catch(e){}var shouldIntercept=typeof url==='string'&&(url.includes('fullstory')||url.includes('edge.fullstory')||url.includes('collectors')||url.includes('edge.fullstory'));try{if(shouldIntercept){return originalFetch(input,init).catch(function(){return new Response(null,{status:204});});}return originalFetch(input,init);}catch(err){return Promise.resolve(new Response(null,{status:204}));}};window.__fetchPatchedByApp=true;}catch(e){}/* block script insertion for known third-party endpoints */try{const origAppend=Element.prototype.appendChild;const origInsert=Node.prototype.insertBefore;function isBlockedScript(node){try{return node&&node.tagName==='SCRIPT'&&node.src&&(/fullstory|edge\.fullstory|collectors/i).test(node.src);}catch(e){return false}}Element.prototype.appendChild=function(node){if(isBlockedScript(node)){console.warn('Blocked third-party script append',node.src);return node;}return origAppend.call(this,node)};Node.prototype.insertBefore=function(node,ref){if(isBlockedScript(node)){console.warn('Blocked third-party script insertBefore',node.src);return node;}return origInsert.call(this,node,ref)};window.__scriptsBlockedByApp=true}catch(e){} })();` }} />
        <Suspense fallback={<div>Loading...</div>}>
          <FetchPatch />
          <PagePadding>{children}</PagePadding>
        </Suspense>
        <ClientAnalytics />
      </body>
    </html>
  )
}
