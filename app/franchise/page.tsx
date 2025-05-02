"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { submitFranchiseForm } from "@/app/actions/form-actions"

export default function Franchise() {
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: "success" | "error" | null
  }>({
    message: "",
    type: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus({ message: "", type: null })

    try {
      const result = await submitFranchiseForm(formData)

      if (result.error) {
        setFormStatus({ message: result.error, type: "error" })
      } else if (result.success) {
        setFormStatus({ message: result.success, type: "success" })
        // Reset the form using the ref
        formRef.current?.reset()
      }
    } catch (error) {
      setFormStatus({
        message: "An unexpected error occurred. Please try again.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/thoothukudi_franchies.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold md:text-6xl">Grow With Us</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic">
            Franchise Opportunity - Bring the authentic taste of THOOTHUKUDI to your city
          </p>
        </div>
      </section>

      {/* Franchise Info Section */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Requirements & Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Franchise Requirements</h2>
              <div className="mt-2 h-1 w-24 bg-[#91604F]"></div>

              <div className="mt-8 space-y-6">
                {/* Location */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F]">Location</h3>
                  <ul className="mt-4 space-y-2 text-[#653A2A]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Minimum 1000 sq. ft. space in a prime commercial
                      area
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Good visibility and accessibility
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Parking facility preferred
                    </li>
                  </ul>
                </div>

                {/* Investment */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F]">Investment</h3>
                  <ul className="mt-4 space-y-2 text-[#653A2A]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Initial franchise fee: ₹10 Lakhs
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Total investment: ₹30-40 Lakhs (including interiors,
                      equipment, and initial inventory)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Royalty fee: 5% of monthly revenue
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F]">Support Provided</h3>
                  <ul className="mt-4 space-y-2 text-[#653A2A]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Comprehensive training program for staff and
                      management
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Interior design assistance to maintain brand
                      aesthetics
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Marketing and promotional support
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Regular quality audits and operational guidance
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>Supply chain assistance for key ingredients
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-[#653A2A] p-6 text-white">
                <h3 className="font-serif text-xl font-bold">Why Partner With Us?</h3>
                <p className="mt-4">
                  Join a brand that celebrates authentic South Indian heritage with a modern premium touch. Our proven
                  business model, loyal customer base, and unique concept offer a compelling opportunity for
                  entrepreneurs passionate about quality and tradition.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Franchise Inquiry</h2>
              <div className="mt-2 h-1 w-24 bg-[#91604F]"></div>

              <form ref={formRef} action={handleSubmit} className="mt-8 rounded-lg bg-white p-8 shadow-lg">
                {formStatus.message && (
                  <div
                    className={`mb-6 rounded-md p-4 ${formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="name" className="mb-2 block font-medium text-[#4D281F]">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-md border px-4 py-2 focus:border-[#91604F] focus:ring-[#91604F]"
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
                      name="phone"
                      className="w-full rounded-md border px-4 py-2 focus:border-[#91604F] focus:ring-[#91604F]"
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
                      name="email"
                      className="w-full rounded-md border px-4 py-2 focus:border-[#91604F] focus:ring-[#91604F]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="city" className="mb-2 block font-medium text-[#4D281F]">
                      Preferred City/Location*
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-full rounded-md border px-4 py-2 focus:border-[#91604F] focus:ring-[#91604F]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="photos" className="mb-2 block font-medium text-[#4D281F]">
                      Shutter Photos (Optional)
                    </label>
                    <input type="file" id="photos" multiple className="w-full rounded-md border px-4 py-2" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="message" className="mb-2 block font-medium text-[#4D281F]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your background and interest"
                      className="w-full rounded-md border px-4 py-2"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-[#653A2A] px-6 py-3 font-medium text-white hover:bg-[#4D281F] disabled:bg-gray-400"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>

              <div className="mt-8 overflow-hidden rounded-lg">
                <Image
                  src="/thoothukudi_franchies_second.jpeg"
                  alt="Café Interior"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-bold text-[#4D281F]">Contact Our Franchise Team</h3>
                <p className="mt-2 text-[#653A2A]">
                  For immediate assistance or more information, please contact our franchise development team:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:franchise@thoothukudicafe.com" className="text-[#91604F] hover:underline">
                    thethoothukudicafe@gmail.com
                  </a>
                </p>
                <p className="mt-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919876543210" className="text-[#91604F] hover:underline">
                    +91 79957 11408
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">
            Franchise Success Stories
          </h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Rajesh Kumar",
                location: "Chennai",
                quote:
                  "Partnering with THOOTHUKUDI Café has been one of my best business decisions. The authentic concept resonates deeply with customers, and the support from the head office has been exceptional.",
              },
              {
                name: "Priya Venkatesh",
                location: "Bangalore",
                quote:
                  "As someone passionate about preserving our culinary heritage, this franchise was the perfect fit. The training was comprehensive, and our café became profitable within six months of opening.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-[#F9F5F0] p-6 shadow-md">
                <div className="flex items-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/thoothukudi_franchies1.jpeg"
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#4D281F]">{testimonial.name}</h3>
                    <p className="text-sm text-[#91604F]">Franchise Owner - {testimonial.location}</p>
                  </div>
                </div>
                <p className="mt-4 font-serif italic text-[#653A2A]">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
