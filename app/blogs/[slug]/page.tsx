"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPost({ params }: { params: { slug: string } }) {
    const router = useRouter()
    const { slug } = params

    const post = blogPosts.find((post) => post.slug === slug)

    useEffect(() => {
        if (!post) {
            router.push("/blogs")
        }
    }, [post, router])

    if (!post) {
        return null
    }

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative flex h-[40vh] w-full items-center justify-center overflow-hidden bg-[url('/Blog_Our_Journal.jpeg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="font-serif text-4xl font-bold md:text-5xl">{post.title}</h1>
                    <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="bg-[#F9F5F0] py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <Link
                                href="/blogs"
                                className="inline-flex items-center rounded-full bg-white px-4 py-2 font-medium text-[#653A2A] shadow-sm transition-colors hover:bg-[#653A2A] hover:text-white"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Blogs
                            </Link>
                        </motion.div>

                        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                            <div className="relative h-[400px] w-full">
                                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
                            </div>

                            <div className="p-8">
                                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-[#91604F]">
                                    <div className="flex items-center">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Tag className="mr-2 h-4 w-4" />
                                        {post.category}
                                    </div>
                                </div>

                                <article
                                    className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#4D281F] prose-p:text-[#653A2A] prose-a:text-[#91604F] prose-a:no-underline hover:prose-a:text-[#4D281F]"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </div>
                        </div>

                        {/* Related Posts */}
                        <div className="mt-16">
                            <h2 className="mb-8 text-center font-serif text-2xl font-bold text-[#4D281F]">You May Also Like</h2>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {blogPosts
                                    .filter((relatedPost) => relatedPost.slug !== slug)
                                    .slice(0, 3)
                                    .map((relatedPost) => (
                                        <div key={relatedPost.id} className="group overflow-hidden rounded-lg bg-white shadow-md">
                                            <div className="relative h-40 overflow-hidden">
                                                <Image
                                                    src={relatedPost.image || "/placeholder.svg"}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-serif text-lg font-bold text-[#4D281F] group-hover:text-[#653A2A]">
                                                    {relatedPost.title}
                                                </h3>
                                                <Link
                                                    href={`/blogs/${relatedPost.slug}`}
                                                    className="mt-2 inline-flex items-center text-sm font-medium text-[#91604F] hover:text-[#4D281F]"
                                                >
                                                    Read More
                                                    <ArrowRight className="ml-1 h-3 w-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
