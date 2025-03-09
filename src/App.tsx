import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import BusInfo from "./pages/BusInfo";
import QRCodes from "./pages/QRCodes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Apply overflow-x-hidden to body to prevent horizontal scrolling
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bus/:id" element={<BusInfo />} />
            <Route path="/qrcodes" element={<QRCodes />} />
            {/* Direct bus ID route */}
            <Route path="/:id" element={<BusIdRedirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Component to handle direct bus ID URLs
const BusIdRedirect = () => {
  const busIds = ['tnstc001', 'tnstc002', 'tnstc003', 'tnstc004', 'tnstc005'];
  const path = window.location.pathname.slice(1); // Remove leading slash
  
  // If the path matches a bus ID, redirect to the bus details page
  if (busIds.includes(path)) {
    return <Navigate to={`/bus/${path}`} replace />;
  }
  
  // Otherwise, show the not found page
  return <NotFound />;
};

export default App;
