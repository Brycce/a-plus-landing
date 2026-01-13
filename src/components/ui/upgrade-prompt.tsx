import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UpgradePromptProps {
  feature: string;
  description: string;
  ctaText?: string;
  showExample?: boolean;
  exampleContent?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'card' | 'overlay' | 'banner';
}

export function UpgradePrompt({
  feature,
  description,
  ctaText = "Upgrade Now",
  showExample = false,
  exampleContent,
  className = "",
  size = 'md',
  variant = 'card'
}: UpgradePromptProps) {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    // Navigate directly to onboarding subscription step
    navigate('/onboarding?step=4');
  };

  if (variant === 'overlay') {
    return (
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10 ${className}`}>
        <Card className="max-w-sm mx-4">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg">{feature}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={handleUpgrade} className="w-full !text-white">
              <Zap className="w-4 h-4 mr-2" />
              {ctaText}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-900">{feature}</h3>
              <p className="text-sm text-amber-700">{description}</p>
            </div>
          </div>
          <Button onClick={handleUpgrade} variant="outline" size="sm" className="border-amber-300 hover:bg-amber-100">
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card className={`relative border-dashed border-2 border-primary/20 !bg-white overflow-hidden ${className}`} style={{ backgroundColor: 'white', height: '480px' }}>
      {showExample && exampleContent && (
        <div className="pointer-events-none">
          {exampleContent}
        </div>
      )}
      
      <CardContent className={`${showExample ? 'absolute inset-0 bg-white' : ''} h-full flex flex-col items-center text-center p-8`}>
        {/* Top Section - Icon, Badge, Title, Description */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mt-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pro Feature
          </Badge>
          
          <CardTitle className="text-xl mb-4 leading-tight">{feature}</CardTitle>
          <CardDescription className="text-center max-w-sm leading-relaxed">
            {description}
          </CardDescription>
        </div>
        
        {/* Bottom Section - Button and Trial Info */}
        <div className="flex flex-col items-center">
          <Button onClick={handleUpgrade} size="lg" className="gap-2 !text-white mb-4 px-8">
            <Zap className="w-4 h-4" />
            {ctaText}
          </Button>
          
          <p className="text-xs text-muted-foreground">
            14-day free trial • Cancel anytime
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// Hook to check if user is on free plan
export function useIsFreePlan() {
  // This would typically come from your auth/business context
  // For now, we'll create a simple implementation
  return { isFreePlan: false }; // You'll need to implement this based on your auth setup
}

// Note: Components using upgrade prompts should import and use isUserOnFreePlan 
// or hasActivePaidSubscription from @/utils/subscription instead of this hook