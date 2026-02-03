import { Clock, TrendingUp, MessageSquare, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ hours per week",
    description: "No more manually asking for reviews. Everything runs on autopilot after each job.",
    accent: "bg-[#E8F0FE]",
    iconColor: "text-[#3C83F6]",
  },
  {
    icon: TrendingUp,
    title: "3x more reviews",
    description: "Customers see an average 300% increase in Google reviews within the first month.",
    accent: "bg-[#ECFDF5]",
    iconColor: "text-emerald-600",
  },
  {
    icon: MessageSquare,
    title: "98% SMS open rate",
    description: "SMS gets read. Email gets buried. Reach customers where they actually look.",
    accent: "bg-[#FFF0E6]",
    iconColor: "text-amber-600",
  },
  {
    icon: Trophy,
    title: "Outrank competitors",
    description: "More reviews boost your local search rankings and attract more customers organically.",
    accent: "bg-[#F5F0FF]",
    iconColor: "text-purple-600",
  },
];

export function RedesignedWhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[#3C83F6] font-semibold text-sm tracking-wide uppercase mb-4">Why A+ Reviews</p>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 tracking-tight mb-6">
            Built for businesses that<br />run on reputation
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className={`w-14 h-14 ${benefit.accent} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className={`h-7 w-7 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
