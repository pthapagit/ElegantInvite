import EventDetails from "@/components/event-details";
import RsvpForm from "@/components/rsvp-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-purple-50/50 to-background">
      <div className="container mx-auto px-4 py-12 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]" />
        <div className="relative">
          <EventDetails />
          <div className="mt-16">
            <RsvpForm />
          </div>
        </div>
      </div>
    </div>
  );
}