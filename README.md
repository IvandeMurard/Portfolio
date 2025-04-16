# Ivan de Murard - Professional Portfolio

## Overview
A modern, responsive personal portfolio website designed to showcase my professional experience, side projects, and upcoming events as a Product Manager specializing in innovation.

![Portfolio Screenshot](attached_assets/image_1744794099607.png)

## Features
- Responsive design for all device types
- Dark/light theme toggle with color scheme persistence
- Interactive components and smooth animations
- Database integration for contact form submissions
- Newsletter subscription functionality
- Social media integration with brand-colored icons
- Comprehensive displays for:
  - Professional experience
  - Side projects
  - Events participation
  - Skills and expertise

## Technology Stack
- **Frontend:**
  - React with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Shadcn/UI component library
  - React Hook Form for form management
  - Zod for validation

- **Backend:**
  - Express.js server
  - PostgreSQL database with Drizzle ORM
  - RESTful API for form submissions

## Project Structure
- `/client` - React frontend application
- `/server` - Express backend API
- `/shared` - Shared types and schema definitions
- `/public` - Static assets

## Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL database

### Installation
1. Clone the repository
```bash
git clone https://github.com/IvandeMurard/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```
DATABASE_URL=postgres://username:password@host:port/database
```

4. Run database migrations
```bash
npm run db:push
```

5. Start the development server
```bash
npm run dev
```

## Contact
- Email: ivandemurard@hotmail.fr
- LinkedIn: [Ivan de Murard](https://linkedin.com/in/ivandemurard)
- Meetup: [My Events](https://www.meetup.com/fr-FR/find/?eventType=upcoming&userFreeform=My+events&source=EVENTS)

## License
© 2025 Ivan de Murard. All rights reserved.