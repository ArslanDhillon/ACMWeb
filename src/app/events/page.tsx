"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, Filter, ArrowRight, ChevronRight } from "lucide-react";

type EventType = "all" | "seminar" | "workshop" | "hackathon" | "social";
type EventStatus = "all" | "upcoming" | "past";

const events = [
  {
    slug: "acm-seminar-learning-to-employment",
    type: "seminar" as const,
    status: "past" as const,
    title: "ACM Seminar: From Learning to Employment",
    date: "2026",
    time: "9:00 AM – 5:00 PM",
    location: "Superior University, Lahore",
    duration: "Full Day",
    description:
      "A landmark seminar organized by ACM Superior Society connecting students with industry professionals. This event bridged the gap between academic learning and real-world employment in the technology sector, featuring talks from experienced professionals, career guidance sessions, and interactive Q&A panels.",
    highlights: [
      "Keynote talks by experienced tech professionals",
      "Career pathway guidance for CS students",
      "Interactive Q&A panel with industry experts",
      "Networking opportunities with professionals",
      "Insights on internships and job hunting in tech",
    ],
    image: "/eventsImages/IMG_4159.JPG.jpeg",
    attendees: "200+",
  },
  {
    slug: "tech-career-pathways-2026",
    type: "seminar" as const,
    status: "upcoming" as const,
    title: "Tech Career Pathways 2026",
    date: "Coming Soon",
    time: "TBD",
    location: "Superior University, Lahore",
    duration: "Half Day",
    description:
      "Explore diverse career paths in software engineering, AI research, and tech entrepreneurship. Connect with alumni and industry mentors who will share their journeys and advice.",
    highlights: [
      "Panel discussion with tech professionals",
      "Career roadmap sessions",
      "CV and portfolio review workshop",
      "Networking lunch",
    ],
    image: "/eventsImages/IMG_4338.JPG.jpeg",
    attendees: "TBD",
  },
  {
    slug: "web-dev-bootcamp-2026",
    type: "workshop" as const,
    status: "upcoming" as const,
    title: "Web Development Bootcamp",
    date: "Coming Soon",
    time: "TBD",
    location: "Superior University, Lahore",
    duration: "2 Days",
    description:
      "Hands-on workshop covering modern full-stack development. Learn React, Next.js, Node.js, and database integration through practical projects.",
    highlights: [
      "Frontend with React & Next.js",
      "Backend with Node.js & Express",
      "Database design & integration",
      "Deployment to cloud platforms",
    ],
    image: "/eventsImages/IMG_4352.JPG.jpeg",
    attendees: "TBD",
  },
  {
    slug: "codestorm-2026",
    type: "hackathon" as const,
    status: "upcoming" as const,
    title: "CodeStorm 2026",
    date: "Coming Soon",
    time: "TBD",
    location: "Superior University, Lahore",
    duration: "24 Hours",
    description:
      "24-hour hackathon where teams build innovative solutions to real-world problems. Compete for prizes, get mentored by industry professionals, and showcase your engineering talent.",
    highlights: [
      "24-hour coding challenge",
      "Teams of 3-5 members",
      "Industry mentor support",
      "Prizes for top 3 teams",
    ],
    image: "/eventsImages/IMG_4367.JPG.jpeg",
    attendees: "TBD",
  },
];

const typeLabels: Record<string, string> = {
  all: "All Types",
  seminar: "Seminar",
  workshop: "Workshop",
  hackathon: "Hackathon",
  social: "Social",
};

const statusColors: Record<string, string> = {
  past: "bg-slate-100 text-slate-600 border-slate-200",
  upcoming: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const typeColors: Record<string, string> = {
  seminar: "bg-sky-50 text-sky-700 border-sky-200",
  workshop: "bg-blue-50 text-blue-700 border-blue-200",
  hackathon: "bg-indigo-50 text-indigo-700 border-indigo-200",
  social: "bg-cyan-50 text-cyan-700 border-cyan-200",
};

export default function EventsPage() {
  const [statusFilter, setStatusFilter] = useState<EventStatus>("all");
  const [typeFilter, setTypeFilter] = useState<EventType>("all");

  const filtered = events.filter((e) => {
    const statusMatch = statusFilter === "all" || e.status === statusFilter;
    const typeMatch = typeFilter === "all" || e.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <div className="space-y-12 pb-24">
      {/* HEADER */}
      <section className="pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>ACM SUPERIOR EVENTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Events &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
              Workshops
            </span>
          </h1>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Seminars, workshops, hackathons, and more — all designed to connect you with industry
            professionals and help you grow as a computing professional.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Filter className="w-4 h-4 text-sky-500" />
            <span>Filter:</span>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            {(["all", "upcoming", "past"] as EventStatus[]).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all capitalize ${
                  statusFilter === s
                    ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                {s === "all" ? "All Status" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          <div className="w-px h-5 bg-slate-200 hidden sm:block" />

          {/* Type Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            {(["all", "seminar", "workshop", "hackathon"] as EventType[]).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  typeFilter === t
                    ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                {typeLabels[t]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-sky-200" />
            <p className="font-semibold">No events match your filters.</p>
            <button
              onClick={() => { setStatusFilter("all"); setTypeFilter("all"); }}
              className="mt-3 text-xs text-sky-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((ev) => (
              <div
                key={ev.slug}
                className="glass-panel rounded-3xl border border-sky-100 hover:border-sky-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all overflow-hidden group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden bg-sky-50">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${typeColors[ev.type] || "bg-sky-50 text-sky-700 border-sky-200"}`}>
                      {ev.type.toUpperCase()}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusColors[ev.status]}`}>
                      {ev.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6 space-y-4">
                  <h2 className="text-lg font-extrabold text-slate-900 leading-tight">{ev.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{ev.description}</p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      <span>{ev.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      <span className="truncate">{ev.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      <span>{ev.attendees} attendees</span>
                    </div>
                  </div>

                  <Link
                    href={`/events/${ev.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-sky-200 p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Want to Suggest an Event?</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Have an idea for a workshop, seminar, or hackathon? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:from-sky-400 hover:to-blue-500 transition-all"
          >
            <span>Contact Us</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
