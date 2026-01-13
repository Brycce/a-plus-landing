import { RedesignedHeader } from "@/components/landing/RedesignedHeader";
import { RedesignedHero } from "@/components/landing/RedesignedHero";
import { RedesignedHowItWorks } from "@/components/landing/RedesignedHowItWorks";
import { RedesignedWhyChoose } from "@/components/landing/RedesignedWhyChoose";
import { RedesignedFeatures } from "@/components/landing/RedesignedFeatures";
import { RedesignedPricing } from "@/components/landing/RedesignedPricing";
import { RedesignedFooter } from "@/components/landing/RedesignedFooter";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <RedesignedHeader onScrollToPricing={scrollToPricing} />
      
      <main>
        <RedesignedHero />
        <RedesignedHowItWorks />
        <RedesignedWhyChoose />
        <RedesignedFeatures />
        <RedesignedPricing />

      </main>
      
      <RedesignedFooter />
    </div>
  );
};

export default Landing;