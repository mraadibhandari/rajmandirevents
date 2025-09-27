import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users, Star, Music } from "lucide-react";
import arijitImage from "@/assets/arijit-concert.jpg";

const EventDetail = () => {
  const handleBookTickets = () => {
    window.open('https://in.bookmyshow.com/', '_blank');
  };

  const ticketCategories = [
    {
      name: "Fan Zone",
      price: "₹1,999",
      description: "General admission with great views of the stage",
      features: ["Standing area", "Concert merchandise discount", "Entry to venue"]
    },
    {
      name: "VIP",
      price: "₹4,999",
      description: "Premium seating with exclusive amenities",
      features: ["Reserved seating", "VIP entrance", "Complimentary refreshments", "Concert merchandise"]
    },
    {
      name: "VVIP",
      price: "₹9,999",
      description: "Luxury experience with the best views",
      features: ["Front row seating", "Private entrance", "Premium lounge access", "Meet & greet opportunity", "Signed merchandise"]
    },
    {
      name: "Meet & Greet",
      price: "₹19,999",
      description: "Exclusive backstage access and photo opportunity",
      features: ["Personal meet & greet", "Photo with artist", "Backstage tour", "VIP seating", "Exclusive merchandise package"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Event Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <img
              src={arijitImage}
              alt="Arijit Singh Concert"
              className="rounded-2xl w-full h-auto cosmic-glow"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                FEATURED EVENT
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-festive font-bold text-4xl lg:text-5xl text-festive">
              Arijit Singh Live in Ratlam
            </h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-lg">
                <Calendar className="w-6 h-6 text-primary" />
                <span>31st October 2026 | Thursday</span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <MapPin className="w-6 h-6 text-secondary" />
                <span>Ratlam Cricket Stadium, Ratlam</span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <Clock className="w-6 h-6 text-accent" />
                <span>7:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-4 text-lg">
                <Users className="w-6 h-6 text-primary" />
                <span>Expected 15,000+ attendees</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get ready for a night of soulful melodies and unforgettable vibes with 
              India's biggest music icon. This is your chance to witness the magic of 
              Arijit Singh's live performance in an intimate setting. Experience hits 
              like "Tum Hi Ho," "Channa Mereya," and many more in a concert that promises 
              to be a lifetime experience.
            </p>
          </div>
        </div>

        {/* Ticket Categories */}
        <div className="mb-16">
          <h2 className="font-festive font-bold text-3xl md:text-4xl mb-8 text-center text-festive">
            Choose Your Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketCategories.map((category, index) => (
              <Card key={category.name} className={`card-festive transition-festive hover:scale-105 ${index === 2 ? 'ring-2 ring-accent' : ''}`}>
                <CardContent className="p-6">
                  {index === 2 && (
                    <div className="text-center mb-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                    <div className="text-3xl font-festive font-bold text-festive mb-2">
                      {category.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={index === 2 ? 'btn-hero w-full' : 'btn-secondary w-full'} onClick={handleBookTickets}>
                    Book on BookMyShow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="card-festive p-8">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Music className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-2xl">What to Expect</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 3+ hours of non-stop musical entertainment</li>
                <li>• Hit songs from movies and albums</li>
                <li>• State-of-the-art sound and lighting</li>
                <li>• Interactive audience segments</li>
                <li>• Special surprise performances</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-festive p-8">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
                <h3 className="font-bold text-2xl">Venue Information</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Address:</strong> Ratlam Cricket Stadium, Stadium Road, Ratlam, MP</p>
                <p><strong>Parking:</strong> Ample parking available on-site</p>
                <p><strong>Accessibility:</strong> Wheelchair accessible venues</p>
                <p><strong>Food & Beverages:</strong> Multiple outlets available</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Venue Map Placeholder */}
        <Card className="card-festive p-8 mb-16">
          <CardContent>
            <h3 className="font-bold text-2xl mb-6 text-center">Venue Location</h3>
            <div className="aspect-video bg-gradient-festive rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive venue map will be displayed here</p>
                <p className="text-sm opacity-80">Ratlam Cricket Stadium</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="card-festive p-8">
          <CardContent>
            <h3 className="font-bold text-2xl mb-6 text-center text-festive">Important Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Entry Guidelines</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Valid ticket and photo ID required for entry</li>
                  <li>• Gates open at 6:00 PM</li>
                  <li>• No outside food or beverages allowed</li>
                  <li>• Professional cameras and recording devices prohibited</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Safety & Security</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Bag checks will be conducted at entry</li>
                  <li>• Emergency exits clearly marked</li>
                  <li>• Medical assistance available on-site</li>
                  <li>• Follow all safety protocols and staff instructions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventDetail;