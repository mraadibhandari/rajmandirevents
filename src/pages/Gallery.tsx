import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, Download } from "lucide-react";

const Gallery = () => {
  // Mock gallery data - in a real app, this would come from a CMS or API
  const galleryItems = [
    { id: 1, type: "image", title: "Crowd Energy", description: "Thousands singing together" },
    { id: 2, type: "video", title: "Stage Highlights", description: "Best moments compilation" },
    { id: 3, type: "image", title: "Backstage Moments", description: "Behind the scenes magic" },
    { id: 4, type: "image", title: "Light Show", description: "Spectacular visual effects" },
    { id: 5, type: "video", title: "Artist Performance", description: "Live concert footage" },
    { id: 6, type: "image", title: "Fan Reactions", description: "Pure joy captured" },
    { id: 7, type: "image", title: "Venue Setup", description: "World-class production" },
    { id: 8, type: "video", title: "Concert Highlights", description: "Unforgettable moments" },
    { id: 9, type: "image", title: "Crowd Atmosphere", description: "Electric energy" }
  ];

  const categories = ["All", "Images", "Videos", "Backstage", "Live Performances"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cosmic font-bold text-4xl md:text-6xl mb-4 text-cosmic">
            Moments That Speak Louder Than Words
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Relive the magic through our collection of concert highlights, backstage moments, 
            and the incredible energy that makes every Comet Experience unforgettable.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "btn-hero" : "btn-secondary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item) => (
            <Card key={item.id} className="card-cosmic group overflow-hidden transition-cosmic hover:scale-105">
              <div className="relative aspect-square bg-gradient-cosmic">
                {/* Placeholder for actual images/videos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" ? (
                    <div className="text-center text-white">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">Video Content</p>
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                        <Heart className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">High-Quality Image</p>
                    </div>
                  )}
                </div>
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Video Section */}
        <Card className="card-cosmic p-8 mb-16">
          <CardContent>
            <div className="text-center mb-8">
              <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
                Featured: Concert Highlights Reel
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the energy and emotion of our recent concerts in this exclusive compilation
              </p>
            </div>
            
            <div className="aspect-video bg-gradient-cosmic rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-white">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
                  <Play className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Watch Our Story</h3>
                <p className="text-lg opacity-80">Click to play featured highlights reel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instagram Feed Section */}
        <div className="text-center mb-12">
          <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
            Follow Our Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stay connected for daily updates, behind-the-scenes content, and exclusive previews
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Card key={item} className="card-cosmic aspect-square overflow-hidden transition-cosmic hover:scale-105">
              <div className="w-full h-full bg-gradient-cosmic flex items-center justify-center">
                <Heart className="w-8 h-8 text-white/60" />
              </div>
            </Card>
          ))}
        </div>

        {/* Social Media CTA */}
        <Card className="card-cosmic p-8 text-center">
          <CardContent className="space-y-6">
            <h2 className="font-cosmic font-bold text-3xl text-cosmic">
              Share Your Comet Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Were you at one of our concerts? Share your photos and videos using 
              #CometExperience and get featured in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Follow on Instagram
              </Button>
              <Button className="btn-secondary">
                Share Your Moment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;