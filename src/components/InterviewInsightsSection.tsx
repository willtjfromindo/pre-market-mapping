"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import { Quote, FileText, Eye } from "lucide-react";

const placeholderQuotes = [
  {
    quote: "Add interview quote here...",
    role: "PE Analyst, [Firm Name]",
    theme: "Workflow",
  },
  {
    quote: "Add interview quote here...",
    role: "VP, [Firm Name]",
    theme: "Pain Point",
  },
  {
    quote: "Add interview quote here...",
    role: "Associate, [Firm Name]",
    theme: "Tools",
  },
];

const placeholderThemes = [
  {
    title: "Theme placeholder",
    description: "Add observed theme from interviews here.",
  },
  {
    title: "Theme placeholder",
    description: "Add observed theme from interviews here.",
  },
  {
    title: "Theme placeholder",
    description: "Add observed theme from interviews here.",
  },
];

const placeholderNotes = [
  "Workflow observation placeholder — add notes from analyst interviews here.",
  "Tool usage observation — what tools did they mention most?",
  "Pain point validation — which pain points resonated most strongly?",
];

export default function InterviewInsightsSection() {
  return (
    <SectionWrapper id="interviews" label="09 — Interview Insights">
      <SectionTitle>
        Interview{" "}
        <span className="gradient-text-emerald">Insights</span>
      </SectionTitle>
      <SectionSubtitle>
        Placeholder section for quotes, themes, and workflow observations from PE
        analyst interviews. Edit this section as you conduct interviews.
      </SectionSubtitle>

      {/* Quotes */}
      <div className="mb-10">
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Quote size={14} />
          Direct Quotes
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {placeholderQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card rounded-xl p-5 border-dashed"
            >
              <p className="text-sm text-zinc-500 italic mb-4 leading-relaxed">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-600">{q.role}</span>
                <span className="text-[10px] font-mono text-violet-400/40 px-2 py-0.5 rounded-full bg-violet-500/5 border border-violet-500/10">
                  {q.theme}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div className="mb-10">
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FileText size={14} />
          Emerging Themes
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {placeholderThemes.map((theme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg p-4 bg-zinc-900/30 border border-dashed border-zinc-800/50"
            >
              <h4 className="text-sm font-medium text-zinc-400 mb-2">
                {theme.title}
              </h4>
              <p className="text-xs text-zinc-600">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow Notes */}
      <div>
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Eye size={14} />
          Workflow Observations
        </h3>
        <div className="space-y-2">
          {placeholderNotes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/20 border border-dashed border-zinc-800/30"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-1.5 flex-shrink-0" />
              <p className="text-sm text-zinc-600">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
