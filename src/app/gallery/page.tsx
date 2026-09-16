"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { Image as ImageIcon, X, Eye, Calendar, MapPin } from "lucide-react";

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
      gradient: "from-sky-600 via-blue-700 to-indigo-900",
      caption: "500+ student developers gathered for the keynote opening by faculty sponsor Dr. Asif Ali Laghari.",
    },
    {
      id: 2,
      title: "ICPC Regional Finalist Trophy",
      category: "AWARDS",
      date: "Dec 2025",
      location: "National Contest Arena",
      aspect: "col-span-1",
      gradient: "from-amber-600 via-orange-700 to-amber-900",
      caption: "Our competitive coding squad celebrating 2nd runner-up position at the national ICPC qualifiers.",
    },
    {
      id: 3,
      title: "Hands-on Rust Microservices Lab",
      category: "WORKSHOPS",
      date: "Jan 2026",
      location: "CS-302 Innovation Lab",
      aspect: "col-span-1",
      gradient: "from-cyan-600 via-sky-700 to-blue-900",
      caption: "Undergraduates building high-throughput gRPC services and exploring memory safety in Rust.",
    },
    {
      id: 4,
      title: "Executive Council Strategy Retreat",
      category: "COMMUNITY",
      date: "Feb 2026",
      location: "Campus Garden Terrace",
      aspect: "col-span-1 md:col-span-2",
      gradient: "from-blue-600 via-indigo-700 to-sky-900",
      caption: "Annual leadership planning session mapping out 2026 conference themes, sponsors, and SIG tracks.",
    },
    {
      id: 5,
      title: "Midnight Hackathon Sprint Hours",
      category: "HACKATHON",
      date: "Nov 2025",
      location: "Grand Arena Lab",
      aspect: "col-span-1",
      gradient: "from-purple-700 via-indigo-800 to-slate-900",
      caption: "Teams furiously debugging neural models and smart contract deployments at 3:00 AM.",
    },
    {
      id: 6,
      title: "Women in Computing (ACM-W) Meetup",
      category: "COMMUNITY",
      date: "Jan 2026",
      location: "Lab Alan Turing 304B",
      aspect: "col-span-1",
      gradient: "from-sky-500 via-teal-700 to-blue-900",
      caption: "Panel discussion with senior female engineers from Google on career readiness and leadership.",
    },
  ];

  const filtered = photos.filter((p) => filter === "ALL" || p.category === filter);

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
          <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
          <span>CHAPTER EVENT MEMORIES &amp; MOMENTS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Moments of Innovation &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
            Celebration
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                  ? "bg-sky-600 text-white shadow-[0_4px_14px_rgba(14,165,233,0.35)]"
                  : "bg-white text-slate-700 hover:text-sky-600 border border-sky-200 shadow-xs"
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
              className={`${photo.aspect} min-h-[280px] p-6 rounded-2xl border border-sky-200 relative group cursor-pointer flex flex-col justify-between shadow-sm overflow-hidden`}
            >
              <div
                onClick={() => setActivePhoto(photo)}
                className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
              />

              {/* Top meta tags */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white backdrop-blur-md border border-white/30">
                  {photo.category}
                </span>
                <span className="text-[11px] font-mono text-white/90 flex items-center gap-1 font-medium">
                  <Calendar className="w-3 h-3 text-sky-300" />
                  <span>{photo.date}</span>
                </span>
              </div>

              {/* Bottom Caption & Eye Action */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                    {photo.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-white/20 text-white backdrop-blur-md group-hover:bg-white group-hover:text-sky-600 transition-all shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-white/90 line-clamp-2">{photo.caption}</p>
                <div className="text-[11px] text-sky-200 flex items-center gap-1 pt-1 font-medium">
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
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-white p-8 rounded-3xl border border-sky-200 space-y-6 shadow-[0_25px_60px_rgba(14,165,233,0.25)]">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`h-64 rounded-2xl bg-gradient-to-br ${activePhoto.gradient} flex items-center justify-center p-6 text-center shadow-inner`}>
              <div className="space-y-2">
                <ImageIcon className="w-12 h-12 text-white/80 mx-auto" />
                <span className="text-sm font-mono text-white/90 uppercase tracking-widest font-semibold">{activePhoto.title}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-sky-600 font-mono font-semibold">
                <span>{activePhoto.category} • {activePhoto.date}</span>
                <span>{activePhoto.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{activePhoto.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
