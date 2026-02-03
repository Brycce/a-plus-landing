import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export function RedesignedHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative overflow-hidden bg-[#FFF8F0]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFE4CC] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4E4FF] rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/blog/google-reviews-beat-competition" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">How 38 reviews can beat 75% of your competition</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
          </Link>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-bold text-gray-900 tracking-tight mb-6">
            Get more reviews
            <br />
            <span className="text-[#2563EB]">the minute the job's done</span>
          </h1>

          <p className="text-xl lg:text-[22px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Capture reviews in-person with QR codes, then automatically follow up with SMS. Never miss an opportunity to grow your reputation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-lg font-semibold rounded-full px-8 h-14 shadow-lg shadow-blue-500/20"
              asChild
            >
              <Link to="https://app.aplusreviews.io/auth?tab=signup">
                Start in 5 minutes
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg font-semibold rounded-full px-8 h-14 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              View demo
            </Button>
          </div>

          <p className="text-sm text-gray-400 mb-16">No credit card required</p>

          <div className="rounded-3xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] max-w-4xl mx-auto overflow-hidden bg-white border border-gray-200/50 animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <div className="relative" style={{ aspectRatio: '1660/1080' }}>
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer z-10 group"
                  onClick={() => {
                    setIsPlaying(true);
                    setTimeout(() => videoRef.current?.play(), 100);
                  }}
                >
                  <img
                    src="/dashboard-poster.jpg"
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-[#2563EB] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white text-center">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                      See how it works in 2 minutes
                    </h3>
                  </div>
                </div>
              ) : null}
              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-black"
                controls
                style={{ display: isPlaying ? 'block' : 'none' }}
              >
                <source src="/a-plus-demo-long.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
