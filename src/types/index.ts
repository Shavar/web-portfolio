export interface JobExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface NavigationLink {
  href: string;
  label: string;
  target?: string;
}

export interface SocialLink extends NavigationLink {
  faIcon: string;
}

export interface NavigationData {
  header: NavigationLink[];
  footer: NavigationLink[];
  socials: SocialLink[];
}
