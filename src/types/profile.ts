export interface SocialLink {
  platform: string;
  url: string;
  icon: 'x' | 'zenn';
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

export interface SeoMetadata {
  description: string;
  ogImage: string;
  canonicalUrl: string;
  ogTitle: string;
}

export interface AudienceLink {
  title: string;
  description: string;
  href: string;
}

export interface LandingContent {
  eyebrow: string;
  title: string;
  description: string;
  audiences: AudienceLink[];
  historyTitle: string;
  history: string[];
  seo: SeoMetadata;
}

export interface ContentItem {
  title: string;
  description: string;
}

export interface ServiceCase {
  title: string;
  paragraphs: string[];
}

export interface ServicePageContent {
  eyebrow: string;
  title: string;
  description: string;
  availability: string;
  challenges: string[];
  processTitle: string;
  process: ContentItem[];
  casesTitle: string;
  cases: ServiceCase[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  seo: SeoMetadata;
}

export interface PortfolioContent {
  availability: string;
  seo: SeoMetadata;
}

export interface Profile {
  name: { ja: string; en: string };
  title: string;
  tagline: string;
  photo: string;
  social: SocialLink[];
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  projects: Project[];
  contact: Contact;
  landing: LandingContent;
  servicePages: {
    aiDevelopment: ServicePageContent;
    productDevelopment: ServicePageContent;
    businessImprovement: ServicePageContent;
  };
  portfolio: PortfolioContent;
  analytics: { googleAnalyticsId: string };
  seo: SeoMetadata;
}
