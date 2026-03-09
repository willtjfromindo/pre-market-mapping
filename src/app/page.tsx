"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import AnalystWorkflowSection from "@/components/AnalystWorkflowSection";
import ToolLandscapeSection from "@/components/ToolLandscapeSection";
import PainPointsSection from "@/components/PainPointsSection";
import CrossIndustrySection from "@/components/CrossIndustrySection";
import AIOpportunitiesSection from "@/components/AIOpportunitiesSection";
import FutureWorkflowSection from "@/components/FutureWorkflowSection";
import TakeawaysSection from "@/components/TakeawaysSection";
import InterviewInsightsSection from "@/components/InterviewInsightsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <WhatIsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <AnalystWorkflowSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <ToolLandscapeSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <PainPointsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <CrossIndustrySection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <AIOpportunitiesSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <FutureWorkflowSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <TakeawaysSection />

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <InterviewInsightsSection />

      <Footer />
    </main>
  );
}
