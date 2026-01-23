import { Button } from '@/components/ui/button';
import { ArrowLeft, Upload, Download, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const ReviewBoost = () => {
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
              <h1 className="hidden md:block text-lg font-semibold">Review Boost</h1>
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
              <div className="text-4xl mb-6">🚀</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Review Boost
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Import your past customers from Jobber or CSV files and launch targeted bulk review campaigns to quickly boost your online ratings.
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
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-lg">Import Customers</h4>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-blue-700 text-sm rounded-full font-medium">Jobber</span>
                    <span className="px-3 py-1 bg-gray-100 text-green-700 text-sm rounded-full font-medium">CSV</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="font-medium">John Smith</span>
                    <span className="text-sm text-gray-500">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="font-medium">Jane Doe</span>
                    <span className="text-sm text-gray-500">(555) 987-6543</span>
                  </div>
                  <div className="text-center py-4">
                    <span className="text-sm text-gray-400 font-medium">+ 147 more customers</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg">
                  Send to 149 Customers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How Review Boost Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your customer database into a powerful review generation machine
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Import Your Customers</h3>
                    <p className="text-muted-foreground">Connect to Jobber for automatic import or upload CSV files with customer names and phone numbers. We handle the rest.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Select Your Targets</h3>
                    <p className="text-muted-foreground">Review your customer list, filter duplicates, and choose exactly who should receive review requests. Full control over every campaign.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Launch Your Campaign</h3>
                    <p className="text-muted-foreground">Send personalized review requests to hundreds of customers at once. Messages are scheduled for optimal delivery times.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Track Results</h3>
                    <p className="text-muted-foreground">Monitor campaign performance with detailed analytics. See who responded, clicked links, and left reviews.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border p-8">
              <h4 className="font-bold text-lg mb-6">Campaign Dashboard</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="font-semibold">Import Customers</h5>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-blue-700 text-sm rounded-full font-medium">Jobber</span>
                    <span className="px-3 py-1 bg-gray-100 text-green-700 text-sm rounded-full font-medium">CSV</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked className="rounded" />
                      <span className="font-medium">John Smith</span>
                    </div>
                    <span className="text-sm text-gray-500">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked className="rounded" />
                      <span className="font-medium">Jane Doe</span>
                    </div>
                    <span className="text-sm text-gray-500">(555) 987-6543</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span className="font-medium text-gray-400">Mike Johnson</span>
                    </div>
                    <span className="text-xs text-red-500">Duplicate</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-blue-800 font-medium">149 customers selected</p>
                  <p className="text-xs text-gray-600 mt-1">Estimated delivery: Today at 5:00 PM</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg">
                  Launch Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Multiple Import Options</h2>
            <p className="text-xl text-muted-foreground">
              Get your customer data however works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Download className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Jobber Integration</h3>
                  <p className="text-muted-foreground">Direct connection</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Automatic customer sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Job completion triggers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-time updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No manual export needed</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Connect Jobber</a>
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CSV Upload</h3>
                  <p className="text-muted-foreground">Universal compatibility</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Works with any system</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Simple drag & drop upload</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Auto-detects columns</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Handles large files</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://app.aplusreviews.io/auth?tab=signup&utm_source=landing&utm_medium=website">Upload CSV</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Turn Your Customer Database Into Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most businesses have hundreds of satisfied customers who never left a review. Review Boost helps you reach them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-600 mb-2">3-5x</div>
              <div className="text-xl font-semibold mb-2">More Reviews</div>
              <p className="text-muted-foreground">Typical increase in monthly reviews</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-600 mb-2">15-25%</div>
              <div className="text-xl font-semibold mb-2">Response Rate</div>
              <p className="text-muted-foreground">Industry average is 2-5%</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-600 mb-2">24-48hrs</div>
              <div className="text-xl font-semibold mb-2">Time to First Reviews</div>
              <p className="text-muted-foreground">From campaign launch</p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <p className="text-2xl font-medium text-gray-900 mb-4">
                "Most small businesses have 200-500 past customers sitting in their CRM or spreadsheets. That's potentially 50-150 new Google reviews waiting to be unlocked."
              </p>
              <footer className="text-lg text-gray-600">
                — Review Marketing Industry Research
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Review Boost Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Duplicate Detection</h3>
              <p className="text-muted-foreground">Automatically identifies and flags duplicate customers to prevent double-messaging.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimal Timing</h3>
              <p className="text-muted-foreground">Messages send at 5PM local time for maximum open and response rates.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bulk Processing</h3>
              <p className="text-muted-foreground">Send to hundreds or thousands of customers at once. No limits on campaign size.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Setup</h3>
              <p className="text-muted-foreground">Upload your customer list and launch campaigns in under 5 minutes.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-muted-foreground">Detailed analytics show exactly who responded, clicked, and left reviews.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Ready</h3>
              <p className="text-muted-foreground">Built-in A2P registration and carrier-approved messaging for reliable delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Boost Your Reviews?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Turn your customer database into a review generation machine
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

export default ReviewBoost;