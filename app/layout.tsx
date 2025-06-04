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
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap", // IMMEDIATE SWAP
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable} font-swap-fallback`}>
      <head>
        {/* CRITICAL FONT SWAP PRELOADING */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* IMMEDIATE FONT SWAP PRELOADS */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
          as="style"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        />

        {/* CRITICAL LOGO PRELOAD */}
        <link rel="preload" href="/Nav-logo.png" as="image" type="image/png" fetchPriority="high" />

        {/* DNS PREFETCH */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* FONT SWAP CRITICAL CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* IMMEDIATE FONT SWAP SYSTEM */
              :root {
                --font-swap-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                --font-swap-serif: Georgia, "Times New Roman", serif;
              }
              
              .font-swap-fallback {
                font-family: var(--font-swap-sans) !important;
                font-display: swap !important;
              }
              
              .font-swap-fallback .font-serif,
              .font-swap-fallback h1, 
              .font-swap-fallback h2, 
              .font-swap-fallback h3 {
                font-family: var(--font-swap-serif) !important;
                font-display: swap !important;
              }

              /* HERO TEXT IMMEDIATE SWAP */
              .hero-text-optimized {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
                font-display: block !important;
                text-rendering: optimizeSpeed !important;
                font-synthesis: none !important;
                contain: layout style paint !important;
                content-visibility: auto !important;
                font-weight: bold !important;
                letter-spacing: 0.05em !important;
              }

              /* MOBILE FONT SWAP */
              @media (max-width: 768px) {
                .hero-text-optimized {
                  font-size: 2rem !important;
                  line-height: 1.1 !important;
                }
              }

              /* FONT SWAP READY STATE */
              .font-swap-ready {
                --font-swap-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
                --font-swap-serif: "Playfair Display", Georgia, "Times New Roman", serif;
              }
            `,
          }}
        />

        {/* FONT SWAP OPTIMIZATION SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // IMMEDIATE FONT SWAP SETUP
                document.documentElement.classList.add('font-swap-fallback');
                
                // MOBILE DETECTION FOR FASTER SWAP
                const isMobile = window.innerWidth < 768;
                const swapTimeout = isMobile ? 500 : 1500; // FASTER ON MOBILE
                
                // PRELOAD LOGO ON MOBILE
                if (isMobile) {
                  const logoImg = new Image();
                  logoImg.src = '/Nav-logo.png';
                  logoImg.decode().catch(() => {});
                }
                
                // FONT SWAP SYSTEM
                function enableFontSwap() {
                  document.documentElement.classList.remove('font-swap-fallback');
                  document.documentElement.classList.add('font-swap-ready');
                  document.documentElement.classList.add('fonts-loaded');
                }
                
                // IMMEDIATE SWAP AFTER TIMEOUT
                setTimeout(enableFontSwap, swapTimeout);
                
                // OR WHEN FONTS ARE READY
                if ('fonts' in document) {
                  Promise.race([
                    document.fonts.ready,
                    new Promise(resolve => setTimeout(resolve, swapTimeout))
                  ]).then(enableFontSwap);
                }
                
                // DISPATCH FONT SWAP EVENT
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('fontsSwapped'));
                  }, 100);
                });
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
      <body className={`${inter.className} font-sans antialiased font-swap mobile-font-swap`}>
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
