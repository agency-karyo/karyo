export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface AnalysisResult {
  category: string;
  priority: string;
  sentiment: string;
  suggestedAction: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}
