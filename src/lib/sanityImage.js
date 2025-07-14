// src/lib/sanityImage.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId =
  process.env.SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "5rnjudi6";

const dataset =
  process.env.SANITY_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const client = createClient({ projectId, dataset, useCdn: true });
const builder = imageUrlBuilder(client);
export const urlForImage = (source) => builder.image(source);
