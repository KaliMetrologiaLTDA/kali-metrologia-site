import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "9i7pxv11", 
  dataset: "production",
  apiVersion: "2025-09-11",
  useCdn: true, 
});
