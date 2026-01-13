import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to get more reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See exactly what you'll get with A+ Reviews
          </p>
        </div>

        <div className="space-y-24">
          {/* Automatic Review Requests */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-4xl mb-6">📱</div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Automatic Review Requests
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Multi-step SMS sequences that send automatically based on job completion or payments
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Multi-step sequences</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Custom templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Smart triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>CRM integration</span>
                </div>
              </div>
              <Link 
                to="/features/automatic-review-requests" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Learn more about Automatic Review Requests →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg border p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Step 1 - Immediate</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-900">
                    Hi John, this is Sarah from ABC Plumbing. If you've got 2 minutes, a review would go a long way for helping other people find our local business!
                  </p>
                  <p className="text-xs text-blue-700 mt-2">Here's the link: https://your-review-link.com</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Step 2 - 3 days later</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    Just a quick follow-up from Sarah at ABC Plumbing...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review Boost */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border p-8 transform hover:scale-105 transition-transform">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-lg">Import Customers</h4>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">Jobber</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">CSV</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">John Smith</span>
                      <span className="text-sm text-gray-500">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Jane Doe</span>
                      <span className="text-sm text-gray-500">(555) 987-6543</span>
                    </div>
                    <div className="text-center py-4">
                      <span className="text-sm text-gray-400 font-medium">+ 147 more customers</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg">
                    Send to 149 Customers
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Review Boost
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Import past customers and send bulk review campaigns
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Jobber & CSV import</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Bulk campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Smart filtering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Performance tracking</span>
                </div>
              </div>
              <Link 
                to="/features/review-boost" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Learn more about Review Boost →
              </Link>
            </div>
          </div>

          {/* Love Wall */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-4xl mb-6">❤️</div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Love Wall
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Beautiful animated displays that showcase your best reviews
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Animated masonry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Multiple styles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Mobile carousel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Custom branding</span>
                </div>
              </div>
              <Link 
                to="/features/love-wall" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Learn more about Love Wall →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg border p-6 relative overflow-hidden">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-800">Customer Reviews</h4>
                <p className="text-sm text-gray-600">127 reviews on Google</p>
              </div>
              <div className="grid grid-cols-2 gap-3 relative">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-700">"Excellent service! Very professional and..."</p>
                    <p className="text-xs text-gray-500 mt-1">— John S.</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-700">"Amazing work! Highly recommend to anyone..."</p>
                    <p className="text-xs text-gray-500 mt-1">— Sarah M.</p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-700">"Fast, reliable, and fair pricing. Will definitely..."</p>
                    <p className="text-xs text-gray-500 mt-1">— Mike D.</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-700">"Outstanding customer service from start..."</p>
                    <p className="text-xs text-gray-500 mt-1">— Lisa K.</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Review Widget */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 relative min-h-[350px] shadow-inner">
                <div className="text-center text-gray-400 font-bold text-lg mb-6">Your Website</div>
                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                  <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-3"></div>
                  <div className="h-5 bg-gray-200 rounded-full w-1/2"></div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="h-5 bg-gray-200 rounded-full w-full mb-3"></div>
                  <div className="h-5 bg-gray-200 rounded-full w-2/3"></div>
                </div>
                
                {/* Floating Widget */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-2xl border p-5 max-w-[220px]" style={{animation: 'subtle-bounce 3s ease-in-out infinite'}}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-xs text-gray-400 ml-auto font-medium">Google</span>
                  </div>
                  <p className="text-sm text-gray-800 mb-2 font-medium">
                    "Excellent service! Very professional..."
                  </p>
                  <p className="text-xs text-gray-500">— John S.</p>
                  <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm">×</button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Review Widget
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Floating widgets that engage visitors with your best reviews
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Floating animations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Hover effects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Dismissible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real reviews</span>
                </div>
              </div>
              <Link 
                to="/features/review-widget" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Learn more about Review Widget →
              </Link>
            </div>
          </div>

          {/* Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Analytics & Insights
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Track performance with detailed metrics and trend analysis
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Review metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Click tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Rating trends</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time sync</span>
                </div>
              </div>
              <Link 
                to="/features/analytics" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Learn more about Analytics →
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border p-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
                  <div className="text-3xl font-black text-yellow-600">127</div>
                  <div className="text-sm text-gray-600 font-medium">Total Reviews</div>
                  <div className="text-sm text-green-600 font-semibold">+12%</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                  <div className="text-3xl font-black text-blue-600">89</div>
                  <div className="text-sm text-gray-600 font-medium">Requests Sent</div>
                  <div className="text-sm text-green-600 font-semibold">+24%</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                  <div className="text-3xl font-black text-green-600">67%</div>
                  <div className="text-sm text-gray-600 font-medium">Click Rate</div>
                  <div className="text-sm text-green-600 font-semibold">+5%</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                  <div className="text-3xl font-black text-purple-600">4.8</div>
                  <div className="text-sm text-gray-600 font-medium">Avg Rating</div>
                  <div className="text-sm text-green-600 font-semibold">+0.2</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <div className="text-sm font-bold text-gray-700 mb-4">Review Growth</div>
                <div className="flex items-end justify-between h-20">
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-6 rounded"></div>
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-8 rounded"></div>
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-12 rounded"></div>
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-16 rounded"></div>
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-20 rounded"></div>
                  <div className="bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-18 rounded"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-3 font-medium">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Features;