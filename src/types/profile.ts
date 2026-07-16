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

export interface Contact {
  title: string;
  description: string;
  primaryAction: { label: string; url: string };
  responseNote: string;
}

export interface ServiceOffering {
  title: string;
  summary: string;
  challenges: string[];
  support: string[];
  evidence: string[];
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface EngagementOption {
  title: string;
  description: string;
  examples: string[];
}

export interface SeoMetadata {
  description: string;
  ogImage: string;
  canonicalUrl: string;
  ogTitle: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  description: string;
  offerings: ServiceOffering[];
  process: ServiceProcessStep[];
  engagementOptions: EngagementOption[];
  termsNote: string;
  overviewAction: { label: string; url: string };
  seo: SeoMetadata;
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
  contact: Contact;
  services: ServicesContent;
  analytics: { googleAnalyticsId: string };
  seo: SeoMetadata;
}
