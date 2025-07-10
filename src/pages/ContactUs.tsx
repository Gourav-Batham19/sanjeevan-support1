import Navigation from "@/components/Navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: "1-800-MEDALERT (24/7)",
      description: "For immediate medical emergencies"
    },
    {
      icon: Phone,
      title: "Support Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 8 AM - 8 PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@medalert.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: "123 Healthcare Way, Medical City, MC 12345",
      description: "Headquarters & Support Center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We're here to help you 24/7. Reach out anytime for support, questions, or emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">{info.details}</p>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your question or concern..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </CardContent>
            </Card>

            {/* Business Hours & Additional Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      🚨 Emergency services are available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you're experiencing a medical emergency, please call 911 immediately.
                  </p>
                  <p className="text-muted-foreground">
                    For urgent technical support with your MedAlert device, call our emergency hotline:
                  </p>
                  <Button variant="destructive" size="lg" className="w-full">
                    🚨 Call Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;