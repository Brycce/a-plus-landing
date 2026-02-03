import { Users, MessageSquare, QrCode } from "lucide-react";
import { useState, useEffect } from "react";
import { StaticMockup } from './StaticMockups';

function SMSAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[280px] bg-gray-900 rounded-[2rem] p-2.5 shadow-xl" style={{ height: '500px' }}>
        <div className="bg-white rounded-[1.5rem] overflow-hidden h-full">
          <div className="bg-gray-900 h-5 rounded-b-xl mx-auto w-24"></div>
          <div className="bg-gradient-to-b from-gray-50 to-white p-4 flex-1 overflow-hidden" style={{ height: 'calc(100% - 20px)' }}>
            <div className="space-y-3">
              <div className="text-center text-xs text-gray-400 mb-4">Today 2:30 PM</div>

              {step >= 1 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                    <p className="text-xs text-gray-900">Hi John! Thanks for choosing us. Mind leaving a quick review?</p>
                    <span className="text-xs text-[#2563EB] underline mt-1 block">Review link →</span>
                  </div>
                </div>
              )}

              {step >= 1 && (
                <div className="text-xs text-gray-400 pl-1">2:30 PM</div>
              )}

              {step >= 2 && (
                <>
                  <div className="text-center text-xs text-gray-400 my-3">2 days later</div>
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-gray-900">Just following up! Your feedback would mean a lot</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 pl-1">10:15 AM</div>
                </>
              )}

              {step >= 3 && (
                <>
                  <div className="flex justify-end mt-3 animate-fade-in">
                    <div className="bg-[#2563EB] text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
                      <p className="text-xs">Will do! Thanks for the reminder</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 text-right pr-1">10:18 AM</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RedesignedThreeSteps() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block text-sm font-semibold text-[#2563EB] px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 64, 230, 0.1)' }}>
            How it works
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Three steps to 3x your reviews
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're catching up on past customers or collecting reviews from new ones, we've got you covered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">

          {/* Step 1: Review Boost — Catch up */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20 lg:pb-28">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide">Catch up</span>
              </div>

              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Unlock reviews from customers you've already served
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                You've done hundreds of jobs this year. Most of those customers were happy — they just never left a review. Import your customer list and send review requests in bulk. It's the fastest way to build your reputation overnight.
              </p>

              <div className="space-y-3 pt-2">
                {["Import from Jobber or CSV", "Smart filtering so you only reach the right people", "Bulk campaigns that run on autopilot", "Track opens, clicks, and reviews in real time"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <StaticMockup type="review-boost" />
            </div>
          </div>

          {/* Step 2: Automated SMS — Automate */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-gray-50 -mx-4 px-4 lg:-mx-8 lg:px-8 py-16 lg:py-24 rounded-2xl">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide">Automate</span>
              </div>

              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Set up automatic review requests after every job
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Customer didn't leave a review on the spot? We follow up by text at the right time. Set it once, it runs on its own. Multi-touch sequences stop automatically when they review — no annoying over-messaging.
              </p>

              <div className="space-y-3 pt-2">
                {["Triggers automatically after job completion", "Multi-step SMS sequences with smart timing", "Stops the moment they leave a review", "Customize your message templates"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:order-1">
              <SMSAnimation />
            </div>
          </div>

          {/* Step 3: QR Codes — Maximize */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20 lg:pt-28">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide">Maximize</span>
              </div>

              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Arm your team with QR codes to collect reviews at the door
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                In-person is the single best way to get a review. 8 out of 10 customers who say "yeah, I'll leave you a review" never do — but if you hand them a QR code while they're still standing there happy with the work, they do it on the spot.
              </p>

              <div className="space-y-3 pt-2">
                {["Job-specific QR codes for every tech", "Customer scans → lands on Google → leaves review", "Team leaderboards to gamify collection", "Track who's collecting the most reviews"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden bg-gray-900 shadow-lg" style={{ width: '300px' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/qr-demo-new.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
