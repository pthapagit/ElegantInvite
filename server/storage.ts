import { rsvps, type Rsvp, type InsertRsvp } from "@shared/schema";

export interface IStorage {
  getRsvps(): Promise<Rsvp[]>;
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getRsvpStats(): Promise<{ totalAttending: number; totalRsvps: number }>;
}

export class MemStorage implements IStorage {
  private rsvps: Map<number, Rsvp>;
  private currentId: number;

  constructor() {
    this.rsvps = new Map();
    this.currentId = 1;
  }

  async getRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvps.values());
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = this.currentId++;
    const rsvp: Rsvp = { ...insertRsvp, id };
    this.rsvps.set(id, rsvp);
    return rsvp;
  }

  async getRsvpStats(): Promise<{ totalAttending: number; totalRsvps: number }> {
    const rsvps = Array.from(this.rsvps.values());
    const attending = rsvps.filter(r => r.attending);
    return {
      totalAttending: attending.reduce((sum, r) => sum + r.guestCount, 0),
      totalRsvps: rsvps.length
    };
  }
}

export const storage = new MemStorage();
