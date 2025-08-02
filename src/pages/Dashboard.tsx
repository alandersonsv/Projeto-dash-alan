import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PlatformContent } from "@/components/PlatformContent";
import { DashboardFilters } from "@/components/dashboard/DashboardFilters";

const Dashboard = () => {
  const [activePlatform, setActivePlatform] = useState("analytics");
  const [activePage, setActivePage] = useState("Visão Geral");
  const [filters, setFilters] = useState({});

  const handlePlatformChange = (platformId: string) => {
    setActivePlatform(platformId);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <DashboardHeader
        activePlatform={activePlatform}
        activePage={activePage}
        onPlatformChange={handlePlatformChange}
        onPageChange={handlePageChange}
      />
      <DashboardFilters onFilterChange={handleFilterChange} />
      <PlatformContent platform={activePlatform} page={activePage} />
    </div>
  );
};

export default Dashboard;
