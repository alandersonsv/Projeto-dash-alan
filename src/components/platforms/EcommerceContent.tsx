import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { FunnelChart } from "@/components/dashboard/FunnelChart";
import { LineChart } from "@/components/dashboard/LineChart";
import { DataTable } from "@/components/dashboard/DataTable";
import { DemographicsChart } from "@/components/dashboard/DemographicsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Eye,
  Clock,
  TrendingUp,
  Target,
  DollarSign,
  ShoppingBag,
  Search,
  FileText,
} from "lucide-react";
import { mockEcommerceData } from "@/data/mockData";

interface EcommerceContentProps {
  page: string;
}

export function EcommerceContent({ page }: EcommerceContentProps) {
  const renderContent = () => {
    switch (page) {
      case "Ecommerce KPIs":
        return (
          <>
            <MetricsGrid
              metrics={[
                {
                  title: "Total Revenue",
                  value: mockEcommerceData.kpis.totalRevenue,
                  icon: DollarSign,
                  color: "ecommerce",
                },
                {
                  title: "Transactions",
                  value: mockEcommerceData.kpis.transactions,
                  icon: ShoppingBag,
                  color: "ecommerce",
                },
                {
                  title: "Average Order Value",
                  value: mockEcommerceData.kpis.averageOrderValue,
                  icon: DollarSign,
                  color: "ecommerce",
                },
                {
                  title: "Products Sold",
                  value: mockEcommerceData.kpis.productsSold,
                  icon: ShoppingBag,
                  color: "ecommerce",
                },
                {
                  title: "Conversion Rate",
                  value: mockEcommerceData.kpis.conversionRate,
                  icon: TrendingUp,
                  color: "ecommerce",
                },
                {
                  title: "ROAS",
                  value: mockEcommerceData.kpis.roas,
                  icon: TrendingUp,
                  color: "ecommerce",
                },
              ]}
            />
          </>
        );
      case "Ecommerce Funnel":
        return (
          <>
            <FunnelChart data={mockEcommerceData.funnel} />
          </>
        );
      case "Product/Category":
        return (
          <>
            <DataTable columns={mockEcommerceData.productTableColumns} data={mockEcommerceData.productTableData} />
          </>
        );
      default:
        return (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Conteúdo da página {page} do Ecommerce será implementado aqui.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="p-6">{renderContent()}</div>;
}
