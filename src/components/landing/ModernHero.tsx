import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left side - Hero content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <Zap className="w-4 h-4 text-primary" />
              <span>Trusted by 1000+ businesses</span>
            </div>

            {/* Main headline */}
            <h1 className="text-display-sm">
              Get{' '}
              <span className="gradient-text">3x more reviews</span>{' '}
              with{' '}
              <span className="relative inline-block">
                automated
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 300 12" fill="none">
                  <path d="M5 6C5 6 50 1 150 6C250 11 295 6 295 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              SMS campaigns
            </h1>

            {/* Subheading */}
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              Turn satisfied customers into 5-star reviews automatically. 
              <strong className="text-foreground"> Save 10+ hours per week</strong> and 
              watch your business climb the rankings.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold animate-pulse-glow"
                asChild
              >
                <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="glass border-0 hover:bg-white/20 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="#demo">See Demo</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5</span>
              </div>
              
              <div className="h-4 w-px bg-border hidden sm:block"></div>
              
              <div className="text-sm text-muted-foreground">
                Setup takes <strong className="text-foreground">2 minutes</strong>
              </div>
            </div>

          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            
            {/* Main visual container */}
            <div className="relative max-w-lg mx-auto">
              
              {/* SMS Flow Visualization */}
              <div className="space-y-6">
                
                {/* Customer card */}
                <div className="glass rounded-2xl p-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                      SM
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Martinez</div>
                      <div className="text-sm text-muted-foreground">Plumbing service completed</div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary w-full rounded-full"></div>
                  </div>
                </div>

                {/* SMS message */}
                <div className="relative">
                  <div className="glass rounded-2xl p-4 ml-8 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="text-sm mb-2 font-medium">Automated SMS</div>
                    <div className="bg-primary text-primary-foreground rounded-xl p-3 text-sm">
                      Hi Sarah! Thanks for choosing ABC Plumbing. We'd love a quick review! 🙏
                      <br/>
                      <br/>
                      ⭐ Leave Review: bit.ly/abc-review
                    </div>
                  </div>
                  
                  {/* Connection line */}
                  <div className="absolute left-4 top-4 w-4 h-4 border-l-2 border-b-2 border-primary/30 rounded-bl-lg"></div>
                </div>

                {/* Review response */}
                <div className="glass rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">Google Review</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Excellent service! Quick response and professional work. Highly recommend ABC Plumbing!"
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">Sarah M. • 2 minutes ago</div>
                </div>

              </div>

              {/* Floating stats */}
              <div className="absolute -right-8 top-20 glass rounded-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold gradient-text">300%</div>
                <div className="text-xs text-muted-foreground">More Reviews</div>
              </div>

              <div className="absolute -left-8 bottom-20 glass rounded-xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-xs text-muted-foreground">Open Rate</div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernHero;