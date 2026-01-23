import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Star, Zap, Settings, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const ReviewWidget = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/images/aplusblue.png" 
                  alt="A+ Reviews Logo" 
                  className="w-8 h-8 rounded"
                />
                <span className="text-xl font-bold text-foreground">A+ Reviews</span>
              </Link>
              <div className="hidden md:block text-muted-foreground">/</div>
              <h1 className="hidden md:block text-lg font-semibold">Review Widget</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signin&utm_source=landing&utm_medium=website">Sign In</a>
              </Button>
              <Button asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Get Started</a>
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
              <div className="text-4xl mb-6">📱</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Review Widget
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Display your best 5-star Google reviews on your website with floating widgets that subtly showcase customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-primary text-white hover:bg-primary/90" asChild>
                  <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Start Free Trial</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/">← Back to Features</Link>
                </Button>
              </div>
            </div>
            <div className="relative bg-gray-50 rounded-xl p-8 min-h-80">
              <div className="text-center text-gray-400 font-medium text-sm mb-6">Your Website</div>
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
              
              {/* Floating Widget */}
              <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-xl border p-4 max-w-60" style={{animation: 'subtle-bounce 3s ease-in-out infinite'}}>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="text-xs text-gray-400 ml-auto">Google</span>
                </div>
                <p className="text-sm text-gray-800 mb-2">
                  "Excellent service! Very professional..."
                </p>
                <p className="text-xs text-gray-500">— John S.</p>
                <button className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xs">×</button>
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
              Here's how your Review Widget appears to website visitors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Desktop Experience</h3>
              <div className="relative bg-gray-100 rounded-lg p-8 min-h-96 border-2 border-gray-200">
                <div className="absolute inset-4 bg-white rounded border border-gray-300">
                  <div className="h-8 bg-gray-100 border-b border-gray-300 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6 text-gray-400 text-sm">
                    Your Website Content...
                  </div>
                </div>
                
                {/* Floating Widget */}
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-2xl border p-4 w-72" style={{animation: 'subtle-bounce 3s ease-in-out infinite'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">How was your experience?</div>
                      <div className="text-xs text-gray-500">ABC Plumbing</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <div className="text-xs text-center text-gray-500 mb-3">
                    Tap a star to rate us on Google
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 text-xs">Leave Review</Button>
                    <Button size="sm" variant="ghost" className="text-xs">✕</Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Mobile Experience</h3>
              <div className="relative bg-gray-900 rounded-3xl p-2 max-w-sm mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="p-4 h-96 relative">
                    <div className="text-gray-400 text-xs">Mobile website content...</div>
                    
                    {/* Mobile Widget */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg border p-3" style={{animation: 'subtle-bounce 3s ease-in-out infinite'}}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs">Rate your experience</div>
                          <div className="text-xs text-gray-500">ABC Plumbing</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      
                      <Button size="sm" className="w-full text-xs">Leave Google Review</Button>
                    </div>
                  </div>
                </div>
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
              Display your existing 5-star Google reviews in beautiful floating widgets
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
                    <h3 className="text-xl font-semibold mb-2">1. Import Reviews</h3>
                    <p className="text-muted-foreground">We automatically pull in your existing 5-star Google reviews to display in the widgets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Add to Website</h3>
                    <p className="text-muted-foreground">Copy and paste a simple code snippet to add floating review widgets to any page on your website.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Showcase Reviews</h3>
                    <p className="text-muted-foreground">Widgets display your best reviews with star ratings, customer names, and review text to build trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Visitors Dismiss</h3>
                    <p className="text-muted-foreground">Visitors can easily close widgets if they want to, ensuring a non-intrusive user experience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border p-6">
              <h4 className="font-bold text-lg mb-6">Customization Options</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-gray-600">Trigger Settings</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Show after 30 seconds on page</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Show after scrolling 50%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Show on exit intent</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-gray-600">Page Targeting</h5>
                  <div className="bg-gray-50 rounded p-3 text-sm">
                    <div className="text-gray-600">Show widget only on:</div>
                    <div className="mt-1 text-gray-800">✓ Thank you pages</div>
                    <div className="text-gray-800">✓ Service completion pages</div>
                    <div className="text-gray-800">✓ Specific product pages</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-2 text-gray-600">Brand Customization</h5>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded border"></div>
                    <div className="w-8 h-8 bg-green-500 rounded border"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded border"></div>
                    <div className="text-sm text-gray-500 flex items-center">+ Custom colors</div>
                  </div>
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Use Review Widgets</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Higher Conversion</h3>
              <p className="text-muted-foreground">Capture reviews at the moment of satisfaction, when customers are most likely to leave positive feedback.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Better Ratings</h3>
              <p className="text-muted-foreground">Smart routing ensures only happy customers reach public platforms, while you get private feedback from others.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Setup</h3>
              <p className="text-muted-foreground">One line of code to install. Customize appearance, timing, and targeting through our dashboard.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Non-Intrusive</h3>
              <p className="text-muted-foreground">Appears only when appropriate, can be easily dismissed, and doesn't interfere with user experience.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
              <p className="text-muted-foreground">Perfectly designed for mobile devices where most of your customers are browsing and shopping.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow-up Ready</h3>
              <p className="text-muted-foreground">Automatically collect contact info for thank you messages or issue resolution follow-ups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Start Showcasing Reviews on Your Website
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Install your Review Widget in minutes and start displaying your best Google reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary text-white hover:bg-primary/90" asChild>
              <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Start Free Trial</a>
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

export default ReviewWidget;