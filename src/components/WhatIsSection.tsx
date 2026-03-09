"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Lightbulb,
  Search,
  Building2,
  LayoutGrid,
  GitCompareArrows,
  Users,
  Send,
  ChevronRight,
} from "lucide-react";

const workflowSteps = [
  {
    icon: Lightbulb,
    title: "Deal Thesis",
    short: "Define the investment angle",
    detail:
      "The process begins with a deal thesis: a hypothesis about where value exists. For example, 'mid-market vertical SaaS companies in healthcare with $5M–$30M ARR.' This thesis shapes every downstream step.",
    data: "Internal IC memos, sector research, macroeconomic analysis",
    challenge:
      "Theses are often informal and hard to translate into structured search criteria.",
  },
  {
    icon: Search,
    title: "Industry Research",
    short: "Understand the landscape",
    detail:
      "Analysts research the target industry deeply: market size, growth trends, regulatory environment, competitive dynamics, and recent deal activity. This builds the context needed to identify the right companies.",
    data: "Industry reports, PitchBook, Capital IQ, Bain/McKinsey research, trade publications",
    challenge:
      "Research is scattered across dozens of sources with no unified view.",
  },
  {
    icon: Building2,
    title: "Company Identification",
    short: "Find the universe of targets",
    detail:
      "Using databases and manual research, analysts build a long list of companies that fit the thesis. This often starts with 200–500+ companies that need to be narrowed down.",
    data: "PitchBook, Crunchbase, LinkedIn, Google, industry directories, conference attendee lists",
    challenge:
      "Discovery is highly manual. Analysts miss companies that don't show up in standard databases.",
  },
  {
    icon: LayoutGrid,
    title: "Segmentation",
    short: "Categorize and prioritize",
    detail:
      "Companies are segmented by sub-sector, business model, size, geography, growth stage, and ownership status. This transforms a flat list into a structured market map.",
    data: "Company websites, press releases, financial databases, LinkedIn",
    challenge:
      "Categorization is subjective and extremely time-consuming. Analysts often disagree on segments.",
  },
  {
    icon: GitCompareArrows,
    title: "Competitive Mapping",
    short: "Understand who competes with whom",
    detail:
      "Analysts map competitive relationships, identifying which companies serve similar customers, what differentiates them, and where the white space exists. This is often visualized as a 2x2 or landscape chart.",
    data: "G2 reviews, customer interviews, product comparisons, news coverage",
    challenge:
      "Competitive intelligence is fragmented and rapidly changing. Static maps go stale fast.",
  },
  {
    icon: Users,
    title: "Ownership & Founder Research",
    short: "Who owns what, and who to talk to",
    detail:
      "For each priority target, analysts research ownership structure (PE-backed, founder-owned, public), key executives, board composition, and investor history. This determines approachability and deal structure.",
    data: "SEC filings, PitchBook, LinkedIn, Crunchbase, news articles",
    challenge:
      "Ownership data is inconsistent across sources. Founder/CEO contact info is hard to verify.",
  },
  {
    icon: Send,
    title: "Outreach & Sourcing",
    short: "Engage the best targets",
    detail:
      "The top targets are queued for outreach: warm introductions through the partner network, cold emails, or intermediary relationships. Each touchpoint needs to be tracked and coordinated.",
    data: "CRM, email, partner network, banker relationships, conference contacts",
    challenge:
      "Outreach prep is fragmented. Analysts compile info from 5+ sources before each call.",
  },
];

export default function WhatIsSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionWrapper id="what-is" label="01 — Concept">
      <SectionTitle>
        What is <span className="gradient-text">Market Mapping</span>?
      </SectionTitle>
      <SectionSubtitle>
        Market mapping is the systematic process of identifying, categorizing,
        and analyzing every relevant company in a target market. In private
        equity, it is the foundation of deal sourcing and competitive
        intelligence.
      </SectionSubtitle>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Step list */}
        <div className="flex flex-col gap-1">
          {workflowSteps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === activeStep;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? "bg-violet-500/10 border border-violet-500/20"
                    : "hover:bg-zinc-800/50 border border-transparent"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-violet-400" : "text-zinc-600"}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm font-medium ${
                      isActive ? "text-violet-300" : "text-zinc-400"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-zinc-600 truncate">
                    {step.short}
                  </div>
                </div>
                <ChevronRight
                  size={14}
                  className={`transition-all ${
                    isActive
                      ? "text-violet-400 opacity-100"
                      : "text-zinc-700 opacity-0"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glow-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                {(() => {
                  const Icon = workflowSteps[activeStep].icon;
                  return <Icon size={18} className="text-violet-400" />;
                })()}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  {workflowSteps[activeStep].title}
                </h3>
                <p className="text-sm text-zinc-500">
                  Step {activeStep + 1} of {workflowSteps.length}
                </p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6">
              {workflowSteps[activeStep].detail}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800/50">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  Data Sources
                </div>
                <p className="text-sm text-zinc-400">
                  {workflowSteps[activeStep].data}
                </p>
              </div>
              <div className="bg-amber-500/5 rounded-lg p-4 border border-amber-500/10">
                <div className="text-xs font-mono text-amber-400/60 uppercase tracking-wider mb-2">
                  Key Challenge
                </div>
                <p className="text-sm text-amber-200/70">
                  {workflowSteps[activeStep].challenge}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
