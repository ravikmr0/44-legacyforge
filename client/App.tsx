import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

// Service Pages
import PaidAdvertising from "./pages/services/PaidAdvertising";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import SEOOptimization from "./pages/services/SEOOptimization";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import ContentWritingGraphics from "./pages/services/ContentWritingGraphics";
import CreativeBranding from "./pages/services/CreativeBranding";
import MediaProduction from "./pages/services/MediaProduction";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Layout component with Header and Footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />

              {/* Service Pages */}
              <Route
                path="/services/paid-advertising"
                element={<PaidAdvertising />}
              />
              <Route
                path="/services/website-development"
                element={<WebsiteDevelopment />}
              />
              <Route
                path="/services/seo-optimization"
                element={<SEOOptimization />}
              />
              <Route
                path="/services/social-media-management"
                element={<SocialMediaManagement />}
              />
              <Route
                path="/services/content-writing-graphics"
                element={<ContentWritingGraphics />}
              />
              <Route
                path="/services/creative-branding"
                element={<CreativeBranding />}
              />
              <Route
                path="/services/media-production"
                element={<MediaProduction />}
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

createRoot(document.getElementById("root")!).render(<App />);
