import { getNavigationByTitle } from "@/lib/navigation";

export interface NavItem {
  title: string;
  slug: string;
}

/**
 * Fetches and processes navigation items by title
 * @param title - The navigation title to fetch
 * @returns Array of processed navigation items with title and slug
 */
export async function getProcessedNavigation(title: string): Promise<NavItem[]> {
  try {
    const rawNavItems = (await getNavigationByTitle(title)) ?? [];

    return rawNavItems
      .filter((item): item is { title: string; slug: string } => typeof item.slug === "string" && typeof item.title === "string")
      .map((item) => ({
        title: item.title,
        slug: item.slug,
      }));
  } catch (error) {
    console.error(`Error fetching navigation items for "${title}":`, error);
    return [];
  }
}

/**
 * Fetches header navigation items
 * @returns Array of header navigation items
 */
export async function getHeaderNavigation(): Promise<NavItem[]> {
  return getProcessedNavigation("Header Navigation");
}

/**
 * Fetches footer navigation items
 * @returns Array of footer navigation items
 */
export async function getFooterNavigation(): Promise<NavItem[]> {
  return getProcessedNavigation("Footer Navigation");
}
