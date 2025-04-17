export const dynamic = "force-dynamic"; // evita caché

import { hygraph } from "@/src/lib/hygraph";
import { GET_POST_BY_SLUG } from "@/src/lib/queries";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Layout from "@/layout/Layout";
import Footer from "@/src/components/shared/Footer";

export async function generateMetadata({ params }) {
  const { blogPost } = await hygraph.request(GET_POST_BY_SLUG, {
    slug: params.slug,
  });
  return {
    title: blogPost.metaTitle,
    description: blogPost.metaDescription,
  };
}

export default async function BlogPostPage({ params }) {
  const { blogPost } = await hygraph.request(GET_POST_BY_SLUG, {
    slug: params.slug,
  });

  return (
    <Layout>
      <div className="py-12 px-6 max-w-content mx-auto">
        <article className="prose dark:prose-invert max-w-none">
          <h1>{blogPost.title}</h1>
          {blogPost.coverImage?.url && (
            <img
              src={blogPost.coverImage.url}
              alt={blogPost.title}
              className="rounded-xl my-4"
            />
          )}
          <p className="text-sm text-gray-500 mb-4">
            {new Date(blogPost.date).toLocaleDateString()}
          </p>

          {blogPost.content?.raw ? (
            <RichText content={blogPost.content.raw} />
          ) : (
            <p className="text-red-500">No content found in CMS.</p>
          )}
        </article>
      </div>
      <Footer />
    </Layout>
  );
}
