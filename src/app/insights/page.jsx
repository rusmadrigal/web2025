import { allBlogs } from "@/src/content/blogs/allBlogs";
import Link from "next/link";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/Layout";

export const metadata = {
  title: "SEO Insights | Rus Madrigal",
  description:
    "Explore technical SEO insights, experiments, and strategy breakdowns from Rus Madrigal. Learn from real-world SEO recovery cases and algorithm impact tests.",
  alternates: {
    canonical: "https://rusmadrigal.com/insights",
  },
  openGraph: {
    title: "SEO Insights | Rus Madrigal",
    description:
      "Explore technical SEO insights, experiments, and strategy breakdowns from Rus Madrigal.",
    url: "https://rusmadrigal.com/insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Rus Madrigal",
    description:
      "Explore technical SEO insights, experiments, and strategy breakdowns from Rus Madrigal.",
  },
};

export default function InsightsPage() {
  const articles = allBlogs
    .filter((post) => post?.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
            {articles.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-2xl border border-platinum dark:border-greyBlack p-6 hover:shadow-xl transition-all duration-200 bg-white dark:bg-nightBlack flex flex-col justify-between h-full"
              >
                <div>
                  <div className="overflow-hidden rounded-xl mb-5">
                    <img
                      src={post.image.thumbnail}
                      alt={post.title}
                      className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-sm text-theme mb-2">{post.category}</div>

                  <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-theme transition mb-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-black/80 dark:text-white/60 line-clamp-3">
                    {post.metaDescription ||
                      post.blogInfo?.projectDescription?.description?.slice(
                        0,
                        140
                      )}
                  </p>
                </div>

                <div className="text-xs mt-4 text-gray-500 dark:text-gray-400">
                  {post.date}
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
