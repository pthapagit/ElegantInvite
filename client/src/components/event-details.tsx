import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventDetails() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary/90 to-purple-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
        You're Invited!
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
        Join us for an evening of celebration
      </p>

      <div className="relative mb-16 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000 delay-300">
        <img
          src="/src/images/Kiansh.png"
          alt="Event celebration"
          className="w-full aspect-[21/9] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="pt-6">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Date</h3>
            <p className="text-muted-foreground">February 15, 2025</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="pt-6">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Time</h3>
            <p className="text-muted-foreground">5:00 PM</p>
          </CardContent>
        </Card>

        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="pt-6">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground">Thapa Home Euless</p>
          </CardContent>
        </Card>
      </div>

      <div className="prose prose-lg mx-auto bg-white/50 p-8 rounded-xl shadow-inner">
        <p className="text-muted-foreground">
          We invite you to join us for an unforgettable evening of celebration.
          There will be music, dancing, and delicious food. Dress code is
          formal.
        </p>
      </div>
    </div>
  );
}