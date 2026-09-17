"use client";

import React from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import {
  ShieldCheck,
  Award,
  Globe,
  Target,
  Zap,
  Users,
  Megaphone,
  Camera,
  Briefcase,
  Heart,
  Share2,
  Code2,
} from "lucide-react";

const values = [
  {
    title: "Technical Excellence",
    desc: "We promote deep algorithmic problem solving, modern full-stack architectures, and rigorous code quality.",
    icon: Zap,
  },
  {
    title: "Research & Innovation",
    desc: "Bridging the gap between theoretical computer science and real-world applied artificial intelligence.",
    icon: Target,
  },
  {
    title: "Open Collaboration",
    desc: "100% student-driven culture where senior fellows mentor incoming developers through hands-on bootcamps.",
    icon: Globe,
  },
  {
    title: "Global Recognition",
    desc: "Connecting university undergraduates with ACM International worldwide events, conferences, and career fairs.",
    icon: Award,
  },
];

const milestones = [
  {
    year: "2021",
    title: "Charter Established",
    desc: "Officially chartered as a recognized ACM Student Chapter under Superior University, Lahore.",
  },
  {
    year: "2022",
    title: "First Flagship Event",
    desc: "Hosted the chapter's inaugural major seminar — bringing industry speakers directly to campus.",
  },
  {
    year: "2023",
    title: "Growing Community",
    desc: "Expanded membership with multiple workshops and seminars connecting students to industry professionals.",
  },
  {
    year: "2024",
    title: "Industry Partnerships",
    desc: "Established partnerships with leading tech companies to provide internship and career opportunities.",
  },
  {
    year: "2025",
    title: "Active Membership Milestone",
    desc: "Growing chapter with active sub-committees across IT, Marketing, HR, PR, Creative, Events, and Social Media.",
  },
  {
    year: "2026",
    title: "ACM Seminar: Learning to Employment",
    desc: "Delivered a landmark seminar bridging the gap from academic learning to professional employment in tech.",
  },
];

const committees = [
  {
    name: "IT Committee",
    desc: "Manages the chapter's technical infrastructure, website, and digital tools.",
    icon: Code2,
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Events Committee",
    desc: "Plans and executes all chapter events — seminars, workshops, and hackathons.",
    icon: Briefcase,
    color: "from-cyan-500 to-sky-600",
  },
  {
    name: "Marketing Committee",
    desc: "Promotes chapter activities and builds the ACM Superior brand across campus.",
    icon: Megaphone,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "PR Committee",
    desc: "Manages public relations, press coverage, and external communications.",
    icon: Globe,
    color: "from-sky-400 to-cyan-600",
  },
  {
    name: "HR Committee",
    desc: "Handles member recruitment, onboarding, and internal team management.",
    icon: Users,
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Creative Committee",
    desc: "Designs visual content, branding materials, and multimedia assets.",
    icon: Camera,
    color: "from-sky-500 to-blue-500",
  },
  {
    name: "Social Media Committee",
    desc: "Manages Instagram, LinkedIn, and Facebook to keep the community engaged.",
    icon: Share2,
    color: "from-cyan-400 to-sky-600",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section id="mission" className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="flex justify-center mb-2">
          <Image
            src="/superior-acm-logo.png"
            alt="Superior ACM Society - Superior University"
            width={260}
            height={64}
            className="h-16 sm:h-20 w-auto object-contain"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>OFFICIALLY CHARTERED ACM STUDENT CHAPTER</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
            Superior ACM Society
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The Association for Computing Machinery (ACM) is the world&apos;s largest educational and scientific
          computing society. Our student chapter at Superior University, Lahore brings this international
          standard directly to our campus — fostering innovation, technical excellence, and industry readiness.
        </p>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-3xl border border-sky-200 shadow-[0_10px_40px_rgba(14,165,233,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(14,165,233,0.3)]">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To advance computing knowledge and practice among Superior University students by providing
              access to cutting-edge technical resources, industry mentorship, and hands-on learning
              experiences. We empower students to become skilled computing professionals who contribute
              meaningfully to society.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-sky-200 shadow-[0_10px_40px_rgba(14,165,233,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(14,165,233,0.3)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mb-3">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the most active and impactful ACM chapter in Pakistan — a community where every
              student, regardless of background, can discover their potential in computing, build
              real-world skills, and launch a successful career in the technology industry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ACM AFFILIATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50/80 to-white text-center">
          <p className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-3">ACM Affiliation</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Part of the World&apos;s Largest Computing Society
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            As an official ACM Student Chapter, we are affiliated with the Association for Computing Machinery —
            a global organization with over 100,000 members worldwide. This affiliation gives our members
            access to the ACM Digital Library, learning resources, career networks, and the prestige of
            belonging to an internationally recognized computing community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "ACM Digital Library", href: "https://dl.acm.org" },
              { label: "ACM Learning Center", href: "https://learning.acm.org" },
              { label: "Code of Ethics", href: "https://www.acm.org/code-of-ethics" },
              { label: "Student Chapters", href: "https://www.acm.org/chapters/find-a-chapter" },
            ].map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-sky-700 bg-white border border-sky-200 hover:bg-sky-50 hover:border-sky-300 transition-all shadow-sm"
              >
                {r.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">What Drives Us</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <TiltCard key={i} className="glass-card p-6 border border-sky-200/80">
                <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-300 flex items-center justify-center text-sky-600 mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 5. CHAPTER HISTORY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">CHAPTER JOURNEY</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Milestones & History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-sky-200 relative">
              <div className="text-2xl font-black text-sky-600 font-mono mb-2">{m.year}</div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{m.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SUB-COMMITTEES */}
      <section id="committees" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">ORGANIZATIONAL STRUCTURE</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Sub-Committee Breakdown</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our chapter runs through dedicated sub-committees, each responsible for a key area of operation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {committees.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-sky-100 hover:border-sky-300 hover:shadow-[0_6px_24px_rgba(14,165,233,0.12)] transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-3 shadow-sm`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{c.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. FACULTY ADVISOR */}
      <section id="advisor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-sky-200/80 overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Photo Side */}
            <div className="lg:col-span-4 relative bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center p-10">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-[0_12px_40px_rgba(14,165,233,0.25)] relative z-10">
                  <Image
                    src="/advisor.jpg"
                    alt="Prof. Dr. Sohail Masood Bhatti - Faculty Advisor"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-sky-300/40 scale-110 z-0" />
              </div>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-8 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Faculty Advisor
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Prof. Dr. Sohail Masood Bhatti
              </h2>
              <p className="text-sm font-semibold text-sky-600">
                Faculty Advisor — Superior ACM Society
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prof. Dr. Sohail Masood Bhatti is a Professor at the Faculty of Computer Sciences &amp;
                Information Technology, Superior University, Lahore. He earned his Ph.D. in Computer
                Science from FAST-NUCES Islamabad and completed his postdoctoral research at
                Universidad de Chile.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With over a decade of experience in Machine Learning, Artificial Intelligence, and the
                software industry, his research focuses on image/signal processing, medical image
                analysis, malware detection, and applied deep learning. He holds a U.S. patent and has
                published numerous research papers in reputed venues.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                As Faculty Advisor of Superior ACM Society, he guides students in advancing computing
                knowledge, fostering innovation, and building industry-ready skills.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  Machine Learning & AI
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  Medical Image Analysis
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  Malware Detection
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  U.S. Patent Holder
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  Ph.D. FAST-NUCES
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
