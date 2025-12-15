"use client";

import { motion } from "framer-motion";
import { Apple, ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 text-center">
      {/* Background Gradients */}
      <div className="absolute -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Available for macOS
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl"
      >
        The{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
          Invisible
        </span>{" "}
        Coding Assistant
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-zinc-400"
      >
        Dhappa AI helps you crack coding interviews without being detected. The
        ultimate stealth tool for developers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition-all hover:bg-zinc-200">
          <Apple className="h-5 w-5" />
          Download for Mac
        </button>
        <button className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10">
          How it works
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

      {/* Mockup / Visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 w-full max-w-5xl rounded-xl border border-white/10 bg-black/50 p-2 backdrop-blur-sm"
      >
        <div className="rounded-lg border border-white/5 bg-zinc-900/50 p-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/20" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
              <div className="h-3 w-3 rounded-full bg-green-500/20" />
            </div>
            <div className="text-xs text-zinc-500">interview_solution.py</div>
          </div>
          <div className="mt-4 space-y-2 font-mono text-sm">
            <div className="flex gap-4">
              <span className="text-zinc-600">1</span>
              <span className="text-purple-400">def</span>{" "}
              <span className="text-blue-400">solve_interview</span>():
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-600">2</span>
              <span className="pl-4 text-zinc-400">
                # Dhappa AI is listening...
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-600">3</span>
              <span className="pl-4 text-zinc-300">solution = </span>{" "}
              <span className="text-green-400">"Accepted"</span>
            </div>
            <div className="flex gap-4">
              <span className="text-zinc-600">4</span>
              <span className="pl-4 text-purple-400">return</span>{" "}
              <span className="text-zinc-300">solution</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
