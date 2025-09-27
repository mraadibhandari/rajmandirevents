import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "event.info@rajmandir.org",
      description: "For general inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-9425690111",
      description: "Available Monday to Friday, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ratlam, Madhya Pradesh",
      description: "Our headquarters and main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM",
      description: "We're here to help during business hours"
    }
  ];

  const inquiryTypes = [
    { title: "Ticket Support", description: "Having trouble with your tickets? We're here to help." },
    { title: "Sponsorship", description: "Interested in partnering with us? Let's create magic together." },
    { title: "Media Inquiries", description: "Press and media-related questions welcome." },
    { title: "General Questions", description: "Any other questions? We'd love to hear from you." }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cosmic font-bold text-4xl md:text-6xl mb-4 text-cosmic">
            Let's Create Magic Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            For ticketing, sponsorships, media inquiries, or any questions about our concerts—
            we're here to help make your musical dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="card-cosmic p-8">
            <CardContent>
              <h2 className="font-cosmic font-bold text-2xl mb-6 text-cosmic">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="bg-input border-border resize-none"
                  />
                </div>
                <Button type="submit" className="btn-hero w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-cosmic transition-cosmic hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center cosmic-glow flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                      <p className="text-primary font-semibold mb-1">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Inquiry Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-cosmic font-bold text-3xl md:text-4xl mb-4 text-cosmic">
              How Can We Help?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the type of inquiry that best matches your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inquiryTypes.map((type, index) => (
              <Card key={index} className="card-cosmic p-6 text-center transition-cosmic hover:scale-105 cursor-pointer">
                <CardContent className="space-y-4">
                  <h3 className="font-bold text-lg">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="card-cosmic p-8 mb-16">
          <CardContent>
            <h3 className="font-cosmic font-bold text-2xl mb-6 text-center text-cosmic">
              Find Us
            </h3>
            <div className="aspect-video bg-gradient-cosmic rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Ratlam Office Location</p>
                <p className="text-sm opacity-80">Interactive map will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ or Additional Info */}
        <Card className="card-cosmic p-8">
          <CardContent className="text-center space-y-6">
            <h2 className="font-cosmic font-bold text-3xl text-cosmic">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For urgent ticket-related issues or time-sensitive inquiries, don't hesitate to 
              call us directly. Our support team is ready to assist you with any concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button className="btn-secondary">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
