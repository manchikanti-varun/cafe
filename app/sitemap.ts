import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
    // Base URL for the website
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thoothukudicafe.com"

    // Current date for lastModified
    const currentDate = new Date()

    // Static routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/menu`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/our-story`,
            lastModified: currentDate,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: currentDate,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: currentDate,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/franchise`,
            lastModified: currentDate,
            priority: 0.8,
        },
    ]

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => {
        // Convert the date string to a Date object
        const postDate = new Date(post.date)

        return {
            url: `${baseUrl}/blogs/${post.slug}`,
            lastModified: postDate,
            priority: 0.7,
        }
    })

    // Combine all routes
    return [...staticRoutes, ...blogRoutes]
}
