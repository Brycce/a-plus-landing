import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';

interface RedesignedHeaderProps {
  onScrollToPricing?: () => void;
}

export function RedesignedHeader({ onScrollToPricing }: RedesignedHeaderProps) {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/aplusblue.png" 
              alt="A+ Reviews Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded"
            />
            <span className="text-xl text-gray-900 font-semibold">A+ Reviews</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <button 
            onClick={onScrollToPricing}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-600" asChild>
            <a href="https://app.aplusreview.io/auth?tab=signin">Sign in</a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <a href="https://app.aplusreview.io/auth?tab=signup">Start free trial</a>
          </Button>
        </div>
        
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}