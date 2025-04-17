import { hygraph } from "@/src/lib/hygraph";
import { GET_ALL_POST_SLUGS } from "@/src/lib/queries";

export async function GET() {
  const baseUrl = "https://rusmadrigal.com"; // Cambiá si usás dominio distinto
  const { blogPosts } = await hygraph.request(GET_ALL_POST_SLUGS);

  const dynamicUrls = blogPosts.map((post) => {
    return `
      <url>
        <loc>${baseUrl}/insights/${post.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const staticUrls = [
    "",
    "insights",
    "about",
    "contact",
  ].map(
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
