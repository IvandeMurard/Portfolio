import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import EventsSection from './EventsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'events', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200; // Adding offset for better active state

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen"
    >
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EventsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
