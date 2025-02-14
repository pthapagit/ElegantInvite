import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventDetails() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Kiansh is Two !
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        Join us for an evening of celebration
      </p>

      <div className="relative mb-16 max-w-[400px] mx-auto">
        <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/src/images/Kiansh1.jpeg"
            alt="Event celebration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <Calendar className="h-8 w-8 mb-2 mx-auto text-primary" />
            <h3 className="font-semibold mb-1">Date</h3>
            <p className="text-muted-foreground">February 15, 2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Clock className="h-8 w-8 mb-2 mx-auto text-primary" />
            <h3 className="font-semibold mb-1">Time</h3>
            <p className="text-muted-foreground">5:00 PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <MapPin className="h-8 w-8 mb-2 mx-auto text-primary" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-muted-foreground">Thapa Home Euless</p>
          </CardContent>
        </Card>
      </div>

      <div className="prose prose-lg mx-auto">
        <p>
          We invite you to join for Kinash's second Birthday Celebration
        </p>
      </div>
    </div>
  );
}