import { notFound } from "next/navigation";
import { sanity } from "@/src/lib/sanity";
import BlogHero from "@/src/components/blog/BlogHero";
import BlogDescription from "@/src/components/blog/BlogDescription";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/Layout";

// 👇 Habilita ISR: actualiza cada 10 segundos
export const revalidate = 600; // 10 minutos

// ✅ Genera rutas estáticas en build
export async function generateStaticParams() {
  const slugs = await sanity.fetch(
    `*[_type == "blogPost"]{ "slug": slug.current }`
  );
  return slugs.map((post) => ({ slug: post.slug }));
}

// ✅ Metadata para SEO
export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const post = await getPost(slug);
  if (!post) return notFound();

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://rusmadrigal.com/insights/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://rusmadrigal.com/insights/${slug}`,
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

// ✅ Página principal del post
export default async function SinglePostPage({ params }) {
  const slug = params?.slug;
  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
        id="blog"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <BlogHero blog={post} lang="en" />
          <BlogDescription blog={post} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

// ✅ Fetch individual post desde Sanity
async function getPost(slug) {
  return sanity.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
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
