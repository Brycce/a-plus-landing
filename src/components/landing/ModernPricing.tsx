import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernPricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span>Simple pricing</span>
          </div>
          
          <h2 className="text-display-sm mb-6">
            <span className="gradient-text">Start free</span>, 
            <br />
            scale when ready
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no setup costs. Pay only for the SMS messages you send. 
            Most customers save money compared to hiring review management agencies.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="glass rounded-3xl p-8 relative hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Monthly</h3>
              <p className="text-muted-foreground mb-6">Perfect for getting started</p>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold gradient-text">$45</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  No commitment
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">14-day free trial</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Up to 2,000 SMS messages/month",
                "Custom message templates", 
                "Priority support",
                "Advanced analytics",
                "A2P 10DLC registration included"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              variant="outline"
              className="w-full glass border-0 hover:bg-white/20 text-lg font-semibold py-4"
              asChild
            >
              <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Start Free Trial</a>
            </Button>

          </div>

          {/* Annual Plan */}
          <div className="glass rounded-3xl p-8 relative hover:scale-105 transition-all duration-500 hover:shadow-2xl ring-2 ring-primary/20">
            
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Save $300/year
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-xl font-bold mb-2">Annual</h3>
              <p className="text-muted-foreground mb-6">Best value for growing businesses</p>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg text-muted-foreground line-through">$45</span>
                  <span className="text-5xl font-bold gradient-text">$20</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Billed annually at $240
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Save 56%
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">14-day free trial</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Up to 2,000 SMS messages/month",
                "Custom message templates",
                "Priority support", 
                "Advanced analytics",
                "A2P 10DLC registration included"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="w-full gradient-primary text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg font-semibold py-4 animate-pulse-glow"
              asChild
            >
              <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Start Free Trial</a>
            </Button>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 -z-10 blur-xl opacity-50"></div>

          </div>

        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Questions about pricing? <a href="mailto:support@aplusreviews.com" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ModernPricing;