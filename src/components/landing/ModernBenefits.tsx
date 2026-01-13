import { Clock, TrendingUp, Users, Award } from 'lucide-react';

const ModernBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      value: "10+",
      unit: "hours saved",
      period: "per week",
      description: "Stop manually asking for reviews. Our automation handles everything while you focus on your business.",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp, 
      value: "300%",
      unit: "more reviews",
      period: "on average",
      description: "Our customers see dramatic increases in Google reviews within the first month of using A+ Reviews.",
      color: "text-green-500"
    },
    {
      icon: Users,
      value: "98%",
      unit: "open rate",
      period: "guaranteed",
      description: "SMS gets read. Unlike email that sits in spam folders, your review requests reach customers instantly.",
      color: "text-purple-500"
    },
    {
      icon: Award,
      value: "4.8★",
      unit: "avg rating",
      period: "boost",
      description: "Happy customers leave better reviews when asked at the right moment. Climb search rankings fast.",
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-sm mb-6">
            The results speak for themselves
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just hope for reviews – <strong className="text-foreground">generate them reliably</strong>. 
            Join thousands of businesses transforming their online reputation.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              
              {/* Main card */}
              <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 mb-6 ${benefit.color}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className="text-4xl font-bold gradient-text mb-1">
                    {benefit.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {benefit.unit}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {benefit.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
              </div>

            </div>
          ))}
        </div>

        {/* Social proof section */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              <div>
                <div className="text-3xl font-bold gradient-text">1,000+</div>
                <div className="text-sm text-muted-foreground">Businesses trust us</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Reviews generated</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold gradient-text">2 min</div>
                <div className="text-sm text-muted-foreground">Average setup time</div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModernBenefits;