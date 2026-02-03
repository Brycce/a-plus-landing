import { Upload, Users, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Upload,
    title: "Import your customers",
    description: "Connect Jobber or upload a CSV of past customers you never asked for reviews.",
  },
  {
    icon: Zap,
    title: "Launch a campaign",
    description: "Send personalized SMS requests to hundreds of customers in one click.",
  },
  {
    icon: BarChart3,
    title: "Watch reviews roll in",
    description: "Track opens, clicks, and new reviews in real time as your rating climbs.",
  },
];

export function RedesignedReviewBoost() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFF0E6] rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#3C83F6] text-white">
                  Pro
                </span>
              </div>

              <h2 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                Sitting on hundreds of<br />uncollected reviews?
              </h2>

              <p className="text-xl text-gray-500 leading-relaxed mb-10">
                Most businesses have years of happy customers who were never asked for a review. Review Boost lets you go back and collect those reviews in bulk — turning your backlog into your biggest competitive advantage.
              </p>

              <div className="space-y-6 mb-10">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <step.icon className="w-5 h-5 text-[#3C83F6]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="bg-[#3C83F6] hover:bg-[#2563EB] text-white rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-blue-500/20"
                asChild
              >
                <Link to="https://app.aplusreviews.io/auth?tab=signup">
                  Start in 5 minutes
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Right - visual */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_40px_-8px_rgba(0,0,0,0.08)] p-8 lg:p-10">
              {/* Simulated Review Boost dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">Review Boost Campaign</h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Active</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Sent", value: "347", color: "text-gray-900" },
                    { label: "Clicked", value: "186", color: "text-[#3C83F6]" },
                    { label: "Reviews", value: "94", color: "text-emerald-600" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-4 text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Conversion bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Conversion rate</span>
                    <span className="font-bold text-gray-900">27%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3C83F6] to-[#3366FF] rounded-full" style={{ width: '27%' }} />
                  </div>
                </div>

                {/* Recent reviews */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-500">Recent reviews from campaign</div>
                  {[
                    { name: "Sarah M.", stars: 5, text: "Amazing service! Highly recommend." },
                    { name: "James R.", stars: 5, text: "Professional and on time, every time." },
                    { name: "Lisa K.", stars: 5, text: "Best in the area, hands down." },
                  ].map((review, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-3.5 flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#E8F0FE] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-[#3C83F6]">{review.name[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900">{review.name}</span>
                          <div className="flex">
                            {[...Array(review.stars)].map((_, j) => (
                              <span key={j} className="text-amber-400 text-xs">&#9733;</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{review.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
