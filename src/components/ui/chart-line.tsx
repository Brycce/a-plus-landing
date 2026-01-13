"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartLineProps {
  data: Array<{ month: string; rating: number }>;
  title?: string;
  description?: string;
  trend?: {
    value: number;
    period: string;
  };
  targetLine?: number;
}

const chartConfig = {
  rating: {
    label: "Rating",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function ChartLine({ 
  data, 
  title = "Average Rating Trend", 
  description, 
  trend,
  targetLine = 4.5 
}: ChartLineProps) {
  const isPositiveTrend = trend && trend.value > 0;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-48 w-full">
          <LineChart
            accessibilityLayer
            data={data}
            width="100%"
            margin={{
              left: 4,
              right: 4,
              top: 8,
              bottom: 24,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.3} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
              tick={{ fill: 'hsl(var(--foreground))' }}
              tickFormatter={(value) => value.includes('*') ? value : value.slice(0, 3)}
            />
            <YAxis
              domain={[(dataMin: number) => {
                // For small variations, adjust the domain to make changes more visible
                const min = Math.max(1, dataMin - 0.5);
                const max = Math.min(5, dataMin + 0.5);
                return min === max ? Math.max(1, min - 0.2) : min;
              }, (dataMax: number) => {
                const min = Math.max(1, dataMax - 0.5);
                const max = Math.min(5, dataMax + 0.5);
                return min === max ? Math.min(5, max + 0.2) : max;
              }]}
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              fontSize={11}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                formatter={(value) => [
                  `${Number(value).toFixed(1)} stars`,
                  'Average Rating'
                ]}
              />}
            />
            <ReferenceLine 
              y={targetLine} 
              stroke="hsl(var(--muted-foreground))" 
              strokeDasharray="2 2" 
              opacity={0.5}
            />
            <Line
              dataKey="rating"
              type="monotone"
              stroke="var(--color-rating)"
              strokeWidth={2}
              dot={{ fill: "var(--color-rating)", strokeWidth: 2, r: 3 }}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {trend && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Rating {isPositiveTrend ? 'improved' : 'decreased'} by {Math.abs(trend.value).toFixed(1)} stars {trend.period}
                {isPositiveTrend ? 
                  <TrendingUp className="h-4 w-4 text-green-600" /> : 
                  <TrendingDown className="h-4 w-4 text-red-600" />
                }
              </div>
              <div className="text-muted-foreground leading-none text-xs">
                Target: {targetLine} stars
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}