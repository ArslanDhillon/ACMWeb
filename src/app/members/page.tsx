"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { 
  Users, 
  Search, 
  Mail, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  Briefcase, 
  Megaphone, 
  Globe, 
  Camera, 
  Share2 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function MembersPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "ALL", label: "All Members" },
    { id: "EXECUTIVE", label: "Executive Board" },
    { id: "IT", label: "IT Committee" },
    { id: "EVENTS", label: "Events Committee" },
    { id: "MARKETING", label: "Marketing" },
    { id: "PR", label: "PR & Comms" },
    { id: "HR", label: "HR & Recruitment" },
    { id: "CREATIVE", label: "Creative & Design" },
    { id: "SOCIAL", label: "Social Media" },
  ];

  const councilMembers = [
    {
      id: 1,
      name: "President / Chairperson",
      role: "Chapter Chairperson",
      category: "EXECUTIVE",
      department: "Executive Council",
      bio: "Leads chapter vision, institutional partnerships, and student mentorship programs under the guidance of our Faculty Advisor.",
      skills: ["Leadership", "Strategy", "Public Speaking", "Community"],
      initials: "PR",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 2,
      name: "Vice Chairperson",
      role: "Vice President",
      category: "EXECUTIVE",
      department: "Executive Council",
      bio: "Oversees research initiatives, student workshop curricula, and academic partnerships across university faculties.",
      skills: ["Operations", "Academic Relations", "Mentorship"],
      initials: "VP",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 3,
      name: "General Secretary",
      role: "General Secretary",
      category: "EXECUTIVE",
      department: "Executive Council",
      bio: "Directs internal chapter communications, membership credentials, official dispatches, and event reporting.",
      skills: ["Documentation", "Communication", "Management"],
      initials: "GS",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 4,
      name: "IT Committee Lead",
      role: "Head of IT Committee",
      category: "IT",
      department: "IT Committee",
      bio: "Manages chapter web platforms, cloud infrastructure, developer bootcamps, and technical setups for hackathons.",
      skills: ["Next.js", "TypeScript", "Cloud Systems", "DevOps"],
      initials: "IT",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 5,
      name: "Events Committee Lead",
      role: "Head of Events",
      category: "EVENTS",
      department: "Events Committee",
      bio: "Orchestrated the landmark 'ACM Seminar: From Learning to Employment'. Manages venue logistics, guest speakers, and schedules.",
      skills: ["Event Direction", "Logistics", "Stage Management"],
      initials: "EV",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 6,
      name: "Marketing Committee Lead",
      role: "Head of Marketing",
      category: "MARKETING",
      department: "Marketing Committee",
      bio: "Drives campus outreach, event publicity, student engagement campaigns, and society brand visibility.",
      skills: ["Brand Strategy", "Campaigns", "Campus Outreach"],
      initials: "MK",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 7,
      name: "PR Committee Lead",
      role: "Head of Public Relations",
      category: "PR",
      department: "PR Committee",
      bio: "Builds relationships with guest speakers, alumni network, university administration, and external tech communities.",
      skills: ["Corporate Relations", "Press", "Public Relations"],
      initials: "PR",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 8,
      name: "HR Committee Lead",
      role: "Head of Human Resources",
      category: "HR",
      department: "HR Committee",
      bio: "Manages member recruitment, sub-committee onboarding, performance tracking, and team-building sessions.",
      skills: ["Talent Acquisition", "People Ops", "Team Building"],
      initials: "HR",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 9,
      name: "Creative Committee Lead",
      role: "Head of Creative & Design",
      category: "CREATIVE",
      department: "Creative Committee",
      bio: "Designs all chapter visual identities, banners, event backdrops, motion graphics, and social media flyers.",
      skills: ["Figma", "Photoshop", "Illustrator", "Brand Design"],
      initials: "CR",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
    {
      id: 10,
      name: "Social Media Committee Lead",
      role: "Head of Social Media",
      category: "SOCIAL",
      department: "Social Media Committee",
      bio: "Manages Superior ACM official Instagram, LinkedIn, and Facebook feeds, keeping the community informed in real-time.",
      skills: ["Social Media Strategy", "Content Creation", "Community"],
      initials: "SM",
      linkedin: "https://www.linkedin.com/company/superior-acm-society/",
    },
  ];

  const filteredMembers = councilMembers.filter((m) => {
    const matchesCategory = selectedCategory === "ALL" || m.category === selectedCategory;
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            <span>SUPERIOR ACM SOCIETY • LEADERSHIP &amp; COMMITTEES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Meet the Minds{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
              Powering ACM
            </span>
          </h1>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our chapter operates through seven specialized sub-committees under faculty mentorship, working together to foster technical excellence and community empowerment at Superior University.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 border border-sky-200 text-sky-700 shadow-xs">
              ⚡ IT &amp; Engineering
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 shadow-xs">
              🎯 Events &amp; Workshops
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 border border-cyan-200 text-cyan-700 shadow-xs">
              📢 Marketing, PR &amp; Creative
            </span>
          </div>
        </div>

        {/* Floating Chapter Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { value: "500+", label: "Active Members" },
            { value: "7", label: "Sub-Committees" },
            { value: "100%", label: "Student Driven" },
            { value: "ACM", label: "Global Affiliation" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl border border-sky-200/80 text-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                {s.value}
              </div>
              <div className="text-xs text-slate-600 font-semibold mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FACULTY ADVISOR SPOTLIGHT (MANDATORY FROM BRIEF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200/80 pb-4">
          <GraduationCap className="w-5 h-5 text-sky-600" />
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Faculty Leadership &amp; Patronage</h2>
          <span className="text-xs text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-full border border-sky-200 font-semibold">
            Faculty Advisor
          </span>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-sky-200/80 shadow-[0_12px_40px_rgba(14,165,233,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Advisor Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-[0_12px_35px_rgba(14,165,233,0.25)] relative z-10">
                  <Image
                    src="/advisor.jpg"
                    alt="Prof. Dr. Sohail Masood Bhatti"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-sky-300/40 scale-105 z-0" />
              </div>
            </div>

            {/* Advisor Bio & Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Prof. Dr. Sohail Masood Bhatti</h3>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
                    Faculty Advisor
                  </span>
                </div>
                <p className="text-sm font-semibold text-sky-600">
                  Professor, Faculty of Computer Sciences &amp; Information Technology, Superior University Lahore
                </p>
                <p className="text-xs text-slate-500">
                  Ph.D. in Computer Science (FAST-NUCES Islamabad) • Postdoctoral Research (Universidad de Chile) • U.S. Patent Holder
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With over a decade of experience in Machine Learning, Artificial Intelligence, and the software industry, his research focuses on image/signal processing, medical image analysis, malware detection, and applied deep learning. As Faculty Advisor of Superior ACM Society, he guides students in advancing computing knowledge, fostering innovation, and building industry-ready skills.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">
                  Machine Learning &amp; AI
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">
                  Medical Image Analysis
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">
                  Malware Detection
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">
                  Applied Deep Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCH & CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-sky-200/80 shadow-sm">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === c.id
                    ? "bg-sky-600 text-white shadow-[0_4px_14px_rgba(14,165,233,0.35)]"
                    : "text-slate-600 hover:text-sky-700 hover:bg-sky-50 bg-white border border-sky-100"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-sky-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search member, role, skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-xs"
            />
          </div>
        </div>

        {/* 4. TEAM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((m) => (
            <TiltCard key={m.id} className="glass-card p-6 border border-sky-200/80 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-14 h-14 rounded-2xl p-[2px] bg-gradient-to-tr from-sky-400 via-sky-500 to-blue-600 shadow-sm">
                    <div className="w-full h-full rounded-[14px] bg-sky-50 flex items-center justify-center text-lg font-extrabold text-sky-700">
                      {m.initials}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
                    {m.department}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600">{m.role}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                  {m.bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-1">
                  {m.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-50 text-sky-800 border border-sky-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Superior ACM Society</span>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-sky-50 text-slate-600 hover:text-sky-600 hover:bg-sky-100 transition-colors border border-sky-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-sky-200">
            <p className="text-sm text-slate-500">No committee members found matching &quot;{searchQuery}&quot;.</p>
          </div>
        )}
      </section>

      {/* 5. RECRUITMENT CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel border border-sky-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_rgba(14,165,233,0.1)]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-slate-900">Want to Join a Superior ACM Sub-Committee?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Recruitment drives for IT, Events, Marketing, PR, HR, Creative, and Social Media committees open each semester. Build your leadership and technical portfolio with us.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all flex-shrink-0"
          >
            Contact Society HQ →
          </Link>
        </div>
      </section>
    </div>
  );
}
