"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="text-sm text-zinc-600">
          Market Mapping in Private Equity — Internal Strategy Research
        </div>
        <div className="text-xs text-zinc-700">
          Built for executive review &middot; Not for distribution
        </div>
      </motion.div>
    </footer>
  );
}
