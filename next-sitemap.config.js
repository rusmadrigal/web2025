/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://rusmadrigal.com", // ✅ Tu dominio principal
    generateRobotsTxt: true,
    changefreq: "monthly",
    priority: 0.7,
    sitemapSize: 7000,
    alternateRefs: [
      {
        href: "https://rusmadrigal.com",
        hreflang: "en",
      },
      {
        href: "https://rusmadrigal.com/es-cr",
        hreflang: "es-cr",
      },
    ],
  };
  