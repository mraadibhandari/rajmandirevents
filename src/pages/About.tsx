import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Music, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Music,
      title: "Musical Excellence",
      description: "We believe in bringing only the highest quality musical experiences to our audiences."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Every city deserves world-class entertainment. We're committed to inclusivity and accessibility."
    },
    {
      icon: Award,
      title: "Premium Production",
      description: "State-of-the-art technology and seamless execution in every aspect of our events."
    },
    {
      icon: Heart,
      title: "Lifetime Memories",
      description: "We don't just organize concerts; we create moments that last forever."
    }
  ];

  const milestones = [
    { year: "2023", event: "Comet Experiences Founded", description: "Started with a vision to bring world-class concerts to tier-3 cities" },
    { year: "2024", event: "First Major Concert", description: "Successfully hosted our debut concert with overwhelming response" },
    { year: "2025", event: "Expansion Phase", description: "Expanded operations to multiple cities across India" },
    { year: "2026", event: "Arijit Singh Concert", description: "Bringing India's biggest music icon to Ratlam" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cosmic font-bold text-4xl md:text-6xl mb-4 text-cosmic">
            Who We Are
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than an event company—we're a movement to bring world-class concerts 
            to every corner of India, creating premium experiences that connect hearts through music.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="font-cosmic font-bold text-3xl text-cosmic">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comet Experiences was born from a simple yet powerful belief: every music lover, 
              regardless of where they live, deserves access to world-class live entertainment. 
              We saw talented artists performing only in metro cities while millions of fans 
              in smaller towns could only dream of seeing their favorite stars live.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's when we decided to bridge this gap. We're not just an event company—we're 
              dream enablers who bring the magic of live music to places where it's never been 
              before. Every concert we organize is a celebration of music, community, and the 
              shared human experience of being moved by art.
            </p>
            <Button className="btn-hero">
              Join Our Journey
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-cosmic rounded-2xl flex items-center justify-center cosmic-glow">
              <div className="text-center text-white p-8">
                <Music className="w-24 h-24 mx-auto mb-6" />
                <h3 className="font-cosmic font-bold text-2xl mb-4">
                  15,000+
                </h3>
                <p className="text-lg">Happy Concert-goers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="card-cosmic p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-cosmic font-bold text-2xl text-cosmic">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create accessible yet premium live music experiences for music lovers everywhere. 
                We believe that geography should never be a barrier to experiencing the magic of 
                live music, and we're committed to bringing world-class artists and production 
                to every corner of India.
              </p>
            </CardContent>
          </Card>

          <Card className="card-cosmic p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-cosmic font-bold text-2xl text-cosmic">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make Comet Experiences India's most trusted concert brand, synonymous with 
                quality, accessibility, and unforgettable moments. We envision a future where 
                every music lover has access to live concerts that rival the best in the world, 
                regardless of their location.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-cosmic p-6 text-center transition-cosmic hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center cosmic-glow">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to revolutionize live music
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="card-cosmic overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-cosmic p-6 md:p-8 flex items-center justify-center min-w-[200px]">
                      <span className="font-cosmic font-bold text-3xl text-white">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="font-bold text-xl mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="card-cosmic p-8 md:p-12 text-center">
          <CardContent className="space-y-6">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl text-cosmic">
              Ready to Experience the Magic?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of music lovers who have already experienced the Comet difference. 
              Your next unforgettable musical journey is just a ticket away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Book Your Tickets
              </Button>
              <Button className="btn-secondary">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;