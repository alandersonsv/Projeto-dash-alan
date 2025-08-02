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
import { mockGoogleAdsData } from "@/data/mockData";

interface GoogleAdsContentProps {
  page: string;
}

export function GoogleAdsContent({ page }: GoogleAdsContentProps) {
  const renderContent = () => {
    switch (page) {
      case "KPIs & Funnel":
        return (
          <>
            <MetricsGrid
              metrics={[
                {
                  title: "Investment",
                  value: mockGoogleAdsData.kpis.investment,
                  icon: DollarSign,
                  color: "google",
                },
                {
                  title: "Revenue",
                  value: mockGoogleAdsData.kpis.revenue,
                  icon: DollarSign,
                  color: "google",
                },
                {
                  title: "ROAS",
                  value: mockGoogleAdsData.kpis.roas,
                  icon: TrendingUp,
                  color: "google",
                },
                {
                  title: "Sales",
                  value: mockGoogleAdsData.kpis.sales,
                  icon: ShoppingBag,
                  color: "google",
                },
                {
                  title: "Average Order Value",
                  value: mockGoogleAdsData.kpis.averageOrderValue,
                  icon: DollarSign,
                  color: "google",
                },
                {
                  title: "CPA",
                  value: mockGoogleAdsData.kpis.cpa,
                  icon: DollarSign,
                  color: "google",
                },
                {
                  title: "Conversion Rate %",
                  value: mockGoogleAdsData.kpis.conversionRate,
                  icon: TrendingUp,
                  color: "google",
                },
                {
                  title: "Impressions",
                  value: mockGoogleAdsData.kpis.impressions,
                  icon: Eye,
                  color: "google",
                },
              ]}
            />
            <FunnelChart data={mockGoogleAdsData.funnel} />
            <LineChart data={mockGoogleAdsData.lineChartData} dataKeys={{ investment: "investment", revenue: "revenue", sales: "sales" }} />
            <DataTable columns={mockGoogleAdsData.campaignTableColumns} data={mockGoogleAdsData.campaignTableData} />
          </>
        );
      case "Demographics":
        return (
          <>
            <DemographicsChart data={mockGoogleAdsData.genderData} type="pie" />
            <DemographicsChart data={mockGoogleAdsData.ageData} type="bar" />
            <DemographicsChart data={mockGoogleAdsData.deviceData} type="bar" />
            <DataTable columns={mockGoogleAdsData.locationTableColumns} data={mockGoogleAdsData.locationTableData} />
          </>
        );
      case "Keywords":
        return (
          <>
            <DataTable columns={mockGoogleAdsData.keywordTableColumns} data={mockGoogleAdsData.keywordTableData} />
          </>
        );
      default:
        return (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Conteúdo da página {page} do Google Ads será implementado aqui.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="p-6">{renderContent()}</div>;
}
