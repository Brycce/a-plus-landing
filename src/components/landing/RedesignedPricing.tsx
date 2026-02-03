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
    <section id="pricing" className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#0040E6] font-semibold text-sm tracking-wide uppercase mb-4">Pricing</p>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-500">Start free, upgrade when you're ready</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200 shadow-sm cursor-pointer"
          >
            <span
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                !isAnnual ? 'bg-[#0040E6] text-white shadow-sm' : 'text-gray-500'
              }`}
            >
              Monthly
            </span>
            <span
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-[#0040E6] text-white shadow-sm' : 'text-gray-500'
              }`}
            >
              Annual
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                isAnnual ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
              }`}>
                Save 25%
              </span>
            </span>
          </button>
        </div>

        {/* Enterprise bar */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-gray-900 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-center sm:text-left">
              <span className="font-semibold">Multi-location or franchise?</span>
              <span className="text-gray-400 ml-2">Let's talk enterprise pricing.</span>
            </p>
            <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full px-6" asChild>
              <a href="https://calendly.com/conju/quick-chat" target="_blank" rel="noopener noreferrer">Get in touch</a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-[#0040E6] text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/20">
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

        <div className="text-center mt-24">
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to get more reviews?</h3>
            <p className="text-gray-500 text-lg mb-8">
              Start automating your review collection and watch your business grow.
            </p>
            <Button size="lg" className="bg-[#0040E6] hover:bg-[#0033BF] text-white rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-blue-500/20" asChild>
              <Link to="/auth?tab=signup">
                Start in 5 minutes
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-gray-400 mt-4">No credit card required &middot; Cancel anytime</p>
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
    <div className={`bg-white rounded-3xl p-8 h-full flex flex-col ${
      highlighted
        ? 'border-2 border-[#0040E6] shadow-xl ring-1 ring-[#0040E6]/10'
        : 'border border-gray-200 shadow-sm'
    }`}>
      <div className="text-center mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">{name}</h3>
        <div className="mb-2">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-lg text-gray-400">{period}</span>
        </div>
        {annualNote && <p className="text-sm text-gray-400">{annualNote}</p>}
        {!annualNote && <p className="text-sm text-gray-400">&nbsp;</p>}
        <p className="text-gray-500 mt-3">{description}</p>
      </div>

      <Button
        className={`w-full rounded-full h-12 text-[15px] font-semibold mb-2 ${
          ctaVariant === 'primary'
            ? 'bg-[#0040E6] hover:bg-[#0033BF] text-white shadow-lg shadow-blue-500/10'
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}
        size="lg"
        asChild
      >
        <Link to="/auth?tab=signup">{cta}</Link>
      </Button>
      <p className={`text-sm text-center mb-8 ${ctaVariant === 'primary' ? 'text-[#0040E6]' : 'text-gray-400'}`}>{ctaNote}</p>

      <div className="space-y-3.5 flex-1">
        {sectionLabel && <p className="text-sm font-semibold text-emerald-600 mb-3">{sectionLabel}</p>}
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 text-[15px]">{f}</span>
          </div>
        ))}
        {footnote && <p className="text-sm text-gray-400 pt-3">{footnote}</p>}
      </div>
    </div>
  );
}
