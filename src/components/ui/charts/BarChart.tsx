import { 
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent
} from "@/components/ui/chart"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts"


export default function BarChartComponent(
    {
        texts,
        chartData,
        xAxisDataKey,
        yAxisDataKey,
        chartConfig
    } 
    : 
    {
        texts: {title: string, description: string},
        chartData: any[],
        xAxisDataKey: string,
        yAxisDataKey: string[],
        chartConfig: ChartConfig
    }){
    return (
        <Card>
            <CardHeader>
                <CardTitle>{texts.title}</CardTitle>
                <CardDescription>
                    {texts.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full min-h-[200px] ">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis 
                        dataKey={xAxisDataKey}
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    {
                        yAxisDataKey.map((key) => (
                            <Bar dataKey={key} fill={`var(--color-${key})`} radius={4} />
                        ))
                    }
                </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
       
    )
}