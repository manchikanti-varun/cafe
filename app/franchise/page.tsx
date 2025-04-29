import Image from "next/image"

export default function Franchise() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/thoothukudi _franchies.jpeg?height=800&width=1920')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50"></div>
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
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Franchise Requirements</h2>
              <div className="mt-2 h-1 w-24 bg-[#91604F]"></div>

              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F]">Location</h3>
                  <ul className="mt-4 space-y-2 text-[#653A2A]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Minimum 1000 sq. ft. space in a prime commercial area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Good visibility and accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Parking facility preferred</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F]">Investment</h3>
                  <ul className="mt-4 space-y-2 text-[#653A2A]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Initial franchise fee: ₹10 Lakhs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>
                        Total investment: ₹30-40 Lakhs (including interiors, equipment, and initial inventory)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Royalty fee: 5% of monthly revenue</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="font-serif text-xl font-bold text-[#4D281F]">Support Provided</h3>
                  <ul className="mt-4 space-y-2 text-[#653A2A]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Comprehensive training program for staff and management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Interior design assistance to maintain brand aesthetics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Marketing and promotional support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Regular quality audits and operational guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#91604F]">•</span>
                      <span>Supply chain assistance for key ingredients</span>
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

            <div>
              <h2 className="font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Franchise Inquiry</h2>
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
                    <label htmlFor="city" className="mb-2 block font-medium text-[#4D281F]">
                      Preferred City/Location*
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="photos" className="mb-2 block font-medium text-[#4D281F]">
                      Shutter Photos (Optional)
                    </label>
                    <input
                      type="file"
                      id="photos"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      multiple
                    />
                    <p className="mt-1 text-sm text-gray-500">Upload photos of your proposed location if available</p>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="message" className="mb-2 block font-medium text-[#4D281F]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#91604F] focus:outline-none focus:ring-1 focus:ring-[#91604F]"
                      placeholder="Tell us about your background, experience, and why you're interested in a THOOTHUKUDI Café franchise"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#653A2A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#4D281F]"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>

              <div className="mt-8 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Cafe+Interior"
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

      {/* Testimonials Section */}
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
                image: "franchisee-1",
              },
              {
                name: "Priya Venkatesh",
                location: "Bangalore",
                quote:
                  "As someone passionate about preserving our culinary heritage, this franchise was the perfect fit. The training was comprehensive, and our café became profitable within six months of opening.",
                image: "franchisee-2",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-[#F9F5F0] p-6 shadow-md">
                <div className="flex items-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${testimonial.image}`}
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

      {/* FAQ Section */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>

          <div className="mt-12 mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "What is the contract duration for a THOOTHUKUDI Café franchise?",
                answer:
                  "Our standard franchise agreement is for 5 years, with an option to renew for additional 5-year terms based on performance and compliance with brand standards.",
              },
              {
                question: "Do I need prior restaurant experience to become a franchisee?",
                answer:
                  "While prior food service experience is beneficial, it's not mandatory. We provide comprehensive training and ongoing support to ensure you understand all aspects of the business. What's most important is your passion for authentic cuisine and commitment to maintaining our quality standards.",
              },
              {
                question: "How long does it take from signing the agreement to opening the café?",
                answer:
                  "Typically, it takes 3-6 months from signing the franchise agreement to opening day. This includes location finalization, interior design, equipment installation, staff hiring and training, and pre-opening marketing.",
              },
              {
                question: "Are there any ongoing fees beyond the initial franchise fee?",
                answer:
                  "Yes, there is a 5% royalty fee on monthly revenue and a 2% contribution to our national marketing fund. These fees help maintain brand quality and drive customer awareness to benefit all locations.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="font-serif text-lg font-bold text-[#4D281F]">{faq.question}</h3>
                <p className="mt-2 text-[#653A2A]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
