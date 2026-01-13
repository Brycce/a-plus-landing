import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import AutomaticReviewRequests from "./pages/features/AutomaticReviewRequests";
import ReviewBoost from "./pages/features/ReviewBoost";
import LoveWall from "./pages/features/LoveWall";
import ReviewWidgetFeature from "./pages/features/ReviewWidget";
import Analytics from "./pages/features/Analytics";
import HorsepowerBrands from "./pages/reports/HorsepowerBrands";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/features/automatic-review-requests" element={<AutomaticReviewRequests />} />
            <Route path="/features/review-boost" element={<ReviewBoost />} />
            <Route path="/features/love-wall" element={<LoveWall />} />
            <Route path="/features/review-widget" element={<ReviewWidgetFeature />} />
            <Route path="/features/analytics" element={<Analytics />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/reports/horsepower-brands" element={<HorsepowerBrands />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
