import { sanity } from "@/lib/sanity";

export async function GET() {
  const baseUrl = "https://rusmadrigal.com";

  // 🔹 Obtener slugs y lenguaje
  const blogPosts =
    await sanity.fetch(`*[_type == "blogPost" && defined(slug.current)]{
    "slug": slug.current,
    language
  }`);

  // 🔄 Agrupar por slug (mismo contenido en distintos idiomas)
  const grouped = blogPosts.reduce((acc, post) => {
    if (!acc[post.slug]) acc[post.slug] = [];
    acc[post.slug].push(post.language);
    return acc;
  }, {});

  // ✅ Crear URLs con hreflang por grupo
  const dynamicUrls = Object.entries(grouped).map(([slug, langs]) => {
    const defaultLang = langs.includes("en") ? "en" : langs[0];
    const defaultPath =
      defaultLang === "es" ? `/es-cr/insights/${slug}` : `/insights/${slug}`;

    const hreflangs = langs
      .map((lang) => {
        const href =
          lang === "es"
            ? `${baseUrl}/es-cr/insights/${slug}`
            : `${baseUrl}/insights/${slug}`;
        const hreflang = lang === "es" ? "es-CR" : "en";
        return `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`;
      })
      .concat(
        `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/insights/${slug}" />`
      )
      .join("\n");

    return `
      <url>
        <loc>${baseUrl}${defaultPath}</loc>
        ${hreflangs}
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  // 🔒 Rutas estáticas comunes
  const staticUrls = [
    "",
    "insights",
    "about",
    "contact",
    "es-cr",
    "es-cr/insights",
  ].map(
    (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `
  );

  // 🧩 Construir sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${staticUrls.join("\n")}
    ${dynamicUrls.join("\n")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
