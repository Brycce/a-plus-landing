import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:items-center">
          
          {/* Left Side - Hero Text - Mobile First */}
          <div className="lg:pr-8 text-center lg:text-left lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              <span className="text-foreground">Get </span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">3x more reviews</span>
              <span className="text-foreground"> with automated SMS campaigns</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              Turn satisfied customers into 5-star reviews automatically. Save 10+ hours per week and watch your business climb the rankings.
            </p>
            
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Get 3x More Reviews</a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span>Get set up in 5 minutes</span>
            </div>

            {/* Mobile 2-column layout - below hero text */}
            <div className="flex gap-4 lg:hidden mt-8">
              {/* Left: Woman image */}
              <div className="flex-1">
                <img 
                  src="/images/2b564f02-bf8a-49bf-8e1f-886fa4db65e2.png" 
                  alt="Happy customer" 
                  className="w-full h-40 sm:h-48 rounded-xl object-cover object-center"
                />
              </div>
              
              {/* Right: Review elements stacked */}
              <div className="flex-1 flex flex-col gap-3">
                {/* SMS Request */}
                <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                  <p className="text-xs text-gray-800">"Hi Sarah! Thanks for choosing us. Mind leaving a quick review? 🙏"</p>
                </div>

                {/* 5 Star Review */}
                <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-800">"Great service!"</p>
                  <p className="text-xs text-gray-500 mt-1">Sarah M.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Desktop image only */}
          <div className="lg:order-2 w-full">
            {/* Desktop layout - hidden on mobile */}
            <div className="hidden lg:block relative h-[600px] xl:h-[700px]">
              <div className="w-full h-full flex items-center justify-center z-10 animate-fade-in">
                <div className="bg-white rounded-xl p-0 shadow-lg border border-gray-100 relative w-full mx-8">
                  <img 
                    src="/images/2b564f02-bf8a-49bf-8e1f-886fa4db65e2.png" 
                    alt="Happy customer" 
                    className="w-full h-[24rem] xl:h-[28rem] rounded-xl object-cover object-center"
                  />
                  
                  {/* SMS Request - Overlapping top left padding */}
                  <div className="absolute -top-6 -left-6 z-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-xs">
                      <p className="text-sm text-gray-800">"Hi Sarah! Thanks for choosing us. Mind leaving a quick review? 🙏"</p>
                    </div>
                  </div>

                  {/* 5 Star Review - Overlapping bottom right padding */}
                  <div className="absolute -bottom-6 -right-6 z-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                      <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-800">"Great service!"</p>
                      <p className="text-xs text-gray-500 mt-1">Sarah M.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;