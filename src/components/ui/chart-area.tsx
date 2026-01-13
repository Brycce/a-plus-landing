"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

interface ChartAreaProps {
  data: Array<{ month: string; reviews: number }>;
  title?: string;
  description?: string;
  trend?: {
    value: number;
    period: string;
  };
}

const chartConfig = {
  reviews: {
    label: "Reviews",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function ChartArea({ data, title = "Review Trends", description, trend }: ChartAreaProps) {
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
          <AreaChart
            accessibilityLayer
            data={data}
            width="100%"
            margin={{
              left: 48,
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
                // For small variations, show a more focused range
                const range = Math.max(50, Math.abs(dataMin * 0.1));
                return Math.max(0, dataMin - range);
              }, (dataMax: number) => {
                const range = Math.max(50, Math.abs(dataMax * 0.1));
                return dataMax + range;
              }]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={11}
              tick={{ fill: 'hsl(var(--foreground))' }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="reviews"
              type="natural"
              fill="var(--color-reviews)"
              fillOpacity={0.3}
              stroke="var(--color-reviews)"
              strokeWidth={1.5}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {trend && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                {isPositiveTrend ? 'Trending up' : 'Trending down'} by {Math.abs(trend.value)}% {trend.period}
                {isPositiveTrend ? 
                  <TrendingUp className="h-4 w-4 text-green-600" /> : 
                  <TrendingDown className="h-4 w-4 text-red-600" />
                }
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}