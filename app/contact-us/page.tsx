import Image from "next/image"
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactUs() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50"></div>
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
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Get In Touch</h2>
              <div className="mt-2 h-1 w-24 bg-[#91604F]"></div>

              <div className="mt-8 space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Our Location</h3>
                    <p className="mt-1 text-[#653A2A]">123 Heritage Street, Thoothukudi, Tamil Nadu, India</p>
                    <a
                      href="https://maps.google.com"
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
                    <p className="mt-1 text-[#653A2A]">+91 98765 43210</p>
                    <p className="text-sm text-[#653A2A]">For reservations and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Email</h3>
                    <p className="mt-1 text-[#653A2A]">info@thoothukudicafe.com</p>
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
                    <p className="text-sm text-[#653A2A]">Follow us for updates and behind-the-scenes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#653A2A] text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">Hours</h3>
                    <p className="mt-1 text-[#653A2A]">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                    <p className="text-sm italic text-[#653A2A]">Open all days</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-xl font-bold text-[#4D281F]">Instagram Feed</h3>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=150&width=150&text=Insta+${item}`}
                        alt={`Instagram post ${item}`}
                        width={150}
                        height={150}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Find Us</h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>

          <div className="mt-8 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/placeholder.svg?height=500&width=1200&text=Google+Map"
              alt="Map location"
              width={1200}
              height={500}
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#653A2A]">
              We're located in the heart of Thoothukudi, easily accessible from all major landmarks.
            </p>
            <p className="mt-2 text-[#653A2A]">
              <strong>Nearby landmarks:</strong> Central Bus Station (1 km), Town Hall (500 m), City Park (300 m)
            </p>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-[#653A2A] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Make a Reservation</h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-lg">
            For groups of 6 or more, we recommend making a reservation to ensure we can accommodate you comfortably.
          </p>
          <div className="mt-8">
            <a
              href="tel:+919876543210"
              className="rounded-md bg-[#CDB090] px-8 py-3 font-medium text-[#4D281F] transition-colors hover:bg-[#CDB090]/90"
            >
              Call for Reservation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
