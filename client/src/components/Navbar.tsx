import { useState, useEffect } from 'react';
import { scrollToSection } from '../lib/smoothScroll';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm border-b border-border dark:border-zinc-800 dark:shadow-zinc-800/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('about');
          }}
          className="text-2xl font-bold font-poppins tracking-tight text-primary"
        >
          <span className="text-secondary">Ivan</span>Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'events', label: 'Events I\'m Attending' },
            { id: 'experience', label: 'Experience' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(item.id);
              }}
              className={`font-medium transition-colors hover:text-secondary ${
                activeSection === item.id ? 'text-secondary' : 'text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  className="h-0.5 bg-secondary mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`text-2xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background px-6 pb-4 shadow-md overflow-hidden dark:shadow-zinc-800"
          >
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'events', label: 'Events I\'m Attending' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(item.id);
                }}
                className={`block py-3 font-medium transition-colors hover:text-secondary ${
                  activeSection === item.id ? 'text-secondary' : 'text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="py-3 flex items-center">
              <span className="mr-3 font-medium text-primary">Theme</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
