export interface SocialLink {
  platform: string;
  url: string;
  icon: 'facebook' | 'x' | 'qiita' | 'zenn';
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface ExperienceProject {
  title: string;
  link?: string;
  details: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  tech?: string;
  tools?: string;
  projects: ExperienceProject[];
  compact?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Profile {
  name: { ja: string; en: string; aka: string };
  title: string;
  tagline: string;
  location: string;
  photo: string;
  lastUpdated: string;
  social: SocialLink[];
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  projects: Project[];
  analytics: { googleAnalyticsId: string };
  seo: {
    description: string;
    ogImage: string;
    canonicalUrl: string;
    ogTitle: string;
  };
}
