export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Event {
  id: number;
  title: string;
  type: 'Innovation Competition' | 'Hackathon' | 'Meetup';
  image: string;
  date: string;
  location: string;
  description: string;
  role: string;
  url?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  dateRange: string;
  description: string;
  technologies: string[];
  logo?: string; // Optional company logo
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
