import { MessageSquare, Users, Heart, Layout, BarChart3, QrCode, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StaticMockup } from './StaticMockups';

const features = [
  {
    icon: QrCode,
    title: "QR codes your techs can show",
    description: "Each job gets a unique QR code. Customer scans it, lands on your Google page, leaves a review. Done in 30 seconds.",
    features: ["Job-specific QR codes", "Direct to Google", "Team leaderboards", "Real-time tracking"],
    plan: "Pro"
  },
  {
    icon: MessageSquare,
    title: "Automatic text reminders",
    description: "Customer didn't scan? We follow up by text at the right time. Set it once, it runs on its own. Stops when they review.",
    features: ["Multi-step sequences", "Smart timing", "Auto-stop on review", "Custom templates"],
    plan: "Pro"
  },
  {
    icon: Users,
    title: "Get reviews from past customers",
    description: "Import your customer list and send review requests in bulk. Great for catching up on months of missed reviews.",
    features: ["Jobber & CSV import", "Bulk campaigns", "Smart filtering", "Performance tracking"],
    plan: "Pro"
  },
  {
    icon: Heart,
    title: "Show reviews on your website",
    description: "Display your best reviews on your site so visitors see the proof before they call.",
    features: ["Animated masonry", "Multiple styles", "Mobile carousel", "Custom branding"],
    plan: "Free"
  },
  {
    icon: Layout,
    title: "Floating review widget",
    description: "A small popup that shows real reviews as visitors browse your site. Builds trust without getting in the way.",
    features: ["Floating animations", "Hover effects", "Dismissible", "Real reviews"],
    plan: "Free"
  },
  {
    icon: BarChart3,
    title: "See what's working",
    description: "Track how many reviews you're getting, which techs are collecting the most, and where customers are coming from.",
    features: ["Review metrics", "Click tracking", "Rating trends", "Real-time sync"],
    plan: "Free"
  }
];

export function RedesignedFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Everything you need to get more reviews
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need, nothing you don't.
          </p>
        </div>
        
        <div className="space-y-24 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl lg:text-3xl text-gray-900">{feature.title}</h3>
                      <Badge 
                        variant={feature.plan === "Pro" ? "default" : "secondary"}
                        className={`text-xs ${feature.plan === "Pro" ? "bg-primary text-white" : "bg-green-100 text-green-800"}`}
                      >
                        {feature.plan}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <StaticMockup
                  type={
                    feature.title === "QR codes your techs can show" ? "qr-codes" :
                    feature.title === "Automatic text reminders" ? "sms-automation" :
                    feature.title === "Get reviews from past customers" ? "review-boost" :
                    feature.title === "Show reviews on your website" ? "love-wall" :
                    feature.title === "Floating review widget" ? "widget" :
                    "analytics"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}