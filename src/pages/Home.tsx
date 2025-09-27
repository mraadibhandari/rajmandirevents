import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Music, Award, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-concert.jpg";
import arijitImage from "@/assets/arijit-concert.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-cosmic font-black text-4xl md:text-6xl lg:text-7xl mb-6 animate-float">
            Creating Lifetime 
            <span className="block text-cosmic">Concert Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From small towns to global stages, we bring unforgettable live music moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Book Tickets
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4">
              See Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-cosmic rounded-2xl p-8 md:p-12 transition-cosmic hover:scale-[1.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
                  Arijit Singh Live in Ratlam
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  31st October 2026 • Ratlam Cricket Stadium
                </p>
                <p className="text-lg mb-8">
                  Get ready for a night of soulful melodies and unforgettable vibes with 
                  India's biggest music icon. This is your chance to witness magic up close.
                </p>
                <Button className="btn-hero">
                  Reserve Your Spot
                </Button>
              </div>
              <div className="relative">
                <img
                  src={arijitImage}
                  alt="Arijit Singh Concert"
                  className="rounded-xl w-full h-auto cosmic-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cosmic font-bold text-4xl md:text-5xl mb-4 text-cosmic">
              The Comet Promise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three pillars that make every Comet Experience extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-cosmic p-8 text-center transition-cosmic hover:scale-105">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center cosmic-glow">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-2xl">World-Class Artists</h3>
                <p className="text-muted-foreground">
                  We bring the biggest names in music directly to your city, 
                  creating intimate connections between artists and fans.
                </p>
              </CardContent>
            </Card>

            <Card className="card-cosmic p-8 text-center transition-cosmic hover:scale-105">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center cosmic-glow">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-2xl">Unmatched Production</h3>
                <p className="text-muted-foreground">
                  State-of-the-art sound, lighting, and stage design that transforms 
                  every venue into a world-class concert hall.
                </p>
              </CardContent>
            </Card>

            <Card className="card-cosmic p-8 text-center transition-cosmic hover:scale-105">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center cosmic-glow">
                  <Music className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-2xl">Lifetime Memories</h3>
                <p className="text-muted-foreground">
                  Every Comet Experience is designed to create moments you'll 
                  treasure forever, with perfect acoustics and atmosphere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cosmic font-bold text-4xl md:text-5xl mb-4 text-cosmic">
              Relive Our Best Moments
            </h2>
            <p className="text-xl text-muted-foreground">
              Highlights from our previous shows that created lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="card-cosmic overflow-hidden transition-cosmic hover:scale-105">
                <div className="aspect-video bg-gradient-cosmic flex items-center justify-center">
                  <Users className="w-12 h-12 text-white/80" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Amazing Concert #{item}</h3>
                  <p className="text-muted-foreground text-sm">
                    An unforgettable night of music and energy
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cosmic font-bold text-4xl md:text-5xl mb-4 text-cosmic">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              Partners who share our vision of creating extraordinary experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((sponsor) => (
              <div
                key={sponsor}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground"
              >
                <span className="font-bold">BRAND {sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="card-cosmic p-8 md:p-12 text-center">
            <CardContent className="space-y-6">
              <h2 className="font-cosmic font-bold text-3xl md:text-4xl text-cosmic">
                Be the First to Know
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get exclusive access to pre-sale tickets, behind-the-scenes content, 
                and first announcements of upcoming concerts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button className="btn-hero">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Home;