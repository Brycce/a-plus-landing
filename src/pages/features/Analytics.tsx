import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart3, TrendingUp, Users, Star, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const Analytics = () => {
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
                  src="/images/aplusblue.png" 
                  alt="A+ Reviews Logo" 
                  className="w-8 h-8 rounded"
                />
                <span className="text-xl font-bold text-foreground">A+ Reviews</span>
              </Link>
              <div className="hidden md:block text-muted-foreground">/</div>
              <h1 className="hidden md:block text-lg font-semibold">Analytics</h1>
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
              <div className="text-4xl mb-6">📊</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Analytics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get deep insights into your review performance with comprehensive analytics that help you understand customer sentiment and improve your business.
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
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-600">4.8</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-600">247</div>
                  <div className="text-sm text-gray-600">Total Reviews</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-600">89%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-600">156</div>
                  <div className="text-sm text-gray-600">Messages Sent</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm font-medium text-gray-700 mb-3">Review Growth</div>
                <div className="flex items-end justify-between h-16">
                  <div className="bg-blue-500 w-4 h-4 rounded"></div>
                  <div className="bg-blue-500 w-4 h-6 rounded"></div>
                  <div className="bg-blue-500 w-4 h-10 rounded"></div>
                  <div className="bg-blue-500 w-4 h-12 rounded"></div>
                  <div className="bg-blue-500 w-4 h-16 rounded"></div>
                  <div className="bg-blue-500 w-4 h-14 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Analytics Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See all your review metrics in one comprehensive dashboard
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">4.8</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 fill-current ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-blue-700">Average Rating</div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">247</div>
                <div className="text-sm text-green-700 mb-2">Total Reviews</div>
                <div className="text-xs text-gray-600">↗ +23 this month</div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">89%</div>
                <div className="text-sm text-purple-700 mb-2">Response Rate</div>
                <div className="text-xs text-gray-600">↗ +5% vs last month</div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">156</div>
                <div className="text-sm text-yellow-700 mb-2">Messages Sent</div>
                <div className="text-xs text-gray-600">This month</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Review Trend (Last 6 Months)</h4>
                <div className="bg-gray-50 rounded-lg p-6 h-48 flex items-end justify-between">
                  <div className="flex items-end gap-2">
                    <div className="bg-blue-400 w-8 h-16 rounded-t"></div>
                    <div className="bg-blue-400 w-8 h-20 rounded-t"></div>
                    <div className="bg-blue-400 w-8 h-28 rounded-t"></div>
                    <div className="bg-blue-400 w-8 h-32 rounded-t"></div>
                    <div className="bg-blue-400 w-8 h-36 rounded-t"></div>
                    <div className="bg-blue-400 w-8 h-40 rounded-t"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Rating Distribution</h4>
                <div className="space-y-3">
                  {[
                    { stars: 5, percentage: 68, count: 168 },
                    { stars: 4, percentage: 22, count: 54 },
                    { stars: 3, percentage: 7, count: 17 },
                    { stars: 2, percentage: 2, count: 5 },
                    { stars: 1, percentage: 1, count: 3 }
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm">{rating.stars}</span>
                        <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${rating.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 w-16 text-right">
                        {rating.count} ({rating.percentage}%)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Actionable Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the data you need to make informed decisions about your review strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performance Trends</h3>
                    <p className="text-muted-foreground">Track review volume, average ratings, and response rates over time to identify patterns and opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Sentiment</h3>
                    <p className="text-muted-foreground">Understand what customers love and what needs improvement with detailed sentiment analysis and keyword tracking.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Campaign Effectiveness</h3>
                    <p className="text-muted-foreground">Measure the success of your review campaigns with detailed metrics on open rates, click rates, and conversions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timing Optimization</h3>
                    <p className="text-muted-foreground">Discover the best times and days to send review requests based on your actual customer response patterns.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border p-6">
              <h4 className="font-bold text-lg mb-6">Weekly Insights Report</h4>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-800 text-sm">Top Performing Day</span>
                  </div>
                  <div className="text-green-700 text-sm">
                    Tuesday campaigns have 34% higher response rates
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-blue-800 text-sm">Customer Feedback</span>
                  </div>
                  <div className="text-blue-700 text-sm">
                    "Professional" mentioned 23 times this month (+43%)
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="font-semibold text-yellow-800 text-sm">Optimization Tip</span>
                  </div>
                  <div className="text-yellow-700 text-sm">
                    Try sending follow-ups 3 days earlier for better results
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-purple-800 text-sm">Goal Progress</span>
                  </div>
                  <div className="text-purple-700 text-sm">
                    73% of way to monthly target (18 reviews to go)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Reporting</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Metrics</h3>
              <p className="text-muted-foreground">Track total reviews, average ratings, response rates, and review velocity across all platforms.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Tracking</h3>
              <p className="text-muted-foreground">Monitor month-over-month growth in reviews, ratings improvements, and campaign performance.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Insights</h3>
              <p className="text-muted-foreground">Understand customer sentiment with keyword analysis, common themes, and satisfaction trends.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Campaign ROI</h3>
              <p className="text-muted-foreground">Measure the effectiveness of your review campaigns with detailed conversion and engagement metrics.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scheduled Reports</h3>
              <p className="text-muted-foreground">Get automated weekly and monthly reports delivered to your inbox with key insights and recommendations.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
              <p className="text-muted-foreground">Compare your review performance against local competitors to identify opportunities for improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Start Making Data-Driven Decisions
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Get the insights you need to grow your business with comprehensive analytics
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

export default Analytics;