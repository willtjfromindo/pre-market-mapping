"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import { Grid3X3, ArrowUpRight, ArrowDownLeft } from "lucide-react";

type Company = {
  name: string;
  x: number; // 0-100 position on x-axis
  y: number; // 0-100 position on y-axis
  revenue: string;
  segment: string;
  color: string;
};

type MapPreset = {
  id: string;
  label: string;
  xAxis: { label: string; low: string; high: string };
  yAxis: { label: string; low: string; high: string };
  companies: Company[];
  description: string;
};

const presets: MapPreset[] = [
  {
    id: "price-tech",
    label: "Price vs Technology",
    xAxis: { label: "Technology Sophistication", low: "Low Tech", high: "High Tech" },
    yAxis: { label: "Price Point", low: "Low Price", high: "High Price" },
    companies: [
      { name: "LegacyCorp", x: 15, y: 72, revenue: "$45M", segment: "Enterprise", color: "violet" },
      { name: "TechForward", x: 82, y: 85, revenue: "$28M", segment: "Enterprise", color: "violet" },
      { name: "BudgetSaaS", x: 55, y: 18, revenue: "$8M", segment: "SMB", color: "emerald" },
      { name: "MidScale AI", x: 68, y: 52, revenue: "$15M", segment: "Mid-Market", color: "blue" },
      { name: "SimpleTools", x: 22, y: 25, revenue: "$12M", segment: "SMB", color: "emerald" },
      { name: "NextGen Pro", x: 90, y: 60, revenue: "$22M", segment: "Mid-Market", color: "blue" },
      { name: "ClassicSoft", x: 30, y: 55, revenue: "$35M", segment: "Enterprise", color: "violet" },
      { name: "DataNova", x: 75, y: 38, revenue: "$10M", segment: "SMB", color: "emerald" },
      { name: "PremiumOne", x: 45, y: 90, revenue: "$50M", segment: "Enterprise", color: "violet" },
      { name: "AutomateIt", x: 60, y: 45, revenue: "$18M", segment: "Mid-Market", color: "blue" },
    ],
    description: "This view helps identify positioning gaps. Notice the empty space in high-tech, low-price — a potential whitespace opportunity for disruption.",
  },
  {
    id: "scale-complexity",
    label: "Scale vs Complexity",
    xAxis: { label: "Product Complexity", low: "Simple", high: "Complex" },
    yAxis: { label: "Company Scale", low: "Small ($1–10M)", high: "Large ($50M+)" },
    companies: [
      { name: "QuickBooks+", x: 18, y: 82, revenue: "$60M", segment: "Horizontal", color: "violet" },
      { name: "DeepAnalytics", x: 85, y: 75, revenue: "$55M", segment: "Vertical", color: "blue" },
      { name: "EasyStart", x: 12, y: 15, revenue: "$3M", segment: "Horizontal", color: "emerald" },
      { name: "NicheExpert", x: 78, y: 22, revenue: "$7M", segment: "Vertical", color: "amber" },
      { name: "ScaleCo", x: 35, y: 68, revenue: "$42M", segment: "Horizontal", color: "violet" },
      { name: "MicroSpec", x: 92, y: 12, revenue: "$4M", segment: "Vertical", color: "amber" },
      { name: "GrowthEngine", x: 50, y: 50, revenue: "$25M", segment: "Horizontal", color: "blue" },
      { name: "PlatformX", x: 65, y: 88, revenue: "$70M", segment: "Platform", color: "violet" },
      { name: "LiteTool", x: 25, y: 35, revenue: "$11M", segment: "Horizontal", color: "emerald" },
      { name: "SpecOps", x: 72, y: 42, revenue: "$16M", segment: "Vertical", color: "blue" },
    ],
    description: "This view reveals the classic PE opportunity: complex, small companies that could be rolled up into a scaled platform play.",
  },
  {
    id: "market-growth",
    label: "Market Position vs Growth",
    xAxis: { label: "Revenue Growth Rate", low: "Slow (<10%)", high: "Fast (>30%)" },
    yAxis: { label: "Market Share", low: "Niche Player", high: "Market Leader" },
    companies: [
      { name: "OldGuard", x: 12, y: 88, revenue: "$80M", segment: "Incumbent", color: "violet" },
      { name: "RocketShip", x: 88, y: 25, revenue: "$12M", segment: "Disruptor", color: "emerald" },
      { name: "SteadyEddie", x: 25, y: 60, revenue: "$40M", segment: "Established", color: "blue" },
      { name: "HyperGrow", x: 92, y: 45, revenue: "$20M", segment: "Disruptor", color: "emerald" },
      { name: "CategoryKing", x: 55, y: 92, revenue: "$95M", segment: "Incumbent", color: "violet" },
      { name: "FreshStart", x: 80, y: 10, revenue: "$5M", segment: "Disruptor", color: "amber" },
      { name: "MidPack", x: 45, y: 48, revenue: "$30M", segment: "Established", color: "blue" },
      { name: "SlowDecline", x: 8, y: 40, revenue: "$35M", segment: "Established", color: "blue" },
      { name: "Challenger", x: 70, y: 65, revenue: "$45M", segment: "Challenger", color: "violet" },
      { name: "NewWave", x: 85, y: 15, revenue: "$8M", segment: "Disruptor", color: "amber" },
    ],
    description: "The classic BCG-style view. Fast-growing niche players in the bottom-right are prime acquisition targets for PE firms looking to back future category leaders.",
  },
];

