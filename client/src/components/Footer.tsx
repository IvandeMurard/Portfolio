import { useState } from 'react';
import { scrollToSection } from '../lib/smoothScroll';
import { NewsletterFormData } from '../lib/types';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import meetupLogo from '../assets/meetup.png';
import substackLogo from '../assets/substack.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const data: NewsletterFormData = { email };
      const response = await apiRequest('POST', '/api/newsletter', data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to the newsletter",
          variant: "default",
        });
        setEmail('');
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : 'Please try again later',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer 
      className="bg-primary dark:bg-primary/95 text-primary-foreground py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6">
              <span className="text-secondary">Ivan</span>Portfolio
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              A results-driven Product and Innovation Manager specializing in cross-functional IT project management, entrepreneurship, and SaaS solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/ivandemurard" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://www.meetup.com/fr-FR/find/?eventType=upcoming&amp;userFreeform=My+events&amp;source=EVENTS" target="_blank" rel="noopener noreferrer" className="text-[#f64060] hover:text-[#f64060]/80 transition-colors flex items-center" aria-label="Meetup Events">
                <img src={meetupLogo} alt="Meetup Events" className="w-5 h-5" />
              </a>
              <a href="mailto:ivandemurard@hotmail.fr" className="text-[#EA4335] hover:text-[#EA4335]/80 transition-colors" aria-label="Email">
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a href="https://substack.com/home" target="_blank" rel="noopener noreferrer" className="text-[#FF6719] hover:text-[#FF6719]/80 transition-colors flex items-center" aria-label="Substack">
                <img src={substackLogo} alt="Substack" className="w-5 h-5" />
              </a>

            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'events', label: 'Events I\'m Attending' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(item.id);
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to receive updates on innovation projects, product management insights, and upcoming events.
            </p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 bg-muted border border-muted-foreground/30 rounded-l-md focus:outline-none focus:ring-1 focus:ring-secondary text-muted-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-r-md transition-colors disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ivan de Murard. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
