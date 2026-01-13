import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface IPhoneMessagePreviewProps {
  message: string;
  senderName?: string;
  timeDisplay?: string;
  showDeliveryStatus?: boolean;
}

export const IPhoneMessagePreview = ({ 
  message, 
  senderName = "Your Business",
  timeDisplay = "now",
  showDeliveryStatus = true 
}: IPhoneMessagePreviewProps) => {
  // iPhone 14 dimensions scaled down for UI (375x812 -> 300x649)
  const scale = 0.8;
  const width = Math.floor(375 * scale); // 300px
  const height = Math.floor(600 * scale); // 480px

  return (
    <div className="flex flex-col items-center space-y-2">
      <Badge variant="outline" className="text-xs">
        iPhone Message Preview
      </Badge>
      <Card 
        className="relative overflow-hidden border-2 border-gray-800 bg-black"
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          borderRadius: '24px',
        }}
      >
        {/* iPhone screen content */}
        <div className="h-full bg-black text-white relative">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-1 text-white text-sm font-medium">
            <div className="text-white">9:41</div>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>

          {/* Messages header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-white">
                  {senderName.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-white font-medium text-sm">{senderName}</div>
                <div className="text-gray-400 text-xs">Text Message</div>
              </div>
            </div>
            <div className="text-blue-400 text-sm">Details</div>
          </div>

          {/* Message content area */}
          <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto" style={{ maxHeight: `${height - 120}px` }}>
            {/* Sender's message bubble */}
            <div className="flex">
              <div 
                className="max-w-[75%] bg-gray-600 rounded-2xl rounded-bl-md px-4 py-2.5"
              >
                <div className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                  {message || "Your message will appear here..."}
                </div>
                <div className="flex items-center justify-end mt-1 space-x-1">
                  <div className="text-gray-300 text-xs">{timeDisplay}</div>
                  {showDeliveryStatus && (
                    <div className="text-blue-400 text-xs font-medium">Delivered</div>
                  )}
                </div>
              </div>
            </div>

            {/* Sample reply (to show interaction) */}
            <div className="flex justify-end">
              <div 
                className="max-w-[75%] bg-blue-500 rounded-2xl rounded-br-md px-4 py-2.5"
              >
                <div className="text-white text-sm leading-relaxed">
                  Thanks! I'll leave a review right now.
                </div>
                <div className="flex items-center justify-end mt-1 space-x-1">
                  <div className="text-blue-200 text-xs">now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Message input area (showing SMS interface) */}
          <div className="px-4 py-3 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-800 rounded-2xl px-4 py-2.5">
                <div className="text-gray-500 text-sm">Text Message</div>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full opacity-60"
          style={{ width: '134px', height: '5px' }}
        ></div>
      </Card>
      
      <div className="text-xs text-muted-foreground text-center max-w-xs">
        Preview shows how your message will appear on an iPhone. Customer reply shown for context.
      </div>
    </div>
  );
};