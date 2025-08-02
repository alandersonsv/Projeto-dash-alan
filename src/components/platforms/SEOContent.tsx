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
import { mockSEOData } from "@/data/mockData";

interface SEOContentProps {
  page: string;
}

export function SEOContent({ page }: SEOContentProps) {
  const renderContent = () => {
    switch (page) {
      case "KPIs":
        return (
          <>
            <MetricsGrid
              metrics={[
                {
                  title: "Organic Sessions",
                  value: mockSEOData.kpis.organicSessions,
                  icon: Users,
                  color: "seo",
                },
                {
                  title: "New Users",
                  value: mockSEOData.kpis.newUsers,
                  icon: Users,
                  color: "seo",
                },
                {
                  title: "Pages Visited",
                  value: mockSEOData.kpis.pagesVisited,
                  icon: FileText,
                  color: "seo",
                },
                {
                  title: "Conversions",
                  value: mockSEOData.kpis.conversions,
                  icon: ShoppingBag,
                  color: "seo",
                },
                {
                  title: "Keywords",
                  value: mockSEOData.kpis.keywords,
                  icon: Search,
                  color: "seo",
                },
              ]}
            />
          </>
        );
      case "Content/Blog":
        return (
          <>
            <DataTable columns={mockSEOData.contentTableColumns} data={mockSEOData.contentTableData} />
          </>
        );
      default:
        return (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Conteúdo da página {page} do SEO/Blog será implementado aqui.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="p-6">{renderContent()}</div>;
}
