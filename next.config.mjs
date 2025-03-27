const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/acerca",
        destination: "/", // Reemplaza con la URL de destino
        permanent: true,
      },
      {
        source: "/tiene-el-keyword-research-impacto-en-el-seo-john-mueller-dice-no",
        destination: "/", // Reemplaza con la URL de destino
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