const segmentColors: Record<string, string> = {
  Enterprise: "bg-violet-400",
  SMB: "bg-emerald-400",
  "Mid-Market": "bg-blue-400",
  Horizontal: "bg-violet-400",
  Vertical: "bg-blue-400",
  Platform: "bg-violet-400",
  Incumbent: "bg-violet-400",
  Established: "bg-blue-400",
  Disruptor: "bg-emerald-400",
  Challenger: "bg-violet-400",
  "Disruptor ": "bg-amber-400",
};

const dotColors: Record<string, string> = {
  violet: "bg-violet-400 shadow-violet-400/40",
  blue: "bg-blue-400 shadow-blue-400/40",
  emerald: "bg-emerald-400 shadow-emerald-400/40",
  amber: "bg-amber-400 shadow-amber-400/40",
};

const commonVariables = [
  { axes: "High Price vs Low Price", use: "Pricing strategy positioning" },
  { axes: "Low Tech vs High Tech", use: "Technology sophistication" },
  { axes: "Simple vs Complex", use: "Product complexity & implementation" },
  { axes: "Niche vs Broad", use: "Market focus & TAM coverage" },
  { axes: "Small vs Large", use: "Revenue scale & company size" },
  { axes: "Slow Growth vs Fast Growth", use: "Trajectory & momentum" },
  { axes: "Necessity vs Luxury", use: "Demand elasticity & resilience" },
  { axes: "Short vs Long Turnaround", use: "Sales cycle & time-to-value" },
];

