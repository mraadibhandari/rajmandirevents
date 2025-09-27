import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import arijitImage from "@/assets/arijit-concert.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      artist: "Arijit Singh",
      title: "Arijit Singh Live in Ratlam",
      date: "31st October 2026",
      venue: "Ratlam Cricket Stadium",
      city: "Ratlam",
      description: "An evening of soulful melodies with India's most beloved playback singer",
      image: arijitImage,
      featured: true
    },
    {
      id: 2,
      artist: "Coming Soon",
      title: "More Amazing Acts",
      date: "TBA 2026",
      venue: "Various Venues",
      city: "Multiple Cities",
      description: "Stay tuned for more incredible concert announcements",
      image: null,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cosmic font-bold text-4xl md:text-6xl mb-4 text-cosmic">
            Upcoming Concerts & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these incredible live music experiences coming to a city near you
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          <Card className="card-cosmic overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={arijitImage}
                  alt="Arijit Singh Concert"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED EVENT
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="font-cosmic font-bold text-3xl lg:text-4xl mb-4 text-cosmic">
                  Arijit Singh Live in Ratlam
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>31st October 2026</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>Ratlam Cricket Stadium, Ratlam</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>7:00 PM onwards</span>
                  </div>
                </div>
                <p className="text-lg mb-8">
                  Get ready for a night of soulful melodies and unforgettable vibes with 
                  India's biggest music icon. Experience the magic of Arijit Singh's live 
                  performance in an intimate setting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/events/arijit-singh-ratlam">
                    <Button className="btn-hero w-full sm:w-auto">
                      Buy Tickets
                    </Button>
                  </Link>
                  <Button className="btn-secondary w-full sm:w-auto">
                    Event Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* All Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.slice(1).map((event) => (
            <Card key={event.id} className="card-cosmic transition-cosmic hover:scale-105">
              <div className="aspect-video bg-gradient-cosmic flex items-center justify-center">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Users className="w-16 h-16 text-white/60" />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.venue}, {event.city}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {event.description}
                </p>
                <Button className="btn-secondary w-full" disabled={event.artist === "Coming Soon"}>
                  {event.artist === "Coming Soon" ? "Coming Soon" : "Buy Tickets"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-cosmic p-8">
            <CardContent className="space-y-6">
              <h2 className="font-cosmic font-bold text-3xl text-cosmic">
                Don't See Your City?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're constantly expanding to bring world-class concerts to more cities. 
                Let us know where you'd like to see a Comet Experience next!
              </p>
              <Button className="btn-hero">
                Request Your City
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;