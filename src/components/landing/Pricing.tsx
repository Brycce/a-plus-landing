import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  ALL_FEATURES, 
  detectUserCurrency, 
  fetchStripePrices, 
  formatCurrency, 
  createDynamicPlans, 
  getPlansForCurrency,
  type StripePricingData 
} from '@/utils/pricing';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Get more reviews with automated SMS campaigns
          </p>
        </div>

        {/* Annual/Monthly Toggle */}
        <div className="flex justify-center mb-8">
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
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                isAnnual 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="text-xs text-orange-600 font-semibold">-47%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="bg-white border rounded-lg p-6 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <div className="text-4xl font-bold">Free</div>
              <p className="text-sm font-medium text-blue-600 mt-2">No credit card required</p>
            </div>
            
            <Button 
              variant="outline"
              className="w-full mb-6"
              asChild
            >
              <a href="https://app.aplusreview.io/auth?tab=signup">Get Started Free</a>
            </Button>
            
            <div className="flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Dashboard & Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Love Wall & Widget</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Google Reviews Sync</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-red-600 mb-3">No review collection features:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Automatic Review Requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Review Boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Dedicated 10DLC Number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">CRM Integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg relative flex flex-col h-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-green-500 text-white">Most Popular</Badge>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">A+ Pro</h3>
              <div className="flex items-start gap-2">
                <div className="text-4xl font-bold">
                  {isAnnual ? '$20' : '$38'}
                </div>
                <div className="flex flex-col">
                  <div className="text-sm text-muted-foreground">per month</div>
                  {isAnnual && (
                    <div className="text-xs text-muted-foreground">Billed annually at $240</div>
                  )}
                </div>
              </div>
              <p className="text-sm font-medium text-blue-600 mt-2">14-day free trial</p>
            </div>
            
            <Button 
              className="w-full mb-6 bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://app.aplusreview.io/auth?tab=signup">Start Free Trial</a>
            </Button>
            
            <div className="flex-grow">
              <div className="mb-4">
                <p className="text-sm font-medium text-green-600">Everything in Free, plus:</p>
              </div>

              <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Automatic Review Requests</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Review Boost</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Dedicated 10DLC Number</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Free A2P Registration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>CRM Integrations</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;