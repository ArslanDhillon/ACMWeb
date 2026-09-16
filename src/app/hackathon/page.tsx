"use client";

import React from "react";
import TiltCard from "@/components/TiltCard";
import { 
  Trophy, 
  Flame, 
  Code, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function HackathonPage() {
  const tracks = [
    {
      title: "Track 1: Generative AI & Autonomous Agents",
      prize: "PKR 180,000",
      desc: "Develop multi-agent workflows, multimodal search, or generative tools solving local societal challenges.",
      icon: Cpu,
      mentor: "Lead by Zainab Tariq (SIGAI)",
    },
    {
      title: "Track 2: Decentralized Web & Fintech",
      prize: "PKR 140,000",
      desc: "Peer-to-peer micropayments, zero-knowledge identity protocols, and verifiable credentials on distributed ledgers.",
      icon: ShieldCheck,
      mentor: "Lead by Hamza Shaikh (Director Tech)",
    },
    {
      title: "Track 3: 3D Graphics & Spatial Computing",
      prize: "PKR 100,000",
      desc: "Interactive WebGL engines, WebXR educational experiences, and real-time browser shaders.",
      icon: Sparkles,
      mentor: "Lead by Bilal Ahmed (Creative Director)",
    },
    {
      title: "Track 4: High-Performance Algorithmic Sprint",
      prize: "PKR 80,000",
      desc: "Pure algorithmic speed solving ICPC-style dynamic programming, tree traversals, and geometric computation.",
      icon: Code,
      mentor: "Lead by Farhan Ahmed (ICPC Coach)",
    },
  ];

  const leaderboard = [
    { rank: "01", team: "NullPointer Ninjas", solved: "12 / 12", score: "1,420 pts", status: "Gold Finalist" },
    { rank: "02", team: "KernelPanic Squad", solved: "11 / 12", score: "1,290 pts", status: "Silver Finalist" },
    { rank: "03", team: "CyberByte Titans", solved: "10 / 12", score: "1,180 pts", status: "Bronze Finalist" },
    { rank: "04", team: "Algorithm Avengers", solved: "09 / 12", score: "1,040 pts", status: "Honorable Mention" },
    { rank: "05", team: "Recursive Mavericks", solved: "08 / 12", score: "960 pts", status: "Honorable Mention" },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-semibold badge-glow">
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          <span>ACM CODESTORM &amp; ICPC QUALIFIER 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          The Ultimate University{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-sky-600 to-blue-700">
            Hackathon Arena
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Compete against the sharpest coders, push your limits across 36 hours of continuous hacking, and claim your share of the PKR 500,000 cash pool.
        </p>

        {/* Prize Pool Spotlight Card */}
        <div className="max-w-md mx-auto glass-card p-6 rounded-3xl border border-amber-300 shadow-[0_15px_40px_rgba(245,158,11,0.12)] text-center mt-6">
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">GRAND PRIZE POOL</span>
          <div className="text-4xl font-extrabold text-slate-900 font-mono mt-1">
            PKR 500,000
          </div>
          <p className="text-xs text-slate-500 mt-2">Plus Google Cloud Credits &amp; Direct Fast-Track Job Interviews</p>
        </div>
      </section>

      {/* 2. COMPETITION TRACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">4 DOMAINS</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Hackathon Challenges</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((t, idx) => {
            const Icon = t.icon;
            return (
              <TiltCard key={idx} className="glass-panel p-7 border border-sky-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-300 flex items-center justify-center text-sky-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base font-extrabold text-amber-700 font-mono">{t.prize}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
                <div className="pt-2 text-[11px] text-sky-600 font-semibold">{t.mentor}</div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 3. LIVE LEADERBOARD PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-sky-200 pb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Qualifier Leaderboard</h2>
          </div>
          <span className="text-xs text-sky-700 font-mono font-semibold">Live Telemetry Sync</span>
        </div>

        <div className="glass-panel rounded-2xl border border-sky-200/80 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 bg-sky-50/60 text-slate-600 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3.5 px-6">Rank</th>
                  <th className="py-3.5 px-6">Squad Name</th>
                  <th className="py-3.5 px-6">Problems Solved</th>
                  <th className="py-3.5 px-6">Total Score</th>
                  <th className="py-3.5 px-6">Standing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leaderboard.map((row) => (
                  <tr key={row.rank} className="hover:bg-sky-50/50 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-sky-600">{row.rank}</td>
                    <td className="py-4 px-6 font-bold text-slate-800">{row.team}</td>
                    <td className="py-4 px-6 font-mono text-slate-600">{row.solved}</td>
                    <td className="py-4 px-6 font-mono text-amber-600 font-bold">{row.score}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sky-100 text-sky-800 border border-sky-300">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. REGISTER SQUAD CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 rounded-3xl border border-sky-200/80 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Assemble Your 3-4 Person Squad</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Registrations close 48 hours before the opening ceremony. Free food, 24/7 venue access, and high-speed gigabit Wi-Fi provided.
          </p>
          <div className="pt-2">
            <Link
              href="/events/devday-2026"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)]"
            >
              <span>Register Squad on DevDay Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
