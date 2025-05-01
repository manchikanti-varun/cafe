"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function OurStory() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/Our_Journal_Story.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold md:text-6xl">Our Journey</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
        </div>
      </section>

      {/* Story Content */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto max-w-none prose-headings:font-serif prose-headings:text-[#4D281F] prose-p:text-[#653A2A]"
            >
              <p className="font-serif text-xl leading-relaxed">
                Thoothukudi Café was born from soil, sweat, and soul.
              </p>

              <div className="my-12 overflow-hidden rounded-lg">
                <Image
                  src="/OurStory-OurJourney.jpeg"
                  alt="Our chef's journey"
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

              <p>
                Our chef comes from a humble farming family in Tamil Nadu. Guided by his father's words—"Do something
                that brings you recognition"—he found his calling in baking, not books. In Allagadda, Andhra Pradesh, he
                trained under a kind-hearted guru at Laxmi Bakery. After four years, his guru gifted him a wooden
                cart—and that's where the journey truly began.
              </p>

              <p>
                In 1995, with that cart, he and his brother created two unique cakes that won hearts. Then came their
                signature Kova Bun, a game-changer. The love from Allagadda inspired them to dream bigger.
              </p>

              <blockquote className="border-l-4 border-[#CDB090] bg-white p-6 italic">
                "To honor their roots, they named their dream Thoothukudi Café—a tribute to Tamil Nadu's coastal soul."
              </blockquote>

              <p>From one cart to cafés across Hyderabad, our journey is a story of grit, gratitude, and great food.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#653A2A] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Experience Our Story Firsthand</h2>
            <p className="mx-auto mt-4 max-w-2xl font-serif text-lg">
              Visit us today and become a part of our continuing journey. Every cup, every plate carries a piece of our
              history.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/menu"
                className="rounded-full bg-[#CDB090] px-8 py-3 font-medium text-[#4D281F] transition-colors hover:bg-[#CDB090]/90"
              >
                Explore Our Menu
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-[#CDB090] bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                Visit Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