export default function MarketMapExample() {
  const [activePreset, setActivePreset] = useState(0);
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const preset = presets[activePreset];

  const segments = [...new Set(preset.companies.map((c) => c.segment))];

  return (
    <SectionWrapper id="example-map" label="01b — Visualization">
      <SectionTitle>
        What a Market Map{" "}
        <span className="gradient-text">Actually Looks Like</span>
      </SectionTitle>
      <SectionSubtitle>
        A market map plots companies along two strategic dimensions, revealing
        competitive clusters, white space opportunities, and potential
        acquisition targets. Analysts choose axes based on their deal thesis.
      </SectionSubtitle>

      {/* Preset selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {presets.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePreset(i);
              setHoveredCompany(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
              i === activePreset
                ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
                : "bg-zinc-900/50 border-zinc-800/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
            }`}
          >
            <Grid3X3 size={14} />
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_260px] gap-6">
        {/* The quadrant map */}
        <motion.div
          key={activePreset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 pb-10 overflow-hidden"
        >
          {/* Y-axis label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap">
            <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase">
              {preset.yAxis.label}
            </span>
          </div>

          {/* X-axis label */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase">
              {preset.xAxis.label}
            </span>
          </div>

          {/* Grid and axes */}
          <div className="relative ml-6 mr-2" style={{ aspectRatio: "4/3" }}>
            {/* Crosshair lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800/60" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-800/60" />

            {/* Subtle grid */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-zinc-800/20" />
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-zinc-800/20" />
            <div className="absolute top-1/4 left-0 right-0 h-px bg-zinc-800/20" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-zinc-800/20" />

            {/* Axis labels at edges */}
            <div className="absolute bottom-[-20px] left-0 text-[9px] font-mono text-zinc-700">
              {preset.xAxis.low}
            </div>
            <div className="absolute bottom-[-20px] right-0 text-[9px] font-mono text-zinc-700">
              {preset.xAxis.high}
            </div>
            <div className="absolute top-0 left-[-4px] -translate-x-full text-[9px] font-mono text-zinc-700">
              {preset.yAxis.high}
            </div>
            <div className="absolute bottom-0 left-[-4px] -translate-x-full text-[9px] font-mono text-zinc-700">
              {preset.yAxis.low}
            </div>

            {/* Quadrant labels */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-zinc-800">
              {preset.yAxis.high} / {preset.xAxis.low}
            </div>
            <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-800 text-right">
              {preset.yAxis.high} / {preset.xAxis.high}
            </div>
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-zinc-800">
              {preset.yAxis.low} / {preset.xAxis.low}
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-800 text-right">
              {preset.yAxis.low} / {preset.xAxis.high}
            </div>

            {/* Company dots */}
            {preset.companies.map((company, i) => {
              const isHovered = hoveredCompany === company.name;
              return (
                <motion.div
                  key={`${activePreset}-${company.name}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  onMouseEnter={() => setHoveredCompany(company.name)}
                  onMouseLeave={() => setHoveredCompany(null)}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${company.x}%`,
                    bottom: `${company.y}%`,
                    transform: "translate(-50%, 50%)",
                    zIndex: isHovered ? 50 : 10,
                  }}
                >
                  {/* Dot */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${dotColors[company.color]} transition-all duration-200 ${
                      isHovered ? "scale-150 shadow-lg" : "shadow-sm"
                    }`}
                  />

                  {/* Label */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <span className="text-[10px] font-medium text-zinc-400">
                      {company.name}
                    </span>
                  </div>

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap z-50"
                    >
                      <div className="text-xs font-semibold text-zinc-200">
                        {company.name}
                      </div>
                      <div className="text-[10px] text-zinc-500">
                        Revenue: {company.revenue}
                      </div>
                      <div className="text-[10px] text-zinc-500">
                        Segment: {company.segment}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right sidebar */}
        <div className="space-y-4">
          {/* Legend */}
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
              Segments
            </div>
            <div className="space-y-2">
              {segments.map((seg) => (
                <div key={seg} className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${segmentColors[seg] || "bg-zinc-400"}`}
                  />
                  <span className="text-xs text-zinc-400">{seg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Insight */}
          <div className="bg-violet-500/5 border border-violet-500/10 rounded-xl p-4">
            <div className="text-[10px] font-mono text-violet-400/60 uppercase tracking-wider mb-2">
              Analyst Insight
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {preset.description}
            </p>
          </div>

          {/* Stats */}
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
              Map Stats
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-zinc-500">Companies</span>
                <span className="text-xs font-mono text-zinc-300">
                  {preset.companies.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-zinc-500">Segments</span>
                <span className="text-xs font-mono text-zinc-300">
                  {segments.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-zinc-500">Axes</span>
                <span className="text-xs font-mono text-zinc-300">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common mapping variables */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
          Common Market Mapping Variables
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {commonVariables.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glow-card rounded-lg p-3"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <ArrowDownLeft size={10} className="text-zinc-600" />
                <span className="text-xs font-medium text-zinc-300">
                  {v.axes}
                </span>
                <ArrowUpRight size={10} className="text-zinc-600" />
              </div>
              <p className="text-[10px] text-zinc-600">{v.use}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
