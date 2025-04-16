import { motion } from 'framer-motion';
import { scrollToSection } from '../lib/smoothScroll';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/profile.jpeg';
import meetupLogo from '../assets/meetup.png';

const HeroSection = () => {
  return (
    <section id="about" className="section-padding pt-20 md:pt-28 min-h-[80vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-foreground leading-tight mb-4">
              Hi, I'm <span className="text-secondary">Ivan de Murard</span> <span className="inline-block">Product & Innovation Manager</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
              I lead cross-functional IT projects and develop innovative SaaS solutions. Passionate about connecting people and delivering impactful innovations.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-md"
              >
                Get in touch
                <i className="ri-arrow-right-line ml-2"></i>
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/5 px-6 py-3 rounded-md"
              >
                View Projects
              </Button>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://cal.com/ivandemurard/30min?user=ivandemurard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
              >
                <i className="ri-calendar-line mr-2"></i>
                Schedule a 30-minute meeting with me
                <i className="ri-arrow-right-up-line ml-1"></i>
              </a>
            </div>
            
            <div className="mt-8 flex space-x-6">
              <a href="https://linkedin.com/in/ivandemurard" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
              <a href="https://www.meetup.com/fr-FR/find/?eventType=upcoming&amp;userFreeform=My+events&amp;source=EVENTS" target="_blank" rel="noopener noreferrer" className="text-[#f64060] hover:text-[#f64060]/80 transition-colors flex items-center" aria-label="Meetup Events">
                <img src={meetupLogo} alt="Meetup Events" className="w-6 h-6" />
              </a>
              <a href="mailto:ivandemurard@hotmail.fr" className="text-[#EA4335] hover:text-[#EA4335]/80 transition-colors" aria-label="Email">
                <i className="ri-mail-line text-2xl"></i>
              </a>
              <a href="tel:+33680918731" className="text-[#0fb55e] hover:text-[#0fb55e]/80 transition-colors" aria-label="Phone">
                <i className="ri-phone-line text-2xl"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.div 
              className="rounded-lg bg-gradient-to-br from-secondary to-accent p-1 shadow-xl max-w-[200px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImage} 
                alt="Ivan de Murard portrait" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
