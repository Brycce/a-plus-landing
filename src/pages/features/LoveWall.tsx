import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Star, Users, Share2, TrendingUp, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const LoveWall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/aplusblue.png" 
                  alt="A+ Reviews Logo" 
                  className="w-8 h-8 rounded"
                />
                <span className="text-xl font-bold text-foreground">A+ Reviews</span>
              </Link>
              <div className="hidden md:block text-muted-foreground">/</div>
              <h1 className="hidden md:block text-lg font-semibold">Love Wall</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signin">Sign In</a>
              </Button>
              <Button asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-6">💙</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Love Wall
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Showcase your best customer reviews in a beautiful, embeddable widget that builds trust and drives conversions on your website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-primary text-white hover:bg-primary/90" asChild>
                  <a href="https://app.aplusreviews.io/auth?tab=signup">Start Free Trial</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/">← Back to Features</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-center mb-4">
                <h4 className="font-bold text-lg">What Our Customers Say</h4>
                <p className="text-sm text-gray-600">See why businesses love working with us</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    name: "Sarah Johnson",
                    text: "Absolutely fantastic service! They transformed our home and were so professional throughout the entire process.",
                    rating: 5
                  },
                  {
                    name: "Mike Chen", 
                    text: "Best service in town! Fixed our issue quickly and at a great price. Highly recommend to everyone.",
                    rating: 5
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                    <div className="text-xs text-gray-500">— {review.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">See It In Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's how your Love Wall will look on your website
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">What Our Customers Say</h3>
                <p className="text-gray-600">See why businesses love working with us</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Sarah Johnson",
                    business: "Home Cleaning Service",
                    rating: 5,
                    text: "Absolutely fantastic service! They transformed our home and were so professional throughout the entire process.",
                    avatar: "🧑‍💼"
                  },
                  {
                    name: "Mike Chen",
                    business: "Local Restaurant",
                    rating: 5,
                    text: "Best plumbing service in town! Fixed our issue quickly and at a great price. Highly recommend to everyone.",
                    avatar: "👨‍🍳"
                  },
                  {
                    name: "Emily Rodriguez", 
                    business: "Real Estate",
                    rating: 5,
                    text: "Professional, reliable, and great communication. Will definitely be using their services again!",
                    avatar: "👩‍💼"
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{review.avatar}</div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                        <div className="text-gray-500 text-xs">{review.business}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Set up your Love Wall in minutes and start building trust with potential customers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Collect Reviews</h3>
                    <p className="text-muted-foreground">Your best Google and Facebook reviews are automatically imported and kept up-to-date in real-time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Customize Display</h3>
                    <p className="text-muted-foreground">Choose which reviews to showcase, customize colors and layout to match your brand perfectly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Embed Anywhere</h3>
                    <p className="text-muted-foreground">Copy a simple code snippet and add your Love Wall to any website, landing page, or social media.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Build Trust & Convert</h3>
                    <p className="text-muted-foreground">Watch as social proof from real customers increases trust and drives more conversions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border p-6">
              <h4 className="font-bold text-lg mb-6">Easy Integration</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-gray-600">1. Get Your Embed Code</h5>
                  <div className="bg-gray-900 rounded-lg p-4 text-xs font-mono">
                    <div className="text-green-400">{'<script src="https://cdn.aplusreviews.com/widget.js"></script>'}</div>
                    <div className="text-blue-400 mt-1">{'<div id="love-wall" data-business-id="your-id"></div>'}</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-gray-600">2. Paste Into Your Website</h5>
                  <p className="text-xs text-gray-500">
                    Works with WordPress, Shopify, Wix, Squarespace, and any HTML website
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-gray-600">3. Automatic Updates</h5>
                  <p className="text-xs text-gray-500">
                    New reviews appear automatically - no maintenance required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Love Walls Work</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Trust Instantly</h3>
              <p className="text-muted-foreground">92% of consumers read reviews before making a decision. Show yours prominently to build immediate credibility.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Increase Conversions</h3>
              <p className="text-muted-foreground">Businesses see up to 35% increase in conversion rates when displaying customer reviews prominently.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy to Share</h3>
              <p className="text-muted-foreground">Use your Love Wall on websites, social media, email signatures, and marketing materials.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Always Fresh</h3>
              <p className="text-muted-foreground">Automatically updates with new reviews from Google and Facebook - your Love Wall stays current.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
              <p className="text-muted-foreground">Looks perfect on all devices with responsive design that adapts to any screen size.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Friendly</h3>
              <p className="text-muted-foreground">Customize colors, fonts, and layout to perfectly match your website and brand identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Start Showcasing Your Reviews Today
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Create your Love Wall in under 5 minutes and start building trust with potential customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary text-white hover:bg-primary/90" asChild>
              <a href="https://app.aplusreviews.io/auth?tab=signup">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-foreground border-gray-300 hover:bg-gray-100" asChild>
              <Link to="/">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoveWall;