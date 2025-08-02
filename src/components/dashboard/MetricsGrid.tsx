import { MetricCard } from "@/components/MetricCard";

interface MetricsGridProps {
  metrics: {
    title: string;
    value: string | number;
    change?: string;
    changeType?: "positive" | "negative" | "neutral";
    icon: any; // Replace with actual icon type
    color?: "analytics" | "meta" | "google" | "ecommerce" | "seo";
  }[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
