import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface RedesignedHeaderProps {
  onScrollToPricing?: () => void;
}

export function RedesignedHeader({ onScrollToPricing }: RedesignedHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/aplusblue.png"
            alt="A+ Reviews Logo"
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-[22px] text-gray-900 font-bold tracking-tight">A+ Reviews</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#how-it-works" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
          <a href="#features" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <button
            onClick={onScrollToPricing}
            className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <Link to="/blog" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-[15px] font-medium text-gray-700 hover:text-gray-900" asChild>
            <Link to="https://app.aplusreviews.io/auth?tab=signin">Sign in</Link>
          </Button>
          <Button className="bg-[#3C83F6] hover:bg-[#2563EB] text-white text-[15px] font-semibold rounded-full px-6 h-10" asChild>
            <Link to="https://app.aplusreviews.io/auth?tab=signup">Get started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 animate-fade-in">
          <a href="#how-it-works" className="block text-[15px] font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#features" className="block text-[15px] font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Features</a>
          <button onClick={() => { onScrollToPricing?.(); setMobileOpen(false); }} className="block text-[15px] font-medium text-gray-700 py-2 w-full text-left">Pricing</button>
          <Link to="/blog" className="block text-[15px] font-medium text-gray-700 py-2">Blog</Link>
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link to="https://app.aplusreviews.io/auth?tab=signin">Sign in</Link>
            </Button>
            <Button className="w-full bg-[#3C83F6] hover:bg-[#2563EB] text-white rounded-full" asChild>
              <Link to="https://app.aplusreviews.io/auth?tab=signup">Get started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
