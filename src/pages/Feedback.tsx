import Navigation from "@/components/Navigation";
import { Star, ThumbsUp, MessageSquare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const testimonials = [
    {
      name: "Margaret Johnson",
      age: 72,
      rating: 5,
      text: "Sanjeevan Support has given me and my family such peace of mind. The medication reminders have been a lifesaver, and I love how easy it is to use.",
      location: "Phoenix, AZ"
    },
    {
      name: "Robert Chen",
      age: 68,
      rating: 5,
      text: "The emergency response feature works perfectly. When I had a fall last month, my daughter was notified immediately and help arrived quickly.",
      location: "Seattle, WA"
    },
    {
      name: "Dorothy Williams",
      age: 75,
      rating: 5,
      text: "I was skeptical about technology at first, but the setup was so simple. Now I can't imagine living without it. Highly recommend!",
      location: "Miami, FL"
    }
  ];

  const StarRating = ({ value, onChange, interactive = true }: { value: number; onChange?: (rating: number) => void; interactive?: boolean }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 ${interactive ? 'cursor-pointer' : ''} transition-colors ${
              star <= (interactive ? hoveredRating || value : value)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
            onClick={interactive ? () => onChange?.(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Feedback Matters</h1>
            <p className="text-xl text-muted-foreground">
              Help us improve our services by sharing your experience. Every review helps us serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Share Your Experience</CardTitle>
                <CardDescription>
                  Your feedback helps us improve our services and helps other families make informed decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Rating */}
                <div className="text-center space-y-4">
                  <Label className="text-lg font-medium">Overall Rating</Label>
                  <StarRating value={rating} onChange={setRating} />
                  <p className="text-sm text-muted-foreground">
                    {rating === 0 && "Please select a rating"}
                    {rating === 1 && "Poor - Needs significant improvement"}
                    {rating === 2 && "Fair - Some issues to address"}
                    {rating === 3 && "Good - Meets expectations"}
                    {rating === 4 && "Very Good - Exceeds expectations"}
                    {rating === 5 && "Excellent - Outstanding service"}
                  </p>
                </div>

                {/* User Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>

                {/* Feedback Type */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">What would you like to share feedback about?</Label>
                  <div className="space-y-3">
                    {[
                      "Overall Service Experience",
                      "Medical Alert Devices",
                      "Mobile App",
                      "Website Functionality",
                      "Customer Support",
                      "Emergency Response",
                      "Medication Reminders",
                      "Billing & Pricing"
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={option} />
                        <Label htmlFor={option} className="text-sm">{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Feedback */}
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea 
                    id="feedback" 
                    placeholder="Please share your detailed experience, suggestions, or any issues you've encountered..."
                    rows={6}
                  />
                </div>

                {/* Would Recommend */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Would you recommend Sanjeevan Support to others?</Label>
                  <RadioGroup defaultValue="">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="definitely" id="definitely" />
                      <Label htmlFor="definitely">Definitely - I would highly recommend it</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="probably" id="probably" />
                      <Label htmlFor="probably">Probably - It's been mostly positive</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="maybe" />
                      <Label htmlFor="maybe">Maybe - It has pros and cons</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unlikely" id="unlikely" />
                      <Label htmlFor="unlikely">Unlikely - I have some concerns</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Permission */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="permission" />
                  <Label htmlFor="permission" className="text-sm">
                    I give permission for Sanjeevan Support to use my feedback as a testimonial on their website (your email will not be shared)
                  </Label>
                </div>

                <Button className="w-full" size="lg">Submit Feedback</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Real feedback from real families</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>Age {testimonial.age} • {testimonial.location}</CardDescription>
                    </div>
                    <StarRating value={testimonial.rating} interactive={false} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;