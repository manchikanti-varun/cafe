import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0D0906] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Image src="/tamil-logo.png" alt="Logo" width={800} height={800} className="mr-3" />
            </div>
            <p className="mt-4 max-w-xs text-gray-400">
              Reviving the authentic flavors of Tamil Nadu with a nostalgic touch and premium experience.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Quick Links</h4>
            <div className="mt-2 h-0.5 w-12 bg-[#CDB090]"></div>
            <ul className="mt-4 space-y-3">
              {["Home", "Our Story", "Menu", "Blogs", "Franchise", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 transition-colors hover:text-[#CDB090]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Contact Us</h4>
            <div className="mt-2 h-0.5 w-12 bg-[#CDB090]"></div>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#CDB090]" />
                <span className="text-gray-400">123 Heritage Street, Thoothukudi, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#CDB090]" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-[#CDB090]">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#CDB090]" />
                <a href="mailto:info@thoothukudicafe.com" className="text-gray-400 hover:text-[#CDB090]">
                  info@thoothukudicafe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} THOOTHUKUDI Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
