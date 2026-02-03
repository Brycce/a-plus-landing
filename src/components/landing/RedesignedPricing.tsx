import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export function RedesignedPricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const starterMonthly = 65;
  const starterAnnualMonthly = 49;
  const starterAnnualTotal = 588;
  const proMonthly = 99;
  const proAnnualMonthly = 75;
  const proAnnualTotal = 900;

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#3C83F6] font-semibold text-xs tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-gray-500">Start free, upgrade when you're ready</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="inline-flex items-center bg-white rounded-full p-0.5 border border-gray-200 shadow-sm cursor-pointer"
          >
            <span
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                !isAnnual ? 'bg-[#3C83F6] text-white shadow-sm' : 'text-gray-500'
              }`}
            >
              Monthly
            </span>
            <span
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-[#3C83F6] text-white shadow-sm' : 'text-gray-500'
              }`}
            >
              Annual
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isAnnual ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
              }`}>
                Save 25%
              </span>
            </span>
          </button>
        </div>

        {/* Enterprise bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-900 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white text-sm text-center sm:text-left">
              <span className="font-semibold">Multi-location or franchise?</span>
              <span className="text-gray-400 ml-2">Let's talk enterprise pricing.</span>
            </p>
            <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full px-5 text-xs" asChild>
              <a href="https://calendly.com/conju/quick-chat" target="_blank" rel="noopener noreferrer">Get in touch</a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <PricingCard
            name="Free"
            price="$0"
            period="forever"
            description="Collect reviews in-person with QR codes"
            cta="Get started free"
            ctaVariant="secondary"
            ctaNote="No credit card required"
            features={[
              "Capture reviews with QR codes",
              "Love Wall for your website",
              "Floating review widget",
              "Sync reviews from Google",
              "Review analytics dashboard",
            ]}
          />

          <div className="relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-[#3C83F6] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg shadow-blue-500/20">
                Most Popular
              </span>
            </div>
            <PricingCard
              name="Starter"
              price={`$${isAnnual ? starterAnnualMonthly : starterMonthly}`}
              period="/month"
              annualNote={isAnnual ? `Billed annually at $${starterAnnualTotal}/year` : undefined}
              description="Start collecting reviews automatically"
              cta="Start in 5 minutes"
              ctaVariant="primary"
              ctaNote="14-day free trial"
              highlighted
              sectionLabel="Everything in Free, plus:"
              features={[
                "SMS review requests (up to 100/mo)",
                "Multi-touch SMS sequences",
                "Review Boost: bulk campaigns",
                "Dedicated phone number",
                "CRM integration",
                "Custom SMS templates",
              ]}
              footnote="$0.15 per additional request"
            />
          </div>

          <PricingCard
            name="Pro"
            price={`$${isAnnual ? proAnnualMonthly : proMonthly}`}
            period="/month"
            annualNote={isAnnual ? `Billed annually at $${proAnnualTotal}/year` : undefined}
            description="Scale your reputation on autopilot"
            cta="Start in 5 minutes"
            ctaVariant="secondary"
            ctaNote="14-day free trial"
            sectionLabel="Everything in Starter, plus:"
            features={[
              "SMS review requests (up to 300/mo)",
              "Priority support",
            ]}
            footnote="$0.15 per additional request"
          />
        </div>

        <div className="text-center mt-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to get more reviews?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Start automating your review collection and watch your business grow.
            </p>
            <Button className="bg-[#3C83F6] hover:bg-[#2563EB] text-white rounded-full px-6 h-11 font-semibold shadow-lg shadow-blue-500/20" asChild>
              <Link to="https://app.aplusreviews.io/auth?tab=signup">
                Start in 5 minutes
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <p className="text-xs text-gray-400 mt-3">No credit card required · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name, price, period, annualNote, description, cta, ctaVariant, ctaNote, highlighted, sectionLabel, features, footnote,
}: {
  name: string;
  price: string;
  period: string;
  annualNote?: string;
  description: string;
  cta: string;
  ctaVariant: 'primary' | 'secondary';
  ctaNote: string;
  highlighted?: boolean;
  sectionLabel?: string;
  features: string[];
  footnote?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-5 h-full flex flex-col ${
      highlighted
        ? 'border-2 border-[#3C83F6] shadow-xl ring-1 ring-[#3C83F6]/10'
        : 'border border-gray-200 shadow-sm'
    }`}>
      <div className="text-center mb-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3">{name}</h3>
        <div className="mb-1">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-sm text-gray-400">{period}</span>
        </div>
        {annualNote && <p className="text-xs text-gray-400">{annualNote}</p>}
        {!annualNote && <p className="text-xs text-gray-400">&nbsp;</p>}
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>

      <Button
        className={`w-full rounded-full h-10 text-sm font-semibold mb-1.5 ${
          ctaVariant === 'primary'
            ? 'bg-[#3C83F6] hover:bg-[#2563EB] text-white shadow-lg shadow-blue-500/10'
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}
        asChild
      >
        <Link to="https://app.aplusreviews.io/auth?tab=signup">{cta}</Link>
      </Button>
      <p className={`text-xs text-center mb-5 ${ctaVariant === 'primary' ? 'text-[#3C83F6]' : 'text-gray-400'}`}>{ctaNote}</p>

      <div className="space-y-2.5 flex-1">
        {sectionLabel && <p className="text-xs font-semibold text-emerald-600 mb-2">{sectionLabel}</p>}
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 text-sm">{f}</span>
          </div>
        ))}
        {footnote && <p className="text-xs text-gray-400 pt-2">{footnote}</p>}
      </div>
    </div>
  );
}
