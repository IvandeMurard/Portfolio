import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "../shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(contactData);
      res.status(201).json({ 
        success: true, 
        message: "Contact submission received", 
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process contact submission" 
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const subscriptionData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(subscriptionData);
      
      res.status(201).json({ 
        success: true, 
        message: "Newsletter subscription successful",
        id: subscription.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process newsletter subscription" 
        });
      }
    }
  });

  // Get newsletter subscribers (admin endpoint, could be secured in production)
  app.get("/api/admin/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json({ 
        success: true, 
        data: subscriptions 
      });
    } catch (error) {
      console.error("Get newsletter subscribers error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve newsletter subscribers" 
      });
    }
  });

  // Get contact submissions (admin endpoint, could be secured in production)
  app.get("/api/admin/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ 
        success: true, 
        data: submissions 
      });
    } catch (error) {
      console.error("Get contact submissions error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
