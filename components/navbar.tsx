"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Menu", path: "/menu" },
    { name: "Blogs", path: "/blogs" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white py-2 backdrop-blur-md bg-cover text-[#0D0906]"
          : "bg-transparent py-4 text-white"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="z-10 flex items-center">
          <img
            src="/Nav-logo.png"
            alt="Thoothukudi Cafe"
            className="h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`relative font-medium transition-colors hover:text-[#CDB090] ${activeLink === link.path ? "text-[#CDB090]" : ""
                    }`}
                  onClick={() => setActiveLink(link.path)}
                >
                  {link.name}
                  {activeLink === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#CDB090]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`z-10 md:hidden transition-colors ${isScrolled ? "text-[#0D0906]" : "text-white"
            }`}
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
                        className={`block py-2 text-center font-serif text-2xl font-medium transition-colors ${activeLink === link.path
                            ? "text-[#CDB090]"
                            : "text-white"
                          } hover:text-[#CDB090]`}
                        onClick={() => {
                          setActiveLink(link.path);
                          setIsOpen(false);
                        }}
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
  );
}
