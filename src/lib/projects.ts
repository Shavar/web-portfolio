import { getClient } from "./contentful";

export type Project = {
  id: string;
  title: string;
  description: string;
  slug: string;
};

export async function getAllProjects(): Promise<Project[]> {
  const client = getClient();
  try {
    const res = await client.getEntries({
      content_type: "project",
      select: ["fields.title", "fields.description", "fields.slug"],
    });

    return res.items.map((item) => {
      return {
        id: item.sys.id,
        title: (item.fields as { title: string }).title,
        description: (item.fields as { description: string }).description,
        slug: (item.fields as { slug: string }).slug,
      };
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
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
      id: String(item.sys.id),
      title: item.fields.title ? String(item.fields.title) : "",
      description: item.fields.description ? String(item.fields.description) : "",
      slug: item.fields.slug ? String(item.fields.slug) : "",
    };
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
}
