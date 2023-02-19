import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;


// next-sanity documentation for preview
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false //can use cdn to specify local or production
});