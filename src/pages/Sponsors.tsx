import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Target, Users, TrendingUp, Award, Globe } from "lucide-react";

const Sponsors = () => {
  const partnershipBenefits = [
    {
      icon: Users,
      title: "Massive Reach",
      description: "Connect with thousands of music enthusiasts across multiple demographics and cities."
    },
    {
      icon: Target,
      title: "Brand Visibility",
      description: "High-impact branding opportunities across all touchpoints of the concert experience."
    },
    {
      icon: TrendingUp,
      title: "Engagement Boost",
      description: "Create meaningful connections with your target audience through shared musical experiences."
    },
    {
      icon: Award,
      title: "Premium Association",
      description: "Align your brand with world-class entertainment and unforgettable experiences."
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Title Sponsor",
      price: "Premium Package",
      features: [
        "Event naming rights",
        "Logo on all marketing materials",
        "Stage branding opportunities",
        "VIP hospitality package",
        "Backstage access",
        "Social media mentions",
        "Press release inclusion"
      ],
      highlighted: true
    },
    {
      name: "Presenting Sponsor",
      price: "Elite Package",
      features: [
        "Co-branding opportunities",
        "Prime logo placement",
        "On-stage announcements",
        "VIP tickets included",
        "Social media coverage",
        "Press mentions"
      ],
      highlighted: false
    },
    {
      name: "Official Partner",
      price: "Standard Package",
      features: [
        "Logo in event materials",
        "Booth space at venue",
        "Ticket allocations",
        "Digital marketing inclusion",
        "Partnership certificate"
      ],
      highlighted: false
    }
  ];

  const currentSponsors = [
    { name: "Global Music Corp", category: "Title Sponsor", logo: "GMC" },
    { name: "TechSound Systems", category: "Audio Partner", logo: "TSS" },
    { name: "City Hotels Group", category: "Hospitality Partner", logo: "CHG" },
    { name: "Fast Food Chain", category: "Food Partner", logo: "FFC" },
    { name: "Energy Drink Brand", category: "Beverage Partner", logo: "EDB" },
    { name: "Fashion Brand", category: "Merchandise Partner", logo: "FB" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cosmic font-bold text-4xl md:text-6xl mb-4 text-cosmic">
            Powering Experiences Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading brands who share our vision of creating world-class entertainment. 
            Partner with us to be part of unforgettable experiences that resonate with thousands of music lovers.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
              Why Partner With Comet?
            </h2>
            <p className="text-xl text-muted-foreground">
              Unlock the power of music marketing and connect with your audience like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="card-cosmic p-6 text-center transition-cosmic hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center cosmic-glow">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
              Partnership Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the partnership level that best fits your brand goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <Card key={index} className={`card-cosmic transition-cosmic hover:scale-105 ${tier.highlighted ? 'ring-2 ring-accent' : ''}`}>
                <CardContent className="p-8">
                  {tier.highlighted && (
                    <div className="text-center mb-6">
                      <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="font-cosmic font-bold text-2xl mb-2">{tier.name}</h3>
                    <div className="text-2xl font-bold text-cosmic mb-4">
                      {tier.price}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={tier.highlighted ? 'btn-hero w-full' : 'btn-secondary w-full'}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              Brands that have joined us in creating magical musical experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentSponsors.map((sponsor, index) => (
              <Card key={index} className="card-cosmic p-6 transition-cosmic hover:scale-105">
                <CardContent className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-cosmic flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{sponsor.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{sponsor.name}</h3>
                    <p className="text-xs text-muted-foreground">{sponsor.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <Card className="card-cosmic p-8 mb-20">
          <CardContent>
            <div className="text-center mb-8">
              <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
                Partnership Success Story
              </h2>
              <p className="text-lg text-muted-foreground">
                See how our partnerships create mutual value and unforgettable experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="font-bold text-2xl">Global Music Corp Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Partnering with Comet Experiences has been transformative for our brand. 
                  The energy and engagement we've seen at their concerts has resulted in a 40% 
                  increase in brand recall and significant boost in our target demographic reach."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center">
                    <span className="text-white font-bold text-sm">GMC</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, Global Music Corp</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-cosmic rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="font-cosmic font-bold text-3xl mb-2">40%</h3>
                    <p className="text-lg">Increase in Brand Recall</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Partnership */}
        <Card className="card-cosmic p-8 mb-20">
          <CardContent className="text-center space-y-6">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl text-cosmic">
              Looking for Something Custom?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand that every brand is unique. Let's create a custom partnership 
              package that perfectly aligns with your marketing goals and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Globe className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold">Multi-City Campaigns</h3>
                <p className="text-sm text-muted-foreground">Partner across multiple concert locations</p>
              </div>
              <div className="space-y-2">
                <Handshake className="w-8 h-8 text-secondary mx-auto" />
                <h3 className="font-semibold">Long-term Partnerships</h3>
                <p className="text-sm text-muted-foreground">Build lasting brand associations</p>
              </div>
              <div className="space-y-2">
                <Award className="w-8 h-8 text-accent mx-auto" />
                <h3 className="font-semibold">Exclusive Collaborations</h3>
                <p className="text-sm text-muted-foreground">Unique brand activation opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="card-cosmic p-8 text-center">
          <CardContent className="space-y-6">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl text-cosmic">
              Ready to Create Magic Together?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the brands that are already making unforgettable impressions with Comet Experiences. 
              Let's discuss how we can amplify your brand's reach through the power of live music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Become a Sponsor
              </Button>
              <Button className="btn-secondary">
                Download Partnership Deck
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sponsors;