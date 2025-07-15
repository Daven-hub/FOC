
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageLoader } from "@/hooks/usePageLoader";
import Loader from "@/components/Loader";
import Index from "./pages/Index";
import JobSearch from "./pages/JobSearch";
import Register from "./pages/Register";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Abouts from "@/pages/Abouts"
import EventRegistrationPage from "./components/Events/EventRegistrationForm";

const queryClient = new QueryClient();

const AppContent = () => {
  const isLoading = usePageLoader();
  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/register" element={<Register />} />
        <Route path="/evenements" element={<Events />} />
        <Route path='/events/:id/register' element= {<EventRegistrationPage />}/>
        <Route path="/a-propos" element={<Abouts />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
