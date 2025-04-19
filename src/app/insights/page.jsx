export const dynamic = "force-dynamic"; // evita caché

export const metadata = {
  title: "Actionable SEO Insights & Experiments | Rus Madrigal",
  description:
    "Explore real-world SEO strategies, algorithm experiments, and actionable insights curated by Rus Madrigal.",
  alternates: {
    canonical: "https://rusmadrigal.com/insights",
  },
  openGraph: {
    title: "Actionable SEO Insights & Experiments | Rus Madrigal",
    description:
      "Explore real-world SEO strategies, algorithm experiments, and actionable insights curated by Rus Madrigal.",
    url: "https://rusmadrigal.com/insights",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Actionable SEO Insights & Experiments | Rus Madrigal",
    description:
      "Explore real-world SEO strategies, algorithm experiments, and actionable insights curated by Rus Madrigal.",
  },
};

import { hygraph } from "@/src/lib/hygraph";
import { GET_ALL_POSTS } from "@/src/lib/queries";
import Layout from "../../../layout/Layout";
import Footer from "@/src/components/shared/Footer";
import Link from "next/link";

export default async function InsightsPage() {
  const { blogPosts } = await hygraph.request(GET_ALL_POSTS);

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-6xl max-xl:mx-auto xl:ml-auto"
        id="insights"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <div className="text-center mb-12">
            <h1 className="text-3xl xl:text-4xl font-bold text-black dark:text-white">
              Latest SEO Insights
            </h1>
            <p className="text-regular text-black/80 dark:text-white/60 max-w-2xl mx-auto mt-4">
              Explore real-world analyses and strategic breakdowns from projects
              I've developed or studied — including technical SEO experiments,
              penalties, AI content testing and algorithm recovery.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group w-full max-w-lg mx-auto rounded-3xl border border-platinum dark:border-greyBlack px-5 py-5 bg-white dark:bg-nightBlack hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {post.coverImage?.url && (
                    <div className="overflow-hidden rounded-xl mb-5">
                      <img
                        src={post.coverImage.url}
                        alt={post.title}
                        className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="text-xs text-theme uppercase tracking-wide mb-2">
                    SEO
                  </div>

                  <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-theme transition mb-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-black/80 dark:text-white/60 line-clamp-3">
                    {post.metaDescription}
                  </p>
                </div>

                <div className="text-xs mt-4 text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
