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
  display: "swap",
  preload: false, 
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: false, // Don't preload to avoid blocking LCP
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
        {/* Critical font preloading for LCP optimization - only system fonts initially */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical logo image with high priority */}
        <link rel="preload" href="/Nav-logo.png" as="image" type="image/png" fetchPriority="high" />

        {/* Critical CSS for immediate system font rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical font loading styles - start with system fonts */
              html {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              }
              
              .font-serif,
              .hero-title,
              h1, h2, h3, h4, h5, h6 {
                font-family: Georgia, "Times New Roman", Times, serif;
                font-size-adjust: 0.48;
              }

              /* Prevent layout shift during font swap */
              .hero-title {
                font-size-adjust: 0.48;
                line-height: 1.1;
                font-synthesis: none;
                text-rendering: optimizeSpeed;
                contain: layout style paint;
              }

              .hero-text {
                font-size-adjust: 0.5;
                line-height: 1.5;
                font-synthesis: none;
                text-rendering: optimizeSpeed;
              }

              /* Critical above-the-fold content optimization */
              .lcp-optimized {
                font-display: swap;
                text-rendering: optimizeSpeed;
                contain: layout style paint;
                font-synthesis: none;
              }

              /* Hide elements that might cause layout shift */
              .font-loading .delayed-content {
                opacity: 0;
              }

              .fonts-loaded .delayed-content {
                opacity: 1;
                transition: opacity 0.3s ease-in-out;
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
                
                // Load fonts asynchronously after LCP
                function loadFonts() {
                  const fontLinks = [
                    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
                    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap'
                  ];
                  
                  fontLinks.forEach(href => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    link.media = 'print';
                    link.onload = function() { this.media = 'all'; };
                    document.head.appendChild(link);
                  });
                }
                
                // Load fonts after a delay to not block LCP
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(loadFonts, 100);
                  });
                } else {
                  setTimeout(loadFonts, 100);
                }
                
                // Remove loading class when fonts are ready
                if ('fonts' in document) {
                  Promise.race([
                    document.fonts.ready,
                    new Promise(resolve => setTimeout(resolve, 3000))
                  ]).then(() => {
                    document.documentElement.classList.remove('font-loading');
                    document.documentElement.classList.add('fonts-loaded');
                    
                    // Apply custom font families
                    document.documentElement.style.setProperty('--font-sans', 'Inter, system-ui, sans-serif');
                    document.documentElement.style.setProperty('--font-serif', '"Playfair Display", Georgia, serif');
                  });
                } else {
                  // Fallback for older browsers
                  setTimeout(() => {
                    document.documentElement.classList.remove('font-loading');
                    document.documentElement.classList.add('fonts-loaded');
                  }, 3000);
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
      <body className="font-sans antialiased">
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
