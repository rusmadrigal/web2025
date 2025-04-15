// src/app/blog/[slug]/page.jsx
import { notFound } from "next/navigation";
import BlogHero from "@/src/components/blog/BlogHero";
import BlogDescription from "@/src/components/blog/BlogDescription";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/Layout";
import { allBlogs } from "@/src/content/blogs/allBlogs";

// ✅ Generación dinámica de metadata para cada post
export async function generateMetadata({ params }) {
  const blog = allBlogs.find((item) => item?.slug === params?.slug);

  if (!blog) return notFound();

  const title = blog.title;
  const description =
    blog.metaDescription ||
    blog.blogInfo?.projectDescription?.description?.slice(0, 160) ||
    "";

  const canonical = `https://rusmadrigal.com/blog/${blog.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: blog?.image?.image ? [blog.image.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ✅ Componente del blog post
export default function SingleBlog({ params }) {
  const blog = allBlogs.find((project) => project?.slug === params?.slug);

  if (!blog) return notFound();

  return (
    <Layout>
      <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto" id="blog">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <BlogHero blog={blog} />
          <BlogDescription blog={blog} />
          {/* <BlogComment blog={blog} /> */}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
