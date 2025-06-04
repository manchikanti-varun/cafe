"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isHomePage) {
      return isScrolled ? "text-[#0D0906]" : "text-white"
    } else {
      return isScrolled ? "text-[#0D0906]" : "text-[#0D0906]"
    }
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Menu", path: "/menu" },
    { name: "Blogs", path: "/blogs" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact Us", path: "/contact-us" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white py-2 shadow-md backdrop-blur-md"
          : isHomePage
            ? "bg-transparent py-4"
            : "bg-white py-4 shadow-md"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="z-10 flex items-center">
          <Image
            src="/Nav-logo.png"
            alt="Thoothukudi Cafe"
            width={64}
            height={64}
            className="navbar-logo h-12 w-auto md:h-16" // Fixed: removed conflicting h-16, now uses h-12 on mobile and h-16 on desktop
            priority
            sizes="(max-width: 768px) 48px, 64px"
            quality={85}
            placeholder="empty"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`relative font-medium transition-colors hover:text-[#CDB090] ${pathname === link.path ? "text-[#CDB090]" : getTextColor()
                    }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#CDB090]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`z-10 md:hidden ${getTextColor()}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 z-0 h-screen w-full bg-[#0D0906] md:hidden"
          >
            <div className="flex h-full items-center justify-center">
              <nav className="container px-4 py-4">
                <ul className="flex flex-col space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        className={`block py-2 text-center font-serif text-2xl font-medium transition-colors ${pathname === link.path ? "text-[#CDB090]" : "text-white"
                          } hover:text-[#CDB090]`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
