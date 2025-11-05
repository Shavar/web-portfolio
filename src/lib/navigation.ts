// src/lib/navigation.ts
import { getClient } from "./contentful";

export async function getNavigationByTitle(title: string) {
  const client = getClient();
  const res = await client.getEntries({
    content_type: "navigation",
    "fields.title": title,
    include: 3, // include nested Navigation Items + Pages
    limit: 1,
  });

  console.log("Navigation fetch result:", res);

  if (!res.items.length) return null;

  const nav = res.items[0];

  console.log("Navigation item:", nav);

  interface NavigationItem {
    fields: {
      title?: string;
      page?: {
        fields?: {
          title?: string;
          slug?: string;
        };
      };
    };
  }

  const navigationItems: NavigationItem[] = Array.isArray(nav.fields.navigationItems) ? (nav.fields.navigationItems as NavigationItem[]) : [];
  return navigationItems.map((navItem) => {
    const linkedPage = navItem.fields.page?.fields;
    return {
      title: navItem.fields.title || linkedPage?.title,
      slug: linkedPage?.slug,
    };
  });
}
