import { MessageSquare, Users, Heart, Layout, BarChart3, Star, TrendingUp, CheckCircle, ArrowDown, Clock, QrCode, Trophy } from 'lucide-react';

interface StaticMockupProps {
  type: 'qr-codes' | 'sms-automation' | 'review-boost' | 'love-wall' | 'widget' | 'analytics';
}

export function StaticMockup({ type }: StaticMockupProps) {
  // All mockups have consistent container styling with proper height
  const containerClasses = "bg-gradient-to-br from-blue-50/30 to-white rounded-2xl p-6 shadow-sm border border-blue-100 h-96 overflow-hidden";

  if (type === 'qr-codes') {
    return <QRCodesMockup containerClasses={containerClasses} />;
  }

  if (type === 'sms-automation') {
    return <SMSAutomationMockup containerClasses={containerClasses} />;
  }

  if (type === 'review-boost') {
    return <ReviewBoostMockup containerClasses={containerClasses} />;
  }

  if (type === 'love-wall') {
    return <LoveWallMockup containerClasses={containerClasses} />;
  }

  if (type === 'widget') {
    return <WidgetMockup containerClasses={containerClasses} />;
  }

  if (type === 'analytics') {
    return <AnalyticsMockup containerClasses={containerClasses} />;
  }

  return null;
}

