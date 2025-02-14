import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/rsvp", async (req, res) => {
    try {
      const rsvpData = insertRsvpSchema.parse(req.body);
      const rsvp = await storage.createRsvp(rsvpData);
      res.json(rsvp);
    } catch (error) {
      res.status(400).json({ error: String(error) });
    }
  });

  app.get("/api/rsvps", async (req, res) => {
    const rsvps = await storage.getRsvps();
    res.json(rsvps);
  });

  app.get("/api/stats", async (req, res) => {
    const stats = await storage.getRsvpStats();
    res.json(stats);
  });

  return createServer(app);
}
