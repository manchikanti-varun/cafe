"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Instagram } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/lib/blog-data"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/sponge-cake.jpg",
      title: "Legendary Sponge Cake",
      description: "Our iconic recipe since 1995",
    },
    {
      image: "/kova_bun.png",
      title: "Famous Kova Bun",
      description: "Soft bun with our special milk-based sweet filling",
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleScroll = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Integrated Carousel */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D0906]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full border border-[#CDB090]/20"></div>
          <div className="absolute right-20 top-20 h-[700px] w-[700px] rounded-full border border-[#CDB090]/15"></div>
          <div className="absolute right-40 top-40 h-[600px] w-[600px] rounded-full border border-[#CDB090]/10"></div>
        </div>

        {/* Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-white md:px-6">
          <div className="mb-4 inline-block rounded-full border border-[#CDB090] px-4 py-1">
            <p className="font-serif text-sm text-[#CDB090] critical-content">ESTD. 1995</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="mb-2"
          >
            <p className="font-serif text-xl text-[#CDB090] md:text-2xl critical-content">café</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="mb-4 font-serif text-4xl font-bold tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl hero-title critical-content stable-layout"
          >
            THOOTHUKUDI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 h-1 w-24 bg-[#CDB090]"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6 font-serif text-xl italic text-[#CDB090] md:text-2xl critical-content"
          >
            secret of nature
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 max-w-md text-lg leading-relaxed text-gray-300 md:text-xl hero-text critical-content stable-layout"
          >
            Experience the finest coffee and delicacies crafted with passion and tradition. Our heritage recipes bring
            authentic flavors to your table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
          >
            <Link
              href="/menu"
              className="group flex items-center justify-center rounded-full bg-[#CDB090] px-8 py-3 font-medium text-[#0D0906] transition-all duration-300 hover:bg-[#CDB090]/90 optimize-text"
            >
              Explore Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/our-story"
              className="flex items-center justify-center rounded-full border border-[#CDB090] px-8 py-3 font-medium text-[#CDB090] transition-all duration-300 hover:bg-[#CDB090]/10 optimize-text"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Carousel Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-20 right-10 hidden max-w-xs rounded-lg bg-black/40 p-6 backdrop-blur-sm md:block"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-serif text-xl font-bold text-[#CDB090] optimize-text">
                  {slides[currentSlide].title}
                </h3>
                <p className="mt-2 text-gray-300 optimize-text">{slides[currentSlide].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-[#CDB090] w-6" : "bg-gray-500"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 text-gray-300 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 text-gray-300 transition-colors hover:border-[#CDB090] hover:text-[#CDB090]"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 transform cursor-pointer"
            onClick={handleScroll}
          >
            <div className="flex flex-col items-center">
              <p className="mb-2 text-sm text-gray-400 optimize-text">Scroll Down</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="h-10 w-6 rounded-full border border-gray-500"
              >
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="mx-auto mt-1 h-2 w-2 rounded-full bg-[#CDB090]"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Signature Delights Section */}
      <section ref={heroRef} className="bg-[#F9F5F0] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl optimize-text">
              Our Signature Delights
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-[#653A2A] optimize-text">
              Every dish tells a story of tradition, passed down through generations, crafted with love and
              authenticity.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Legendary Sponge Cake",
                desc: "Our iconic recipe since 1995, this light and airy cake has a secret ingredient that makes it unforgettable.",
                image: "/sponge-cake.jpg",
              },
              {
                name: "Famous Kova Bun",
                desc: "Soft bun filled with our special milk-based sweet filling, a perfect tea-time companion.",
                image: "/kova_bun.png",
              },
              {
                name: "Millets: The Forgotten Superfoods",
                desc: "Rediscovering the nutritional powerhouses that were staples in traditional Tamil cuisine and their modern revival.",
                image: "/MilletHome.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group overflow-hidden rounded-xl bg-white shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F] optimize-text">{item.name}</h3>
                  <p className="mt-2 text-[#653A2A] optimize-text">{item.desc}</p>
                  <Link
                    href="/menu"
                    className="mt-4 inline-flex items-center font-medium text-[#91604F] transition-colors hover:text-[#4D281F] optimize-text"
                  >
                    Discover More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative overflow-hidden bg-[#0D0906] py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/texture-bg.jpg" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-3xl font-bold md:text-4xl optimize-text"
            >
              Welcome to Our Home
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "96px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto mt-2 h-1 w-24 bg-[#CDB090]"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 font-serif text-lg leading-relaxed md:text-xl optimize-text stable-layout"
            >
              In every cup we serve, there's a story of Tamil Nadu's rich heritage. In every bite, there's a memory
              waiting to be created. We don't just serve food; we serve tradition, nostalgia, and a piece of our heart.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10 flex justify-center"
            >
              <Link
                href="/our-story"
                className="group flex items-center rounded-full border border-[#CDB090] px-8 py-3 font-medium transition-all duration-300 hover:bg-[#CDB090] hover:text-[#0D0906] optimize-text"
              >
                Discover Our Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="bg-[#F9F5F0] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl optimize-text">
              A Taste of Our Menu
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Hot Beverages", image: "/hot-beverages.jpg" },
              { name: "Shot Bites", image: "/shot-bites.jpg" },
              { name: "Breakfast Specials", image: "/breakfast.jpg" },
              { name: "Farm Fresh Bites", image: "/farm-fresh.jpg" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white optimize-text">{category.name}</h3>
                      <div className="mt-2 h-0.5 w-0 bg-[#CDB090] transition-all duration-500 group-hover:w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 text-center"
          >
            <Link
              href="/menu"
              className="rounded-full bg-[#653A2A] px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#4D281F] hover:shadow-lg optimize-text"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl optimize-text">From Our Journal</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-[#653A2A] optimize-text">
              Stories, traditions, and the heritage behind our flavors
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group overflow-hidden rounded-xl bg-[#F9F5F0] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F] transition-colors group-hover:text-[#653A2A] optimize-text">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-[#653A2A] optimize-text">{blog.excerpt}</p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-4 inline-flex items-center font-medium text-[#91604F] transition-colors hover:text-[#4D281F] optimize-text"
                  >
                    Discover More Insights
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 text-center"
          >
            <Link
              href="/blogs"
              className="rounded-full border-2 border-[#653A2A] bg-transparent px-8 py-3 font-medium text-[#653A2A] transition-all duration-300 hover:bg-[#653A2A] hover:text-white optimize-text"
            >
              View All Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="relative bg-[url('/cafe-interior.jpg')] bg-cover bg-center bg-no-repeat py-24">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-3xl font-bold md:text-4xl optimize-text"
            >
              Visit Us Today
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "96px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto mt-2 h-1 w-24 bg-[#CDB090]"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-6 font-serif text-lg italic optimize-text"
            >
              Experience the warmth of Tamil Nadu's heritage in every visit
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4 gap-6"
            >
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-[#CDB090]" />
                <h3 className="mt-4 font-serif text-xl font-semibold optimize-text">Email</h3>
                <p className="mt-2 text-center text-sm optimize-text">thethoothukudicafe@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-[#CDB090]" />
                <h3 className="mt-4 font-serif text-xl font-semibold optimize-text">Location</h3>
                <p className="mt-2 text-center text-sm optimize-text">Thoothukudi Café, Hyderabad</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-[#CDB090]" />
                <h3 className="mt-4 font-serif text-xl font-semibold optimize-text">Contact</h3>
                <p className="mt-2 text-center text-sm optimize-text">+91 79957 11408</p>
              </div>
              <div className="flex flex-col items-center">
                <Instagram className="h-8 w-8 text-[#CDB090]" />
                <h3 className="mt-4 font-serif text-xl font-semibold optimize-text">Instagram</h3>
                <p className="mt-2 text-center text-sm optimize-text">@thoothukudicafe</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12"
            >
              <Link
                href="/contact-us"
                className="rounded-full bg-[#CDB090] px-8 py-3 font-medium text-[#0D0906] transition-all duration-300 hover:bg-[#CDB090]/90 hover:shadow-lg optimize-text"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