// QR Codes - Team leaderboard with QR code visualization
function QRCodesMockup({ containerClasses }: { containerClasses: string }) {
  return (
    <div className={containerClasses}>
      <div className="bg-white rounded-xl p-5 h-full shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-semibold text-gray-900">Team Leaderboard</h3>
          </div>
          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">This Month</div>
        </div>

        {/* QR Code Preview */}
        <div className="mb-4 bg-gradient-to-br from-blue-50 to-white rounded-lg p-3 border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-xs text-gray-600 mb-1">Job-Specific QR Code</div>
              <div className="text-xs text-gray-500">Scan to leave a review</div>
            </div>
            <div className="w-16 h-16 bg-white rounded border-2 border-blue-600 flex items-center justify-center">
              <QrCode className="w-12 h-12 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-2">
          {[
            { rank: 1, name: "Mike R.", scans: 23, icon: "🏆" },
            { rank: 2, name: "Sarah M.", scans: 19, icon: "🥈" },
            { rank: 3, name: "John S.", scans: 15, icon: "🥉" },
            { rank: 4, name: "Lisa K.", scans: 12, icon: "" }
          ].map((employee) => (
            <div key={employee.rank} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-700">
                  {employee.icon || employee.rank}
                </div>
                <span className="text-sm font-medium text-gray-700">{employee.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-blue-600">{employee.scans}</span>
                <span className="text-xs text-gray-500">scans</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 p-2 bg-blue-50 rounded-lg">
          <div className="text-center text-xs text-blue-700">
            <span className="font-medium">69 total scans</span> • 87% conversion rate
          </div>
        </div>
      </div>
    </div>
  );
}

// SMS Automation - Clean flow sequence
function SMSAutomationMockup({ containerClasses }: { containerClasses: string }) {
  return (
    <div className={containerClasses}>
      <div className="bg-white rounded-xl p-5 h-full shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          <h3 className="text-base font-semibold text-gray-900">SMS Automation Flow</h3>
        </div>
        
        {/* Flow sequence with downward arrows */}
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">1</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Job Completed</div>
              <div className="text-xs text-gray-500">Trigger: Jobber job status = "Closed"</div>
            </div>
            <CheckCircle className="w-4 h-4 text-blue-600" />
          </div>
          
          {/* Downward Arrow */}
          <div className="flex justify-center py-1">
            <ArrowDown className="w-4 h-4 text-blue-400" />
          </div>
          
          {/* Step 2 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">SMS Sent Immediately</div>
              <div className="text-xs text-gray-500">"Hi John, a quick review would help us!"</div>
            </div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          </div>
          
          {/* Downward Arrow */}
          <div className="flex justify-center py-1">
            <ArrowDown className="w-4 h-4 text-blue-400" />
          </div>
          
          {/* Step 3 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">3</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Customer Reviews</div>
              <div className="text-xs text-gray-500">Average response time: 2.5 hours</div>
            </div>
            <div className="flex text-blue-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <div className="text-center text-sm text-blue-700 font-medium">45% Response Rate • 98% Delivery</div>
        </div>
      </div>
    </div>
  );
}

// Review Boost - Clean campaign interface
function ReviewBoostMockup({ containerClasses }: { containerClasses: string }) {
  return (
    <div className={containerClasses}>
      <div className="bg-white rounded-xl p-5 h-full shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-semibold text-gray-900">Review Boost Campaign</h3>
          </div>
          <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">Launch</button>
        </div>
        
        <div className="space-y-2">
          <div className="bg-blue-50 rounded-lg p-2">
            <div className="text-sm font-medium text-gray-700 mb-1">Import Source</div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">J</span>
              </div>
              <span className="text-sm text-gray-700">Jobber Integration</span>
              <CheckCircle className="w-4 h-4 text-blue-600 ml-auto" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-blue-600">247</div>
              <div className="text-xs text-gray-500">Past Customers</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-blue-600">85%</div>
              <div className="text-xs text-gray-500">Eligible</div>
            </div>
          </div>
          
          <div className="space-y-2">
            {[
              { name: "John S.", status: "delivered" },
              { name: "Sarah M.", status: "opened" },
              { name: "Mike R.", status: "reviewed" }
            ].map((customer, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded gap-2">
                <span className="text-xs text-gray-700 flex-shrink-0">{customer.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                  customer.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                  customer.status === 'opened' ? 'bg-blue-50 text-blue-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {customer.status === 'reviewed' ? '⭐ Reviewed' :
                   customer.status === 'opened' ? '📱 Opened' : '✓ Sent'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Love Wall - Clean review display
function LoveWallMockup({ containerClasses }: { containerClasses: string }) {
  return (
    <div className={containerClasses}>
      <div className="bg-white rounded-xl p-5 h-full shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-semibold text-gray-900">Love Wall Display</h3>
          </div>
          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Live</div>
        </div>
        
        <div className="space-y-2 max-h-64 overflow-hidden">
          {[
            { text: "Amazing service! Professional team and great results.", author: "Sarah M.", rating: 5 },
            { text: "Reliable and fair pricing. Highly recommend!", author: "Mike R.", rating: 5 },
            { text: "Best lawn care service in town. Always on time!", author: "Lisa K.", rating: 5 }
          ].map((review, i) => (
            <div key={i} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex text-blue-400">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-xs text-gray-500">Google</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-1">{review.text}</p>
              <p className="text-xs text-gray-500">- {review.author}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-3 text-center text-xs text-gray-500">
          Showing 3 of 94 reviews • Auto-synced
        </div>
      </div>
    </div>
  );
}

// Widget - Clean floating widget
function WidgetMockup({ containerClasses }: { containerClasses: string }) {
  return (
    <div className={containerClasses}>
      <div className="bg-gray-100 rounded-xl h-full relative overflow-hidden">
        {/* Simulated website content */}
        <div className="p-4">
          <div className="h-3 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded mb-1 w-full"></div>
          <div className="h-2 bg-gray-200 rounded mb-1 w-2/3"></div>
          <div className="h-2 bg-gray-200 rounded mb-4 w-1/2"></div>
          
          <div className="h-24 bg-gray-200 rounded mb-3"></div>
          <div className="h-2 bg-gray-200 rounded mb-1 w-full"></div>
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
        </div>
        
        {/* Clean floating widget */}
        <div className="absolute bottom-3 right-3 bg-white rounded-lg shadow-lg p-3 border border-gray-200 w-44">
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex text-blue-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <span className="text-sm font-semibold text-gray-900">4.9</span>
            <span className="text-xs text-gray-500">(94)</span>
          </div>
          
          <p className="text-xs text-gray-700 mb-2">"Professional team, excellent results!"</p>
          <p className="text-xs text-gray-500">- Recent Customer</p>
        </div>
      </div>
    </div>
  );
}

// Analytics - Clean dashboard
function AnalyticsMockup({ containerClasses }: { containerClasses: string }) {
  return (
    <div className={containerClasses}>
      <div className="bg-white rounded-xl p-5 h-full shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-semibold text-gray-900">Review Analytics</h3>
          </div>
          <div className="flex items-center text-blue-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-xs">+180%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">94</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">4.9</div>
            <div className="text-xs text-gray-500">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">45%</div>
            <div className="text-xs text-gray-500">Response</div>
          </div>
        </div>
        
        {/* Review Volume Chart */}
        <div className="bg-blue-50 rounded-lg p-2 mb-3">
          <div className="text-xs text-gray-600 mb-1">Weekly Reviews</div>
          <div className="flex items-end gap-0.5 h-12">
            {[3, 5, 2, 7, 8, 6, 7, 9].map((value, i) => (
              <div 
                key={i} 
                className="flex-1 bg-blue-600 rounded-t"
                style={{ height: `${value * 11}%` }}
              />
            ))}
          </div>
          <div className="text-xs text-gray-500 text-center mt-1">Last 8 weeks</div>
        </div>
        
        {/* Rating Distribution */}
        <div className="bg-gray-50 rounded-lg p-2">
          <div className="text-xs text-gray-600 mb-2">Rating Distribution</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">5⭐</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-xs text-gray-600">85%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">4⭐</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-400 h-3 rounded-full" style={{ width: '12%' }}></div>
              </div>
              <span className="text-xs text-gray-600">12%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-4">3⭐</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-300 h-3 rounded-full" style={{ width: '3%' }}></div>
              </div>
              <span className="text-xs text-gray-600">3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}