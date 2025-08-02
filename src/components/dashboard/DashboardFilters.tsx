import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CaretSortIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { Input } from "@/components/ui/input";

const dateRanges = [
  { label: "Today", value: "today" },
  { label: "Last 7 Days", value: "last7Days" },
  { label: "Last 30 Days", value: "last30Days" },
  { label: "Last 90 Days", value: "last90Days" },
];

interface DashboardFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function DashboardFilters({ onFilterChange }: DashboardFiltersProps) {
  const [dateRange, setDateRange] = useState<{
    from?: Date;
    to?: Date;
  }>({});
  const [campaign, setCampaign] = useState("");
  const [sourceMedium, setSourceMedium] = useState("");
  const [device, setDevice] = useState("");
  const [open, setOpen] = useState(false);

  const handleDateRangeChange = (range: { from?: Date; to?: Date }) => {
    setDateRange(range);
    onFilterChange({ dateRange: range, campaign, sourceMedium, device });
  };

  const handleCampaignChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampaign(e.target.value);
    onFilterChange({
      dateRange,
      campaign: e.target.value,
      sourceMedium,
      device,
    });
  };

  const handleSourceMediumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSourceMedium(e.target.value);
    onFilterChange({ dateRange, campaign, sourceMedium: e.target.value, device });
  };

  const handleDeviceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDevice(e.target.value);
    onFilterChange({ dateRange, campaign, sourceMedium, device: e.target.value });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-card border-b border-border">
      {/* Date Range Filter */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !dateRange.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center" side="bottom">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from ? dateRange.from : new Date()}
            selected={dateRange}
            onSelect={handleDateRangeChange}
            numberOfMonths={2}
            pagedNavigation
          />
        </PopoverContent>
      </Popover>

      {/* Campaign Filter */}
      <div>
        <Input
          type="text"
          placeholder="Campaign"
          value={campaign}
          onChange={handleCampaignChange}
          className="w-[200px]"
        />
      </div>

      {/* Source/Medium Filter */}
      <div>
        <Input
          type="text"
          placeholder="Source/Medium"
          value={sourceMedium}
          onChange={handleSourceMediumChange}
          className="w-[200px]"
        />
      </div>

      {/* Device Filter */}
      <div>
        <Input
          type="text"
          placeholder="Device"
          value={device}
          onChange={handleDeviceChange}
          className="w-[150px]"
        />
      </div>
    </div>
  );
}
