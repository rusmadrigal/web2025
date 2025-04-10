module.exports = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/contacto',
          destination: '/',
          permanent: true,
        },
        // Wildcard path matching
        {
          source: '/acerca',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }