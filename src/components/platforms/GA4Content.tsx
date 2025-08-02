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
import { mockGA4Data } from "@/data/mockData";

interface GA4ContentProps {
  page: string;
}

export function GA4Content({ page }: GA4ContentProps) {
  const renderContent = () => {
    switch (page) {
      case "Engagement KPIs":
        return (
          <>
            <MetricsGrid
              metrics={[
                {
                  title: "Sessions",
                  value: mockGA4Data.kpis.sessions,
                  icon: Users,
                  color: "analytics",
                },
                {
                  title: "Users",
                  value: mockGA4Data.kpis.users,
                  icon: Users,
                  color: "analytics",
                },
                {
                  title: "Engagement Rate",
                  value: mockGA4Data.kpis.engagementRate,
                  icon: TrendingUp,
                  color: "analytics",
                },
                {
                  title: "Pageviews",
                  value: mockGA4Data.kpis.pageviews,
                  icon: Eye,
                  color: "analytics",
                },
                {
                  title: "Conversions",
                  value: mockGA4Data.kpis.conversions,
                  icon: ShoppingBag,
                  color: "analytics",
                },
                {
                  title: "Revenue",
                  value: mockGA4Data.kpis.revenue,
                  icon: DollarSign,
                  color: "analytics",
                },
                {
                  title: "Source/Medium",
                  value: mockGA4Data.kpis.sourceMedium,
                  icon: Search,
                  color: "analytics",
                },
              ]}
            />
          </>
        );
      case "Audience":
        return (
          <>
            <DemographicsChart data={mockGA4Data.genderData} type="pie" />
            <DemographicsChart data={mockGA4Data.ageData} type="bar" />
            {/* Add New vs. Returning Users chart here */}
          </>
        );
      case "Landing Pages":
        return (
          <>
            <DataTable columns={mockGA4Data.landingPagesTableColumns} data={mockGA4Data.landingPagesTableData} />
          </>
        );
      default:
        return (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Conteúdo da página {page} do GA4 será implementado aqui.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="p-6">{renderContent()}</div>;
}
