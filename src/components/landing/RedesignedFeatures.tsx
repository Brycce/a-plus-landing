import { MessageSquare, Users, Heart, Layout, BarChart3, QrCode, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StaticMockup } from './StaticMockups';

const features = [
  {
    icon: QrCode,
    title: "In-Person QR Code Reviews",
    description: "Catch customers at their happiest moment - right after job completion. Team members get job-specific QR codes that lead directly to your Google review page. It's the easiest way to turn satisfied customers into 5-star reviews.",
    features: ["Job-specific QR codes", "Direct to Google", "Team leaderboards", "Real-time tracking"],
    plan: "Pro"
  },
  {
    icon: MessageSquare,
    title: "Multi-Touch SMS Campaigns",
    description: "For customers who slip through the cracks, automated SMS sequences follow up at optimal times. Set it once and watch reviews roll in automatically - no manual work required.",
    features: ["Multi-step sequences", "Smart timing", "Auto-stop on click", "Custom templates"],
    plan: "Pro"
  },
  {
    icon: Users,
    title: "Review Boost",
    description: "Unlock hundreds of reviews from your existing customer base. Import past customers and launch targeted campaigns to instantly boost your online reputation.",
    features: ["Jobber & CSV import", "Bulk campaigns", "Smart filtering", "Performance tracking"],
    plan: "Pro"
  },
  {
    icon: Heart,
    title: "Love Wall",
    description: "Convert website visitors into customers with stunning review displays that build instant trust and credibility. Showcase your reputation where it matters most.",
    features: ["Animated masonry", "Multiple styles", "Mobile carousel", "Custom branding"],
    plan: "Free"
  },
  {
    icon: Layout,
    title: "Review Widget",
    description: "Capture attention and build confidence with floating review widgets that highlight your best customer feedback without overwhelming your site design.",
    features: ["Floating animations", "Hover effects", "Dismissible", "Real reviews"],
    plan: "Free"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with detailed performance metrics that show exactly how your review strategy is driving more customers and revenue.",
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
            A complete review automation platform built for local businesses
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
                    feature.title === "In-Person QR Code Reviews" ? "qr-codes" :
                    feature.title === "Multi-Touch SMS Campaigns" ? "sms-automation" :
                    feature.title === "Review Boost" ? "review-boost" :
                    feature.title === "Love Wall" ? "love-wall" :
                    feature.title === "Review Widget" ? "widget" :
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