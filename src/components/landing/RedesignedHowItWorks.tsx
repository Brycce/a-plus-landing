import { QrCode, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

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
      <div className="w-[280px] bg-gray-900 rounded-[2rem] p-2.5 shadow-xl" style={{ height: '560px' }}>
        <div className="bg-white rounded-[1.5rem] overflow-hidden h-full">
          <div className="bg-gray-900 h-5 rounded-b-xl mx-auto w-24" />
          <div className="bg-gradient-to-b from-gray-50 to-white p-4 flex-1 overflow-hidden" style={{ height: 'calc(100% - 20px)' }}>
            <div className="space-y-3">
              <div className="text-center text-xs text-gray-400 mb-4">Today 2:30 PM</div>
              {step >= 1 && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                    <p className="text-xs text-gray-900">Hi John! Thanks for choosing us. Mind leaving a quick review?</p>
                    <a href="#" className="text-xs text-[#3C83F6] underline mt-1 block">Review link →</a>
                  </div>
                </div>
              )}
              {step >= 1 && <div className="text-xs text-gray-400 pl-1">2:30 PM</div>}
              {step >= 2 && (
                <>
                  <div className="text-center text-xs text-gray-400 my-3">2 days later</div>
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
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
                      <p className="text-xs">Done! Left you 5 stars</p>
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

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Capture reviews on the spot",
    description: "Every job gets a unique QR code. Customers scan right after completion and leave a review while the experience is still fresh.",
    color: "bg-[#E8F0FE]",
    iconColor: "text-[#3C83F6]",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Follow up automatically",
    description: "If they don't scan, SMS campaigns follow up at the right time. Customize timing and message count — it stops when they review.",
    color: "bg-[#FFF0E6]",
    iconColor: "text-[#D97706]",
  },
];

export function RedesignedHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[#3C83F6] font-semibold text-sm tracking-wide uppercase mb-4">How it works</p>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 tracking-tight mb-6">
            Two simple steps to<br />more 5-star reviews
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            A two-pronged approach that captures every opportunity
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center`}>
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>
                <span className="text-sm font-bold text-gray-300 tracking-wider">{step.number}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{step.description}</p>

              {index === 0 ? (
                <div className="flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-900" style={{ width: '280px' }}>
                    <video autoPlay loop muted playsInline className="w-full h-auto">
                      <source src="/qr-demo-new.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              ) : (
                <SMSAnimation />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
