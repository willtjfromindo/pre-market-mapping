"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Rocket,
  TrendingUp,
  UserCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Rocket,
    name: "Venture Capital",
    color: "violet",
    whatTheyMap: "Startup ecosystems, emerging technologies, and founder networks",
    mapping:
      "VC firms maintain landscape maps of every startup in a sector, tracking founding date, funding stage, team background, growth metrics, and competitive positioning. They scan accelerators, demo days, Product Hunt, and GitHub for signals.",
    tools:
      "Crunchbase, PitchBook, Harmonic, Affinity, Signal (by NFX), Dealroom, Twitter/X for deal flow signals",
    lessonsForPE: [
      "Signal-based sourcing: VCs use real-time signals (hiring surges, product launches, web traffic) to identify companies early. PE could adopt similar approaches for mid-market targets.",
      "Community-driven discovery: VCs source from founder communities and events. PE could build similar channels with industry operators and trade associations.",
      "AI-first tools: VC has embraced AI-native discovery tools (Harmonic, Signal by NFX) faster than PE. The PE market is ripe for similar innovation.",
    ],
  },
  {
    icon: TrendingUp,
    name: "Sales & GTM",
    color: "blue",
    whatTheyMap: "Accounts, territories, buying committees, and competitive landscapes",
    mapping:
      "Sales teams build total addressable market (TAM) maps, segment accounts by ICP fit, map buying committees within target organizations, and track competitive presence. Account-based marketing (ABM) platforms automate much of this.",
    tools:
      "ZoomInfo, Apollo, 6sense, Demandbase, Salesforce, HubSpot, LinkedIn Sales Navigator, Clay",
    lessonsForPE: [
      "Automated enrichment: Sales tools automatically enrich company records with firmographic data, technographic signals, and intent data. PE market mapping could benefit from similar automation.",
      "Intent signals: Tools like 6sense detect when companies are actively researching topics. Analogous signals (M&A advisor hiring, board changes) could identify PE-ready companies.",
      "Workflow-first design: Modern sales tools embed data into workflows. PE tools still separate data from workflow — the integration gap is the opportunity.",
    ],
  },
  {
    icon: UserCheck,
    name: "Recruiting & Talent",
    color: "emerald",
    whatTheyMap: "Talent pools, skill distributions, and organizational structures",
    mapping:
      "Executive search firms and talent teams map entire talent markets: who works where, what skills they have, their career trajectories, compensation ranges, and likelihood to move. They segment by function, seniority, and domain expertise.",
    tools:
      "LinkedIn Recruiter, Gem, SeekOut, Eightfold, hireEZ, Findem, internal ATS systems",
    lessonsForPE: [
      "AI-powered matching: Recruiting uses AI to match candidates to roles based on semantic understanding of skills and experience. PE could use similar AI to match companies to investment theses.",
      "Passive candidate analogy: Recruiters focus on 'passive candidates' — people not actively looking. PE's best targets are often 'passive sellers' not on the market. Similar discovery approaches apply.",
      "Talent as signal: Recruiting data (who's hiring, who's leaving) is a leading indicator of company health. PE could systematically use talent signals in market mapping.",
    ],
  },
  {
    icon: Briefcase,
    name: "Strategy Consulting",
    color: "amber",
    whatTheyMap: "Market landscapes, competitive dynamics, and value chain structures",
    mapping:
      "McKinsey, Bain, and BCG teams build comprehensive market landscapes for their clients: market sizing, competitive positioning, customer segmentation, and value chain analysis. They combine public data with primary research (expert interviews).",
    tools:
      "Capital IQ, Statista, expert networks (GLG, AlphaSights), proprietary databases, custom research, government data",
    lessonsForPE: [
      "Structured frameworks: Consulting firms use repeatable frameworks (Porter's Five Forces, value chain analysis) to structure market maps. PE could benefit from more standardized mapping methodologies.",
      "Primary research integration: Consulting excels at combining quantitative data with qualitative expert insights. PE's expert network usage is often separate from market mapping — integrating them would be powerful.",
      "Reusability: Consulting firms build knowledge assets that are reused across engagements. PE market maps are typically one-off projects — building a reusable knowledge base would compound value.",
    ],
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; tab: string }> = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    tab: "bg-violet-500/15 border-violet-500/30 text-violet-300",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    tab: "bg-blue-500/15 border-blue-500/30 text-blue-300",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    tab: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    tab: "bg-amber-500/15 border-amber-500/30 text-amber-300",
  },
};

export default function CrossIndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const industry = industries[activeIndustry];
  const colors = colorClasses[industry.color];

  return (
    <SectionWrapper id="cross-industry" label="05 — Cross-Industry">
      <SectionTitle>
        How Other Industries{" "}
        <span className="gradient-text-emerald">Solve Similar Problems</span>
      </SectionTitle>
      <SectionSubtitle>
        Market mapping isn&apos;t unique to PE. Adjacent industries have built
        more mature tooling and workflows for analogous problems. PE can learn
        from all of them.
      </SectionSubtitle>

      {/* Industry tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          const isActive = i === activeIndustry;
          const c = colorClasses[ind.color];
          return (
            <button
              key={i}
              onClick={() => setActiveIndustry(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                isActive
                  ? c.tab
                  : "bg-zinc-900/50 border-zinc-800/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
              }`}
            >
              <Icon size={14} />
              {ind.name}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeIndustry}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glow-card rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}
          >
            {(() => {
              const Icon = industry.icon;
              return <Icon size={18} className={colors.text} />;
            })()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-200">
              {industry.name}
            </h3>
            <p className="text-sm text-zinc-500">{industry.whatTheyMap}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              How They Map
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {industry.mapping}
            </p>
          </div>
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Tools Used
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {industry.tools}
            </p>
          </div>
        </div>

        <div>
          <div className="text-xs font-mono text-violet-400/60 uppercase tracking-wider mb-3">
            Lessons for PE
          </div>
          <div className="space-y-3">
            {industry.lessonsForPE.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <ArrowRight
                  size={14}
                  className="text-violet-400/50 mt-1 flex-shrink-0"
                />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
