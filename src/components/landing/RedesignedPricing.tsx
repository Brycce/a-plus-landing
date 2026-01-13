import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from "lucide-react";
import { Link } from 'react-router-dom';

export function RedesignedPricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing values
  const starterMonthly = 65;
  const starterAnnualMonthly = 49;
  const starterAnnualTotal = 588;

  const proMonthly = 99;
  const proAnnualMonthly = 75;
  const proAnnualTotal = 900;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free, upgrade when you're ready
          </p>
        </div>

        {/* Annual/Monthly Toggle - Desktop Only */}
        <div className="hidden md:flex justify-center mb-8">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                !isAnnual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                3 months free
              </span>
            </button>
          </div>
        </div>

        {/* Enterprise Bar */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-center sm:text-left">
              <span className="font-medium">Multi-location franchise or custom needs?</span>
              <span className="text-gray-300 ml-2">Contact us for enterprise pricing.</span>
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 whitespace-nowrap"
              asChild
            >
              <a href="https://calendly.com/conju/quick-chat" target="_blank" rel="noopener noreferrer">
                Get in touch
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-gray-900">$0</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Forever free</p>
              <p className="text-gray-600">Collect reviews in-person with QR codes</p>
            </div>

            <Button
              className="w-full mb-2 bg-gray-900 hover:bg-gray-800 text-white"
              size="lg"
              asChild
            >
              <a href="https://app.aplusreviews.io/auth?tab=signup">Get started free</a>
            </Button>
            <p className="text-sm text-center text-gray-500 mb-8">No credit card required</p>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-900 mb-4">Turn happy customers into 5-star reviews</p>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Capture reviews in-person with QR codes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Display reviews on your website with Love Wall</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Floating review widget to convert visitors</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sync reviews from Google automatically</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Track review performance with analytics</span>
              </div>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="relative">
            {/* Annual/Monthly Toggle - Mobile Only Above Starter Card */}
            <div className="flex justify-center mb-6 md:hidden">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    !isAnnual
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
                    isAnnual
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setIsAnnual(true)}
                >
                  Annual
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    3 months free
                  </span>
                </button>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 border-2 border-primary shadow-xl ring-1 ring-primary/10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? starterAnnualMonthly : starterMonthly}
                  </span>
                  <span className="text-xl text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-500 mb-3">
                    Billed annually at ${starterAnnualTotal}/year
                  </p>
                )}
                {!isAnnual && <p className="text-sm text-gray-500 mb-3">&nbsp;</p>}
                <p className="text-gray-600">Start collecting reviews automatically</p>
              </div>

              <Button
                className="w-full mb-2 bg-primary hover:bg-primary/90 text-white"
                size="lg"
                asChild
              >
                <a href="https://app.aplusreviews.io/auth?tab=signup">Start free trial</a>
              </Button>
              <p className="text-sm text-center text-primary mb-8">14-day free trial</p>

              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-900 mb-4">Get 3x more reviews with SMS + QR</p>
                <p className="text-sm font-medium text-green-600 mb-2">Everything in Free, plus:</p>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Collect reviews via SMS (up to 100/mo)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-touch SMS sequences that stop when they review</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Review Boost: bulk campaigns to past customers</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated phone number for your business</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CRM integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customize your SMS templates</span>
                </div>
                <p className="text-sm text-gray-500 mt-4">$0.15 per additional request</p>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-gray-900">
                  ${isAnnual ? proAnnualMonthly : proMonthly}
                </span>
                <span className="text-xl text-gray-500">/month</span>
              </div>
              {isAnnual && (
                <p className="text-sm text-gray-500 mb-3">
                  Billed annually at ${proAnnualTotal}/year
                </p>
              )}
              {!isAnnual && <p className="text-sm text-gray-500 mb-3">&nbsp;</p>}
              <p className="text-gray-600">Scale your reputation on autopilot</p>
            </div>

            <Button
              className="w-full mb-2 bg-gray-900 hover:bg-gray-800 text-white"
              size="lg"
              asChild
            >
              <a href="https://app.aplusreviews.io/auth?tab=signup">Start free trial</a>
            </Button>
            <p className="text-sm text-center text-primary mb-8">14-day free trial</p>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-900 mb-4">Never miss a review opportunity</p>
              <p className="text-sm font-medium text-green-600 mb-2">Everything in Starter, plus:</p>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Collect reviews via SMS (up to 300/mo)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Priority support</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">$0.15 per additional request</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to get more reviews?</h3>
            <p className="text-gray-600 mb-8">
              Start automating your review collection and watch your business grow.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="https://app.aplusreviews.io/auth?tab=signup">Start your free trial</a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
