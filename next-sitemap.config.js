module.exports = {
  siteUrl: "https://rusmadrigal.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async (config) => {
    return [
      { loc: "/", changefreq: "monthly", priority: 1.0 },
      { loc: "/es-cr", changefreq: "monthly", priority: 1.0 },
      // Podés agregar más manualmente si tenés
    ];
  },
};
