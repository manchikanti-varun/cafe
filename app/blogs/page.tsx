import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Blogs() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold md:text-6xl">Our Journal</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic">
            Stories, traditions, and the heritage behind our flavors
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Why Tamil Nadu's Herbal Drinks Are Special",
                excerpt:
                  "Exploring the ancient wisdom behind our healing beverages and how they've stood the test of time in modern wellness.",
                date: "April 15, 2023",
                image: "herbal-drinks",
                category: "Traditions",
              },
              {
                title: "The Story Behind Our Sponge Cake",
                excerpt:
                  "A recipe that traveled through time, carrying memories of generations and becoming a symbol of our café's heritage.",
                date: "March 22, 2023",
                image: "sponge-cake-story",
                category: "Recipes",
              },
              {
                title: "Importance of Nostalgia in Modern Cafes",
                excerpt:
                  "How we're bridging the gap between tradition and contemporary dining experiences to create meaningful connections.",
                date: "February 10, 2023",
                image: "nostalgia-cafes",
                category: "Culture",
              },
              {
                title: "The Art of Filter Coffee",
                excerpt:
                  "Delving into the meticulous process behind the perfect cup of South Indian filter coffee and its cultural significance.",
                date: "January 28, 2023",
                image: "filter-coffee",
                category: "Beverages",
              },
              {
                title: "Millets: The Forgotten Superfoods",
                excerpt:
                  "Rediscovering the nutritional powerhouses that were staples in traditional Tamil cuisine and their modern revival.",
                date: "December 15, 2022",
                image: "millets",
                category: "Ingredients",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=${blog.image}`}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#653A2A] px-3 py-1 text-xs font-medium text-white">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#91604F]">{blog.date}</p>
                  <h3 className="mt-2 font-serif text-xl font-bold text-[#4D281F] group-hover:text-[#653A2A]">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-[#653A2A]">{blog.excerpt}</p>
                  <Link
                    href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-4 inline-flex items-center font-medium text-[#91604F] hover:text-[#4D281F]"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#653A2A] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Stay Updated</h2>
            <p className="mt-4 font-serif text-lg">
              Subscribe to our newsletter to receive the latest stories, recipes, and café updates.
            </p>
            <form className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#CDB090] sm:w-96"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-[#CDB090] px-6 py-3 font-medium text-[#4D281F] transition-colors hover:bg-[#CDB090]/90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-white/70">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
