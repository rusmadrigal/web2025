// src/lib/queries.js

// 🔹 Obtener todos los slugs de posts publicados (para rutas dinámicas)
export const GET_ALL_POST_SLUGS = `
  {
    blogPosts(stage: PUBLISHED) {
      slug
    }
  }
`;

// 🔹 Obtener un post completo por slug (detalle individual)
// src/lib/queries.js

export const GET_POST_BY_SLUG = `
  query BlogPost($slug: String!) {
    blogPost(stage: PUBLISHED, where: { slug: $slug }) {
      title
      slug
      excerpt
      metaTitle
      metaDescription
      date
      coverImage {
        url
      }
      content {
        raw
      }
    }
  }
`;

// 🔹 Obtener todos los posts para la vista principal de /insights
export const GET_ALL_POSTS = `
  {
    blogPosts(orderBy: date_DESC, stage: PUBLISHED) {
      title
      slug
      excerpt
      metaDescription
      date
      coverImage {
        url
      }
    }
  }
`;
