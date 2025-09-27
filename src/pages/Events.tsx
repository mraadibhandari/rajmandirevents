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
    }
  ];

  const handleBookTickets = () => {
    // Redirect to BookMyShow or District
    window.open('https://in.bookmyshow.com/', '_blank');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-festive font-bold text-4xl md:text-6xl mb-4 text-festive">
            Upcoming Concerts & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of live music with Rajmandir Events
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          <Card className="card-festive overflow-hidden">
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
                <h2 className="font-festive font-bold text-3xl lg:text-4xl mb-4 text-festive">
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
                  <Button className="btn-hero w-full sm:w-auto" onClick={handleBookTickets}>
                    Book on BookMyShow
                  </Button>
                  <Link to="/events/arijit-singh-ratlam">
                    <Button className="btn-secondary w-full sm:w-auto">
                      Event Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-festive p-8">
            <CardContent className="space-y-6">
              <h2 className="font-festive font-bold text-3xl text-festive">
                More Events Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rajmandir Events is planning more incredible concerts for Ratlam. 
                Stay tuned for announcements of future shows!
              </p>
              <Button className="btn-hero">
                Stay Updated
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;