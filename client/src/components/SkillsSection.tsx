import { motion } from 'framer-motion';
import { skills } from '../data/mockData';

const SkillsSection = () => {
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
    <section id="skills" className="section-padding py-16 bg-muted/30 dark:bg-muted/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-foreground mb-3">My Expertise</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Key skills and methodologies I bring to my projects
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-sm border border-border transition-transform hover:scale-[1.02] group"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <i className={`${skill.icon} text-xl`}></i>
                </span>
                <h3 className="text-lg font-semibold font-poppins text-card-foreground">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
