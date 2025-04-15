const getStaticPaths = await import("./scripts/generate-app-sitemap.mjs").then(mod => mod.default);

export default {
  siteUrl: "https://rusmadrigal.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async () => {
    const paths = await getStaticPaths();

    return paths.map((loc) => ({
      loc,
      changefreq: "monthly",
      priority: loc === "/" || loc === "/es-cr" ? 1.0 : 0.8,
    }));
  },
};
