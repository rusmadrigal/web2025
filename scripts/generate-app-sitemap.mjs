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

  const basePaths = staticFiles.map((file) => {
    let route = file
      .replace("src/app", "")
      .replace("/page.jsx", "")
      .replace(/\/\[\w+\]/g, "");

    return route === "" ? "/" : route;
  });

  const allPaths = new Set();

  basePaths.forEach((base) => {
    defaultLocales.forEach((locale) => {
      const loc = locale + base;
      allPaths.add(loc.endsWith("/") && loc !== "/" ? loc.slice(0, -1) : loc);
    });
  });

  // ✅ Extraer slugs directamente desde el texto de los .js
  const blogFiles = await globby([
    "src/content/blogs/*.js",
    "!src/content/blogs/allBlogs.js"
  ]);

  for (const file of blogFiles) {
    const filePath = path.join(process.cwd(), file);
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Regex para extraer el valor del slug: "nombre"
    const slugMatch = fileContent.match(/slug:\s*["'`](.*?)["'`]/);
    if (slugMatch && slugMatch[1]) {
      const slug = slugMatch[1];
      defaultLocales.forEach((locale) => {
        const url = `${locale}/insights/${slug}`;
        allPaths.add(url);
      });
    }
  }

  console.log("🧭 Sitemap generado con:", Array.from(allPaths));
  return Array.from(allPaths);
}

export default getStaticPaths;
