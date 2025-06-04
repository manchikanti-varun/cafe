import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"

// Optimized font loading with system font fallbacks
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "sans-serif",
  ],
  adjustFontFallback: true, // Automatically adjust fallback metrics
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "Times", "serif"],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "THOOTHUKUDI Café - Authentic Indian Cultural Experience",
  description:
    "Thoothukudi Café is a vintage South Indian café celebrating Tamil Nadu's heritage with authentic flavors, nostalgic vibes, and soulful charm.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Critical font preloading with resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical fonts for immediate availability */}
        <link
          rel="preload"
          href="/_next/static/media/inter-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/playfair-display-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Font loading optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize font loading with system font first
              (function() {
                // Add font-loading class to enable system fonts initially
                document.documentElement.classList.add('font-loading');
                
                // Remove font-loading class when custom fonts are ready
                if ('fonts' in document) {
                  document.fonts.ready.then(function() {
                    document.documentElement.classList.remove('font-loading');
                    document.documentElement.classList.add('fonts-loaded');
                  });
                }
              })();
            `,
          }}
        />

        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-4SB32B5M3Q" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4SB32B5M3Q');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
