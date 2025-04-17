import { notFound } from "next/navigation";
import { hygraph } from "@/src/lib/hygraph";
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from "@/src/lib/queries";
import BlogHero from "@/src/components/blog/BlogHero";
import BlogDescription from "@/src/components/blog/BlogDescription";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/Layout";

// ✅ Genera rutas estáticas en build
export async function generateStaticParams() {
  const { blogPosts } = await hygraph.request(GET_ALL_POST_SLUGS);
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ✅ Metadata para SEO
export async function generateMetadata({ params }) {
  const { blogPost } = await hygraph.request(GET_POST_BY_SLUG, {
    slug: params.slug,
  });

  if (!blogPost) return notFound();

  return {
    title: blogPost.metaTitle,
    description: blogPost.metaDescription,
    alternates: {
      canonical: `https://rusmadrigal.com/insights/${blogPost.slug}`,
    },
    openGraph: {
      title: blogPost.metaTitle,
      description: blogPost.metaDescription,
      url: `https://rusmadrigal.com/insights/${blogPost.slug}`,
      type: "article",
      images: blogPost.coverImage?.url ? [blogPost.coverImage.url] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.metaTitle,
      description: blogPost.metaDescription,
    },
  };
}

// ✅ Página principal del post
export default async function SinglePostPage({ params }) {
  const { blogPost } = await hygraph.request(GET_POST_BY_SLUG, {
    slug: params.slug,
  });

  if (!blogPost) return notFound();

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        id="blog"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <BlogHero blog={blogPost} />
          <BlogDescription blog={blogPost} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
