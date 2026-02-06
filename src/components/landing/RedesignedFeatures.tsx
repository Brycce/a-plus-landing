import { QrCode, MessageSquare, Users, Heart, Layout, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: "QR Code Reviews",
    description: "Your team hands customers a QR code on-site. One scan goes straight to Google.",
    tag: "Pro",
  },
  {
    icon: MessageSquare,
    title: "SMS Follow-Ups",
    description: "Automated text sequences go out after every job. Stops when they review.",
    tag: "Pro",
  },
  {
    icon: Users,
    title: "Review Boost",
    description: "Import past customers from Jobber or CSV. Send bulk review requests in one click.",
    tag: "Pro",
  },
  {
    icon: Heart,
    title: "Love Wall",
    description: "Showcase your best Google reviews on your website with an embeddable display.",
    tag: "Free",
  },
  {
    icon: Layout,
    title: "Review Widget",
    description: "A floating widget that highlights recent reviews on any page of your site.",
    tag: "Free",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track review volume, ratings, response rates, and team performance.",
    tag: "Free",
  },
];

export function RedesignedFeatures() {
  return (
    <section id="features" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#3C83F6] font-semibold text-xs tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-4">
            Everything you need to grow your reputation
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <feature.icon className="w-5 h-5 text-[#3C83F6]" />
                <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                  feature.tag === "Pro"
                    ? "bg-[#3C83F6] text-white"
                    : "bg-emerald-50 text-emerald-700"
                }`}>
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
