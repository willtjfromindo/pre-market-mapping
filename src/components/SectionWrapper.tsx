"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  label,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding relative ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              {label}
            </span>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionSubtitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed ${className}`}
    >
      {children}
    </motion.p>
  );
}
