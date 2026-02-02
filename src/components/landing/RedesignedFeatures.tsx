import { MessageSquare, Users, Heart, Layout, BarChart3, QrCode } from "lucide-react";
import { StaticMockup } from './StaticMockups';

const features = [
  {
    icon: QrCode,
    title: "In-Person QR Code Reviews",
    description: "Catch customers at their happiest — right after job completion. Team members get job-specific QR codes that lead directly to your Google review page.",
    bullets: ["Job-specific QR codes", "Direct to Google", "Team leaderboards", "Real-time tracking"],
    tag: "Pro",
    mockup: "qr-codes" as const,
  },
  {
    icon: MessageSquare,
    title: "Multi-Touch SMS Campaigns",
    description: "For customers who slip through the cracks, automated SMS sequences follow up at optimal times. Set it once and watch reviews roll in.",
    bullets: ["Multi-step sequences", "Smart timing", "Auto-stop on click", "Custom templates"],
    tag: "Pro",
    mockup: "sms-automation" as const,
  },
  {
    icon: Users,
    title: "Review Boost",
    description: "Unlock hundreds of reviews from your existing customer base. Import past customers and launch targeted campaigns.",
    bullets: ["Jobber & CSV import", "Bulk campaigns", "Smart filtering", "Performance tracking"],
    tag: "Pro",
    mockup: "review-boost" as const,
  },
  {
    icon: Heart,
    title: "Love Wall",
    description: "Showcase your best reviews on your website with a stunning, animated display that builds instant trust with visitors.",
    bullets: ["Animated masonry", "Multiple styles", "Mobile carousel", "Custom branding"],
    tag: "Free",
    mockup: "love-wall" as const,
  },
  {
    icon: Layout,
    title: "Review Widget",
    description: "Floating review widgets highlight your best feedback without overwhelming your site design. Subtle and effective.",
    bullets: ["Floating animations", "Hover effects", "Dismissible", "Real reviews"],
    tag: "Free",
    mockup: "widget" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Detailed performance metrics show exactly how your review strategy is driving growth.",
    bullets: ["Review metrics", "Click tracking", "Rating trends", "Real-time sync"],
    tag: "Free",
    mockup: "analytics" as const,
  },
];

export function RedesignedFeatures() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[#0040E6] font-semibold text-sm tracking-wide uppercase mb-4">Features</p>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 tracking-tight mb-6">
            Everything you need to<br />grow your reputation
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            A complete review automation platform built for local businesses
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#E8F0FE] rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-[#0040E6]" />
                    </div>
                    <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                      feature.tag === "Pro"
                        ? "bg-[#0040E6] text-white"
                        : "bg-emerald-50 text-emerald-700"
                    }`}>
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-[2.25rem] font-bold text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {feature.bullets.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 bg-[#0040E6] rounded-full flex-shrink-0" />
                        <span className="text-gray-600 text-[15px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-3xl overflow-hidden shadow-[0_4px_40px_-8px_rgba(0,0,0,0.1)] border border-gray-100">
                  <StaticMockup
                    type={feature.mockup}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
