import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, MessageSquare, Zap, Clock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const AutomaticReviewRequests = () => {
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
              <h1 className="hidden md:block text-lg font-semibold">Automatic Review Requests</h1>
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
                Automatic Review Requests
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Set up multi-step SMS sequences that automatically send review requests based on job completion, payments, or custom triggers. No manual work required.
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
              <h4 className="font-bold text-lg mb-6">Multi-Step Campaign Example</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Step 1 - Immediate</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-900">
                      Hi {"customerName"}, this is Sarah from ABC Plumbing. If you've got 2 minutes, a review would go a long way for helping other people find our local business!
                    </p>
                    <p className="text-xs text-blue-700 mt-2">Review link: {"reviewLink"}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Step 2 - 3 days later</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      Quick follow-up from Sarah at ABC Plumbing. If you haven't had a chance yet, we'd really appreciate a quick review...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Set up your review request sequence once, and let automation do the rest
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Configure Your Triggers</h3>
                    <p className="text-muted-foreground">Connect to your CRM or set up manual triggers. Messages send automatically when jobs are completed or payments are received.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Customize Your Messages</h3>
                    <p className="text-muted-foreground">Create personalized message templates with dynamic fields like customer name, business name, and review links.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Set Follow-up Timing</h3>
                    <p className="text-muted-foreground">Schedule follow-up messages at optimal intervals. Messages stop automatically if customers respond or leave a review.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Let Automation Work</h3>
                    <p className="text-muted-foreground">Your review requests send automatically, with smart stop conditions to avoid over-messaging customers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border p-8">
              <h4 className="font-bold text-lg mb-6">Multi-Step Campaign Example</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Step 1 - Immediate</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-900">
                      Hi {"{customerName}"}, this is Sarah from ABC Plumbing. If you've got 2 minutes, a review would go a long way for helping other people find our local business!
                    </p>
                    <p className="text-xs text-blue-700 mt-2">Review link: {"{reviewLink}"}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Step 2 - 3 days later</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      Quick follow-up from Sarah at ABC Plumbing. If you haven't had a chance yet, we'd really appreciate a quick review...
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium">Step 3 - 1 week later</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      Final reminder from ABC Plumbing. No worries if you're busy - thanks for your business!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Businesses Love It</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3x More Reviews</h3>
              <p className="text-muted-foreground">Businesses see an average 3x increase in Google reviews within 30 days of setting up automated requests.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save 5+ Hours/Week</h3>
              <p className="text-muted-foreground">No more manually tracking customers or remembering to send review requests. Everything happens automatically.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Stop Conditions</h3>
              <p className="text-muted-foreground">Messages stop automatically when customers respond or leave reviews, preventing over-messaging.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Touch</h3>
              <p className="text-muted-foreground">Messages include customer names, your business details, and personalized content that feels human.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-muted-foreground">Works with Jobber, Housecall Pro, Square, and other systems through direct integrations or Zapier.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Ready</h3>
              <p className="text-muted-foreground">Includes A2P registration and 10DLC phone numbers for reliable SMS delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Automate Your Review Requests?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Start your 14-day free trial and see the difference automation makes
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

export default AutomaticReviewRequests;