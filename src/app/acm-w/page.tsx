"use client";

import React, { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import {
  Heart,
  Sparkles,
  Users,
  BookOpen,
  Mic2,
  Globe,
  ArrowRight,
  Clock,
} from "lucide-react";

/* ─── PILLARS ────────────────────────────────────────────────────────────── */
const pillars = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Empowerment",
    desc: "Building confidence and capacity in women pursuing careers in computing, engineering, and technology.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Education",
    desc: "Workshops, bootcamps, and mentorship programmes tailored to the unique challenges women face in STEM.",
  },
  {
    icon: <Mic2 className="w-6 h-6" />,
    title: "Advocacy",
    desc: "Amplifying women's voices in technology, policy, and academia at every level of the university.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    desc: "A safe, inclusive space where women in tech can connect, collaborate, and grow together.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Network",
    desc: "Connecting Superior University women with the worldwide ACM-W network of researchers and professionals.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Celebration",
    desc: "Recognising and celebrating the achievements of women in computing through awards and spotlights.",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function AcmWPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div className="space-y-24 pb-28">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-16 lg:pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glow bg */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-br from-sky-200/40 via-cyan-200/30 to-sky-200/20 rounded-full blur-3xl" />
        </div>

        {/* COMING SOON badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold mb-6 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-sky-500" />
          <span>COMING SOON</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          ACM{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-600 to-blue-700">
            Women
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            @ Superior
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
          A dedicated chapter of{" "}
          <span className="font-semibold text-sky-600">ACM-W (Association for Computing Machinery – Women)</span>{" "}
          at Superior University Lahore — celebrating, informing, and supporting women in computing.
        </p>
        <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
          We are building something powerful. ACM-W @ Superior will launch soon with workshops, networking events,
          mentorship programmes, and a vibrant community for women shaping the future of technology.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { value: "2025", label: "Launch Year" },
            { value: "500+", label: "Potential Members" },
            { value: "ACM", label: "Global Affiliate" },
            { value: "💜", label: "Women in Tech" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl border border-sky-200/60 text-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                {s.value}
              </div>
              <div className="text-[11px] text-slate-500 font-semibold mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Notify form */}
        <div className="glass-panel max-w-md mx-auto rounded-2xl border border-sky-200/70 p-6 shadow-[0_8px_30px_rgba(14,165,233,0.08)]">
          {!submitted ? (
            <>
              <p className="text-sm font-bold text-slate-800 mb-3">🔔 Get notified at launch</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_14px_rgba(14,165,233,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Notify Me
                </button>
              </form>
            </>
          ) : (
            <div className="flex items-center justify-center gap-2 py-2">
              <span className="text-2xl">🎉</span>
              <p className="text-sm font-bold text-sky-700">You&apos;re on the list! We&apos;ll notify you at launch.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── 2. WHAT IS ACM-W ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-sky-200/70 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-[0_12px_40px_rgba(14,165,233,0.06)]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 text-sky-500" />
              About ACM-W
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                ACM-W?
              </span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ACM-W (Association for Computing Machinery — Women) is a global organisation that supports, celebrates,
              and advocates internationally for women in computing. It is a sub-chapter of ACM, the world&apos;s largest
              computing professional association.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              ACM-W @ Superior University Lahore will be one of Pakistan&apos;s leading campus chapters dedicated to
              empowering women in computing — bridging the gender gap in technology through education, mentorship,
              events, and community.
            </p>
            <Link
              href="https://women.acm.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
            >
              Learn more about global ACM-W
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right side visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-52 h-52">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-sky-300/50 animate-spin" style={{ animationDuration: "18s" }} />
              <div className="absolute inset-6 rounded-full border-2 border-sky-300/40" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-sky-500 via-cyan-600 to-blue-700 flex items-center justify-center shadow-[0_0_40px_rgba(14,165,233,0.4)]">
                <span className="text-white font-black text-2xl tracking-tight drop-shadow">ACM-W</span>
              </div>
              {(["💻", "🎓", "💜", "⚡"] as const).map((emoji, i) => (
                <span
                  key={i}
                  className="absolute text-xl"
                  style={{
                    top: `${50 - 44 * Math.cos((i * Math.PI) / 2)}%`,
                    left: `${50 + 44 * Math.sin((i * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIX PILLARS ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            Our Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What We Stand For</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            ACM-W @ Superior will be built on six core pillars that guide every programme, event, and initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <TiltCard
              key={p.title}
              className="glass-card border border-sky-200/60 overflow-hidden rounded-2xl flex flex-col group"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-cyan-600 to-blue-700 flex-shrink-0" />
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-[0_4px_14px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">{p.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── 4. COMING SOON BANNER ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-sky-200 p-10 sm:p-14 text-center shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-br from-sky-300/20 to-blue-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-gradient-to-br from-sky-300/20 to-blue-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              We&apos;re Launching{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Very Soon
              </span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ACM-W @ Superior University is currently being established. Our founding team is working on building the
              chapter, planning inaugural events, and creating a community that will inspire the next generation of
              women in computing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all hover:-translate-y-0.5"
              >
                Get Involved →
              </Link>
              <Link
                href="/members"
                className="px-6 py-3 rounded-xl text-xs font-semibold text-sky-700 bg-white border border-sky-300 hover:bg-sky-50 transition-all"
              >
                Meet the ACM Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
