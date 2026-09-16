"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  FileText, 
  ArrowRight
} from "lucide-react";

export default function ResourcesPage() {
  const papers = [
    {
      title: "Decentralized Edge Intelligence in Latency-Critical IoT Environments",
      authors: "Dr. Asif Ali Laghari, Muhammad Salman, Syeda Dua Fatima",
      conference: "IEEE / ACM Conference on Cloud Computing (2025)",
      citations: "42 Citations",
      badge: "Peer-Reviewed",
      doi: "10.1145/3543873.3587421",
    },
    {
      title: "Parameter-Efficient Multi-Modal LLM Fine-Tuning for Medical Diagnosis",
      authors: "Zainab Tariq, Dr. Muhammad Kashif",
      conference: "ACM SIGKDD International Conference (2025)",
      citations: "28 Citations",
      badge: "ACM DL Open Access",
      doi: "10.1145/3627673.3679812",
    },
    {
      title: "Optimized Dynamic Programming State Compaction for Graph Traversal",
      authors: "Farhan Ahmed, Hamza Shaikh",
      conference: "ACM SIGACT Symposium on Theory of Computing (2024)",
      citations: "19 Citations",
      badge: "ACM Student Research Finalist",
      doi: "10.1145/3485671.3490214",
    },
  ];

  const tracks = [
    {
      title: "Full-Stack Web & Three.js",
      duration: "10 Weeks • Hands-on",
      level: "Intermediate",
      desc: "Master Next.js App Router, TypeScript, Tailwind CSS, and 3D WebGL scenes with Three.js.",
      modules: ["Modern React 19", "Server Components", "Three.js Shaders", "PostgreSQL & Prisma"],
      badge: "WEB3 & DEV",
    },
    {
      title: "Artificial Intelligence & LLMs",
      duration: "12 Weeks • Research",
      level: "Advanced",
      desc: "PyTorch foundations, convolutional networks, transformers architecture, and LoRA fine-tuning.",
      modules: ["PyTorch Tensor Ops", "Transformer Attention", "HuggingFace Ecosystem", "Vector DBs & RAG"],
      badge: "SIGAI TRACK",
    },
    {
      title: "Competitive Programming (ICPC)",
      duration: "Ongoing Weekly Drills",
      level: "All Levels",
      desc: "C++ STL, asymptotic complexity, segment trees, dynamic programming, and binary lifting.",
      modules: ["C++20 Fast I/O", "Graph Algorithms", "Eulerian Tours", "Greedy Techniques"],
      badge: "ICPC SQUAD",
    },
    {
      title: "Cloud Native & DevOps",
      duration: "8 Weeks • Lab",
      level: "Intermediate",
      desc: "Docker containerization, Kubernetes cluster orchestration, GitHub Actions CI/CD, and AWS.",
      modules: ["Dockerfiles & Multi-stage", "Kubernetes Pods/Deployments", "Terraform IaC", "Prometheus Metrics"],
      badge: "SIGOPS",
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
          <BookOpen className="w-3.5 h-3.5 text-sky-600" />
          <span>ACM DIGITAL REPOSITORY &amp; ROADMAPS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Curated Stacks, Research Papers &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
            Learning Roadmaps
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Unlock peer-reviewed publications, university conference slides, and step-by-step developer syllabi curated by our executive leads and faculty sponsors.
        </p>
      </section>

      {/* 2. RESEARCH PAPERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-sky-200 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600" />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Recent Chapter Publications</h2>
          </div>
          <span className="text-xs text-sky-700 font-mono font-semibold">ACM DL Direct Index</span>
        </div>

        <div className="space-y-4">
          {papers.map((p, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-sky-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-sky-400 transition-all shadow-sm">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">
                    {p.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">{p.citations}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium">Authors: {p.authors}</p>
                <p className="text-xs text-slate-500 font-mono">{p.conference} • DOI: {p.doi}</p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>ACM DL View</span>
                </a>
                <button
                  onClick={() => alert(`Downloading PDF preprint for "${p.title}"`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_14px_rgba(14,165,233,0.3)] transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LEARNING ROADMAPS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">STUDENT SYLLABI</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Interactive Developer Tracks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((t, idx) => (
            <TiltCard key={idx} className="glass-panel p-7 border border-sky-200 flex flex-col justify-between h-full shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">
                    {t.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">{t.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">Core Modules:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {t.modules.map((m, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-[11px] bg-sky-50 border border-sky-200 text-slate-700 font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Level: <span className="text-sky-600 font-bold">{t.level}</span></span>
                <button
                  onClick={() => alert(`Enrolled in ${t.title}! Modules added to your Member Dashboard.`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span>Start Roadmap Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
