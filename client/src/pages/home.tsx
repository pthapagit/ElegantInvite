import EventDetails from "@/components/event-details";
import RsvpForm from "@/components/rsvp-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <EventDetails />
        <div className="mt-12">
          <RsvpForm />
        </div>
      </div>
    </div>
  );
}
