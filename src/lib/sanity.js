// src/lib/sanity.js
import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID ?? '5rnjudi6';
const dataset   = process.env.SANITY_DATASET  ?? 'production';
const apiVersion= process.env.SANITY_API_VERSION ?? '2023-03-25';

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
