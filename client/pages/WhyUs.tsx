import { CircleCheck, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function WhyUs() {
  const reasons = [
    {
      icon: CircleCheck,
      title: "Proven Track Record",
      description: "Over 10 years of successful projects delivered to satisfied clients across various industries."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring exceptional results."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of skilled professionals with diverse expertise and experience."
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to achieve your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Why Choose Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what sets us apart and makes us the right partner for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <reason.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-700 mb-6">
                Join hundreds of satisfied clients who have achieved their goals with our help.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us Today
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
