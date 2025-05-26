import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
    blog: BlogPost
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={blog.image || "/placeholder.svg"}
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
                <h3 className="mt-2 font-serif text-xl font-bold text-[#4D281F] group-hover:text-[#653A2A]">{blog.title}</h3>
                <p className="mt-3 text-[#653A2A]">{blog.excerpt}</p>
                <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-4 inline-flex items-center font-medium text-[#91604F] hover:text-[#4D281F]"
                >
                    Discover More Insights
                    <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}
