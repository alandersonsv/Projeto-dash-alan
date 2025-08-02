import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface LineChartProps {
  data: {
    name: string;
    investment?: number;
    revenue?: number;
    sales?: number;
  }[];
  dataKeys: {
    investment?: string;
    revenue?: string;
    sales?: string;
  };
}

export function LineChart({ data, dataKeys }: LineChartProps) {
  return (
    <RechartsLineChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {dataKeys.investment && (
        <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
      )}
      {dataKeys.revenue && <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />}
      {dataKeys.sales && <Line type="monotone" dataKey="sales" stroke="#ffc658" />}
    </RechartsLineChart>
  );
}
