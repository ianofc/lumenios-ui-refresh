import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AlunoDashboard from "./pages/AlunoDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import SalaDeAula from "./pages/SalaDeAula";
import Biblioteca from "./pages/Biblioteca";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AlunoDashboard />} />
          <Route path="/disciplinas" element={<AlunoDashboard />} />
          <Route path="/desempenho" element={<AlunoDashboard />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/sala-de-aula/:id" element={<SalaDeAula />} />
          <Route path="/professor" element={<ProfessorDashboard />} />
          <Route path="/professor/*" element={<ProfessorDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
