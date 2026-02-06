import { QrCode, MessageSquare, Users, Heart, Layout, BarChart3 } from 'lucide-react';

const proFeatures = [
  {
    icon: QrCode,
    title: "QR Code Reviews",
    description: "Your team hands customers a QR code on-site. One scan goes straight to Google.",
  },
  {
    icon: MessageSquare,
    title: "SMS Follow-Ups",
    description: "Automated text sequences go out after every job. Stops when they review.",
  },
  {
    icon: Users,
    title: "Review Boost",
    description: "Import past customers from Jobber or CSV. Send bulk review requests in one click.",
  },
];

const freeFeatures = [
  {
    icon: Heart,
    title: "Love Wall",
    description: "Showcase your best Google reviews on your website with an embeddable display.",
  },
  {
    icon: Layout,
    title: "Review Widget",
    description: "A floating widget that highlights recent reviews on any page of your site.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track review volume, ratings, response rates, and team performance.",
  },
];

function FeatureCard({ feature }: { feature: { icon: React.ElementType; title: string; description: string } }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <feature.icon className="w-5 h-5 text-[#3C83F6] mb-3" />
      <h3 className="text-sm font-semibold text-gray-900 mb-1">
        {feature.title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

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

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Pro section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#3C83F6]">Pro</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {proFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>

          {/* Free section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-600">Free</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
