import { Funnel, FunnelChart as RechartsFunnelChart, LabelList, Tooltip } from "recharts";

interface FunnelChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

export function FunnelChart({ data }: FunnelChartProps) {
  return (
    <RechartsFunnelChart width={400} height={300}>
      <Funnel dataKey="value" data={data} isAnimationActive>
        <Tooltip />
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        {/* Add more customization as needed */}
      </Funnel>
    </RechartsFunnelChart>
  );
}
