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

// Optimized font loading with font-display: swap and better fallbacks
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Critical for LCP optimization
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
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap", // Critical for LCP optimization
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
        {/* Critical font preloading for LCP optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical logo image */}
        <link rel="preload" href="/Nav-logo.png" as="image" type="image/png" fetchPriority="high" />

        {/* Load fonts with proper fallback strategy */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        />

        {/* Critical CSS for immediate font rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical font loading styles */
              .font-loading * {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
              }
              
              .font-loading .font-serif,
              .font-loading .hero-title,
              .font-loading h1, .font-loading h2, .font-loading h3 {
                font-family: Georgia, "Times New Roman", Times, serif !important;
              }

              /* Prevent layout shift during font swap */
              .hero-title {
                font-size-adjust: 0.5;
                line-height: 1.1;
                font-synthesis: none;
              }

              .hero-text {
                font-size-adjust: 0.5;
                line-height: 1.5;
                font-synthesis: none;
              }

              /* Critical above-the-fold content optimization */
              .lcp-optimized {
                font-display: swap;
                text-rendering: optimizeSpeed;
                contain: layout style paint;
              }
            `,
          }}
        />

        {/* Font loading optimization script - runs immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Add font-loading class immediately
                document.documentElement.classList.add('font-loading');
                
                // Optimize logo loading for mobile
                if (window.innerWidth < 768) {
                  const logoPreload = document.createElement('link');
                  logoPreload.rel = 'preload';
                  logoPreload.href = '/Nav-logo.png';
                  logoPreload.as = 'image';
                  logoPreload.fetchPriority = 'high';
                  document.head.appendChild(logoPreload);
                }
                
                // Remove when fonts are ready
                if ('fonts' in document) {
                  Promise.race([
                    document.fonts.ready,
                    new Promise(resolve => setTimeout(resolve, window.innerWidth < 768 ? 1500 : 3000)) // Faster timeout on mobile
                  ]).then(() => {
                    document.documentElement.classList.remove('font-loading');
                    document.documentElement.classList.add('fonts-loaded');
                  });
                } else {
                  // Fallback for older browsers
                  setTimeout(() => {
                    document.documentElement.classList.remove('font-loading');
                    document.documentElement.classList.add('fonts-loaded');
                  }, window.innerWidth < 768 ? 1500 : 3000);
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
