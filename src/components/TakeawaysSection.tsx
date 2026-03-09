"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionTitle,
  SectionSubtitle,
} from "./SectionWrapper";
import {
  Target,
  Wrench,
  Database,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const takeaways = [
  {
    icon: Target,
    title: "Market mapping is core to PE sourcing and diligence",
    description:
      "It's not a nice-to-have — it's the foundation of how PE firms find and evaluate deals. Every investment thesis starts with a market map, and the quality of the map directly impacts deal flow quality.",
  },
  {
    icon: Wrench,
    title: "The workflow is still highly manual",
    description:
      "Despite billions invested in fintech, the market mapping workflow hasn't fundamentally changed in a decade. Analysts still stitch together data from 5–8 tools into Excel spreadsheets, spending 20–40+ hours per project.",
  },
  {
    icon: Database,
    title: "Existing tools provide data, not workflows",
    description:
      "PitchBook, Capital IQ, and other databases are excellent data sources — but they're not workflow tools. There's a massive gap between 'access to data' and 'finished market map' that analysts fill with manual labor.",
  },
  {
    icon: Sparkles,
    title: "AI could reduce effort by 80% and improve coverage 3–5x",
    description:
      "The technology to automate discovery, segmentation, ownership mapping, and visualization exists today. The opportunity is in building purpose-built products that combine these capabilities into a cohesive PE workflow.",
  },
  {
    icon: TrendingUp,
    title: "This represents a meaningful consulting and product opportunity",
    description:
      "PE firms spend $20K–$100K+ per year on databases that don't solve the workflow problem. An AI-native market mapping solution could command premium pricing while delivering dramatic productivity gains.",
  },
];

export default function TakeawaysSection() {
  return (
    <SectionWrapper id="takeaways" label="08 — Key Takeaways" className="bg-zinc-950/50">
      <SectionTitle>
        Key <span className="gradient-text">Takeaways</span>
      </SectionTitle>
      <SectionSubtitle>
        The core conclusions from this analysis — the insights that matter most
        for evaluating the AI consulting opportunity.
      </SectionSubtitle>

      <div className="space-y-4">
        {takeaways.map((takeaway, i) => {
          const Icon = takeaway.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl glow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200 mb-2">
                  {takeaway.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {takeaway.description}
                </p>
              </div>
              <CheckCircle2
                size={16}
                className="text-violet-500/30 flex-shrink-0 mt-1"
              />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
