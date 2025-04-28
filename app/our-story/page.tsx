import Image from "next/image"
import Link from "next/link"

export default function OurStory() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold md:text-6xl">Our Journey</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
        </div>
      </section>

      {/* Story Content */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto max-w-none prose-headings:font-serif prose-headings:text-[#4D281F] prose-p:text-[#653A2A]">
              <p className="font-serif text-xl leading-relaxed">
                The story of THOOTHUKUDI Café begins in 1995, with a humble wooden cart and a passion for authentic
                flavors. What started as a small venture has blossomed into a beloved institution, preserving the rich
                culinary heritage of Tamil Nadu.
              </p>

              <div className="my-12 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Vintage+Cart+1995"
                  alt="Vintage cart from 1995"
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

              <p>
                Our founder, with nothing but determination and family recipes passed down through generations, set out
                to share the authentic flavors of Thoothukudi with the world. The journey wasn't easy, but the passion
                for preserving tradition never wavered.
              </p>

              <p>
                The first breakthrough came with our signature Sponge Cake, a recipe perfected through countless early
                mornings and late nights. Its unique texture and flavor quickly gained a following, becoming the talk of
                the town.
              </p>

              <p>
                As our reputation grew, so did our menu. The introduction of our legendary Kova Bun marked another
                milestone in our journey, combining traditional techniques with innovative presentation to create
                something truly special.
              </p>

              <blockquote className="border-l-4 border-[#CDB090] bg-white p-6 italic">
                "We don't just serve food; we serve memories, tradition, and a piece of our heritage with every dish."
              </blockquote>

              <p>
                The dream of THOOTHUKUDI Café was born from a desire to create not just a place to eat, but a space
                where people could connect with their roots, where every bite would transport them to the streets of
                Tamil Nadu, evoking nostalgia and creating new memories.
              </p>

              <p>
                Today, as we expand to Hyderabad and beyond, we carry the same commitment to authenticity, quality, and
                the soulful experience that has defined us from day one. Our journey continues, but our roots remain
                firmly planted in the rich soil of Tamil Nadu's culinary tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Our Timeline</h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>

          <div className="relative mx-auto mt-16 max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-[#CDB090]"></div>

            {/* Timeline Items */}
            {[
              {
                year: "1995",
                title: "The Beginning",
                description: "Started with a wooden cart and traditional recipes",
                icon: "cart",
              },
              {
                year: "2000",
                title: "First Signature Success",
                description: "Our Sponge Cake becomes a local sensation",
                icon: "cake",
              },
              {
                year: "2008",
                title: "Innovation Meets Tradition",
                description: "Launch of our now-famous Kova Bun",
                icon: "bun",
              },
              {
                year: "2015",
                title: "THOOTHUKUDI Café Opens",
                description: "Our first permanent location opens its doors",
                icon: "cafe",
              },
              {
                year: "2023",
                title: "Expanding Horizons",
                description: "New location in Hyderabad brings our flavors to new audiences",
                icon: "expansion",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-16 flex ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } items-center justify-center gap-8`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div
                    className={`${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    } max-w-xs rounded-lg bg-[#F9F5F0] p-6 shadow-md transition-transform hover:-translate-y-1`}
                  >
                    <span className="font-serif text-sm font-bold text-[#91604F]">{item.year}</span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-[#4D281F]">{item.title}</h3>
                    <p className="mt-2 text-[#653A2A]">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#653A2A] text-white">
                  <Image
                    src={`/placeholder.svg?height=30&width=30&text=${item.icon}`}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#653A2A] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Experience Our Story Firsthand</h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-lg">
            Visit us today and become a part of our continuing journey. Every cup, every plate carries a piece of our
            history.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/menu"
              className="rounded-md bg-[#CDB090] px-8 py-3 font-medium text-[#4D281F] transition-colors hover:bg-[#CDB090]/90"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-[#CDB090] bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
