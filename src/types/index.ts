export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
  deliverables?: string[];
  targetAudience?: string;
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
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface WorkingPrinciple {
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
