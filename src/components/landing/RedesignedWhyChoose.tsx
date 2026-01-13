import { Clock, TrendingUp, MessageSquare, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ hours per week",
    description: "No more manually asking customers for reviews. Everything happens automatically after each appointment."
  },
  {
    icon: TrendingUp,
    title: "Get 3x more reviews",
    description: "Our customers see an average 300% increase in Google reviews within the first month."
  },
  {
    icon: MessageSquare,
    title: "98% SMS open rate",
    description: "SMS gets read. Email gets ignored. Reach customers where they actually look."
  },
  {
    icon: Trophy,
    title: "Outrank your competition",
    description: "More reviews help you climb local search rankings and attract more customers."
  }
];

export function RedesignedWhyChoose() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Why businesses choose A+ Reviews
          </h2>
          <p className="text-xl text-gray-600">
            Stop hoping for reviews and start generating them automatically with our proven SMS automation system.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}