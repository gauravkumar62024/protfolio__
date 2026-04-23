export type PublicationStatus = "accepted" | "under_review" | "submitted";

export interface CallToAction {
  label: string;
  href: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface HeroContent {
  name: string;
  role: string;
  institution: string;
  summary: string;
  profileImage: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  metrics: ImpactMetric[];
}

export interface ResearchFocus {
  headline: string;
  summary: string;
  interests: string[];
  methods: string[];
}

export interface PublicationLinks {
  paper?: string;
  code?: string;
  slides?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  abstract: string;
  links: PublicationLinks;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  supervisor?: string;
  highlights: string[];
}

export interface ProjectLinks {
  repo?: string;
  demo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: ProjectLinks;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
}

export interface TalkItem {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  type: "talk" | "workshop" | "symposium";
}

export interface ServiceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  details: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  detail: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  field: string;
  score?: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactContent {
  primaryEmail: string;
  secondaryEmail?: string;
  location: string;
  links: ContactLink[];
}

export interface ProfileContent {
  siteTitle: string;
  siteDescription: string;
  hero: HeroContent;
  research: ResearchFocus;
  publications: Publication[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  gallery: GalleryItem[];
  talks: TalkItem[];
  service: ServiceItem[];
  awards: AwardItem[];
  certifications: AwardItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  contact: ContactContent;
}
