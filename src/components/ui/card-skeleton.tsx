import { Card, CardContent, CardHeader } from './card';
import { Skeleton } from './skeleton';

interface CardSkeletonProps {
  showHeader?: boolean;
  headerLines?: number;
  contentLines?: number;
  className?: string;
}

export function CardSkeleton({ 
  showHeader = true, 
  headerLines = 2, 
  contentLines = 3,
  className 
}: CardSkeletonProps) {
  return (
    <Card className={className}>
      {showHeader && (
        <CardHeader>
          <div className="space-y-2">
            {Array.from({ length: headerLines }).map((_, i) => (
              <Skeleton 
                key={i} 
                className={`h-4 ${i === 0 ? 'w-3/4' : 'w-1/2'}`} 
              />
            ))}
          </div>
        </CardHeader>
      )}
      <CardContent>
        <div className="space-y-3">
          {Array.from({ length: contentLines }).map((_, i) => (
            <Skeleton 
              key={i} 
              className={`h-3 ${
                i === contentLines - 1 ? 'w-2/3' : 'w-full'
              }`} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function MetricCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-16" />
          </div>
          <Skeleton className="h-12 w-12 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
}