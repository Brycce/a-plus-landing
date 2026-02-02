
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Auth from "./pages/Auth";
import EmailConfirmation from "./pages/EmailConfirmation";
import EmailConfirmed from "./pages/EmailConfirmed";
import ResetPassword from "./pages/ResetPassword";
import LoveWallEmbed from "./pages/LoveWallEmbed";
import { ReviewWidget } from "./pages/ReviewWidget";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Upgrade from "./pages/Upgrade";
import Intercom from "@/components/Intercom";
import { fixBusinessCountry } from "@/utils/fix-business-country";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/auth" replace />;
};

// Onboarding Guard Component
const OnboardingGuard = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async (currentUser: User | null) => {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        if (process.env.NODE_ENV === 'development') {
          console.log('Checking onboarding status for user:', currentUser.id);
        }
        
        // Check if user has a profile and business
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('business_id')
          .eq('user_id', currentUser.id)
          .maybeSingle();

        if (process.env.NODE_ENV === 'development') {
          console.log('Profile query result:', { profile, profileError });
        }

        if (profileError) {
          console.error('Profile query error:', profileError);
          setRedirectTo('/onboarding?step=1');
          setLoading(false);
          return;
        }

        if (!profile?.business_id) {
          if (process.env.NODE_ENV === 'development') {
            console.log('No business_id found, redirecting to onboarding step 1', { profile });
          }
          setRedirectTo('/onboarding?step=1');
          setLoading(false);
          return;
        }

        // Check business completion status
        const { data: business, error: businessError } = await supabase
          .from('businesses')
          .select(`
            name, 
            country, 
            subscription_status, 
            subscription_plan,
            phone_number,
            twilio_subaccount_sid,
            a2p_registration_status,
            address,
            city,
            state,
            zip_code
          `)
          .eq('id', profile.business_id)
          .maybeSingle();

        if (process.env.NODE_ENV === 'development') {
          console.log('Business query result:', { business, businessError });
        }

        if (businessError) {
          console.error('Business query error:', businessError);
          setRedirectTo('/onboarding?step=1');
          setLoading(false);
          return;
        }

        if (!business) {
          if (process.env.NODE_ENV === 'development') {
            console.log('No business found, redirecting to onboarding step 1');
          }
          setRedirectTo('/onboarding?step=1');
          setLoading(false);
          return;
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('Business data:', business);
        }

        // Determine which step user should be on based on completion status
        if (!business.country) {
          if (process.env.NODE_ENV === 'development') {
            console.log('No country selected, redirecting to step 1');
          }
          setRedirectTo('/onboarding?step=1');
        } else if (!business.name) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Missing business name, redirecting to step 2', { businessName: business.name, businessNameType: typeof business.name });
          }
          setRedirectTo('/onboarding?step=2');
        } else if (business.country === 'US') {
          // US flow: Country -> Business Structure -> Business Search -> CRM -> Subscription  
          if (!business.subscription_status || business.subscription_status === 'inactive') {
            if (process.env.NODE_ENV === 'development') {
              console.log('No active subscription, redirecting to subscription step');
            }
            setRedirectTo('/onboarding?step=4'); // Step 4 is now subscription in the 5-step flow
          } else {
            if (process.env.NODE_ENV === 'development') {
              console.log('US onboarding complete - subscription active or free plan selected');
            }
            setRedirectTo(null);
          }
        } else if (business.country === 'CA') {
          // CA flow: Country -> Business Structure -> Business Search -> CRM -> Subscription
          if (!business.subscription_status || business.subscription_status === 'inactive') {
            if (process.env.NODE_ENV === 'development') {
              console.log('No active subscription, redirecting to subscription step');
            }
            setRedirectTo('/onboarding?step=4'); // Step 4 is now subscription in the 5-step flow
          } else {
            if (process.env.NODE_ENV === 'development') {
              console.log('CA onboarding complete - subscription active or free plan selected');
            }
            setRedirectTo(null);
          }
        } else {
          // Other countries: Just collect basic info
          if (process.env.NODE_ENV === 'development') {
            console.log('Other country - onboarding complete');
          }
          setRedirectTo(null);
        }

      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setRedirectTo('/onboarding?step=1');
      }
      
      setLoading(false);
    };

    // Check auth state and onboarding status
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          checkOnboardingStatus(currentUser);
        } else {
          setLoading(false);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        checkOnboardingStatus(currentUser);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

// Component to handle legacy URL redirects
const LegacyUrlHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    const jobberConnected = urlParams.get('jobber_connected');
    const accountName = urlParams.get('account_name');
    
    // Handle legacy dashboard URLs with tab parameter
    if (location.pathname === '/dashboard' && tab === 'configuration') {
      // Build new URL with parameters
      let newUrl = '/dashboard/integrations';
      const params = new URLSearchParams();
      
      if (jobberConnected) params.set('jobber_connected', jobberConnected);
      if (accountName) params.set('account_name', accountName);
      
      if (params.toString()) {
        newUrl += '?' + params.toString();
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Redirecting from legacy URL to:', newUrl);
      }
      navigate(newUrl, { replace: true });
    }
  }, [navigate, location]);
  
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <LegacyUrlHandler />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
          <Route path="/email-confirmed" element={<EmailConfirmed />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <OnboardingGuard>
                  <Index />
                </OnboardingGuard>
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding"
            element={
              <ProtectedRoute>
                <Onboarding />
              </ProtectedRoute>
            }
          />
          <Route path="/love-wall/:businessId" element={<LoveWallEmbed />} />
          <Route path="/widget/:businessId" element={<ReviewWidget />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/upgrade"
            element={
              <ProtectedRoute>
                <Upgrade />
              </ProtectedRoute>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Intercom />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
