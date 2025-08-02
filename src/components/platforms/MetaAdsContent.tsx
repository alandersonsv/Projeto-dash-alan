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
import { mockMetaAdsData } from "@/data/mockData";

interface MetaAdsContentProps {
  page: string;
}

export function MetaAdsContent({ page }: MetaAdsContentProps) {
  const renderContent = () => {
    switch (page) {
      case "Key KPIs & Funnel":
        return (
          <>
            <MetricsGrid
              metrics={[
                {
                  title: "Investment",
                  value: mockMetaAdsData.kpis.investment,
                  icon: DollarSign,
                  color: "meta",
                },
                {
                  title: "Revenue",
                  value: mockMetaAdsData.kpis.revenue,
                  icon: DollarSign,
                  color: "meta",
                },
                { title: "ROAS", value: mockMetaAdsData.kpis.roas, icon: TrendingUp, color: "meta" },
                { title: "Sales", value: mockMetaAdsData.kpis.sales, icon: ShoppingBag, color: "meta" },
                {
                  title: "Average Order Value",
                  value: mockMetaAdsData.kpis.averageOrderValue,
                  icon: DollarSign,
                  color: "meta",
                },
                { title: "CPA", value: mockMetaAdsData.kpis.cpa, icon: DollarSign, color: "meta" },
                {
                  title: "Conversion Rate %",
                  value: mockMetaAdsData.kpis.conversionRate,
                  icon: TrendingUp,
                  color: "meta",
                },
                {
                  title: "Impressions",
                  value: mockMetaAdsData.kpis.impressions,
                  icon: Eye,
                  color: "meta",
                },
              ]}
            />
            <FunnelChart data={mockMetaAdsData.funnel} />
            <LineChart data={mockMetaAdsData.lineChartData} dataKeys={{ investment: "investment", revenue: "revenue", sales: "sales" }} />
            <DataTable columns={mockMetaAdsData.campaignTableColumns} data={mockMetaAdsData.campaignTableData} />
          </>
        );
      case "Demographics":
        return (
          <>
            <DemographicsChart data={mockMetaAdsData.genderData} type="pie" />
            <DemographicsChart data={mockMetaAdsData.ageData} type="bar" />
            <DemographicsChart data={mockMetaAdsData.deviceData} type="bar" />
            <DataTable columns={mockMetaAdsData.locationTableColumns} data={mockMetaAdsData.locationTableData} />
          </>
        );
      case "Ad Level":
        return (
          <>
            <DataTable columns={mockMetaAdsData.adSetTableColumns} data={mockMetaAdsData.adSetTableData} />
            <DataTable columns={mockMetaAdsData.creativeTableColumns} data={mockMetaAdsData.creativeTableData} />
          </>
        );
      default:
        return (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Conteúdo da página {page} do Meta Ads será implementado aqui.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="p-6">{renderContent()}</div>;
}
