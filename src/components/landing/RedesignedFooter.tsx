import { Link } from 'react-router-dom';

export function RedesignedFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <img
                src="/lovable-uploads/aplusblue.png"
                alt="A+ Reviews Logo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight">A+ Reviews</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Automate your review collection and grow your business with SMS campaigns that work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Product</h3>
            <ul className="space-y-3.5">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-[15px]">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-[15px]">Pricing</a></li>
              <li><Link to="/auth?tab=signup" className="text-gray-400 hover:text-white transition-colors text-[15px]">Get Started</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-3.5">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-[15px]">Blog</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Legal</h3>
            <ul className="space-y-3.5">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-[15px]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-[15px]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} A+ Reviews. All rights reserved.
          </p>
          <span className="text-gray-500 text-sm">Built for local businesses</span>
        </div>
      </div>
    </footer>
  );
}
