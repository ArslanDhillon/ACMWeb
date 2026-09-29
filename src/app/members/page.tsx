"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { Users, Search, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

/* ─── TEAM DATA ──────────────────────────────────────────────────────────── */

interface Member {
  id: number;
  name: string;
  role: string;
  category: string;
  department: string;
  initials: string;
  bio: string;
  skills: string[];
  image?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

/* Uniform brand gradient used by every card */
const AVATAR_GRADIENT = "from-sky-500 via-cyan-600 to-blue-700";
const AVATAR_RING = "ring-sky-300";

const councilMembers: Member[] = [
  {
    id: 1,
    name: "Syed Aalay Hussain",
    role: "President",
    category: "EXECUTIVE",
    department: "Executive Council",
    initials: "SAH",
    bio: "Leads chapter vision, institutional partnerships, and student mentorship programs under the guidance of our Faculty Advisor.",
    skills: ["Leadership", "Strategy", "Public Speaking", "Community"],
    image: "/team/alayhussain.jpg",
    instagram: "https://www.instagram.com/syed_aalay_hussain",
    linkedin: "https://www.linkedin.com/in/syed-aalay-hussain-521170348",
  },
  {
    id: 2,
    name: "Bilal Sarwar",
    role: "Vice President",
    category: "EXECUTIVE",
    department: "Executive Council",
    initials: "BS",
    bio: "Oversees research initiatives, student workshop curricula, and academic partnerships across university faculties.",
    skills: ["Operations", "Academic Relations", "Mentorship", "Dev"],
    image: "/team/bilal.png",
    github: "https://github.com/Bilal191919",
    linkedin: "https://www.linkedin.com/in/hafiz-muhammad-bilal-sarwar-bb7513380",
  },
  {
    id: 3,
    name: "Attika Batool",
    role: "General Secretary",
    category: "EXECUTIVE",
    department: "Executive Council",
    initials: "AB",
    bio: "Directs internal chapter communications, membership credentials, official dispatches, and event reporting.",
    skills: ["Documentation", "Communication", "Management", "Organization"],
    image: "/team/attika.jpg",
    github: "https://github.com/atikabatool",
    linkedin: "https://www.linkedin.com/in/atika-batool-567299383",
  },
  {
    id: 4,
    name: "Abdullah Javed",
    role: "Marketing Head",
    category: "MARKETING",
    department: "Marketing Committee",
    initials: "AJ",
    bio: "Drives campus outreach, event publicity, student engagement campaigns, and society brand visibility.",
    skills: ["Brand Strategy", "Campaigns", "Campus Outreach", "Design"],
    image: "/team/abdullah2.png",
    github: "https://github.com/Abdullah-Javed-01",
    linkedin: "https://www.linkedin.com/in/abdullah-javed-id01",
  },
  {
    id: 5,
    name: "Muhammad Hamza",
    role: "Marketing Co-Head",
    category: "MARKETING",
    department: "Marketing Committee",
    initials: "MH",
    bio: "Supports campus outreach initiatives, content creation, and co-leads student engagement campaigns.",
    skills: ["Marketing", "Content", "Social Media", "Outreach"],
    image: "/team/hamza.jpg",
    github: "https://github.com/hzzzyy",
    instagram: "https://www.instagram.com/thebest.hzzzyy",
  },
  {
    id: 6,
    name: "Sheraz Qasim",
    role: "Finance Head",
    category: "FINANCE",
    department: "Finance Committee",
    initials: "SQ",
    bio: "Manages chapter financial planning, budget allocation, sponsorships, and event-wise expenditure tracking.",
    skills: ["Finance", "Budgeting", "Sponsorships", "Planning"],
    github: "https://github.com/Sheri-Creator",
    linkedin: "https://www.linkedin.com/in/muhammad-sheraz-qasim",
  },
  {
    id: 7,
    name: "Asna Sajid",
    role: "Events Head",
    category: "EVENTS",
    department: "Events Committee",
    initials: "AS",
    bio: "Orchestrates chapter events including the landmark ACM Seminar. Manages venue logistics, guest speakers, and schedules.",
    skills: ["Event Direction", "Logistics", "Stage Management", "Coordination"],
    image: "/team/ansa2.jpg",
    github: "https://github.com/asna-techLab",
    linkedin: "https://www.linkedin.com/in/asna-sajid-550711352",
  },
  {
    id: 8,
    name: "Taha Razzaq",
    role: "Documentation Head",
    category: "DOCS",
    department: "Documentation Committee",
    initials: "TR",
    bio: "Maintains accurate records of chapter activities, meeting minutes, event reports, and official chapter archives.",
    skills: ["Documentation", "Reporting", "Records Management", "Writing"],
    linkedin: "https://www.linkedin.com/in/taha-razzaq-b4a932280",
  },
  {
    id: 9,
    name: "Sayil Raza",
    role: "Graphics Head",
    category: "CREATIVE",
    department: "Creative & Design",
    initials: "SR",
    bio: "Designs all chapter visual identities, banners, event backdrops, motion graphics, and social media flyers.",
    skills: ["Figma", "Photoshop", "Illustrator", "Brand Design"],
    github: "https://github.com/sayilraza",
    linkedin: "https://www.linkedin.com/in/muhammad-sayil-raza-9b7584401",
  },
  {
    id: 10,
    name: "Syed Areeb Ijaz",
    role: "Graphics Co-Head",
    category: "CREATIVE",
    department: "Creative & Design",
    initials: "SAI",
    bio: "Co-leads the creative team in crafting visual content, event collateral, and digital brand assets.",
    skills: ["Design", "Motion Graphics", "Branding", "Visual Identity"],
    github: "https://github.com/Areebijiaz",
    linkedin: "https://www.linkedin.com/in/areeb-ejaz",
  },
  {
    id: 11,
    name: "Muhammad Asim",
    role: "Human Resource Head",
    category: "HR",
    department: "HR Committee",
    initials: "MA",
    bio: "Manages member recruitment, sub-committee onboarding, performance tracking, and team-building sessions.",
    skills: ["Talent Acquisition", "People Ops", "Team Building", "HR"],
    image: "/team/asim.jpg",
    github: "https://github.com/muhammadasim2240",
    linkedin: "https://www.linkedin.com/in/muhammadasim2240",
  },
  {
    id: 12,
    name: "Hamza Shoukat",
    role: "Social Media Head",
    category: "SOCIAL",
    department: "Social Media Committee",
    initials: "HS",
    bio: "Manages Superior ACM official Instagram, LinkedIn, and Facebook feeds, keeping the community informed in real-time.",
    skills: ["Social Media Strategy", "Content Creation", "Community", "Engagement"],
    linkedin: "https://www.linkedin.com/in/muhammad-hamza-shoukat-139b73356",
  },
  {
    id: 13,
    name: "Raahima Rashid Peracha",
    role: "Communication Lead",
    category: "PR",
    department: "PR & Communications",
    initials: "RRP",
    bio: "Builds relationships with guest speakers, alumni network, university administration, and external tech communities.",
    skills: ["Corporate Relations", "Press", "Public Relations", "Networking"],
    image: "/team/raahima.jpg",
    github: "https://github.com/RaahimaPeracha",
    linkedin: "https://www.linkedin.com/in/raahima-peracha",
  },
  {
    id: 14,
    name: "Shayyan Azam",
    role: "Technical Head",
    category: "IT",
    department: "IT Committee",
    initials: "SA",
    bio: "Manages chapter web platforms, cloud infrastructure, developer bootcamps, and technical setups for hackathons.",
    skills: ["Next.js", "TypeScript", "Cloud Systems", "DevOps"],
    image: "/team/shayyan.jpg",
    linkedin: "https://www.linkedin.com/in/shayyan-azam-663319405",
  },
];

const categories = [
  { id: "ALL", label: "All Members" },
  { id: "EXECUTIVE", label: "Executive Board" },
  { id: "IT", label: "Technical" },
  { id: "EVENTS", label: "Events" },
  { id: "MARKETING", label: "Marketing" },
  { id: "PR", label: "Communications" },
  { id: "HR", label: "Human Resources" },
  { id: "CREATIVE", label: "Creative & Design" },
  { id: "SOCIAL", label: "Social Media" },
  { id: "FINANCE", label: "Finance" },
  { id: "DOCS", label: "Documentation" },
];

/* ─── AVATAR ─────────────────────────────────────────────────────────────── */
function MemberAvatar({ initials, image, name }: { initials: string; image?: string; name: string }) {
  return (
    <div className={`relative mx-auto w-28 h-28 rounded-full ring-4 ${AVATAR_RING} ring-offset-2 shadow-2xl group-hover:scale-105 transition-transform duration-300`}>
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${AVATAR_GRADIENT} opacity-25 blur-md`} />
      {image ? (
        <div className="relative w-full h-full rounded-full bg-gradient-to-b from-sky-100 via-white to-blue-50 overflow-hidden border border-sky-200 shadow-inner">
          <Image
            src={image}
            alt={name}
            fill
            sizes="112px"
            className="object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${AVATAR_GRADIENT} flex items-center justify-center`}>
          <span className="text-white font-black text-2xl tracking-tight drop-shadow select-none">
            {initials}
          </span>
        </div>
      )}
      <div className="absolute top-2 left-3 w-8 h-5 bg-white/25 rounded-full blur-sm rotate-[-30deg] pointer-events-none" />
    </div>
  );
}

