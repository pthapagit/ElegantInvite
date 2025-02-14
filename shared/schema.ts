import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rsvps = pgTable("rsvps", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  guestCount: integer("guest_count").notNull(),
  attending: boolean("attending").notNull(),
});

export const insertRsvpSchema = createInsertSchema(rsvps).pick({
  name: true,
  email: true,
  guestCount: true,
  attending: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  guestCount: z.number().min(1, "Must have at least 1 guest").max(10, "Maximum 10 guests allowed"),
});

export type InsertRsvp = z.infer<typeof insertRsvpSchema>;
export type Rsvp = typeof rsvps.$inferSelect;
