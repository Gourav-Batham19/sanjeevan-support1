import Navigation from "@/components/Navigation";
import { Heart, Shield, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe everyone deserves to feel safe and cared for, especially when living independently."
    },
    {
      icon: Shield,
      title: "Reliable Protection",
      description: "Our technology is built with redundancy and reliability at its core to ensure help is always available."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We understand that health concerns affect entire families, not just individuals."
    },
    {
      icon: Award,
      title: "Innovation Excellence",
      description: "We continuously improve our platform with the latest healthcare technology and user feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MedAlert</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're dedicated to empowering independent living through innovative healthcare technology, 
              ensuring that no one has to face health challenges alone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bridge the gap between independent living and healthcare security by providing 
              intelligent monitoring solutions that give peace of mind to patients and their families. 
              We believe that aging in place should never mean being alone in health emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                MedAlert was founded by a team of healthcare professionals and technology experts who 
                witnessed firsthand the challenges faced by elderly individuals living independently. 
                Too many times, we saw situations where timely intervention could have prevented serious complications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founders realized that existing solutions were either too complex, too expensive, 
                or simply didn't address the real-world needs of patients and their families. We set out 
                to create a comprehensive yet simple platform that anyone could use.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to serve thousands of families, providing them with the peace of mind 
                that comes from knowing their loved ones are protected 24/7, while enabling independent 
                living for as long as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;