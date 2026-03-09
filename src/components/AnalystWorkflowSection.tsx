"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Database,
  Globe,
  FileSpreadsheet,
  Linkedin,
  AlertTriangle,
  Clock,
  Copy,
  RefreshCw,
  Layers,
  UserX,
} from "lucide-react";

const workflowStages = [
  {
    icon: Database,
    name: "PitchBook / Capital IQ",
    action: "Search for companies by industry, size, geography",
    time: "2–4 hours",
    color: "violet",
  },
  {
    icon: Globe,
    name: "Crunchbase / Google",
    action: "Fill gaps, find companies not in paid databases",
    time: "1–3 hours",
    color: "blue",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    action: "Verify people, find founders, check company size",
    time: "1–2 hours",
    color: "sky",
  },
  {
    icon: Globe,
    name: "Company Websites",
    action: "Understand product, positioning, customers",
    time: "2–4 hours",
    color: "teal",
  },
  {
    icon: FileSpreadsheet,
    name: "Excel / Google Sheets",
    action: "Compile, categorize, format the market map",
    time: "3–6 hours",
    color: "emerald",
  },
  {
    icon: FileSpreadsheet,
    name: "PowerPoint",
    action: "Create the final landscape visualization",
    time: "2–3 hours",
    color: "green",
  },
];

const painPoints = [
  {
    icon: Copy,
    title: "Copy-paste overload",
    description:
      "Analysts spend hours copying data between PitchBook, LinkedIn, and Excel. A single market map might require 500+ individual copy-paste actions.",
  },
  {
    icon: Layers,
    title: "Fragmented sources",
    description:
      "No single database has everything. Analysts routinely cross-reference 5–8 tools to build a complete company profile.",
  },
  {
    icon: Clock,
    title: "Stale data",
    description:
      "Market maps become outdated within weeks. Companies raise rounds, get acquired, or pivot — but the spreadsheet doesn't update itself.",
  },
  {
    icon: RefreshCw,
    title: "Hard to categorize",
    description:
      "Segmenting companies by business model, vertical, or stage is subjective. Different analysts categorize the same company differently.",
  },
  {
    icon: UserX,
    title: "Inconsistent ownership info",
    description:
      "Founder names, ownership structures, and contact details vary across sources. Verification is manual and error-prone.",
  },
  {
    icon: AlertTriangle,
    title: "No workflow layer",
    description:
      "Tools provide data, not workflows. There's no 'operating system' for market mapping — just databases and spreadsheets.",
  },
];

const colorMap: Record<string, string> = {
  violet: "border-violet-500/30 bg-violet-500/5",
  blue: "border-blue-500/30 bg-blue-500/5",
  sky: "border-sky-500/30 bg-sky-500/5",
  teal: "border-teal-500/30 bg-teal-500/5",
  emerald: "border-emerald-500/30 bg-emerald-500/5",
  green: "border-green-500/30 bg-green-500/5",
};

const dotColorMap: Record<string, string> = {
  violet: "bg-violet-400",
  blue: "bg-blue-400",
  sky: "bg-sky-400",
  teal: "bg-teal-400",
  emerald: "bg-emerald-400",
  green: "bg-green-400",
};

export default function AnalystWorkflowSection() {
  return (
    <SectionWrapper id="workflow" label="02 — Current State">
      <SectionTitle>
        How Analysts{" "}
        <span className="gradient-text-warm">Actually Do It</span> Today
      </SectionTitle>
      <SectionSubtitle>
        The typical PE market mapping workflow involves stitching together
        multiple tools over 15–30+ hours of manual work per project. Here is
        what that looks like in practice.
      </SectionSubtitle>

      {/* Timeline */}
      <div className="relative mb-16">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-emerald-500/30 to-transparent hidden md:block" />

        <div className="space-y-4">
          {workflowStages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 md:ml-0"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${dotColorMap[stage.color]} ring-4 ring-zinc-950 z-10`}
                  />
                </div>

                <div
                  className={`flex-1 rounded-lg border p-4 ${colorMap[stage.color]} transition-all hover:scale-[1.01]`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <Icon size={16} className="text-zinc-400" />
                      <span className="text-sm font-semibold text-zinc-200">
                        {stage.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">
                      ~{stage.time}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1 ml-7">
                    {stage.action}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-6 md:ml-12 flex items-center gap-2 text-sm text-zinc-500"
        >
          <Clock size={14} />
          <span>
            Total time per market map:{" "}
            <span className="text-amber-400 font-semibold">15–30+ hours</span>
          </span>
        </motion.div>
      </div>

      {/* Pain Point Callouts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h3 className="text-lg font-semibold text-zinc-300 mb-6">
          What makes this painful
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {painPoints.map((point, i) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glow-card rounded-lg p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={14} className="text-amber-400/70" />
                <span className="text-sm font-medium text-zinc-300">
                  {point.title}
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
