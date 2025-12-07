import { useState } from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SpeedInsightsWrapper } from "@/components/speed-insights-wrapper";
import SEO from "../next-seo.config";

import "../styles/index.css";
import "../styles/App.css";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <DefaultSeo {...SEO} />
            <TooltipProvider>
                <div className="w-screen overflow-x-hidden">
                    <Component {...pageProps} />
                    <Toaster />
                    <Sonner />
                </div>
            </TooltipProvider>
            <SpeedInsightsWrapper />
        </QueryClientProvider>
    );
}

export default MyApp;