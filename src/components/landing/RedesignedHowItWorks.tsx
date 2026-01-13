import { QrCode, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  {
    icon: <QrCode className="w-12 h-12 text-primary" />,
    number: "1",
    title: "QR Codes at the Door",
    description: "Every job gets a unique QR code. Customers scan instantly after completion and leave a review right there on the spot. No friction, no follow-up needed."
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
    number: "2",
    title: "Smart SMS Backup",
    description: "SMS campaigns follow up automatically if they don't scan. Customize message count and timing. Stops when they review."
  }
];

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
      <div className="w-[280px] bg-gray-900 rounded-[2rem] p-2.5 shadow-xl" style={{ height: '606px' }}>
        <div className="bg-white rounded-[1.5rem] overflow-hidden h-full">
          <div className="bg-gray-900 h-5 rounded-b-xl mx-auto w-24"></div>
          <div className="bg-gradient-to-b from-gray-50 to-white p-4 flex-1 overflow-hidden" style={{ height: 'calc(100% - 20px)' }}>
            <div className="space-y-3">
              <div className="text-center text-xs text-gray-400 mb-4">Today 2:30 PM</div>

              {/* First message - always visible after step 0 */}
              {step >= 1 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                    <p className="text-xs text-gray-900">Hi John! 👋 Thanks for choosing us. Mind leaving a quick review?</p>
                    <a href="#" className="text-xs text-primary underline mt-1 block">Review link →</a>
                  </div>
                </div>
              )}

              {step >= 1 && (
                <div className="text-xs text-gray-400 pl-1">2:30 PM</div>
              )}

              {/* Follow up message after 2 days */}
              {step >= 2 && (
                <>
                  <div className="text-center text-xs text-gray-400 my-3">2 days later</div>
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-gray-900">Just following up! Your feedback would mean a lot 🌟</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 pl-1">10:15 AM</div>
                </>
              )}

              {/* Customer response */}
              {step >= 3 && (
                <>
                  <div className="flex justify-end mt-3 animate-fade-in">
                    <div className="bg-primary text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
                      <p className="text-xs">Will do! Thanks for the reminder 👍</p>
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

export function RedesignedHowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            Two simple ways to collect reviews from every customer
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                {index === 0 ? (
                  // QR Code card with video
                  <>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-2">Step {step.number}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{step.description}</p>
                    <div className="flex justify-center">
                      <div className="rounded-xl overflow-hidden shadow-lg bg-gray-900" style={{ width: '280px' }}>
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
                  </>
                ) : (
                  // SMS card with animation
                  <>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-2">Step {step.number}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{step.description}</p>
                    <SMSAnimation />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}