"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Database,
  Search,
  Users,
  BarChart3,
  Workflow,
  Sparkles,
} from "lucide-react";

type ToolCategory = {
  id: string;
  name: string;
  icon: typeof Database;
  description: string;
  tools: {
    name: string;
    what: string;
    whyPE: string;
    limitation: string;
  }[];
};

const categories: ToolCategory[] = [
  {
    id: "databases",
    name: "Private Market Databases",
    icon: Database,
    description: "Core data sources for company and deal information",
    tools: [
      {
        name: "PitchBook",
        what: "Comprehensive private market data platform covering companies, deals, funds, and investors with detailed financials.",
        whyPE: "Industry standard for PE. Covers deal history, valuations, fund performance, and company profiles across private markets.",
        limitation:
          "Expensive ($12K–$70K+/yr). 125,000+ users across 10,600+ accounts see the same data — no sourcing edge. Better for retrospective analysis than proactive discovery. Limited contact data.",
      },
      {
        name: "Capital IQ",
        what: "S&P Global's financial data platform with deep public and private company financials, M&A data, and screening tools.",
        whyPE: "Strongest financial data depth. Essential for diligence and comparable analysis. Covers both public and private markets.",
        limitation:
          "Private company data less consistent than public. Complex interface. Pricing can exceed $100K/yr for full access. Real-time accuracy varies.",
      },
      {
        name: "Crunchbase",
        what: "Startup and growth company database focused on funding rounds, investors, and company profiles.",
        whyPE: "Good for early-stage and growth companies. Tracks funding rounds and startup ecosystems effectively.",
        limitation:
          "Coverage skews toward VC-backed companies. Limited financial depth. Less useful for traditional PE targets (bootstrapped, mid-market).",
      },
    ],
  },
  {
    id: "research",
    name: "Research & Intelligence",
    icon: Search,
    description: "Tools for deep industry and company research",
    tools: [
      {
        name: "CB Insights",
        what: "Technology market intelligence platform with industry analysis, company profiles, and trend tracking.",
        whyPE: "Useful for understanding technology landscapes and emerging sectors. Good visualization of market maps and competitive dynamics.",
        limitation:
          "More suited to tech/VC than traditional PE. Expensive. Analysis can be surface-level for niche verticals.",
      },
      {
        name: "Dealroom",
        what: "European-focused startup and growth company database with ecosystem mapping and deal tracking.",
        whyPE: "Best-in-class for European company coverage. Good for cross-border deal sourcing and ecosystem understanding.",
        limitation:
          "Weaker coverage outside Europe. Limited financial depth compared to PitchBook or Capital IQ.",
      },
      {
        name: "Third Bridge / GLG",
        what: "Expert network platforms connecting investors with industry experts for primary research calls.",
        whyPE: "Critical for thesis validation and diligence. Provides qualitative insights that databases cannot.",
        limitation:
          "Expensive per-call model. Scheduling takes time. Insights are qualitative and hard to systematize.",
      },
    ],
  },
  {
    id: "people",
    name: "Contact & People Tools",
    icon: Users,
    description: "Finding and reaching key decision makers",
    tools: [
      {
        name: "LinkedIn / Sales Navigator",
        what: "Professional networking platform with advanced search, filtering, and outreach capabilities.",
        whyPE: "Essential for verifying people, finding founders, understanding org structure, and warm introductions.",
        limitation:
          "Data can be self-reported and inaccurate. Rate-limited for heavy usage. Not designed for PE-specific workflows.",
      },
      {
        name: "Apollo / ZoomInfo",
        what: "Contact data and sales intelligence platforms providing verified emails, phone numbers, and company data.",
        whyPE: "Useful for building outreach lists and verifying contact information for target company executives.",
        limitation:
          "Coverage is inconsistent for PE targets (private companies, smaller firms). Data freshness varies. More sales-oriented than PE-oriented.",
      },
    ],
  },
  {
    id: "crm",
    name: "CRM & Workflow",
    icon: Workflow,
    description: "Tracking relationships and deal pipeline",
    tools: [
      {
        name: "Affinity",
        what: "Relationship intelligence CRM designed for PE/VC, auto-capturing interactions and mapping relationship networks.",
        whyPE: "Purpose-built for dealmakers. Tracks warm paths to targets, relationship strength, and deal pipeline.",
        limitation:
          "Not a market mapping tool. Focused on relationship tracking, not company discovery or segmentation.",
      },
      {
        name: "DealCloud / Salesforce",
        what: "Deal management and CRM platforms used to track pipeline, interactions, and portfolio data.",
        whyPE: "Central system of record for deals. Manages pipeline from sourcing to close.",
        limitation:
          "Heavy to configure. Doesn't help with the discovery/mapping phase. Data entry is manual and often neglected.",
      },
    ],
  },
  {
    id: "enrichment",
    name: "Data Enrichment & AI",
    icon: Sparkles,
    description: "Emerging tools using AI for discovery and enrichment",
    tools: [
      {
        name: "Grata",
        what: "AI-powered private company search engine using NLP to understand what companies actually do, not just keyword matching.",
        whyPE: "Specifically designed for PE deal sourcing. Finds companies that don't show up in traditional databases using semantic search.",
        limitation:
          "Covers 19M+ companies but best suited for mid-market US targets. Still expanding international coverage and advanced features.",
      },
      {
        name: "Sourcescrub",
        what: "Deal sourcing platform that identifies companies from non-traditional sources (conferences, associations, awards, directories).",
        whyPE: "Uncovers companies that aren't in PitchBook or Capital IQ. Good for building proprietary deal flow.",
        limitation:
          "Requires combination with other tools for full profiles. Focused on discovery, not full market mapping.",
      },
      {
        name: "Harmonic / Inven",
        what: "AI-native company discovery platforms that scan the web to build comprehensive company databases.",
        whyPE: "Can surface companies that are invisible to traditional databases. AI-driven classification and similarity matching.",
        limitation:
          "Early-stage products. Coverage and accuracy still maturing. May require significant validation of results.",
      },
    ],
  },
  {
    id: "analysis",
    name: "Analysis & Visualization",
    icon: BarChart3,
    description: "Making sense of the data",
    tools: [
      {
        name: "Excel / Google Sheets",
        what: "The universal tool for compiling, filtering, and analyzing company data in PE market mapping.",
        whyPE: "Flexible and familiar. Every PE analyst knows it. Easy to share and customize. The de facto 'market map' format.",
        limitation:
          "Not designed for this workflow. No built-in enrichment, collaboration is limited, version control is painful, and maps go stale immediately.",
      },
      {
        name: "PowerPoint",
        what: "Used to create the final visual market landscape — typically 2x2 grids, landscape charts, or segmented views.",
        whyPE: "Partners and IC members expect polished visual market maps. PowerPoint is the standard format for presentations.",
        limitation:
          "Static. Any update to the underlying data requires manual recreation. No connection to live data sources.",
      },
    ],
  },
];

