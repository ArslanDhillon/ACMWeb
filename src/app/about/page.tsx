"use client";

import React from "react";
import TiltCard from "@/components/TiltCard";
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  Target, 
  Zap, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const milestones = [
    {
      year: "2021",
      title: "Charter Established",
      desc: "Officially chartered as a recognized ACM Student Chapter with 40 founding computer science undergraduates.",
    },
    {
      year: "2022",
      title: "Inaugural DevDay Hackathon",
      desc: "Hosted the university's first 36-hour hackathon with 250+ participants and industry sponsors including Devsinc.",
    },
    {
      year: "2023",
      title: "ICPC Regional Finalists",
      desc: "University team trained by ACM chapter secured Top 5 standing at National ICPC programming contest.",
    },
    {
      year: "2024",
      title: "Research Symposium Launch",
      desc: "Published 8 peer-reviewed student papers in IEEE and ACM Digital Library conferences.",
    },
    {
      year: "2025",
      title: "500+ Active Members Milestone",
      desc: "Expanded to 4 specialized Special Interest Groups (SIGAI, SIGOPS, ACM-W, ICPC Track).",
    },
    {
      year: "2026",
      title: "DevDay 2026 & Digital Hub",
      desc: "Launching premier tech festival with PKR 500,000 prize pool and 3D interactive community portal.",
    },
  ];

  const values = [
    {
      title: "Technical Excellence",
      desc: "We promote deep algorithmic problem solving, modern full-stack architectures, and rigorous code quality.",
      icon: Zap,
    },
    {
      title: "Research & Innovation",
      desc: "Bridging the gap between theoretical computer science and real-world applied artificial intelligence.",
      icon: Target,
    },
    {
      title: "Open Collaboration",
      desc: "100% student-driven culture where senior fellows mentor incoming developers through hands-on bootcamps.",
      icon: Globe,
    },
    {
      title: "Global Recognition",
      desc: "Connecting university undergraduates with ACM International worldwide events, conferences, and career fairs.",
      icon: Award,
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold badge-glow">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
          <span>OFFICIALLY CHARTERED ACM STUDENT CHAPTER</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Pioneering the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 text-glow">
            Computing Excellence
          </span>
        </h1>

        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The Association for Computing Machinery (ACM) is the world&apos;s largest educational and scientific computing society. Our student chapter brings this international standard directly to our campus.
        </p>
      </section>

      {/* 2. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <TiltCard key={i} className="glass-card p-6 border border-sky-400/20">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 3. CHAPTER HISTORY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">CHAPTER JOURNEY</span>
          <h2 className="text-3xl font-extrabold text-white">Milestones &amp; History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-sky-400/20 relative">
              <div className="text-2xl font-black text-sky-400 font-mono mb-2">{m.year}</div>
              <h3 className="text-base font-bold text-white mb-1.5">{m.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FACULTY ADVISOR DESK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-400/25 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">FROM THE FACULTY ADVISOR DESK</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              &quot;Inspiring students to think critically, code rigorously, and solve humanity&apos;s toughest technical challenges.&quot;
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our ACM Chapter serves as an incubator for future computer scientists, software architects, and innovators. Through structured workshops, competitive programming squads, and international student conferences, our members leave university with both exceptional technical prowess and collaborative leadership skills.
            </p>
            <div className="pt-2 text-xs">
              <div className="font-bold text-white">Dr. Asif Ali Laghari</div>
              <div className="text-sky-400">Associate Professor &amp; ACM Chapter Faculty Sponsor</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
