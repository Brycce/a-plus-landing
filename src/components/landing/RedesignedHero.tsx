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

          <p className="text-xs text-gray-400 mb-12">No credit card required</p>

          <div className="rounded-2xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] max-w-3xl mx-auto overflow-hidden bg-white border border-gray-200/50 animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
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
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-[#3C83F6] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white text-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold drop-shadow-lg">
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
