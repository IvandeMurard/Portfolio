import { motion } from 'framer-motion';
import { projects } from '../data/mockData';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
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
    <section id="projects" className="section-padding py-16 bg-muted/30 dark:bg-muted/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-foreground mb-3">Side-Projects</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Projects ideas I am or have been working on
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all hover:shadow-md dark:hover:shadow-zinc-800/40"
              whileHover={{ y: -3 }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} project`} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-accent/90 text-white text-xs px-2 py-0.5 rounded-full">Featured</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold font-poppins text-card-foreground mb-1 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-muted-foreground/70">+{project.tags.length - 3} more</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-secondary text-sm font-medium hover:text-secondary/80 transition-colors inline-flex items-center">
                    Details <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-muted-foreground hover:text-secondary transition-colors" aria-label="GitHub Repository">
                        <i className="ri-github-line"></i>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Live Demo">
                        <i className="ri-external-link-line"></i>
                      </a>
                    )}
                  </div>
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
            <span>View All Projects</span>
            <i className="ri-arrow-right-line ml-1"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
