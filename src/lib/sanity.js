import { createClient } from '@sanity/client';

const projectId =
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_DATASET    || process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration: check SANITY_PROJECT_ID and SANITY_DATASET');
}

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion: process.env.SANITY_API_VERSION || '2023-03-25',
  useCdn: true,
});
