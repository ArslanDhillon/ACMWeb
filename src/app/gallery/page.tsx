"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { Image as ImageIcon, Sparkles, X, Eye, Calendar, MapPin } from "lucide-react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("ALL");
  const [activePhoto, setActivePhoto] = useState<any>(null);

  const photos = [
    {
      id: 1,
      title: "DevDay 2025 Opening Ceremony",
      category: "HACKATHON",
      date: "Nov 2025",
      location: "Auditorium Arena",
      aspect: "col-span-1 md:col-span-2",
      gradient: "from-sky-600 via-blue-900 to-slate-950",
      caption: "500+ student developers gathered for the keynote opening by faculty sponsor Dr. Asif Ali Laghari.",
    },
    {
      id: 2,
      title: "ICPC Regional Finalist Trophy",
      category: "AWARDS",
      date: "Dec 2025",
      location: "National Contest Arena",
      aspect: "col-span-1",
      gradient: "from-amber-600 via-slate-900 to-slate-950",
      caption: "Our competitive coding squad celebrating 2nd runner-up position at the national ICPC qualifiers.",
    },
    {
      id: 3,
      title: "Hands-on Rust Microservices Lab",
      category: "WORKSHOPS",
      date: "Jan 2026",
      location: "CS-302 Innovation Lab",
      aspect: "col-span-1",
      gradient: "from-cyan-600 via-blue-950 to-slate-950",
      caption: "Undergraduates building high-throughput gRPC services and exploring memory safety in Rust.",
    },
    {
      id: 4,
      title: "Executive Council Strategy Retreat",
      category: "COMMUNITY",
      date: "Feb 2026",
      location: "Campus Garden Terrace",
      aspect: "col-span-1 md:col-span-2",
      gradient: "from-blue-700 via-indigo-900 to-slate-950",
      caption: "Annual leadership planning session mapping out 2026 conference themes, sponsors, and SIG tracks.",
    },
    {
      id: 5,
      title: "Midnight Hackathon Sprint Hours",
      category: "HACKATHON",
      date: "Nov 2025",
      location: "Grand Arena Lab",
      aspect: "col-span-1",
      gradient: "from-purple-800 via-slate-900 to-slate-950",
      caption: "Teams furiously debugging neural models and smart contract deployments at 3:00 AM.",
    },
    {
      id: 6,
      title: "Women in Computing (ACM-W) Meetup",
      category: "COMMUNITY",
      date: "Jan 2026",
      location: "Lab Alan Turing 304B",
      aspect: "col-span-1",
      gradient: "from-sky-500 via-teal-900 to-slate-950",
      caption: "Panel discussion with senior female engineers from Google on career readiness and leadership.",
    },
  ];

  const filtered = photos.filter((p) => filter === "ALL" || p.category === filter);

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold badge-glow">
          <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
          <span>CHAPTER EVENT MEMORIES &amp; MOMENTS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Moments of Innovation &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 text-glow">
            Celebration
          </span>
        </h1>

        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore snapshots of hackathon triumphs, hands-on lab sessions, guest keynotes, and our vibrant student developer community.
        </p>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "ALL", label: "All Photos" },
            { id: "HACKATHON", label: "Hackathons" },
            { id: "WORKSHOPS", label: "Workshops" },
            { id: "AWARDS", label: "Award Ceremonies" },
            { id: "COMMUNITY", label: "Community & SIGs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab.id
                  ? "bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "glass-card text-slate-300 hover:text-white border border-sky-400/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((photo) => (
            <TiltCard
              key={photo.id}
              className={`${photo.aspect} min-h-[280px] p-6 glass-card border border-sky-400/20 relative group cursor-pointer flex flex-col justify-between`}
            >
              <div
                onClick={() => setActivePhoto(photo)}
                className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} opacity-70 group-hover:opacity-90 transition-opacity`}
              />

              {/* Top meta tags */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-sky-400 border border-sky-400/30">
                  {photo.category}
                </span>
                <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-sky-400" />
                  <span>{photo.date}</span>
                </span>
              </div>

              {/* Bottom Caption & Eye Action */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {photo.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-slate-900/80 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-300/90 line-clamp-2">{photo.caption}</p>
                <div className="text-[11px] text-sky-400 flex items-center gap-1 pt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{photo.location}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 3. LIGHTBOX PREVIEW MODAL */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full glass-panel p-8 rounded-3xl border border-sky-400/40 space-y-6 shadow-[0_0_60px_rgba(56,189,248,0.3)]">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`h-64 rounded-2xl bg-gradient-to-br ${activePhoto.gradient} flex items-center justify-center p-6 text-center border border-sky-400/20`}>
              <div className="space-y-2">
                <ImageIcon className="w-12 h-12 text-sky-300 mx-auto opacity-70" />
                <span className="text-sm font-mono text-sky-200 uppercase tracking-widest">{activePhoto.title}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-sky-400 font-mono">
                <span>{activePhoto.category} • {activePhoto.date}</span>
                <span>{activePhoto.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{activePhoto.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
