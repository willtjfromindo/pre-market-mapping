"use client";

import { motion } from "framer-motion";
import { ArrowDown, Network, Layers, Target, Zap } from "lucide-react";

function NetworkVisualization() {
  const nodes = [
    { x: 50, y: 30, size: 10, label: "SaaS", delay: 0 },
    { x: 20, y: 50, size: 8, label: "Fintech", delay: 0.1 },
    { x: 75, y: 55, size: 9, label: "Healthcare", delay: 0.2 },
    { x: 35, y: 75, size: 7, label: "B2B", delay: 0.3 },
    { x: 65, y: 25, size: 6, label: "AI/ML", delay: 0.4 },
    { x: 85, y: 40, size: 7, label: "Infra", delay: 0.5 },
    { x: 15, y: 30, size: 6, label: "Cyber", delay: 0.6 },
    { x: 45, y: 60, size: 8, label: "Data", delay: 0.7 },
    { x: 70, y: 75, size: 6, label: "DevTools", delay: 0.8 },
    { x: 30, y: 20, size: 5, label: "EdTech", delay: 0.9 },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 4], [1, 3], [1, 6], [2, 5],
    [2, 8], [3, 7], [4, 5], [7, 8], [6, 9], [9, 0],
    [3, 8], [7, 0],
  ];

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(139,92,246,0.15)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.08 }}
          />
        ))}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8 + node.delay,
            type: "spring",
            stiffness: 200,
          }}
          className="absolute group cursor-pointer"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-violet-500/30 group-hover:border-violet-400/50 group-hover:scale-125"
            style={{
              width: `${node.size * 4}px`,
              height: `${node.size * 4}px`,
            }}
          >
            <div
              className="rounded-full bg-violet-400/60"
              style={{
                width: `${node.size * 1.5}px`,
                height: `${node.size * 1.5}px`,
              }}
            />
          </div>
          <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-500 group-hover:text-violet-300 transition-colors whitespace-nowrap">
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Floating stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-4 left-4 bg-zinc-900/80 border border-zinc-800 rounded-lg px-3 py-2 backdrop-blur-sm"
      >
        <div className="text-[10px] text-zinc-500 font-mono">Companies Mapped</div>
        <div className="text-lg font-bold text-violet-300">2,847</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute top-4 right-4 bg-zinc-900/80 border border-zinc-800 rounded-lg px-3 py-2 backdrop-blur-sm"
      >
        <div className="text-[10px] text-zinc-500 font-mono">Segments</div>
        <div className="text-lg font-bold text-emerald-300">14</div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                <Network size={12} className="text-violet-400" />
                <span className="text-xs font-medium text-violet-300">
                  Strategy Deep Dive
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Market Mapping
              <br />
              <span className="gradient-text">in Private Equity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-4 max-w-lg"
            >
              How PE firms systematically identify markets, map companies, and
              source deals&mdash;and where the workflow breaks down.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-lg"
            >
              An interactive exploration for understanding the PE analyst
              workflow, existing tool landscape, and concrete opportunities for
              AI-powered consulting and product solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Target, label: "Deal Sourcing" },
                { icon: Layers, label: "Market Intelligence" },
                { icon: Zap, label: "AI Opportunities" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-zinc-500"
                >
                  <Icon size={14} className="text-zinc-600" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#what-is"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="inline-flex items-center gap-2 mt-12 text-sm text-zinc-500 hover:text-violet-400 transition-colors group"
            >
              <span>Scroll to explore</span>
              <ArrowDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </motion.a>
          </div>

          {/* Right: Network visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <span className="text-[10px] font-mono text-zinc-600 ml-2">
                  market_landscape.map
                </span>
              </div>
              <NetworkVisualization />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
