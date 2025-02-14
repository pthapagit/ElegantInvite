import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventDetails() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        You're Invited!
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
        Join us for an evening of celebration
      </p>

      <div className="relative mb-12">
        <img
          src="https://images.unsplash.com/photo-1606048005590-ac109542b311"
          alt="Event celebration"
          className="rounded-lg shadow-xl w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <Calendar className="h-8 w-8 mb-2 mx-auto text-primary" />
            <h3 className="font-semibold mb-1">Date</h3>
            <p className="text-muted-foreground">December 31, 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Clock className="h-8 w-8 mb-2 mx-auto text-primary" />
            <h3 className="font-semibold mb-1">Time</h3>
            <p className="text-muted-foreground">7:00 PM - 11:00 PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <MapPin className="h-8 w-8 mb-2 mx-auto text-primary" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-muted-foreground">Grand Ballroom</p>
          </CardContent>
        </Card>
      </div>

      <div className="prose prose-lg mx-auto">
        <p>
          We invite you to join us for an unforgettable evening of celebration.
          There will be music, dancing, and delicious food. Dress code is formal.
        </p>
      </div>
    </div>
  );
}
