import { getClient } from "./contentful";

export async function getNavigation() {
  const client = getClient();
  const res = await client.getEntries({
    content_type: "navigation",
    include: 2, // important: fetch linked Page data
  });

  type NavigationItem = {
    fields: {
      title?: string;
      link?: {
        fields?: {
          title?: string;
          slug?: string;
        };
      };
    };
  };

  return res.items.map((item: NavigationItem) => {
    const linkedPage = item.fields.link?.fields;

    return {
      title: item.fields.title || linkedPage?.title,
      slug: linkedPage?.slug,
    };
  });
}
