import { Star } from "lucide-react";
import { Link } from 'react-router-dom';

export function RedesignedFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/aplusblue.png" 
                alt="A+ Reviews Logo" 
                className="w-8 h-8 rounded"
              />
              <span className="text-xl font-semibold text-gray-900">A+ Reviews</span>
            </div>
            <p className="text-gray-600">
              Automate your review collection and grow your business with SMS campaigns that actually work.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="https://app.aplusreview.io/auth?tab=signup" className="text-gray-600 hover:text-gray-900">Get Started</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 A+ Reviews. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-gray-600 text-sm">Made for local businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}