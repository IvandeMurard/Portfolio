import { motion } from 'framer-motion';
import { experiences } from '../data/mockData';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="experience" className="section-padding py-16 bg-muted/30 dark:bg-muted/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-foreground mb-3">Professional Experience</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            My last experiences in product management and innovation
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-6 md:pl-8 space-y-8"
          >
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="timeline-item relative pl-6 md:pl-8"
              >
                <div className="timeline-dot"></div>
                <motion.div 
                  className="bg-card p-4 md:p-5 rounded-lg shadow-sm border border-border"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold font-poppins text-card-foreground">{experience.title}</h3>
                    <span className="inline-flex items-center mt-1 md:mt-0 text-xs font-medium text-accent">
                      <i className="ri-calendar-line mr-1"></i> {experience.dateRange}
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    {experience.logo && (
                      <div className="w-8 h-8 mr-2 flex-shrink-0">
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`} 
                          className="w-full h-full object-contain dark:bg-white dark:rounded-full dark:p-1"
                        />
                      </div>
                    )}
                    <h4 className="text-base font-medium text-secondary">{experience.company}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {experience.technologies.length > 4 && (
                      <span className="text-xs text-muted-foreground/50">+{experience.technologies.length - 4} more</span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        

      </div>
    </section>
  );
};

export default ExperienceSection;
