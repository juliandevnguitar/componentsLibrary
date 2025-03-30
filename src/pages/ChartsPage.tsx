import BarChart from "@/components/ui/charts/BarChart"
import { useChartData } from "@/hooks/useChartData"
export default function ChartsPage(){

    const {data, config} = useChartData('month')

    return (
        <div className="grid grid-cols-12 gap-4">
            <h1 className="text-2xl font-bold col-span-12">Charts</h1>
            <h2 className="text-lg col-span-12">Bar Chart</h2>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <BarChart 
                    texts={{title: "Users by Device", description: "Users by device type"}}
                    chartData={data}
                    xAxisDataKey="month"
                    yAxisDataKey={["desktop", "mobile"]}
                    chartConfig={config}
                />
            </div>
        </div>
    )
}
