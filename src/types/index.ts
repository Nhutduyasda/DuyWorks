export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  suitableWhen: string;
  decisionPrompt: string;
  useCases: string[];
  capabilities: string[];
  deliverables: string[];
  targetAudience?: string;
  relatedProjectSlugs: string[];
  faq: { question: string; answer: string }[];
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  overview?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  qualitativeOutcome?: string;
  liveUrl?: string;
  repositoryUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}
