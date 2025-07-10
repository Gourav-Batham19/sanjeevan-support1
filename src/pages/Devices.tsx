import Navigation from "@/components/Navigation";
import { Watch, Smartphone, Heart, Zap, Shield, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Devices = () => {
  const devices = [
    {
      id: "smartwatch",
      name: "MedAlert SmartWatch Pro",
      type: "Smartwatch",
      price: "$299",
      image: "🏥⌚",
      features: [
        "Heart Rate Monitoring",
        "Fall Detection",
        "GPS Tracking",
        "Emergency Button",
        "Medication Reminders",
        "7-day Battery Life",
        "Water Resistant",
        "Two-way Communication"
      ],
      description: "Our most advanced device with comprehensive health monitoring and instant emergency response.",
      popular: true
    },
    {
      id: "smartband",
      name: "MedAlert Fitness Band",
      type: "Smart Band",
      price: "$149",
      image: "💪📱",
      features: [
        "Activity Tracking",
        "Heart Rate Monitor",
        "Emergency Button",
        "Medication Alerts",
        "Sleep Monitoring",
        "10-day Battery Life",
        "Lightweight Design"
      ],
      description: "Perfect for active seniors who want health monitoring without the bulk of a full smartwatch."
    },
    {
      id: "smartring",
      name: "MedAlert Smart Ring",
      type: "Smart Ring",
      price: "$199",
      image: "💍✨",
      features: [
        "Discreet Design",
        "Health Vitals Tracking",
        "Emergency Alert",
        "Sleep Analysis",
        "Temperature Monitoring",
        "30-day Battery Life",
        "Waterproof"
      ],
      description: "The most discreet way to stay protected. Advanced sensors in a comfortable, everyday ring."
    }
  ];

  const specifications = {
    smartwatch: {
      "Display": "1.4-inch AMOLED",
      "Connectivity": "4G LTE, WiFi, Bluetooth",
      "Sensors": "Heart Rate, SpO2, GPS, Accelerometer, Gyroscope",
      "Battery": "7 days typical use",
      "Water Rating": "IP68",
      "Compatibility": "iOS, Android, Web Dashboard"
    },
    smartband: {
      "Display": "0.96-inch OLED",
      "Connectivity": "Bluetooth, WiFi",
      "Sensors": "Heart Rate, Accelerometer, Gyroscope",
      "Battery": "10 days typical use",
      "Water Rating": "IP67",
      "Compatibility": "iOS, Android, Web Dashboard"
    },
    smartring: {
      "Display": "LED indicators",
      "Connectivity": "Bluetooth, NFC",
      "Sensors": "Heart Rate, SpO2, Temperature, Accelerometer",
      "Battery": "30 days typical use",
      "Water Rating": "IP68",
      "Compatibility": "iOS, Android, Web Dashboard"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Health <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Devices</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect device for your lifestyle. All devices connect seamlessly to our monitoring platform.
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-primary" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {devices.map((device) => (
              <Card key={device.id} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${device.popular ? 'ring-2 ring-primary' : ''}`}>
                {device.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{device.image}</div>
                  <CardTitle className="text-xl">{device.name}</CardTitle>
                  <div className="flex justify-center items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{device.price}</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                  <CardDescription className="mt-2">{device.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Specifications:</h4>
                    <div className="space-y-2 text-sm">
                      {Object.entries(specifications[device.id as keyof typeof specifications] || {}).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Button className="w-full" size="lg">
                      Order Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Compare Our Devices</h2>
            <p className="text-lg text-muted-foreground">Find the perfect fit for your needs and lifestyle</p>
          </div>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">SmartWatch Pro</th>
                  <th className="text-center p-4 font-semibold">Fitness Band</th>
                  <th className="text-center p-4 font-semibold">Smart Ring</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Emergency Button", "✅", "✅", "✅"],
                  ["Heart Rate Monitoring", "✅", "✅", "✅"],
                  ["Fall Detection", "✅", "❌", "❌"],
                  ["GPS Tracking", "✅", "❌", "❌"],
                  ["Two-way Communication", "✅", "❌", "❌"],
                  ["Activity Tracking", "✅", "✅", "Limited"],
                  ["Sleep Monitoring", "✅", "✅", "✅"],
                  ["Battery Life", "7 days", "10 days", "30 days"],
                  ["Water Resistance", "IP68", "IP67", "IP68"],
                  ["Price", "$299", "$149", "$199"]
                ].map(([feature, watch, band, ring]) => (
                  <tr key={feature} className="border-b border-muted">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-center">{watch}</td>
                    <td className="p-4 text-center">{band}</td>
                    <td className="p-4 text-center">{ring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Stay Protected?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            All devices come with a 30-day money-back guarantee and lifetime customer support.
            Start your journey to safer independent living today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Shop All Devices
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devices;