import { Heart, Clock, Shield, QrCode, Activity, Users, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Patient Profile Management",
      description: "Securely store medical history, conditions, daily medications, and emergency contacts all in one place."
    },
    {
      icon: Clock,
      title: "Smart Medicine Reminders",
      description: "Never miss a dose with customizable alarms, SMS, and email reminders for all your medications."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Alert System",
      description: "Automatic alerts to family and doctors if no activity detected or emergency button not pressed."
    },
    {
      icon: QrCode,
      title: "Emergency QR Code",
      description: "Instant access to critical medical information for first responders through a unique QR code."
    },
    {
      icon: Activity,
      title: "Health Tracking Dashboard",
      description: "Monitor vital signs, track trends, and receive alerts when readings become critical."
    },
    {
      icon: Shield,
      title: "24/7 Monitoring",
      description: "Continuous health monitoring with intelligent alerts to keep you and your loved ones safe."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Heart className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Smart Medical Emergency Alert System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect yourself and your loved ones with our comprehensive health monitoring platform. 
              Never miss medications, get instant emergency assistance, and keep your health data organized and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Create Your Profile
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Health Protection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with compassionate care to ensure you're never alone in managing your health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to get started with your health protection</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">Add your medical information, medications, and emergency contacts securely.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Set Up Monitoring</h3>
              <p className="text-muted-foreground">Configure medication reminders and health tracking preferences.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Stay Protected</h3>
              <p className="text-muted-foreground">Receive reminders, track health data, and get automatic emergency assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Features Highlight */}
      <section className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Phone className="h-16 w-16 text-destructive" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Emergency Response When You Need It Most</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our system automatically detects when you might need help and alerts your family members and healthcare providers instantly.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Automatic Detection</h3>
                <p className="text-muted-foreground">No activity for 6 hours or missed wellness checks trigger automatic alerts.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Instant Notifications</h3>
                <p className="text-muted-foreground">SMS to family, emails to doctors, and emergency services if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Protect Your Health?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform to keep them safe and healthy. 
            Get started today with your free account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Sign Up Now - It's Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
