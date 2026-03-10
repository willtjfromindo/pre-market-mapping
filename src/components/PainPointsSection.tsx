"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Search,
  LayoutGrid,
  Network,
  RefreshCw,
  UserSearch,
  Brain,
  ChevronDown,
} from "lucide-react";

const painPoints = [
  {
    icon: Search,
    title: "Company discovery is too manual",
    problem:
      "Analysts spend 5–10 hours per project searching across PitchBook, Crunchbase, Google, LinkedIn, and industry directories to build an initial company list. Even then, they estimate they find only 60–70% of relevant companies.",
    whyMatters:
      "Missing companies means missing deals. The average PE firm sees only 18% of relevant opportunities in its target universe. Manual discovery creates systematic blind spots in deal flow.",
    consequence:
      "Firms lose competitive advantage. Proprietary deal flow — the holy grail of PE — is nearly impossible when discovery is limited to the same databases every other firm uses.",
    severity: 95,
  },
  {
    icon: LayoutGrid,
    title: "Segmentation and categorization take too long",
    problem:
      "Categorizing 200+ companies by sub-sector, business model, size, and stage requires reading each company's website, press releases, and database profiles. This is one of the most tedious parts of the workflow.",
    whyMatters:
      "Segmentation is what turns a company list into strategic intelligence. Without it, the market map is just a spreadsheet of names. Partners and IC members need structured views to make decisions.",
    consequence:
      "Analysts spend 30–40% of their time on categorization rather than analysis. The intellectual value of market mapping gets buried under data janitor work.",
    severity: 90,
  },
  {
    icon: Network,
    title: "Ownership mapping is fragmented and unreliable",
    problem:
      "Determining whether a company is founder-owned, PE-backed, or publicly traded requires cross-referencing PitchBook, SEC filings, LinkedIn, and news articles. Data is often conflicting or outdated.",
    whyMatters:
      "Ownership status fundamentally changes deal approach. A founder-owned business requires a different pitch than a PE-backed add-on or a corporate carve-out. Getting this wrong wastes everyone's time.",
    consequence:
      "Analysts spend hours verifying ownership only to find conflicting information. Cold outreach based on wrong ownership assumptions damages firm credibility.",
    severity: 85,
  },
  {
    icon: RefreshCw,
    title: "Market maps become stale within weeks",
    problem:
      "A market map is a snapshot. Companies raise rounds, get acquired, hire new CEOs, and pivot their business models — but the Excel-based market map sits static in a shared drive.",
    whyMatters:
      "Stale maps lead to wasted effort: reaching out to companies that were just acquired, missing companies that recently entered the space, or presenting outdated competitive dynamics to partners.",
    consequence:
      "Teams often rebuild market maps from scratch rather than update them. A map that took 30 hours to build has a useful shelf life of 4–8 weeks.",
    severity: 80,
  },
  {
    icon: UserSearch,
    title: "Outreach preparation is scattered across tools",
    problem:
      "Before every call or email, analysts pull together company info from PitchBook, founder background from LinkedIn, recent news from Google, financials from Capital IQ, and competitive context from the market map.",
    whyMatters:
      "The quality of outreach directly impacts conversion. Personalized emails that reference specific company milestones see significantly higher response rates — up to 50% improvement over generic templates.",
    consequence:
      "Outreach prep takes 15–30 minutes per company. For a pipeline of 50 targets, that's 12–25 hours of pure information compilation.",
    severity: 75,
  },
  {
    icon: Brain,
    title: "Analysts compile rather than think",
    problem:
      "The highest-value part of an analyst's work is pattern recognition, strategic insight, and thesis refinement. But 60–70% of their time is spent on data gathering, formatting, and reconciliation.",
    whyMatters:
      "PE firms hire smart people to think strategically about markets and deals. When those people spend most of their time as human data pipelines, the firm isn't getting full value from its talent.",
    consequence:
      "Junior analysts burn out on grunt work. Senior team members don't get the analytical support they need. The firm's intellectual edge erodes.",
    severity: 92,
  },
];

export default function PainPointsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="pain-points" label="04 — Pain Points" className="bg-zinc-950/50">
      <SectionTitle>
        Where the Workflow{" "}
        <span className="gradient-text-warm">Breaks Down</span>
      </SectionTitle>
      <SectionSubtitle>
        These are the real pain points PE analysts experience daily. Each one
        represents both a friction point and a potential opportunity for
        automation.
      </SectionSubtitle>

      <div className="space-y-3">
        {painPoints.map((point, i) => {
          const Icon = point.icon;
          const isExpanded = expandedIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glow-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : i)
                }
                className="w-full flex items-center gap-4 p-5 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-amber-400/70" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-zinc-200">
                    {point.title}
                  </h3>
                </div>

                {/* Severity bar */}
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <div className="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${point.severity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-600 w-6">
                    {point.severity}
                  </span>
                </div>

                <ChevronDown
                  size={16}
                  className={`text-zinc-600 transition-transform flex-shrink-0 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 grid md:grid-cols-3 gap-4">
                      <div className="bg-zinc-900/80 rounded-lg p-4 border border-zinc-800/50">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                          The Problem
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {point.problem}
                        </p>
                      </div>
                      <div className="bg-zinc-900/80 rounded-lg p-4 border border-zinc-800/50">
                        <div className="text-[10px] font-mono text-violet-400/60 uppercase tracking-wider mb-2">
                          Why It Matters
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {point.whyMatters}
                        </p>
                      </div>
                      <div className="bg-amber-500/5 rounded-lg p-4 border border-amber-500/10">
                        <div className="text-[10px] font-mono text-amber-400/60 uppercase tracking-wider mb-2">
                          Downstream Consequence
                        </div>
                        <p className="text-sm text-amber-200/60 leading-relaxed">
                          {point.consequence}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
