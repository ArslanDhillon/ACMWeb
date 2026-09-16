"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { 
  Users, 
  Search, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Code, 
  Palette, 
  Calendar 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function MembersPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "ALL", label: "All Leadership" },
    { id: "FACULTY", label: "Faculty Sponsors" },
    { id: "EXECUTIVE", label: "Executive Board" },
    { id: "TECH", label: "Technical Leads" },
    { id: "MEDIA", label: "Media & Design" },
    { id: "ICPC", label: "Competitive Programming" },
  ];

  const facultyAdvisors = [
    {
      name: "Dr. Asif Ali Laghari",
      role: "Faculty Sponsor & Associate Professor",
      department: "Department of Computer Science & Software Engineering",
      research: ["Distributed Cloud Computing", "Cyber Security", "Multimedia QoE"],
      acmStatus: "ACM Senior Member",
      email: "asif.laghari@university.acm.org",
      initials: "AL",
      badgeColor: "from-sky-400 to-blue-600",
    },
    {
      name: "Dr. Muhammad Kashif",
      role: "Co-Advisor & Assistant Professor",
      department: "Artificial Intelligence & Robotics Research Lab",
      research: ["Deep Reinforcement Learning", "Autonomous Edge AI", "Big Data Analytics"],
      acmStatus: "ACM Professional Member",
      email: "m.kashif@university.acm.org",
      initials: "MK",
      badgeColor: "from-cyan-400 to-blue-500",
    },
  ];

  const councilMembers = [
    {
      id: 1,
      name: "Muhammad Salman",
      role: "Chairperson / President",
      category: "EXECUTIVE",
      domain: "Cloud & Distributed Systems",
      tenure: "#01",
      bio: "Leads chapter vision, university partnerships, and student mentorship programs. Architected regional hackathons with 600+ attendees.",
      skills: ["Kubernetes", "Next.js", "Go", "Cloud Arch"],
      initials: "MS",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Syeda Dua Fatima",
      role: "Vice Chairperson",
      category: "EXECUTIVE",
      domain: "AI & Neural Architectures",
      tenure: "#02",
      bio: "Oversees research symposiums, student workshop curricula, and academic initiatives. Winner of National Data Science Hackathon 2025.",
      skills: ["PyTorch", "Transformers", "NLP", "Python"],
      initials: "DF",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Taha Siddiqui",
      role: "General Secretary",
      category: "EXECUTIVE",
      domain: "Operations & Chapter Relations",
      tenure: "#03",
      bio: "Directs internal chapter communications, membership credentials, ACM International reporting, and university sponsor relations.",
      skills: ["Operations", "Strategic Comms", "Community Ops"],
      initials: "TS",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Hamza Shaikh",
      role: "Director of Technology",
      category: "TECH",
      domain: "Full-Stack & 3D WebGL",
      tenure: "#04",
      bio: "Oversees all student digital platforms, open-source repositories, and developer workshops. Three.js and modern React advocate.",
      skills: ["Three.js", "TypeScript", "Tailwind", "Docker"],
      initials: "HS",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Zainab Tariq",
      role: "Head of AI & Research",
      category: "TECH",
      domain: "LLMs & Computer Vision",
      tenure: "#05",
      bio: "Directs weekly reading groups on top IEEE/ACM papers and coordinates student research submissions to international conferences.",
      skills: ["Computer Vision", "LLMs", "TensorFlow", "Research"],
      initials: "ZT",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 6,
      name: "Bilal Ahmed",
      role: "Creative & Design Director",
      category: "MEDIA",
      domain: "3D Media & Brand Systems",
      tenure: "#06",
      bio: "Designs all chapter visual identities, 3D promotional assets, motion graphics, and event stage interfaces. Blender & Figma enthusiast.",
      skills: ["Blender 3D", "Figma", "Motion Graphics", "UI/UX"],
      initials: "BA",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 7,
      name: "Sarah Noor",
      role: "Director of Events",
      category: "EXECUTIVE",
      domain: "Hackathons & Summits",
      tenure: "#07",
      bio: "Leads logistics and execution for DevDay, CodeStorm, and industry networking summits. Coordinated 40+ speakers and partner tech firms.",
      skills: ["Event Direction", "Sponsor Relations", "Logistics"],
      initials: "SN",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 8,
      name: "Farhan Ahmed",
      role: "Competitive Programming Lead",
      category: "ICPC",
      domain: "ICPC Training & Algorithms",
      tenure: "#08",
      bio: "Head coach for university ICPC teams. Candidate Master on Codeforces. Conducts bi-weekly contest simulations and problem editorial talks.",
      skills: ["C++20", "Graph Algorithms", "Segment Trees", "DP"],
      initials: "FA",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  // Filtering
  const filteredMembers = councilMembers.filter((m) => {
    const matchesCategory = selectedCategory === "ALL" || m.category === selectedCategory;
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold badge-glow">
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span>EXECUTIVE COUNCIL • 2025 - 2026 TENURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Meet the Minds{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 text-glow">
              Powering ACM
            </span>
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A passionate collective of student researchers, developers, competitive coders, and faculty advisors dedicated to fostering technical excellence.
          </p>

          {/* Capability Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-400/20 text-sky-300">
              ⚡ Innovation Leaders
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-400/20 text-blue-300">
              🎓 Passionate Mentors
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
              🚀 Future Builders
            </span>
          </div>
        </div>

        {/* Floating Chapter Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { value: "500+", label: "Active Members" },
            { value: "45+", label: "Hosted Events" },
            { value: "12", label: "National Trophies" },
            { value: "100%", label: "Student-Driven" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl border border-sky-400/20 text-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white text-glow">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FACULTY SPONSORS & ADVISORS */}
      {(selectedCategory === "ALL" || selectedCategory === "FACULTY") && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-sky-400/15 pb-4">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Faculty Advisory Board</h2>
            <span className="text-xs text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
              Mentorship &amp; Patronage
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {facultyAdvisors.map((f, i) => (
              <TiltCard key={i} className="glass-panel p-7 border border-sky-400/25 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className={`relative w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-tr ${f.badgeColor} shadow-[0_0_25px_rgba(56,189,248,0.4)] flex-shrink-0`}>
                    <div className="w-full h-full rounded-[14px] bg-[#0b0f19] flex items-center justify-center text-xl font-extrabold text-sky-300">
                      {f.initials}
                    </div>
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{f.name}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30">
                        {f.acmStatus}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-sky-400">{f.role}</p>
                    <p className="text-xs text-slate-400">{f.department}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Research Focus Areas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {f.research.map((r, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-md text-[11px] bg-slate-900/80 text-slate-300 border border-sky-400/15">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{f.email}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Advisory Desk</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      )}

      {/* 3. SEARCH & CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-sky-400/20">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === c.id
                    ? "bg-sky-500 text-white font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-sky-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search member, skill, role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-900/90 border border-sky-400/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
            />
          </div>
        </div>

        {/* 4. EXECUTIVE COUNCIL GRID (3D Mouse Hover Tilt Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((m) => (
            <TiltCard key={m.id} className="glass-card p-6 border border-sky-400/20 flex flex-col justify-between h-full group">
              <div>
                {/* Avatar & Tenure Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className="relative w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-sky-400 via-sky-500 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all">
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-white">
                      {m.initials}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-400/30">
                    {m.tenure}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400">{m.role}</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
                    <span>{m.domain}</span>
                  </p>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-300/90 leading-relaxed mt-3 pt-3 border-t border-slate-800/80">
                  {m.bio}
                </p>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {m.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-slate-300 border border-sky-400/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links & Action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
                <button className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors">
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-sky-400/20">
            <p className="text-sm text-slate-400">No leadership profiles found matching &quot;{searchQuery}&quot;.</p>
          </div>
        )}
      </section>

      {/* 5. RECRUITMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel border border-sky-400/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white">Want to Join the ACM Executive Team?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Associate Director and Technical Lead recruitments open each semester for freshmen and sophomores. Build your leadership profile.
            </p>
          </div>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex-shrink-0"
          >
            Apply for Associate Officer →
          </a>
        </div>
      </section>
    </div>
  );
}
