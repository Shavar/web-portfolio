export interface NavigationLink {
  href: string;
  label: string;
  target?: string;
}

export interface NavigationData {
  header: NavigationLink[];
  footer: NavigationLink[];
}
