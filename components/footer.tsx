import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0D0906] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
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
                href="https://www.instagram.com/thoothukudicafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@thoothukudicafe"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
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
                <a
                  href="https://maps.app.goo.gl/XD9MvZn5sY5n8Y6J8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#CDB090]"
                >
                  Thoothukudi Café, Hyderabad
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#CDB090]" />
                <a href="tel:+917995711408" className="text-gray-400 hover:text-[#CDB090]">
                  +91 79957 11408
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#CDB090]" />
                <a href="mailto:thethoothukudicafe@gmail.com" className="text-gray-400 hover:text-[#CDB090]">
                  thethoothukudicafe@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className="mr-2 h-5 w-5 text-[#CDB090]" />
                <a
                  href="https://www.instagram.com/thoothukudicafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#CDB090]"
                >
                  @thoothukudicafe
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
