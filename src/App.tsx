import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy loading secondary routes to reduce initial JS payload size
const Problems = lazy(() => import("./pages/Problems"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Results = lazy(() => import("./pages/Results"));
const Contributors = lazy(() => import("./pages/Contributors"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050907]">
    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const pageTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.35,
    ease: "easeInOut",
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
        if (!window.location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        } else {
          const id = window.location.hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
    >
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/about" element={<About />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <BackgroundEffects />
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
