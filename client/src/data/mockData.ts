import { Skill, Project, Event, Experience } from '../lib/types';
// Import company logos
import fortilLogo from "../assets/fortil.png";
import altenLogo from "../assets/alten.png";
import opendatasoftLogo from "../assets/Opendatasoft.png";
import sonorLogo from "../assets/sonor.png";
import lionLogo from "../assets/lion-logo.png";

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Project Management',
    description: 'Leading cross-functional IT projects and coordinating stakeholders to successful delivery.',
    icon: 'ri-team-line',
    tags: ['Agile', 'Kanban', 'PMO', 'Waterfall']
  },
  {
    id: 2,
    title: 'Product Development',
    description: 'Building innovative SaaS solutions and services with a user-centered approach.',
    icon: 'ri-product-hunt-line',
    tags: ['UX/UI Design', 'Figma', 'Miro', 'Prototyping']
  },
  {
    id: 3,
    title: 'Data Analysis',
    description: 'Transforming data into actionable insights and creating monitoring dashboards.',
    icon: 'ri-database-2-line',
    tags: ['Power BI', 'Excel', 'Smartsheet', 'Open Data']
  },
  {
    id: 4,
    title: 'Business Development',
    description: 'Driving new opportunities and managing client relationships in B2B environments.',
    icon: 'ri-line-chart-line',
    tags: ['Sales', 'CRM', 'Client Success', 'Presentations']
  },
  {
    id: 5,
    title: 'Innovation Management',
    description: 'Leading open innovation initiatives and fostering entrepreneurial projects.',
    icon: 'ri-lightbulb-line',
    tags: ['Entrepreneurship', 'Strategic Foresight', 'Ideation', 'Pitching']
  },
  {
    id: 6,
    title: 'Team Collaboration',
    description: 'Building and coordinating cross-functional teams with diverse stakeholders.',
    icon: 'ri-group-line',
    tags: ['Leadership', 'Facilitation', 'Communication', 'Coordination']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sonor - Noise Pollution SaaS',
    description: 'Open data SaaS solution for monitoring and reducing urban noise pollution for smart cities. 1st Prize at "Recoder l\'Habitat" Hackathon.',
    image: sonorLogo,
    featured: true,
    tags: ['SaaS', 'Open Data', 'Smart City', 'Project Management'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'HealthTeam COVID-19 Platform',
    description: 'Participated as part of team HealthTeam to develop innovative solutions addressing healthcare challenges during the pandemic.',
    image: 'https://images.unsplash.com/photo-1582547704611-7c4bc8e47c08?auto=format&fit=crop&w=600&h=400',
    tags: ['Hackathon', 'Healthcare', 'Collaboration', 'Rapid Prototyping'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'Maïsadour Fresh Snack Concept',
    description: 'Developed a supermarket fresh snack retail brand with Coopérative Maïsadour. Won 1st Prize in "Food and Retail" category and Jury\'s Grand Prize.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&w=600&h=400',
    tags: ['Food Retail', 'Product Management', 'Innovation', 'Entrepreneurship'],
    githubUrl: '#',
    demoUrl: '#'
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: 'Lion du Samedi : Le Promptathon',
    type: 'Hackathon',
    image: lionLogo,
    date: 'April 26, 2025',
    location: 'Paris, France',
    description: "Lion du Samedi takes you on a unique experience: in just one Saturday, you develop a project using AI. Expect to get your hands dirty, discover game-changing AI hacks and use cases, make transformative connections, and completely shift your mindset.",
    role: 'Attendee',
    url: 'https://lion.mariaschools.com/formations/lion-du-samedi'
  },
  {
    id: 2,
    title: 'Recoder l\'Habitat Hackathon',
    type: 'Hackathon',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=400',
    date: 'October 2020',
    location: 'Paris, France',
    description: 'Led a team of 4 to develop Sonor, an open data SaaS solution for urban noise pollution monitoring. Won 1st Prize.',
    role: 'Team Member'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'IT Project Manager',
    company: 'FORTIL Paris',
    dateRange: 'April 2024 - Present',
    description: 'Leading the renewal of client business tools for DomusVi (France\'s third-largest medico-social group). Coordinating SaaS vendors and internal teams through project planning, POC launch, and implementation.',
    technologies: ['Project Planning', 'Stakeholder Management', 'POC Facilitation', 'SaaS Implementation'],
    logo: fortilLogo
  },
  {
    id: 2,
    title: 'Project Manager - IoT',
    company: 'ALTEN',
    dateRange: 'October 2023 - March 2024',
    description: 'Managed billing and recovery projects for Objenious (Bouygues Telecom), France\'s leading IoT provider. Created monitoring dashboards, facilitated cross-team meetings, and managed unpaid invoice recovery.',
    technologies: ['Financial Analysis', 'Dashboard Creation', 'Stakeholder Communication', 'Process Optimization'],
    logo: altenLogo
  },
  {
    id: 3,
    title: 'Project Manager / Customer Success Manager',
    company: 'Opendatasoft',
    dateRange: 'August 2022 - September 2023',
    description: 'Managed a portfolio of 22 European cities and metropolitan areas using data visualization SaaS solutions. Coordinated project implementations, provided training, and tracked client satisfaction KPIs.',
    technologies: ['Open Data', 'SaaS', 'Client Portfolio Management', 'Product Advocacy'],
    logo: opendatasoftLogo
  },
  {
    id: 4,
    title: 'Co-founder / Project Manager',
    company: 'Sonor',
    dateRange: 'October 2020 - May 2022',
    description: 'Co-founded an open innovation SaaS solution for monitoring and reducing urban noise pollution. Led project coordination, defined product features, and managed stakeholder relationships.',
    technologies: ['Open Data', 'SaaS Development', 'Business Development', 'Open Innovation'],
    logo: sonorLogo
  }
];