import { MetaAdsContent } from "@/components/platforms/MetaAdsContent";
import { GoogleAdsContent } from "@/components/platforms/GoogleAdsContent";
import { GA4Content } from "@/components/platforms/GA4Content";
import { SEOContent } from "@/components/platforms/SEOContent";
import { EcommerceContent } from "@/components/platforms/EcommerceContent";
import { Card, CardContent } from "@/components/ui/card";

interface PlatformContentProps {
  platform: string;
  page: string;
}

export function PlatformContent({ platform, page }: PlatformContentProps) {
  const renderContent = () => {
    switch (platform) {
      case "meta":
        return <MetaAdsContent page={page} />;
      case "google-ads":
        return <GoogleAdsContent page={page} />;
      case "analytics":
        return <GA4Content page={page} />;
      case "seo":
        return <SEOContent page={page} />;
      case "ecommerce":
        return <EcommerceContent page={page} />;
      default:
        return (
          <Card>
            <CardContent className="p-6">
              <p>Select a platform to view data.</p>
            </CardContent>
          </Card>
        );
    }
  };

  return <>{renderContent()}</>;
}
