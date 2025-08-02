{`import React, { useState, useEffect } from 'react';
import { Calendar, Monitor, Globe, Link, FileText, Megaphone } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface GlobalFiltersProps {
  onFiltersChange?: (filters: any) => void;
}

const GlobalFilters: React.FC<GlobalFiltersProps> = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    period: '30days',
    device: 'all',
    location: 'all',
    source: 'all',
    pageUrl: '',
    campaign: 'all'
  });

  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  }, [filters, onFiltersChange]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };

  return (
    <div className="sticky top-0 z-50 bg-card border-b">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 p-4 gap-4">
        {/* Period Filter */}
        <div>
          <div className="flex items-center mb-1">
            <Calendar className="mr-2 h-4 w-4" />
            <label htmlFor="period" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Period</label>
          </div>
          <Select value={filters.period} onValueChange={(value) => handleFilterChange('period', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Device Filter */}
        <div>
          <div className="flex items-center mb-1">
            <Monitor className="mr-2 h-4 w-4" />
            <label htmlFor="device" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Device</label>
          </div>
          <Select value={filters.device} onValueChange={(value) => handleFilterChange('device', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select device" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="desktop">Desktop</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div>
          <div className="flex items-center mb-1">
            <Globe className="mr-2 h-4 w-4" />
            <label htmlFor="location" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Location</label>
          </div>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="brasil">Brasil</SelectItem>
              <SelectItem value="sao_paulo">São Paulo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Source Filter */}
        <div>
          <div className="flex items-center mb-1">
            <Link className="mr-2 h-4 w-4" />
            <label htmlFor="source" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Source</label>
          </div>
          <Select value={filters.source} onValueChange={(value) => handleFilterChange('source', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="organic">Organic Search</SelectItem>
              <SelectItem value="direct">Direct</SelectItem>
              <SelectItem value="social">Social</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Page URL Filter */}
        <div>
          <div className="flex items-center mb-1">
            <FileText className="mr-2 h-4 w-4" />
            <label htmlFor="pageUrl" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Page URL</label>
          </div>
          <Input
            id="pageUrl"
            type="text"
            placeholder="Enter URL"
            value={filters.pageUrl}
            onChange={(e) => handleFilterChange('pageUrl', e.target.value)}
            className="w-full"
          />
        </div>

        {/* Campaign Filter */}
        <div>
          <div className="flex items-center mb-1">
            <Megaphone className="mr-2 h-4 w-4" />
            <label htmlFor="campaign" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Campaign</label>
          </div>
          <Select value={filters.campaign} onValueChange={(value) => handleFilterChange('campaign', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="summer">Summer Campaign</SelectItem>
              <SelectItem value="blackfriday">Black Friday</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default GlobalFilters;`}
