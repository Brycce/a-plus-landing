"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

interface ChartBarProps {
  data: Array<{ month: string; requests: number; reviews: number }>;
  title?: string;
  description?: string;
  trend?: {
    value: number;
    period: string;
  };
}

const chartConfig = {
  requests: {
    label: "Requests Sent",
    color: "hsl(var(--muted-foreground))",
  },
  reviews: {
    label: "Reviews Received",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function ChartBar({ data, title = "Requests vs Reviews", description, trend }: ChartBarProps) {
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
          <BarChart 
            accessibilityLayer 
            data={data}
            width="100%"
            margin={{
              left: 4,
              right: 4,
              top: 8,
              bottom: 8,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.3} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              fontSize={11}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="requests" fill="var(--color-requests)" radius={3} />
            <Bar dataKey="reviews" fill="var(--color-reviews)" radius={3} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {trend && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Response rate {isPositiveTrend ? 'up' : 'down'} by {Math.abs(trend.value)}% {trend.period}
            {isPositiveTrend ? 
              <TrendingUp className="h-4 w-4 text-green-600" /> : 
              <TrendingDown className="h-4 w-4 text-red-600" />
            }
          </div>
          <div className="text-muted-foreground leading-none">
            Showing requests sent vs reviews received
          </div>
        </CardFooter>
      )}
    </Card>
  )
}