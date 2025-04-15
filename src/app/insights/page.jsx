import { allBlogs } from "@/src/content/blogs/allBlogs";
import Link from "next/link";
import { Metadata } from "next";

// SEO para la página de insights
export const metadata = {
  title: "Insights | Rus Madrigal",
  description: "Explore detailed SEO analysis and strategic insights from Rus Madrigal.",
};

const POSTS_PER_PAGE = 6;

export default function InsightsPage() {
  const page = 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const articles = allBlogs
    .filter((post) => post?.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(start, end);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Insights</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="block p-4 border rounded-lg hover:border-theme transition"
          >
            <img
              src={post.image.thumbnail}
              alt={post.title}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-white/60 mt-1">{post.date}</p>
            <p className="text-sm mt-2 line-clamp-3">
              {post.metaDescription ||
                post.blogInfo?.projectDescription?.description?.slice(0, 140)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
