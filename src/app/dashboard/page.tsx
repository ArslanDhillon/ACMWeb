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
        <div className="glass-panel p-6 rounded-2xl border border-sky-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 p-[2px] shadow-[0_0_20px_rgba(14,165,233,0.25)]">
              <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-extrabold text-lg text-sky-600">
                SC
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900">{member.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-300">
                  {member.tier}
                </span>
              </div>
              <p className="text-xs text-slate-500">{member.role} • ID: {member.id}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-white/90 border border-sky-200 shadow-sm text-slate-700">
              <span className="text-slate-400 block text-[9px] uppercase font-mono font-semibold">Chapter Points</span>
              <span className="font-bold text-sky-600">{member.points}</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white/90 border border-sky-200 shadow-sm text-slate-700">
              <span className="text-slate-400 block text-[9px] uppercase font-mono font-semibold">Leaderboard</span>
              <span className="font-bold text-emerald-600">{member.rank}</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white/90 border border-sky-200 shadow-sm text-slate-700">
              <span className="text-slate-400 block text-[9px] uppercase font-mono font-semibold">Hackathons</span>
              <span className="font-bold text-amber-600">{member.hackathons}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3D HOLOGRAPHIC DIGITAL MEMBER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card Presentation */}
          <div className="lg:col-span-6">
            <TiltCard className="p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/90 to-blue-100/70 border-2 border-sky-300/80 shadow-[0_20px_50px_rgba(14,165,233,0.18)] relative overflow-hidden min-h-[280px] flex flex-col justify-between">
              {/* Card Holographic Watermark */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/15 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-widest block">
                    ASSOCIATION FOR COMPUTING MACHINERY
                  </span>
                  <span className="text-xs text-slate-600 font-semibold">STUDENT CHAPTER MEMBER CREDENTIAL</span>
                </div>
                {/* Chip & NFC */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-8 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 border border-amber-200 shadow-sm flex items-center justify-center">
                    <div className="w-6 h-5 border border-amber-700/30 rounded-sm" />
                  </div>
                  <Wifi className="w-4 h-4 text-sky-600 rotate-90" />
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 space-y-1 my-6">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">MEMBER NAME</span>
                <div className="text-2xl font-black text-slate-900 tracking-wide">{member.name}</div>
                <div className="text-xs font-mono text-sky-600 font-semibold tracking-wider pt-1">{member.id}</div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex items-end justify-between border-t border-sky-200/80 pt-4 text-xs font-mono text-slate-500">
                <div>
                  <span className="text-[9px] block uppercase text-slate-400 font-semibold">VALID THRU</span>
                  <span className="text-slate-900 font-bold">{member.expiry}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sky-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span className="text-[10px] tracking-wider">CRYPTOGRAPHICALLY VERIFIED</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">PORTAL SERVICES</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Your Member Workspace</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Access your digital event passes for campus entry gates, download cryptographic workshop certificates, and check faculty mentor hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setActiveTab("PASSES")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === "PASSES"
                    ? "bg-white border-sky-400 text-slate-900 shadow-md shadow-sky-100 ring-2 ring-sky-400/20"
                    : "glass-card border-sky-200/80 text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <QrCode className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Active Event Passes</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">2 Scannable passes available</p>
              </button>

              <button
                onClick={() => setActiveTab("CERTS")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === "CERTS"
                    ? "bg-white border-sky-400 text-slate-900 shadow-md shadow-sky-100 ring-2 ring-sky-400/20"
                    : "glass-card border-sky-200/80 text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <Award className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Certifications Vault</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">3 Verified credentials</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT: PASSES OR CERTIFICATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {activeTab === "PASSES" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <QrCode className="w-5 h-5 text-sky-600" />
              <span>Digital Event Gate Passes</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((t) => (
                <div key={t.id} className="glass-panel p-6 rounded-2xl border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-700 border border-sky-300">
                      {t.type}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{t.event}</h4>
                    <p className="text-xs text-slate-600">{t.date} • {t.venue}</p>
                    <p className="text-xs text-sky-700 font-mono font-semibold">{t.squad} • {t.seat}</p>
                  </div>

                  {/* QR Code Graphic */}
                  <div className="p-3 bg-sky-50/80 border border-sky-200 rounded-2xl flex-shrink-0 shadow-sm text-slate-900 flex flex-col items-center">
                    <QrCode className="w-20 h-20 text-sky-900" />
                    <span className="text-[9px] font-mono font-bold mt-1 text-slate-600">{t.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "CERTS" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-600" />
              <span>Verified Cryptographic Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificates.map((c) => (
                <div key={c.id} className="glass-panel p-6 rounded-2xl border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">{c.id} • {c.date}</span>
                    <h4 className="text-base font-bold text-slate-900">{c.title}</h4>
                    <p className="text-xs text-sky-700 font-medium">{c.issuer}</p>
                    <p className="text-[10px] font-mono text-slate-500">Ledger Hash: {c.hash}</p>
                  </div>
                  <button
                    onClick={() => alert(`Downloading verified PDF certificate: ${c.title}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/20 transition-all flex-shrink-0 cursor-pointer"
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
