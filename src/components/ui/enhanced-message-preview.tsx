import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Clock, User } from 'lucide-react';

interface EnhancedMessagePreviewProps {
  message: string;
  title?: string;
  showAsPhone?: boolean;
  senderName?: string;
  recipientName?: string;
  timestamp?: string;
  className?: string;
}

export const EnhancedMessagePreview = ({ 
  message, 
  title = "Message Preview",
  showAsPhone = false,
  senderName = "Your Business",
  recipientName,
  timestamp = "now",
  className = ""
}: EnhancedMessagePreviewProps) => {
  // Parse message to highlight dynamic content
  const parseMessageContent = (text: string) => {
    if (!text) return text;
    
    // Split by placeholders and style them differently
    const parts = text.split(/(\{[^}]+\})/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\{.+\}$/)) {
        // This is a placeholder variable
        const varName = part.replace(/[{}]/g, '');
        let displayText = part;
        let colorClass = "text-blue-600 bg-blue-50";
        
        // Provide friendly display names for variables
        switch (varName) {
          case 'customer_first_name':
            displayText = recipientName || 'John';
            colorClass = "text-emerald-600 bg-emerald-50 font-medium";
            break;
          case 'owner_name':
            displayText = 'Your Name';
            colorClass = "text-purple-600 bg-purple-50 font-medium";
            break;
          case 'business_name':
            displayText = 'Your Business';
            colorClass = "text-indigo-600 bg-indigo-50 font-medium";
            break;
          case 'review_link':
            displayText = 'https://your-review-link.com';
            colorClass = "text-blue-600 bg-blue-50 underline";
            break;
        }
        
        return (
          <span 
            key={index} 
            className={`px-1.5 py-0.5 rounded text-sm ${colorClass} transition-colors`}
          >
            {displayText}
          </span>
        );
      }
      return part;
    });
  };

  if (showAsPhone) {
    // Mini phone-like interface for inline previews
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageSquare className="w-4 h-4" />
          <span>{title}</span>
        </div>
        
        <div className="max-w-sm">
          {/* Phone container */}
          <div className="bg-gray-900 rounded-2xl p-3 shadow-lg">
            {/* Phone header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">
                    {senderName.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-xs">{senderName}</div>
                  <div className="text-gray-400 text-[10px]">Text Message</div>
                </div>
              </div>
            </div>
            
            {/* Message bubble */}
            <div className="flex">
              <div className="max-w-[85%] bg-gray-600 rounded-xl rounded-bl-sm px-3 py-2">
                <div className="text-white text-xs leading-relaxed whitespace-pre-wrap">
                  {parseMessageContent(message || "Your message will appear here...")}
                </div>
                <div className="flex items-center justify-end mt-1">
                  <div className="text-gray-300 text-[10px]">{timestamp}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Enhanced card-based preview
  return (
    <Card className={`border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 ${className}`}>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{title}</h4>
              <p className="text-xs text-muted-foreground">SMS message preview</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {recipientName && (
              <Badge variant="outline" className="text-xs bg-white">
                <User className="w-3 h-3 mr-1" />
                To: {recipientName}
              </Badge>
            )}
            <Badge variant="outline" className="text-xs bg-white">
              <Clock className="w-3 h-3 mr-1" />
              {timestamp}
            </Badge>
          </div>
        </div>

        {/* Message Content */}
        <div className="relative">
          {/* Message bubble container */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm p-4">
            <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
              {parseMessageContent(message || "Your message will appear here...")}
            </div>
            
            {/* Message meta info */}
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>From: {senderName}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Via SMS • {timestamp}
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full opacity-30"></div>
        </div>

        {/* Variable legend */}
        <div className="text-xs text-muted-foreground border-t pt-3">
          <p className="mb-2 font-medium">Dynamic content will be personalized:</p>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Customer name
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Your name
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              Business name
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Review link
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};