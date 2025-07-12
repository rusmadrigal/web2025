import { notFound } from "next/navigation";
import { sanity } from "@/src/lib/sanity";
import BlogHero from "@/src/components/blog/BlogHero";
import BlogDescription from "@/src/components/blog/BlogDescription";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/Layout";

// ISR: refresca cada 10 min
export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = await sanity.fetch(`*[_type == "blogPost" && language == "es"]{
    "slug": slug.current
  }`);
  return slugs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) return notFound();

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://rusmadrigal.com/es-cr/insights/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://rusmadrigal.com/es-cr/insights/${slug}`,
      type: "article",
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
    },
  };
}

export default async function SinglePostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        id="blog"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <BlogHero blog={post} lang="es-CR" />
          <BlogDescription blog={post} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

async function getPost(slug) {
  return sanity.fetch(
    `*[_type == "blogPost" && slug.current == $slug && language == "es"][0]{
      title,
      slug,
      metaTitle,
      metaDescription,
      excerpt,
      date,
      "coverImage": coverImage.asset->url,
      content,
      "author": author->name,
      "authorImage": author->image.asset->url,
      "categories": categories[]->title
    }`,
    { slug }
  );
}
