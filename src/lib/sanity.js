// src/lib/sanity.js
import { createClient } from "@sanity/client";

const projectId =
  process.env.SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "5rnjudi6";            // <–– tu Project ID aquí como último recurso

const dataset =
  process.env.SANITY_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";          // <–– tu Dataset aquí

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion: process.env.SANITY_API_VERSION || "2023-03-25",
  useCdn: true,
});
