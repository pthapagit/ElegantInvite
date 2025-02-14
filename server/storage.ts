import { rsvps, type Rsvp, type InsertRsvp } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getRsvps(): Promise<Rsvp[]>;
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getRsvpStats(): Promise<{ totalAttending: number; totalRsvps: number }>;
}

export class DatabaseStorage implements IStorage {
  async getRsvps(): Promise<Rsvp[]> {
    return await db.select().from(rsvps);
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const [rsvp] = await db
      .insert(rsvps)
      .values(insertRsvp)
      .returning();
    return rsvp;
  }

  async getRsvpStats(): Promise<{ totalAttending: number; totalRsvps: number }> {
    const allRsvps = await this.getRsvps();
    const attending = allRsvps.filter(r => r.attending);
    return {
      totalAttending: attending.reduce((sum, r) => sum + r.guestCount, 0),
      totalRsvps: allRsvps.length
    };
  }
}

export const storage = new DatabaseStorage();