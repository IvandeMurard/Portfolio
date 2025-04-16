import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactFormData } from '../lib/types';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import meetupLogo from '../assets/meetup.png';
import substackLogo from '../assets/substack.png';
import MeetupEvents from './MeetupEvents';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest('POST', '/api/contact', data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out, I'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : 'Please try again later',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding py-16 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-foreground mb-3">Get In Touch</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Let's connect about innovation projects or collaboration opportunities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold font-poppins text-card-foreground mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary mr-3">
                      <i className="ri-mail-line text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <a href="mailto:ivandemurard@hotmail.fr" className="text-base font-medium text-card-foreground hover:text-secondary transition-colors">ivandemurard@hotmail.fr</a>
                    </div>
                  </div>
                  

                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary mr-3">
                      <i className="ri-map-pin-line text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                      <p className="text-base font-medium text-card-foreground">Paris, France</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-base font-semibold font-poppins text-card-foreground mb-3">Connect with me</h4>
                  
                  <div className="mb-4">
                    <a 
                      href="https://cal.com/ivandemurard/30min?user=ivandemurard" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-md hover:bg-secondary/90 transition-colors"
                    >
                      <i className="ri-calendar-line mr-1"></i>
                      Schedule a meeting
                    </a>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="https://linkedin.com/in/ivandemurard" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors" 
                      aria-label="LinkedIn"
                    >
                      <i className="ri-linkedin-fill text-lg"></i>
                    </a>
                    <a 
                      href="https://www.meetup.com/fr-FR/find/?eventType=upcoming&amp;userFreeform=My+events&amp;source=EVENTS" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 hover:bg-[#f64060] transition-colors" 
                      aria-label="Meetup Events"
                    >
                      <img src={meetupLogo} alt="Meetup Events" className="w-5 h-5" />
                    </a>
                    <a 
                      href="mailto:ivandemurard@hotmail.fr" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-[#EA4335] hover:bg-[#EA4335] hover:text-white transition-colors" 
                      aria-label="Email"
                    >
                      <i className="ri-mail-line text-lg"></i>
                    </a>
                    <a 
                      href="https://substack.com/home" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 hover:bg-[#FF6719] transition-colors" 
                      aria-label="Substack"
                    >
                      <img src={substackLogo} alt="Substack" className="w-5 h-5" />
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MeetupEvents userId="56012692" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold font-poppins text-card-foreground mb-4">Send me a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium text-muted-foreground">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary/50 focus:border-secondary transition-colors bg-card text-card-foreground"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium text-muted-foreground">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email address" 
                              type="email"
                              className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary/50 focus:border-secondary transition-colors bg-card text-card-foreground"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-muted-foreground">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this regarding?" 
                            className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary/50 focus:border-secondary transition-colors bg-card text-card-foreground"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none bg-card text-card-foreground"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full px-4 py-2 text-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-md transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