export default function ToolLandscapeSection() {
  const [activeCategory, setActiveCategory] = useState("databases");
  const activeCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <SectionWrapper id="tools" label="03 — Tool Landscape">
      <SectionTitle>
        The <span className="gradient-text">Tool Ecosystem</span>
      </SectionTitle>
      <SectionSubtitle>
        PE analysts rely on a fragmented ecosystem of databases, research tools,
        and general-purpose software. No single tool covers the full market
        mapping workflow.
      </SectionSubtitle>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-violet-500/15 border border-violet-500/30 text-violet-300"
                  : "bg-zinc-900/50 border border-zinc-800/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
              }`}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="sm:hidden">{cat.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-sm text-zinc-500 mb-6">{activeCat.description}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCat.tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glow-card rounded-xl p-6 flex flex-col"
              >
                <h4 className="text-base font-semibold text-zinc-200 mb-3">
                  {tool.name}
                </h4>

                <div className="space-y-3 flex-1">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1">
                      What it does
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {tool.what}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-violet-400/50 uppercase tracking-wider mb-1">
                      Why PE uses it
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {tool.whyPE}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/50">
                  <div className="text-[10px] font-mono text-amber-400/50 uppercase tracking-wider mb-1">
                    Where it falls short
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {tool.limitation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
