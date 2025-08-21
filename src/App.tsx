import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import PublishersLanding from "./pages/PublishersLanding";
import PublishersAILanding from "./pages/PublishersAILanding";
import EducatorsLanding from "./pages/EducatorsLanding";
import AgenciesLanding from "./pages/AgenciesLanding";
import Agencies2Landing from "./pages/Agencies2Landing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/publishers" element={<PublishersLanding />} />
          <Route path="/publishers-ai" element={<PublishersAILanding />} />
          <Route path="/educators" element={<EducatorsLanding />} />
          <Route path="/agencies" element={<AgenciesLanding />} />
          <Route path="/agencies-2" element={<Agencies2Landing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
