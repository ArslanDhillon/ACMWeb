"use client";

import React, { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Search 
} from "lucide-react";

export default function EventsPage() {
  const [filterType, setFilterType] = useState("ALL");
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      title: "DevDay 2026: Annual Developer Summit",
      category: "HACKATHON",
      type: "Flagship Summit",
      date: "March 28-30, 2026",
      time: "09:00 AM - 08:00 PM EST",
      venue: "Grand Campus Arena & Live Discord",
      seats: "450 / 500 Registered",
      description: "3 days of non-stop hackathons, keynote tech talks by Google & Microsoft engineers, and PKR 500,000 in grand cash prizes.",
      speaker: "Keynotes from Google, Devsinc & AWS",
      status: "OPEN",
      featured: true,
      href: "/events/devday-2026",
    },
    {
      id: 2,
      title: "High-Performance Rust for Cloud Microservices",
      category: "WORKSHOP",
      type: "Hands-on Lab",
      date: "April 12, 2026",
      time: "03:00 PM - 06:00 PM EST",
      venue: "CS Innovation Lab (CS-302)",
      seats: "60 / 60 Full (Waitlist Open)",
      description: "Learn memory safety, Tokio async runtime, and zero-cost abstractions by building a high-throughput gRPC microservice in Rust.",
      speaker: "Hamza Shaikh (Director of Tech)",
      status: "WAITLIST",
      featured: false,
      href: "/contact",
    },
    {
      id: 3,
      title: "ICPC Algorithmic CodeSprint Qualifier #4",
      category: "CONTEST",
      type: "Competitive Coding",
      date: "April 24, 2026",
      time: "05:00 PM - 09:00 PM EST",
      venue: "Online Contest Portal (HackerEarth)",
      seats: "180 Registered",
      description: "5 algorithmic challenges spanning advanced graph algorithms, segment trees, and dynamic programming. Qualifier for national team.",
      speaker: "Farhan Ahmed (ICPC Lead Coach)",
      status: "OPEN",
      featured: false,
      href: "/hackathon",
    },
    {
      id: 4,
      title: "Fine-Tuning Open-Source LLMs with PyTorch",
      category: "WORKSHOP",
      type: "AI Symposium",
      date: "May 08, 2026",
      time: "02:00 PM - 05:00 PM EST",
      venue: "Auditorium Hall B",
      seats: "110 / 150 Registered",
      description: "Practical tutorial on LoRA, QLoRA, and parameter-efficient fine-tuning of Llama 3 models on consumer hardware.",
      speaker: "Zainab Tariq (Head of AI)",
      status: "OPEN",
      featured: false,
      href: "/contact",
    },
    {
      id: 5,
      title: "Industry Guest Talk: Scalable Systems at Microsoft",
      category: "TALK",
      type: "Tech Talk",
      date: "May 18, 2026",
      time: "04:30 PM - 06:30 PM EST",
      venue: "Virtual Livestream & Lab 304",
      seats: "320 Registered",
      description: "Principal Distributed Systems Engineer discusses hyper-scale caching, multi-region Azure resilience, and career paths for undergrads.",
      speaker: "Senior Architect (Microsoft Azure)",
      status: "OPEN",
      featured: false,
      href: "/contact",
    },
  ];

  const filtered = events.filter((e) => {
    const matchesCategory = filterType === "ALL" || e.category === filterType;
    const matchesSearch = 
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.speaker.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
          <Calendar className="w-3.5 h-3.5 text-sky-600" />
          <span>CHAPTER EVENT CALENDAR • 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Upcoming Hackathons &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
            Tech Workshops
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From intensive 36-hour hackathons to hands-on systems programming bootcamps and ICPC contest qualifiers. Explore our upcoming chapter schedule.
        </p>
      </section>

      {/* 2. SEARCH & FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-sky-200/80 shadow-sm">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: "ALL", label: "All Categories" },
              { id: "HACKATHON", label: "Hackathons" },
              { id: "WORKSHOP", label: "Labs & Workshops" },
              { id: "CONTEST", label: "ICPC Contests" },
              { id: "TALK", label: "Tech Talks" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filterType === tab.id
                    ? "bg-sky-600 text-white shadow-[0_4px_14px_rgba(14,165,233,0.35)]"
                    : "text-slate-600 hover:text-sky-700 hover:bg-sky-50 bg-white border border-sky-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-sky-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search event name, topic, speaker..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-xs"
            />
          </div>
        </div>

        {/* 3. EVENT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((event) => (
            <TiltCard key={event.id} className="glass-card p-7 border border-sky-200/80 flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-sky-800 bg-sky-100 border border-sky-300">
                    {event.type}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    event.status === "OPEN" 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-300" 
                      : "bg-amber-50 text-amber-700 border border-amber-300"
                  }`}>
                    {event.status === "OPEN" ? "● RSVP OPEN" : "● WAITLIST"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>{event.date}</span>
                    <span className="text-slate-300">•</span>
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-sky-600" />
                    <span>{event.seats}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium truncate max-w-[200px]">
                  {event.speaker}
                </span>
                <Link
                  href={event.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_14px_rgba(14,165,233,0.3)] transition-all"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
