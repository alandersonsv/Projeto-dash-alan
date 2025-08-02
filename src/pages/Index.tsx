import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PlatformContent } from "@/components/PlatformContent";
import { supabase } from "@/lib/supabase"; // Ensure supabase client is imported
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const [activePlatform, setActivePlatform] = useState('analytics');
  const [activePage, setActivePage] = useState('Visão Geral');
  const { toast } = useToast();

  // Example of calling an Edge Function
  useEffect(() => {
    const fetchGoogleAnalyticsData = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('google-analytics', {
          method: 'GET',
        });

        if (error) {
          throw error;
        }
        console.log('Google Analytics Data:', data);
        toast({
          title: 'Dados do Google Analytics',
          description: 'Dados carregados com sucesso (exemplo).',
        });
        // Here you would update your state with the fetched data
      } catch (error: any) {
        console.error('Error fetching Google Analytics data:', error);
        toast({
          title: 'Erro ao carregar dados do Google Analytics',
          description: error.message || 'Ocorreu um erro ao buscar os dados.',
          variant: 'destructive',
        });
      }
    };

    // Call the function when the component mounts or when activePlatform changes to 'analytics'
    if (activePlatform === 'analytics') {
      fetchGoogleAnalyticsData();
    }
  }, [activePlatform, toast]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        activePlatform={activePlatform}
        activePage={activePage}
        onPlatformChange={setActivePlatform}
        onPageChange={setActivePage}
      />
      <PlatformContent 
        platform={activePlatform}
        page={activePage}
      />
    </div>
  );
};

export default Index;
