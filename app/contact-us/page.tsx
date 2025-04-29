"use client"

import Image from "next/image"
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactUs() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/cafe-interior.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold md:text-6xl">Contact Us</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic">
            We'd love to hear from you. Visit us or get in touch.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Get In Touch</h2>
              <div className="mt-2 h-1 w-24 bg-[#91604F]"></div>

              <div className="mt-8 space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Our Location</h3>
                    <p className="mt-1 text-[#653A2A]">Thoothukudi Café, Hyderabad</p>
                    <a
                      href="https://maps.app.goo.gl/XD9MvZn5sY5n8Y6J8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-[#91604F] hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Phone</h3>
                    <p className="mt-1 text-[#653A2A]">+91 7995711408</p>
                    <p className="text-sm text-[#653A2A]">For reservations and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Email</h3>
                    <p className="mt-1 text-[#653A2A]">thethoothukudicafe@gmail.com</p>
                    <p className="text-sm text-[#653A2A]">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Social Media</h3>
                    <p className="mt-1 text-[#653A2A]">@thoothukudicafe</p>
                    <a
                      href="https://www.instagram.com/thoothukudicafe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#91604F] hover:underline"
                    >
                      Follow us for updates and behind-the-scenes
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Send Us a Message</h2>
              <div className="mt-2 h-1 w-24 bg-[#91604F]"></div>

              <form className="mt-8 rounded-lg bg-white p-8 shadow-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="name" className="mb-2 block font-medium text-[#4D281F]">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="phone" className="mb-2 block font-medium text-[#4D281F]">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="email" className="mb-2 block font-medium text-[#4D281F]">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="subject" className="mb-2 block font-medium text-[#4D281F]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="message" className="mb-2 block font-medium text-[#4D281F]">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#653A2A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#4D281F]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Find Us</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
          </motion.div>

          <div className="mt-8 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2954889033257!2d78.38847797469573!3d17.44963980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c9b5f0d7f%3A0x65c528a07d83f6ac!2sThoothukudi%20Cafe!5e0!3m2!1sen!2sin!4v1714499330121!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#653A2A]">We're located in Hyderabad, easily accessible from all major landmarks.</p>
            <p className="mt-2 text-[#653A2A]">
              <a
                href="https://maps.app.goo.gl/XD9MvZn5sY5n8Y6J8"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#91604F] hover:underline"
              >
                Get directions on Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-[#653A2A] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Make a Reservation</h2>
            <p className="mx-auto mt-4 max-w-2xl font-serif text-lg">
              For groups of 6 or more, we recommend making a reservation to ensure we can accommodate you comfortably.
            </p>
            <div className="mt-8">
              <a
                href="tel:+917995711408"
                className="rounded-full bg-[#CDB090] px-8 py-3 font-medium text-[#4D281F] transition-colors hover:bg-[#CDB090]/90"
              >
                Call for Reservation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
