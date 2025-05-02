import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "THOOTHUKUDI Café - Authentic South Indian Experience",
  description:
    "A premium South Indian vintage-themed café celebrating Tamil Nadu's heritage with authentic flavors and nostalgic ambiance.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
