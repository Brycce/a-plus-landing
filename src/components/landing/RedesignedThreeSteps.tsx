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
      <div className="w-[240px] bg-gray-900 rounded-[1.75rem] p-2 shadow-xl" style={{ height: '420px' }}>
        <div className="bg-white rounded-[1.25rem] overflow-hidden h-full">
          <div className="bg-gray-900 h-4 rounded-b-lg mx-auto w-20"></div>
          <div className="bg-gradient-to-b from-gray-50 to-white p-3 flex-1 overflow-hidden" style={{ height: 'calc(100% - 16px)' }}>
            <div className="space-y-3">
              <div className="text-center text-xs text-gray-400 mb-4">Today 2:30 PM</div>

              {step >= 1 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                    <p className="text-xs text-gray-900">Hi John! Thanks for choosing us. Mind leaving a quick review?</p>
                    <span className="text-xs text-[#3C83F6] underline mt-1 block">Review link →</span>
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
                    <div className="bg-[#3C83F6] text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
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
    <section id="how-it-works" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block text-xs font-semibold text-[#3C83F6] px-2.5 py-1 rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 64, 230, 0.1)' }}>
            How it works
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Three steps to 3x your reviews
          </h2>
          <p className="text-base text-gray-600">
            Whether you're catching up on past customers or collecting reviews from new ones, we've got you covered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Step 1: Review Boost — Catch up */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center pb-14 lg:pb-20">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#3C83F6] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  1
                </div>
                <span className="text-xs font-semibold text-[#3C83F6] uppercase tracking-wide">Catch up</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                Turn past customers into new reviews
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Import your customer list and send bulk review requests. Happy customers who never left a review will finally do it.
              </p>

              <div className="space-y-2 pt-1">
                {["Import from Jobber or CSV", "Bulk campaigns on autopilot", "Track opens, clicks, and reviews"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#3C83F6] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <StaticMockup type="review-boost" />
            </div>
          </div>

          {/* Step 2: Automated SMS — Automate */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center bg-gray-50 -mx-4 px-4 lg:-mx-6 lg:px-6 py-12 lg:py-16 rounded-2xl">
            <div className="lg:order-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#3C83F6] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  2
                </div>
                <span className="text-xs font-semibold text-[#3C83F6] uppercase tracking-wide">Automate</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                Automatic follow-ups that get reviews
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Set it once, it runs on its own. SMS follow-ups go out after every job and stop when they leave a review.
              </p>

              <div className="space-y-2 pt-1">
                {["Triggers after job completion", "Multi-step SMS sequences", "Stops when they review"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#3C83F6] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:order-1">
              <SMSAnimation />
            </div>
          </div>

          {/* Step 3: QR Codes — Maximize */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-14 lg:pt-20">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#3C83F6] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  3
                </div>
                <span className="text-xs font-semibold text-[#3C83F6] uppercase tracking-wide">Maximize</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                Capture reviews on the spot with QR codes
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Hand customers a QR code while they're happy. One scan takes them straight to Google to leave a review in seconds.
              </p>

              <div className="space-y-2 pt-1">
                {["QR codes for every tech", "Scan → Google → review in seconds", "Team leaderboards"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#3C83F6] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden bg-gray-900 shadow-lg" style={{ width: '260px' }}>
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
