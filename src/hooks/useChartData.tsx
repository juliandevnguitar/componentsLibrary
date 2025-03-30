import { useState, useEffect } from "react";
import { type ChartConfig } from "@/components/ui/chart";
import { chartData } from "@/components/ui/charts/data";


function generateChartConfig<T extends Record<string, any>>({data, xAxisDataKey}: {data: T[], xAxisDataKey: keyof T}): ChartConfig {
    if (!data.length) return {};
    
    // Get all keys except the one used as xAxisDataKey
    const sampleRow = data[0];
    const metrics = Object.keys(sampleRow).filter(key => key !== xAxisDataKey);
    
    // Generate configuration for each metric
    const config: ChartConfig = {}
    const colors = ['oklch(0.45 0.2642 269.37)', 'oklch(0.76 0.1472 38.25)', 'oklch(0.45 0.2642 269.37)', 'oklch(0.45 0.2642 269.37)'];
  
    metrics.forEach((metric, index) => {
      config[metric] = {
        label: metric.charAt(0).toUpperCase() + metric.slice(1),
        color: colors[index % colors.length]
      };
    });
  
    return config;
  }

// This hook is used to fetch data from the API and generate the appropriate config for the chart component based on the data

export function useChartData<T extends Record<string, any>>(xAxisDataKey: keyof T){
    const [data, setData] = useState<T[]>([]);
    const [config, setConfig] = useState<ChartConfig>({});

    useEffect(()=> {
        // Simulate API call with a promise
        const fetchData = new Promise<T[]>((resolve) => {
            setTimeout(()=> {
                resolve(chartData as unknown as T[])
            }, 500)
        })
        fetchData.then((data) => {
            setData(data)
            setConfig(generateChartConfig({data, xAxisDataKey}))
        })
    }, [])

    
    return {data, config}
}
