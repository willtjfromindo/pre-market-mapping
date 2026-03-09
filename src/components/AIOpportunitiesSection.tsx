"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Search,
  LayoutGrid,
  Users,
  Map,
  Bot,
  RefreshCw,
  MessageSquare,
} from "lucide-react";

const opportunities = [
  {
    icon: Search,
    title: "AI Company Discovery Engine",
    what: "An AI system that takes a natural-language deal thesis ('mid-market B2B SaaS in supply chain, $10M–$50M revenue, founder-owned') and automatically discovers relevant companies across the entire web — not just existing databases.",
    problem:
      "Analysts miss 80%+ of relevant companies because they're limited to the same databases as everyone else.",
    value:
      "Proprietary deal flow. Find companies before competitors do. Expand the universe of potential targets by 3–5x while reducing discovery time from days to minutes.",
    impact: "Transformative",
    color: "violet",
  },
  {
    icon: LayoutGrid,
    title: "AI-Powered Segmentation & Clustering",
    what: "Machine learning that reads company descriptions, products, customer bases, and financials to automatically categorize and segment companies into meaningful groups — with explanations for each classification.",
    problem:
      "Manual segmentation takes 30–40% of analyst time and produces inconsistent results.",
    value:
      "Instant, consistent categorization. Discover non-obvious segments and sub-sectors that human analysts might miss. Reduce categorization time from hours to seconds.",
    impact: "High",
    color: "blue",
  },
  {
    icon: Users,
    title: "Ownership & Founder Intelligence Agent",
    what: "An AI agent that continuously monitors and resolves ownership structures, founding teams, board composition, and investor history — reconciling data across PitchBook, LinkedIn, SEC filings, and news sources.",
    problem:
      "Ownership data is fragmented, conflicting, and essential for determining deal approach.",
    value:
      "Always-current ownership intelligence. Confidence scores on data quality. Automatic alerts when ownership changes occur (new investors, founder departures, board additions).",
    impact: "High",
    color: "emerald",
  },
  {
    icon: Map,
    title: "Auto-Generated Market Maps",
    what: "AI that takes a thesis definition and automatically produces a visual market landscape: segmented, labeled, and populated with relevant companies — ready for partner review in minutes instead of weeks.",
    problem:
      "Building a visual market map takes 15–30+ hours of manual work and goes stale immediately.",
    value:
      "From thesis to visual map in under an hour. Automatically positioned on relevant axes (e.g., company size vs. specialization). Exportable to PowerPoint for IC presentations.",
    impact: "Transformative",
    color: "violet",
  },
  {
    icon: Bot,
    title: "AI Sourcing Assistant",
    what: "An AI copilot that helps with outreach preparation: automatically compiling company briefs, drafting personalized outreach emails, suggesting warm introduction paths, and tracking engagement.",
    problem:
      "Outreach prep takes 15–30 minutes per company, and generic outreach converts poorly.",
    value:
      "Reduce outreach prep to 2 minutes per company. Higher conversion rates through personalization. Systematic tracking of all touchpoints and responses.",
    impact: "High",
    color: "sky",
  },
  {
    icon: RefreshCw,
    title: "Market Map Freshness Monitor",
    what: "A system that continuously watches for changes in mapped companies — funding rounds, acquisitions, leadership changes, product launches, hiring surges — and automatically updates the market map with alerts.",
    problem:
      "Market maps have a useful shelf life of 4–8 weeks before becoming dangerously stale.",
    value:
      "Evergreen market maps. Real-time competitive intelligence. Early detection of market-moving events like imminent acquisitions or competitor entries.",
    impact: "Medium-High",
    color: "teal",
  },
  {
    icon: MessageSquare,
    title: "Conversational PE Research Copilot",
    what: "A chat interface where analysts can ask natural-language questions about their market maps: 'Which companies in our healthcare SaaS map raised a Series B in the last 12 months?' or 'Show me founder-owned companies with >$20M revenue.'",
    problem:
      "Extracting insights from market maps requires manual filtering, sorting, and cross-referencing in spreadsheets.",
    value:
      "Instant answers to complex queries. Pattern detection across the entire market map. Conversational refinement of the thesis based on what the data shows.",
    impact: "Medium-High",
    color: "amber",
  },
];

const impactColors: Record<string, string> = {
  Transformative: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  High: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "Medium-High": "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

const cardColors: Record<string, string> = {
  violet: "hover:border-violet-500/30",
  blue: "hover:border-blue-500/30",
  emerald: "hover:border-emerald-500/30",
  sky: "hover:border-sky-500/30",
  teal: "hover:border-teal-500/30",
  amber: "hover:border-amber-500/30",
};

const iconColors: Record<string, string> = {
  violet: "text-violet-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  teal: "text-teal-400",
  amber: "text-amber-400",
};

export default function AIOpportunitiesSection() {
  return (
    <SectionWrapper id="ai-opportunities" label="06 — AI Opportunities" className="bg-zinc-950/50">
      <SectionTitle>
        Where AI Can{" "}
        <span className="gradient-text">Transform the Workflow</span>
      </SectionTitle>
      <SectionSubtitle>
        These aren&apos;t hypothetical. Each opportunity maps directly to a
        pain point PE analysts experience today. The technology exists — the
        products just haven&apos;t been built yet.
      </SectionSubtitle>

      <div className="grid md:grid-cols-2 gap-4">
        {opportunities.map((opp, i) => {
          const Icon = opp.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`glow-card rounded-xl p-6 ${cardColors[opp.color]} group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:border-zinc-600/50 transition-colors">
                    <Icon size={16} className={iconColors[opp.color]} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-200">
                    {opp.title}
                  </h3>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${impactColors[opp.impact]}`}
                >
                  {opp.impact}
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {opp.what}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900/60 rounded-lg p-3 border border-zinc-800/30">
                  <div className="text-[10px] font-mono text-amber-400/50 uppercase tracking-wider mb-1">
                    Problem
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {opp.problem}
                  </p>
                </div>
                <div className="bg-zinc-900/60 rounded-lg p-3 border border-zinc-800/30">
                  <div className="text-[10px] font-mono text-emerald-400/50 uppercase tracking-wider mb-1">
                    Value
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {opp.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
