import { sanity } from "@/lib/sanity";

export async function GET() {
  const baseUrl = "https://rusmadrigal.com";

  // 🔹 Obtener los slugs directamente de Sanity
  const blogPosts = await sanity.fetch(`*[_type == "blogPost" && defined(slug.current)]{
    "slug": slug.current
  }`);

  const dynamicUrls = blogPosts.map((post) => {
    return `
      <url>
        <loc>${baseUrl}/insights/${post.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const staticUrls = ["", "insights", "about", "contact"].map(
    (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls.join("\n")}
    ${dynamicUrls.join("\n")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
