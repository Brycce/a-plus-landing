import { 
  Smartphone, 
  Zap, 
  BarChart3, 
  Settings, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ModernFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Triggers",
      description: "Automatically send review requests when jobs complete, payments process, or appointments end.",
      highlight: "98% delivery rate",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "SMS That Converts", 
      description: "Customers actually read SMS messages. Get 10x higher open rates than email campaigns.",
      highlight: "10x better than email",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "Connect with Jobber, Housecall Pro, and 1000+ apps through Zapier. Setup takes 2 minutes.",
      highlight: "1000+ integrations",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Track response rates, monitor review velocity, and watch your online reputation soar.",
      highlight: "Real-time insights",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Everything you need</span>
          </div>
          
          <h2 className="text-display-sm mb-6">
            <span className="gradient-text">Powerful features</span>
            <br />
            Simple automation
          </h2>
          
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Set up once, run forever. Our intelligent system handles everything from 
            timing to personalization, so you can focus on your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-headline text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  {feature.highlight}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <span>Ready to get started?</span>
            <ArrowRight className="w-4 h-4" />
            <a href="#pricing" className="text-primary font-medium hover:underline">
              See pricing
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ModernFeatures;