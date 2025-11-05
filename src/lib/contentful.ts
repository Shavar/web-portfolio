import { createClient } from "contentful";

function isPreviewMode() {
  return process.env.NODE_ENV !== "production";
}

let client: ReturnType<typeof createClient> | null = null;

export function getClient() {
  if (!client) {
    const isPreview = isPreviewMode();

    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
      accessToken: isPreview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN! : process.env.CONTENTFUL_ACCESS_TOKEN!,
      host: isPreview ? "preview.contentful.com" : "cdn.contentful.com",
    });
  }
  return client;
}

// Fetch all pages
export async function getAllPages() {
  const client = getClient();
  const res = await client.getEntries({
    content_type: "page",
    select: ["fields.title", "fields.slug", "fields.pageType"],
  });
  return res.items.map((item) => ({
    title: item.fields.title as string,
    slug: item.fields.slug as string,
    pageType: item.fields.pageType as string,
  }));
}

// Fetch page by slug
export async function getPageBySlug(slug: string) {
  const client = getClient();
  const res = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    limit: 1,
  });

  if (!res.items.length) return null;

  const item = res.items[0];
  return {
    title: item.fields.title as string,
    slug: item.fields.slug as string,
    pageType: item.fields.pageType as string,
    content: item.fields.content,
  };
}

// Fetch all projects
export async function getAllProjects() {
  const client = getClient();
  try {
    const res = await client.getEntries({
      content_type: "project",
      select: ["fields.title", "fields.slug", "fields.description"],
    });

    return res.items.map((item) => ({
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      description: item.fields.description as string,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Return empty array if project content type doesn't exist
    return [];
  }
}

// Fetch project by slug
export async function getProjectBySlug(slug: string) {
  const client = getClient();
  try {
    const res = await client.getEntries({
      content_type: "project",
      "fields.slug": slug,
      limit: 1,
    });

    if (!res.items.length) return null;

    const item = res.items[0];
    return {
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      description: item.fields.description as string,
    };
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    // Return null if project content type doesn't exist
    return null;
  }
}
