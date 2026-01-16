import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export function RedesignedHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-blue-50/50 via-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl leading-tight text-gray-900">
                Get <span className="text-primary">3x more reviews</span> with multi-touch collection
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Capture reviews in-person with QR codes at the door, then automatically follow up with SMS campaigns when they slip through the cracks. Never miss an opportunity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4" asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">
                  Start free trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View demo
              </Button>
            </div>

            <div className="pt-16">
              {/* Demo Video */}
              <div className="rounded-2xl shadow-2xl max-w-4xl mx-auto overflow-hidden group animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                <div className="relative" style={{ aspectRatio: '1660/1080' }}>
                  {!isPlaying ? (
                    <div
                      className="absolute inset-0 cursor-pointer z-10"
                      onClick={() => {
                        setIsPlaying(true);
                        setTimeout(() => {
                          videoRef.current?.play();
                        }, 100);
                      }}
                    >
                      {/* Dashboard screenshot background */}
                      <img
                        src="/dashboard-poster.jpg"
                        alt="Dashboard Preview"
                        className="w-full h-full object-cover"
                      />

                      {/* Blue gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent" />

                      {/* Play button and content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {/* Central play button */}
                        <div className="relative mb-4 sm:mb-8 transform transition-all duration-300 group-hover:scale-110">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl">
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-600 ml-1 sm:ml-1.5 md:ml-2" fill="currentColor" />
                          </div>
                          {/* Subtle pulsing ring effect */}
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                        </div>

                        {/* Text overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white text-center">
                          <div className="max-w-2xl mx-auto">
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                              Transform Your Business with 3x More Reviews
                            </h3>
                          </div>
                        </div>
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
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}