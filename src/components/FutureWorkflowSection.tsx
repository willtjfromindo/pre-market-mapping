"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  ArrowRight,
  Clock,
  Zap,
  Database,
  Search,
  FileSpreadsheet,
  LayoutGrid,
  Users,
  Send,
  Sparkles,
  Bot,
  RefreshCw,
  Map,
  MessageSquare,
} from "lucide-react";

const todaySteps = [
  {
    icon: Search,
    label: "Manual search across 5+ databases",
    time: "4–8 hrs",
  },
  {
    icon: Database,
    label: "Cross-reference and verify data",
    time: "2–4 hrs",
  },
  {
    icon: FileSpreadsheet,
    label: "Copy-paste into Excel, clean data",
    time: "3–5 hrs",
  },
  {
    icon: LayoutGrid,
    label: "Manually categorize 200+ companies",
    time: "4–8 hrs",
  },
  {
    icon: Users,
    label: "Research ownership & founders",
    time: "2–4 hrs",
  },
  {
    icon: FileSpreadsheet,
    label: "Build visual map in PowerPoint",
    time: "2–3 hrs",
  },
  {
    icon: Send,
    label: "Prepare outreach for top targets",
    time: "4–8 hrs",
  },
];

const futureSteps = [
  {
    icon: MessageSquare,
    label: "Describe thesis in natural language",
    time: "5 min",
  },
  {
    icon: Sparkles,
    label: "AI discovers & enriches companies",
    time: "10 min",
  },
  {
    icon: Bot,
    label: "Auto-segments and classifies",
    time: "2 min",
  },
  {
    icon: Map,
    label: "Generates interactive market map",
    time: "1 min",
  },
  {
    icon: Users,
    label: "Resolves ownership & contacts",
    time: "5 min",
  },
  {
    icon: RefreshCw,
    label: "Continuously monitors for changes",
    time: "Always on",
  },
  {
    icon: Send,
    label: "Drafts personalized outreach",
    time: "2 min",
  },
];

export default function FutureWorkflowSection() {
  return (
    <SectionWrapper id="future-workflow" label="07 — The Future">
      <SectionTitle>
        Before & After:{" "}
        <span className="gradient-text">The Opportunity</span>
      </SectionTitle>
      <SectionSubtitle>
        What if the entire market mapping workflow could be compressed from weeks
        to minutes — while producing better, more comprehensive results?
      </SectionSubtitle>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* TODAY */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Clock size={16} className="text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-300">Today</h3>
              <p className="text-xs text-zinc-600">Manual, fragmented, slow</p>
            </div>
          </div>

          <div className="space-y-2">
            {todaySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-800/30"
                >
                  <Icon size={14} className="text-zinc-600 flex-shrink-0" />
                  <span className="text-sm text-zinc-400 flex-1">
                    {step.label}
                  </span>
                  <span className="text-xs font-mono text-amber-400/60">
                    {step.time}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800/30 flex items-center justify-between">
            <span className="text-sm text-zinc-500">Total time</span>
            <span className="text-lg font-bold text-amber-400">
              20–40+ hours
            </span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-zinc-500">Shelf life</span>
            <span className="text-sm font-mono text-zinc-600">4–8 weeks</span>
          </div>
        </motion.div>

        {/* FUTURE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-6 relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]" />

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
              <Zap size={16} className="text-violet-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-200">
                AI-Assisted Future
              </h3>
              <p className="text-xs text-violet-400/50">
                Automated, continuous, intelligent
              </p>
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            {futureSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-violet-500/5 border border-violet-500/10"
                >
                  <Icon
                    size={14}
                    className="text-violet-400/70 flex-shrink-0"
                  />
                  <span className="text-sm text-violet-100/80 flex-1">
                    {step.label}
                  </span>
                  <span className="text-xs font-mono text-violet-300/60">
                    {step.time}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-violet-500/10 flex items-center justify-between relative z-10">
            <span className="text-sm text-violet-300/50">Total time</span>
            <span className="text-lg font-bold text-violet-300">
              &lt; 30 minutes
            </span>
          </div>
          <div className="flex items-center justify-between mt-1 relative z-10">
            <span className="text-sm text-violet-300/50">Shelf life</span>
            <span className="text-sm font-mono text-violet-300/60">
              Always current
            </span>
          </div>
        </motion.div>
      </div>

      {/* Impact callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { metric: "50–100x", label: "Faster time to map" },
          { metric: "3–5x", label: "More companies discovered" },
          { metric: "Always", label: "Up-to-date intelligence" },
          { metric: "80%", label: "Less analyst grunt work" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/30"
          >
            <div className="text-2xl font-bold gradient-text mb-1">
              {stat.metric}
            </div>
            <div className="text-xs text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
