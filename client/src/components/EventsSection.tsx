import { motion } from 'framer-motion';
import { events } from '../data/mockData';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="events" className="section-padding py-16 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-foreground mb-3">Events I'm Attending</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Past and upcoming hackathons, innovation competitions, and professional events 
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all hover:shadow-md dark:hover:shadow-zinc-800/40"
              whileHover={{ y: -3 }}
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white text-xs bg-secondary/90 px-2 py-0.5 rounded-full">{event.type}</span>
                    <h3 className="text-white text-lg font-semibold font-poppins mt-1">{event.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2 text-xs">
                  <i className="ri-calendar-line text-secondary mr-1"></i>
                  <span className="text-muted-foreground">{event.date}</span>
                  <i className="ri-map-pin-line text-secondary ml-3 mr-1"></i>
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href={event.url || "#"} 
                    target={event.url ? "_blank" : undefined}
                    rel={event.url ? "noopener noreferrer" : undefined}
                    className="text-secondary text-xs font-medium hover:text-secondary/80 transition-colors inline-flex items-center"
                  >
                    {event.url ? 'Visit Site' : 'Details'} <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                  <span className="text-xs text-accent font-medium">{event.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md inline-flex items-center text-sm"
          >
            <span>View All Events</span>
            <i className="ri-arrow-right-line ml-1"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
