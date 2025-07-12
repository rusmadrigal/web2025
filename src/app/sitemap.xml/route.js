import { sanity } from "@/lib/sanity";

export async function GET() {
  const baseUrl = "https://rusmadrigal.com";

  // 🔹 Obtener los slugs y el idioma
  const blogPosts = await sanity.fetch(`*[_type == "blogPost" && defined(slug.current)]{
    "slug": slug.current,
    language
  }`);

  // 🔄 Generar URLs dinámicas para cada idioma
  const dynamicUrls = blogPosts.map((post) => {
    const path =
      post.language === "es"
        ? `/es-cr/insights/${post.slug}`
        : `/insights/${post.slug}`;

    return `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  // 🔒 Rutas estáticas del sitio
  const staticUrls = ["", "insights", "about", "contact", "es-cr", "es-cr/insights"].map(
    (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `
  );

  // 🧩 Armar el XML
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