/* ─── TEAM CARD ──────────────────────────────────────────────────────────── */
function MemberCard({ m }: { m: Member }) {
  return (
    <TiltCard className="glass-card border border-sky-200/80 flex flex-col group overflow-hidden rounded-2xl h-full">
      {/* Brand accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${AVATAR_GRADIENT} flex-shrink-0`} />

      {/* Avatar + name */}
      <div className="flex flex-col items-center pt-8 pb-4 px-6 gap-4">
        <MemberAvatar initials={m.initials} image={m.image} name={m.name} />
        <div className="text-center space-y-1.5">
          <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors leading-tight">
            {m.name}
          </h3>
          <span className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${AVATAR_GRADIENT}`}>
            {m.role}
          </span>
          <p className="text-[11px] text-slate-500 font-medium">{m.department}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-sky-100" />

      {/* Bio & skills */}
      <div className="px-6 pt-4 pb-3 flex-1 flex flex-col">
        <p className="text-xs text-slate-600 leading-relaxed text-center">{m.bio}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {m.skills.map((s, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-sky-50 text-sky-800 border border-sky-200">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="px-6 pb-6 pt-3 border-t border-sky-100 flex items-center justify-center gap-3 flex-shrink-0">
        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${m.name} LinkedIn`}
            className="w-9 h-9 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white border border-[#0077B5]/20 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_14px_rgba(0,119,181,0.35)]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        )}
        {m.github && (
          <a
            href={m.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${m.name} GitHub`}
            className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
        {m.instagram && (
          <a
            href={m.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${m.name} Instagram`}
            className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white border border-pink-200 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_14px_rgba(236,72,153,0.35)]"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </TiltCard>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<"TEAM" | "MEMBERS">("TEAM");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = councilMembers.filter((m) => {
    const matchesCategory = selectedCategory === "ALL" || m.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.department.toLowerCase().includes(q) ||
      m.skills.some((s) => s.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-24">
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-sky-200/40 via-indigo-200/30 to-transparent rounded-full blur-3xl" />
        </div>
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
            14 dedicated student leaders across specialized sub-committees, working together to foster technical excellence and community empowerment at Superior University Lahore.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 border border-sky-200 text-sky-700 shadow-xs">⚡ Technical &amp; IT</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 shadow-xs">🎯 Events &amp; Workshops</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 border border-cyan-200 text-cyan-700 shadow-xs">📢 Marketing, PR &amp; Creative</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 border border-violet-200 text-violet-700 shadow-xs">🎨 Design &amp; Media</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { value: "500+", label: "Active Members" },
            { value: "14", label: "Council Leaders" },
            { value: "100%", label: "Student Driven" },
            { value: "ACM", label: "Global Affiliation" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl border border-sky-200/80 text-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">{s.value}</div>
              <div className="text-xs text-slate-600 font-semibold mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. FACULTY ADVISOR ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200/80 pb-4">
          <GraduationCap className="w-5 h-5 text-sky-600" />
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Faculty Leadership &amp; Patronage</h2>
          <span className="text-xs text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-full border border-sky-200 font-semibold">Faculty Advisor</span>
        </div>
        <div className="glass-panel p-8 rounded-3xl border border-sky-200/80 shadow-[0_12px_40px_rgba(14,165,233,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-4 border-white shadow-[0_12px_35px_rgba(14,165,233,0.25)] relative z-10">
                  <Image src="/advisor.jpg" alt="Prof. Dr. Sohail Masood Bhatti" width={208} height={208} className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-sky-300/40 scale-105 z-0" />
              </div>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Prof. Dr. Sohail Masood Bhatti</h3>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">Faculty Advisor</span>
                </div>
                <p className="text-sm font-semibold text-sky-600">Professor, Faculty of Computer Sciences &amp; Information Technology, Superior University Lahore</p>
                <p className="text-xs text-slate-500">Ph.D. in Computer Science (FAST-NUCES Islamabad) • Postdoctoral Research (Universidad de Chile) • U.S. Patent Holder</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With over a decade of experience in Machine Learning, Artificial Intelligence, and the software industry, his research focuses on image/signal processing, medical image analysis, malware detection, and applied deep learning. As Faculty Advisor of Superior ACM Society, he guides students in advancing computing knowledge, fostering innovation, and building industry-ready skills.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {["Machine Learning & AI", "Medical Image Analysis", "Malware Detection", "Applied Deep Learning"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TAB SWITCHER ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Tab pills */}
        <div className="flex items-center gap-1 glass-panel p-1.5 rounded-2xl border border-sky-200/80 shadow-sm w-fit mx-auto">
          {(["TEAM", "MEMBERS"] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase()}`}
              onClick={() => { setActiveTab(tab); setSelectedCategory("ALL"); setSearchQuery(""); }}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === tab
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_4px_14px_rgba(14,165,233,0.4)]"
                : "text-slate-500 hover:text-sky-700 hover:bg-sky-50"
                }`}
            >
              {tab === "TEAM" ? "🏆 Team" : "👥 Members"}
            </button>
          ))}
        </div>

        {/* ── TEAM TAB ──────────────────────────────────────────────────── */}
        {activeTab === "TEAM" && (
          <>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-sky-200/80 shadow-sm">
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${selectedCategory === c.id
                      ? "bg-sky-600 text-white shadow-[0_4px_14px_rgba(14,165,233,0.35)]"
                      : "text-slate-600 hover:text-sky-700 hover:bg-sky-50 bg-white border border-sky-100"
                      }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-72 flex-shrink-0">
                <Search className="w-4 h-4 text-sky-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search name, role, skill…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-xs"
                />
              </div>
            </div>

            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((m) => (
                  <MemberCard key={m.id} m={m} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 glass-panel rounded-2xl border border-sky-200">
                <p className="text-sm text-slate-500">No team members found matching &quot;{searchQuery}&quot;.</p>
              </div>
            )}
          </>
        )}

        {/* ── MEMBERS TAB ───────────────────────────────────────────────── */}
        {activeTab === "MEMBERS" && (
          <div className="space-y-8">
            {/* Info banner */}
            <div className="glass-panel rounded-2xl border border-sky-200/80 p-6 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_6px_20px_rgba(14,165,233,0.35)]">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-extrabold text-slate-900">General Membership</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Superior ACM Society has over{" "}
                  <span className="font-bold text-sky-600">500+ active student members</span>{" "}
                  across all departments of Superior University Lahore. Members participate in workshops, seminars, hackathons, and networking events throughout the year.
                </p>
              </div>
            </div>

            {/* Membership tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tier: "Student Member",
                  icon: "🎓",
                  count: "400+",
                  desc: "Undergraduate and postgraduate students from all faculties who actively participate in ACM events and workshops.",
                  perks: ["Event Access", "Digital Library", "Workshops", "Networking"],
                },
                {
                  tier: "Active Member",
                  icon: "⚡",
                  count: "80+",
                  desc: "Students who contribute regularly to chapter activities, volunteer at events, and help organize seminars.",
                  perks: ["Leadership Opportunities", "Certificate Programmes", "Priority Registration", "Mentorship"],
                },
                {
                  tier: "Committee Member",
                  icon: "🏅",
                  count: "30+",
                  desc: "Students officially part of a sub-committee (Marketing, Events, HR, Creative, IT, Social Media, PR, Docs, Finance).",
                  perks: ["Sub-Committee Role", "Official Badge", "Project Ownership", "Recognition"],
                },
              ].map((t) => (
                <TiltCard key={t.tier} className="glass-card border border-sky-200/80 overflow-hidden rounded-2xl flex flex-col">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${AVATAR_GRADIENT}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{t.icon}</span>
                      <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">{t.count}</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-2">{t.tier}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1">{t.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {t.perks.map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-sky-50 text-sky-800 border border-sky-200">{p}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* How to join */}
            <div className="glass-panel rounded-3xl border border-sky-200/80 p-8 space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900">How to Become a Member</h3>
                <p className="text-xs text-slate-500">Follow these steps to join the Superior ACM Society</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "01", title: "Sign Up", desc: "Create your account on the ACM Superior portal.", icon: "📝" },
                  { step: "02", title: "Verify", desc: "Verify your Superior University student email.", icon: "✅" },
                  { step: "03", title: "Join Events", desc: "Attend workshops, seminars, and hackathons.", icon: "🎯" },
                  { step: "04", title: "Apply for Role", desc: "Apply to a sub-committee during recruitment drives.", icon: "🚀" },
                ].map((s) => (
                  <div key={s.step} className="glass-card rounded-2xl border border-sky-200/80 p-4 text-center space-y-2">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="text-xs font-mono font-bold text-sky-500">STEP {s.step}</div>
                    <div className="text-sm font-extrabold text-slate-900">{s.title}</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Contact Us to Join →
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── 4. RECRUITMENT CTA ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel border border-sky-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_rgba(14,165,233,0.1)] overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h3 className="text-2xl font-extrabold text-slate-900">Want to Join a Superior ACM Sub-Committee?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Recruitment drives for IT, Events, Marketing, PR, HR, Creative, and Social Media committees open each semester. Build your leadership and technical portfolio with us.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all flex-shrink-0 hover:-translate-y-0.5"
          >
            Contact Society HQ →
          </Link>
        </div>
      </section>
    </div>
  );
}
