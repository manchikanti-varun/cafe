import { blogPosts } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export default function Blogs() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/Blog_Our_Journal.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/80"></div>
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
            {blogPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
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
