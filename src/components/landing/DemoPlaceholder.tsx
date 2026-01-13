interface DemoPlaceholderProps {
  title: string;
  description?: string;
  size?: 'hero' | 'feature';
  gifPath?: string;
}

export function DemoPlaceholder({ title, description, size = 'feature', gifPath }: DemoPlaceholderProps) {
  const isHero = size === 'hero';
  
  if (gifPath) {
    return (
      <div className={`${isHero ? 'bg-gray-50 rounded-2xl p-12 shadow-inner' : 'bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8'}`}>
        <div className={`bg-white rounded-xl shadow-lg ${isHero ? 'p-8 max-w-2xl mx-auto' : 'p-4'} border border-blue-100`}>
          <img 
            src={gifPath} 
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${isHero ? 'bg-gray-50 rounded-2xl p-12 shadow-inner' : 'bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8'}`}>
      <div className={`bg-white rounded-xl shadow-sm ${isHero ? 'p-8 max-w-2xl mx-auto' : 'p-8'} text-center border border-blue-100`}>
        <div className="text-primary mb-2 font-medium">{title}</div>
        <div className="text-sm text-gray-500">
          {description || `${title} demo will go here`}
        </div>
        <div className="text-xs text-gray-400 mt-2">
          {isHero ? 'Animated GIF showing the product in action' : 'Interactive demo placeholder'}
        </div>
      </div>
    </div>
  );
}