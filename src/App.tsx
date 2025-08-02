import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import type { Session } from "@supabase/supabase-js";

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("[1] Auth effect running");
    
    const initializeAuth = async () => {
      console.log("[2] Starting session initialization");
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error("[3] Session error:", error);
        setLoading(false);
        return;
      }

      console.log("[4] Initial session:", session);
      setSession(session);
      setLoading(false);
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(`[5] Auth state changed (${event}):`, session);
      setSession(session);
    });

    return () => {
      console.log("[6] Cleaning up auth listener");
      subscription?.unsubscribe();
    };
  }, []);

  console.log("[7] App render - loading:", loading, "session:", session?.user?.email);

  if (loading) {
    console.log("[8] Showing loading state");
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/" 
              element={session ? <Index /> : <Auth />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
