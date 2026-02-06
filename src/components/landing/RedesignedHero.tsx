import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export function RedesignedHero() {

  return (
    <section className="relative overflow-hidden bg-[#FFF8F0]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFE4CC] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4E4FF] rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 pt-16 pb-20 lg:pt-20 lg:pb-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/blog/38-google-reviews-beat-competition" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-3 py-1.5 mb-6 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs font-medium text-gray-700">
              <span className="hidden sm:inline">How 38 reviews can beat 75% of your competition</span>
              <span className="sm:hidden">38 reviews can beat 75% of competitors</span>
            </span>
            <ArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
          </Link>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-bold text-gray-900 tracking-tight mb-4">
            Get more reviews
            <br />
            <span className="text-[#3C83F6]">the minute the job's done</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
            Capture reviews in-person with QR codes, then automatically follow up with SMS. Never miss an opportunity to grow your reputation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button
              className="bg-[#3C83F6] hover:bg-[#2563EB] text-white font-semibold rounded-full px-6 h-11 shadow-lg shadow-blue-500/20"
              asChild
            >
              <Link to="https://app.aplusreviews.io/auth?tab=signup">
                Start in 5 minutes
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="font-semibold rounded-full px-6 h-11 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              View demo
            </Button>
          </div>

          <p className="text-xs text-gray-400">No credit card required</p>

          {/* Video/demo section temporarily hidden
          <div className="rounded-2xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] max-w-3xl mx-auto overflow-hidden bg-white border border-gray-200/50 animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <div className="relative" style={{ aspectRatio: '1660/1080' }}>
              <video className="w-full h-full object-contain bg-black" controls>
                <source src="/a-plus-demo-long.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
