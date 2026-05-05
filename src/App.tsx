import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResultProvider } from "@/context/RiddleResultContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HelloIA from "./pages/HelloIA";
import RiddlePage from "./pages/RiddlePage";
import ListPage from "./pages/ListPage";
import BBQIdeas from "./pages/BBQIdeas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ResultProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hello" element={<HelloIA />} />
            <Route path="/riddle" element={<RiddlePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/bbq" element={<BBQIdeas />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ResultProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;