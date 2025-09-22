const { globby } = await import("globby");
import path from "path";
import { promises as fs } from "fs";

const defaultLocales = ["", "/es-cr"];

async function getStaticPaths() {
  const staticFiles = await globby([
    "src/app/**/page.jsx",
    "!src/app/**/components/**",
    "!src/app/**/layout.jsx",
    "!src/app/**/_*.jsx",
  ]);

  const allPaths = new Set();

  // ✅ Incluir solo rutas base que tengan un page.jsx y contenido real.
  const conditionalRoutes = [
    {
      path: "",
      route: "/",
      file: "src/app/page.jsx",
    },
    {
      path: "",
      route: "/insights",
      file: "src/app/insights/page.jsx",
    },
    {
      path: "/es-cr",
      route: "/es-cr",
      file: "src/app/es-cr/page.jsx",
    },
    {
      path: "/es-cr",
      route: "/es-cr/insights",
      file: "src/app/es-cr/insights/page.jsx",
    },
  ];

  for (const route of conditionalRoutes) {
    const exists = staticFiles.includes(route.file);
    if (exists) {
      allPaths.add(route.route);
    }
  }

  // ✅ Agregar slugs solo para insights si existen en content/blogs
  const blogFiles = await globby([
    "src/content/blogs/*.js",
    "!src/content/blogs/allBlogs.js"
  ]);

  for (const file of blogFiles) {
    const filePath = path.join(process.cwd(), file);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const slugMatch = fileContent.match(/slug:\s*["'`](.*?)["'`]/);
    if (slugMatch && slugMatch[1]) {
      const slug = slugMatch[1];

      // ✅ Inglés (activo por defecto)
      allPaths.add(`/insights/${slug}`);

      // ✅ Español (comentado por ahora)
      // Descomenta este bloque cuando tengas /es-cr/insights/[slug] funcionando
      /*
      const esCrInsightsExists = staticFiles.includes("src/app/es-cr/insights/page.jsx");
      if (esCrInsightsExists) {
        allPaths.add(`/es-cr/insights/${slug}`);
      }
      */
    }
  }

  console.log("🧭 Sitemap generado con:", Array.from(allPaths));
  return Array.from(allPaths);
}

export default getStaticPaths;
