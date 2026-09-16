"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { 
  LayoutDashboard, 
  Award, 
  QrCode, 
  Download, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  User, 
  Bell, 
  Wifi, 
  Key 
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("PASSES");

  const member = {
    name: "Sophia Chen",
    role: "Active Student Fellow • CS Senior",
    id: "ACM-STU-2026-8841",
    tier: "Gold Fellow",
    points: "1,450 XP",
    rank: "#4 in Chapter",
    hackathons: "12 Attended",
    expiry: "Oct 2027",
  };

  const tickets = [
    {
      id: "DEV-9482-VIP",
      event: "DevDay 2026: Annual Developer Summit",
      date: "March 28-30, 2026",
      venue: "Grand Campus Arena & Discord",
      squad: "Squad Alpha-04",
      seat: "Row 3 • Seat 14",
      type: "VIP DELEGATE PASS",
    },
    {
      id: "ICPC-2026-Q4",
      event: "ICPC Algorithmic CodeSprint Qualifier",
      date: "April 24, 2026",
      venue: "CS Innovation Lab (CS-302)",
      squad: "NullPointer Ninjas",
      seat: "Terminal Station #08",
      type: "COMPETITOR PASS",
    },
  ];

  const certificates = [
    {
      id: "ACM-CERT-9021",
      title: "Python for Data Science & Deep Learning",
      issuer: "ACM SIGAI Chapter Certification",
      date: "Jan 2026",
      hash: "0x7f88...4b92",
    },
    {
      id: "ACM-CERT-8844",
      title: "Cloud Native & Distributed Systems Foundations",
      issuer: "ACM Cloud SIG & AWS Academy",
      date: "Nov 2025",
      hash: "0x3e12...91f0",
    },
    {
      id: "ACM-CERT-7731",
      title: "CodeStorm 2025 Hackathon 1st Runner-Up",
      issuer: "ACM Executive Board & Industry Judges",
      date: "Oct 2025",
      hash: "0x9a88...2c11",
    },
  ];

  return (
    <div className="space-y-16 pb-24">
      {/* 1. TOP APP BAR & WELCOME */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 rounded-2xl border border-sky-400/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 p-[2px] shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center font-extrabold text-lg text-sky-300">
                SC
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">{member.name}</h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {member.tier}
                </span>
              </div>
              <p className="text-xs text-slate-400">{member.role} • ID: {member.id}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-sky-400/15 text-slate-300">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">Chapter Points</span>
              <span className="font-bold text-sky-400">{member.points}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-sky-400/15 text-slate-300">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">Leaderboard</span>
              <span className="font-bold text-emerald-400">{member.rank}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-sky-400/15 text-slate-300">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">Hackathons</span>
              <span className="font-bold text-amber-400">{member.hackathons}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3D HOLOGRAPHIC DIGITAL MEMBER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card Presentation */}
          <div className="lg:col-span-6">
            <TiltCard className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#131e36] to-[#0b0f19] border-2 border-sky-400/40 shadow-[0_0_50px_rgba(56,189,248,0.25)] relative overflow-hidden min-h-[280px] flex flex-col justify-between">
              {/* Card Holographic Watermark */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block">
                    ASSOCIATION FOR COMPUTING MACHINERY
                  </span>
                  <span className="text-xs text-slate-300 font-semibold">STUDENT CHAPTER MEMBER CREDENTIAL</span>
                </div>
                {/* Chip & NFC */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-300 to-amber-600 border border-amber-200/40 shadow-inner flex items-center justify-center">
                    <div className="w-5 h-4 border border-amber-900/40 rounded-sm" />
                  </div>
                  <Wifi className="w-4 h-4 text-sky-400 rotate-90" />
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 space-y-1 my-6">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">MEMBER NAME</span>
                <div className="text-2xl font-black text-white tracking-wide">{member.name}</div>
                <div className="text-xs font-mono text-sky-300 tracking-wider pt-1">{member.id}</div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex items-end justify-between border-t border-sky-400/20 pt-4 text-xs font-mono text-slate-400">
                <div>
                  <span className="text-[9px] block uppercase text-slate-500">VALID THRU</span>
                  <span className="text-white font-bold">{member.expiry}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-wider">CRYPTOGRAPHICALLY VERIFIED</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">PORTAL SERVICES</span>
              <h2 className="text-3xl font-extrabold text-white">Your Member Workspace</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Access your digital event passes for campus entry gates, download cryptographic workshop certificates, and check faculty mentor hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setActiveTab("PASSES")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === "PASSES"
                    ? "bg-slate-900 border-sky-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                    : "glass-card border-sky-400/15 text-slate-300 hover:text-white"
                }`}
              >
                <QrCode className="w-5 h-5 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold">Active Event Passes</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">2 Scannable passes available</p>
              </button>

              <button
                onClick={() => setActiveTab("CERTS")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === "CERTS"
                    ? "bg-slate-900 border-sky-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                    : "glass-card border-sky-400/15 text-slate-300 hover:text-white"
                }`}
              >
                <Award className="w-5 h-5 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold">Certifications Vault</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">3 Verified credentials</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT: PASSES OR CERTIFICATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {activeTab === "PASSES" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <QrCode className="w-5 h-5 text-sky-400" />
              <span>Digital Event Gate Passes</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((t) => (
                <div key={t.id} className="glass-panel p-6 rounded-2xl border border-sky-400/25 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/10 text-sky-400 border border-sky-400/30">
                      {t.type}
                    </span>
                    <h4 className="text-base font-bold text-white">{t.event}</h4>
                    <p className="text-xs text-slate-400">{t.date} • {t.venue}</p>
                    <p className="text-xs text-sky-300 font-mono">{t.squad} • {t.seat}</p>
                  </div>

                  {/* QR Code Graphic */}
                  <div className="p-3 bg-white rounded-2xl flex-shrink-0 shadow-lg text-slate-900 flex flex-col items-center">
                    <QrCode className="w-20 h-20" />
                    <span className="text-[9px] font-mono font-bold mt-1 text-slate-700">{t.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "CERTS" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-400" />
              <span>Verified Cryptographic Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificates.map((c) => (
                <div key={c.id} className="glass-panel p-6 rounded-2xl border border-sky-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500">{c.id} • {c.date}</span>
                    <h4 className="text-base font-bold text-white">{c.title}</h4>
                    <p className="text-xs text-sky-400">{c.issuer}</p>
                    <p className="text-[10px] font-mono text-slate-500">Ledger Hash: {c.hash}</p>
                  </div>
                  <button
                    onClick={() => alert(`Downloading verified PDF certificate: ${c.title}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all flex-shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
