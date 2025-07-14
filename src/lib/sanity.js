import { createClient } from '@sanity/client';

// 🔐 Usa variables públicas si el archivo se puede importar en el cliente
export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-25",
  useCdn: true,
});
