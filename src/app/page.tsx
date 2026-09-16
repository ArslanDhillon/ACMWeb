"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThreeCanvas from "@/components/ThreeCanvas";
import TiltCard from "@/components/TiltCard";
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Calendar, 
  Trophy, 
  Cpu, 
  Code, 
  ShieldCheck, 
  Terminal, 
  ChevronRight,
  Flame
} from "lucide-react";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 7,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Active Chapter Members", value: "500+", icon: Users, hint: "Undergrads & Postgrads" },
    { label: "Conducted Tech Events", value: "45+", icon: Calendar, hint: "Workshops & Summits" },
    { label: "ICPC & Hackathon Wins", value: "12", icon: Trophy, hint: "National Trophies" },
    { label: "Student-Led Community", value: "100%", icon: Terminal, hint: "Peer-to-Peer Growth" },
  ];

  const tracks = [
    {
      title: "Artificial Intelligence & ML",
      desc: "Deep learning, LLMs, computer vision, and neural network research with PyTorch.",
      badge: "SIGAI",
      color: "from-sky-500/15 to-blue-500/5",
      icon: Cpu,
    },
    {
      title: "Competitive Programming",
      desc: "ICPC training, advanced algorithms, graph theory, and dynamic programming contests.",
      badge: "ICPC TRACK",
      color: "from-cyan-500/15 to-sky-500/5",
      icon: Code,
    },
    {
      title: "Full-Stack & Cloud Systems",
      desc: "Modern web architecture, Three.js, distributed microservices, Docker, and Kubernetes.",
      badge: "DEV TRACK",
      color: "from-blue-500/15 to-sky-500/5",
      icon: Terminal,
    },
    {
      title: "Cyber Security & Systems",
      desc: "Penetration testing, cryptographic network analysis, and Linux kernel fundamentals.",
      badge: "SIGSAC",
      color: "from-sky-500/15 to-indigo-500/5",
      icon: ShieldCheck,
    },
  ];

  const councilLeads = [
    {
      name: "Muhammad Salman",
      role: "Chairperson / President",
      domain: "Distributed Cloud Systems",
      initials: "MS",
      avatarBg: "from-sky-500 to-blue-600",
    },
    {
      name: "Syeda Dua Fatima",
      role: "Vice Chairperson",
      domain: "AI & Neural Architectures",
      initials: "DF",
      avatarBg: "from-cyan-500 to-blue-600",
    },
    {
      name: "Hamza Shaikh",
      role: "Director of Technology",
      domain: "Full-Stack & 3D WebGL",
      initials: "HS",
      avatarBg: "from-blue-500 to-sky-600",
    },
    {
      name: "Zainab Tariq",
      role: "Head of AI Research",
      domain: "LLMs & Computer Vision",
      initials: "ZT",
      avatarBg: "from-sky-400 to-blue-600",
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping inline-block" />
                <span>OFFICIAL UNIVERSITY ACM CHAPTER • 2026 TENURE</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Advancing Computing as a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
                  Science &amp; Profession
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Empowering the next generation of engineers, researchers, and competitive coders through hands-on hackathons, research publications, and global industry mentorship.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/events/devday-2026"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_6px_20px_rgba(14,165,233,0.35)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore DevDay 2026</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/members"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-sky-700 bg-white border border-sky-300 hover:bg-sky-50 shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4 text-sky-600" />
                  <span>Meet The Council</span>
                </Link>
              </div>

              {/* Mini Features Checklist */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>ACM Digital Library Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>ICPC Official Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Verified Credentials</span>
                </div>
              </div>
            </div>

            {/* Right Hero 3D Interactive Canvas */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 border border-sky-200 shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
                {/* 3D Canvas Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-sky-100 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-sky-700 font-semibold">acm-3d-crystal.obj [WebGL]</span>
                </div>

                {/* Live Three.js Interactive Emblem */}
                <ThreeCanvas />

                <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-sky-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    Interactive 3D • Move Mouse
                  </span>
                  <span className="font-mono">FPS: 60 • Three.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard key={idx} className="glass-card p-6 border border-sky-200/80">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-300 flex items-center justify-center text-sky-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Metric 0{idx + 1}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                    {item.value}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-800">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-1">{item.hint}</div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 3. FLAGSHIP BANNER: DEVDAY 2026 SUMMIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-sky-200 p-8 lg:p-12 shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>FLAGSHIP ANNUAL DEVELOPER FESTIVAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                DevDay 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">The Future of AI &amp; Systems</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                3 full days of hackathons, technical paper presentations, keynote talks by industry leaders from Google, Devsinc, and Microsoft, and PKR 500,000 in awards.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/events/devday-2026"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all"
                >
                  <span>Register For DevDay 2026</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">March 28-30, 2026 • Campus Auditorium</span>
              </div>
            </div>

            {/* Countdown Display */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-3">CONFERENCE STARTS IN</span>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds },
                ].map((cd, i) => (
                  <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-white border border-sky-200 shadow-sm min-w-[70px]">
                    <span className="text-2xl font-extrabold text-sky-600 font-mono">
                      {String(cd.value).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold tracking-wider">{cd.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL TRACKS & SPECIAL INTEREST GROUPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold">
            <span>DISCIPLINES &amp; WORKSHOPS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Special Interest Groups (SIGs)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Dedicated university research and development teams focused on high-impact computer science fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <TiltCard key={i} className="glass-card p-6 border border-sky-200/80 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-300 flex items-center justify-center text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200">
                      {track.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-wide">{track.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{track.desc}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <span>View Roadmap &amp; Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 5. EXECUTIVE COUNCIL PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">CHAPTER LEADERSHIP</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Executive Council Spotlight</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Meet the student leaders driving innovation and research for the 2025-2026 tenure.
            </p>
          </div>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
          >
            <span>View Full Directory (8 Leads + Faculty)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {councilLeads.map((m, i) => (
            <TiltCard key={i} className="glass-card p-6 border border-sky-200/80 text-center">
              <div className="relative mx-auto w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-sky-400 to-blue-600 mb-4 shadow-[0_6px_20px_rgba(14,165,233,0.25)]">
                <div className="w-full h-full rounded-[14px] bg-sky-50 flex items-center justify-center font-extrabold text-xl text-sky-700">
                  {m.initials}
                </div>
                <div className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-sky-600 text-white shadow-xs">
                  #{i + 1}
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 tracking-wide">{m.name}</h4>
              <p className="text-xs text-sky-600 font-semibold mt-0.5">{m.role}</p>
              <p className="text-[11px] text-slate-500 mt-2">{m.domain}</p>
              <div className="mt-4 pt-3 border-t border-slate-200 flex justify-center">
                <Link
                  href="/members"
                  className="text-[11px] text-slate-600 hover:text-sky-600 font-semibold transition-colors"
                >
                  View Profile &amp; Connect →
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION: JOIN CHAPTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel border border-sky-200 p-10 sm:p-14 text-center space-y-6 overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Build the Future of Computing?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Join 500+ university students in hackathons, competitive programming, and research publications. Membership is 100% free for enrolled students.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 shadow-[0_6px_20px_rgba(14,165,233,0.35)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Membership Application</span>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-sky-300 hover:bg-sky-50 transition-all shadow-sm"
              >
                <span>Browse Student Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
