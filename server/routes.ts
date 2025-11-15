import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter." 
        });
      }

      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter!",
        subscriber: {
          email: subscriber.email,
          subscribedAt: subscriber.subscribedAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email address.",
          errors: error.errors 
        });
      }
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ 
        message: "An error occurred. Please try again later." 
      });
    }
  });

  // Get all newsletter subscribers (for admin purposes)
  app.get("/api/newsletter/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json({ 
        count: subscribers.length,
        subscribers: subscribers.map(s => ({
          email: s.email,
          subscribedAt: s.subscribedAt
        }))
      });
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      res.status(500).json({ 
        message: "An error occurred while fetching subscribers." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
