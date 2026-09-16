"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Terminal,
  ExternalLink 
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    category: "MEMBERSHIP",
    message: "",
  });

  const faqs = [
    {
      q: "Who can join the ACM Student Chapter, and is there an admission fee?",
      a: "Membership is 100% free for all enrolled university students (undergraduate and postgraduate). The chapter is fully sponsored by university grants, industry corporate partners, and ACM International.",
    },
    {
      q: "How do I receive official ACM International credentials and certification?",
      a: "Active participation in SIG research groups, hackathon final teams, and workshop completions unlocks cryptographically verifiable digital certificates endorsed by ACM International.",
    },
    {
      q: "How can I propose or lead a student workshop, tech talk, or Special Interest Group (SIG)?",
      a: "Submit an inquiry choosing 'Technical Workshop / Collaboration' or contact our Director of Technology (Hamza Shaikh) to schedule an open session for the chapter.",
    },
    {
      q: "How do corporate sponsors and tech firms partner with our chapter for hiring?",
      a: "We offer dedicated sponsorship tiers for DevDay and hackathons, resume book access to top 10% competitive coders, and keynote campus recruitment presentations.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold badge-glow">
          <Mail className="w-3.5 h-3.5 text-sky-400" />
          <span>CAMPUS HEADQUARTERS &amp; OFFICIAL DISPATCH</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Get In Touch With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 text-glow">
            ACM Chapter
          </span>
        </h1>

        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have a workshop proposal, sponsorship inquiry, team collaboration, or question? Connect directly with our executive council and faculty advisors.
        </p>

        {/* Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-sky-400/20 text-sky-300">
            Avg Response: &lt; 24 Hrs
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-sky-400/20 text-sky-300">
            CS Lab 302 Active
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-sky-400/20 text-sky-300">
            TLS v1.3 Encrypted
          </span>
        </div>
      </section>

      {/* 2. MAIN SPLIT: CONTACT FORM & CAMPUS HQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Col: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-sky-400/25 space-y-6">
            <div className="border-b border-sky-400/15 pb-4">
              <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">DISPATCH TERMINAL</span>
              <h2 className="text-2xl font-bold text-white mt-1">Send Official Chapter Message</h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dispatch Transmitted!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you, {formData.name}. Our chapter general secretary and relevant lead have received your message and will respond within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-400/30"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-sky-400/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Student ID / Roll No.</label>
                    <input
                      type="text"
                      placeholder="STU-2024-9842"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-sky-400/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">University / Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-sky-400/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-sky-400/20 text-xs text-white focus:outline-none focus:border-sky-400"
                  >
                    <option value="MEMBERSHIP">Membership &amp; Certifications</option>
                    <option value="SPONSORSHIP">Corporate Sponsorship / Hiring</option>
                    <option value="HACKATHON">DevDay 2026 / Hackathons</option>
                    <option value="WORKSHOP">Workshop Proposal / SIG</option>
                    <option value="GENERAL">General Chapter Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Proposal Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry, project proposal, or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-sky-400/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message to Executive Board →</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Col: Campus HQ & Community Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus HQ Card */}
            <TiltCard className="glass-panel p-7 border border-sky-400/20 space-y-4">
              <div className="flex items-center gap-2 text-sky-400">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Campus Headquarters</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                CS Innovation Lab (CS-302), 3rd Floor, Alan Turing Hall, State University Campus.
              </p>
              <div className="text-[11px] font-mono text-sky-300">
                Coordinates: 42.3601° N, 71.0942° W • Active Lab
              </div>
              <div className="space-y-1.5 pt-2 text-xs text-slate-400 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Mon - Fri: 09:00 AM - 08:00 PM EST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Saturday Hack Hours: 10:00 AM - 05:00 PM EST</span>
                </div>
              </div>
            </TiltCard>

            {/* Direct Channels */}
            <TiltCard className="glass-panel p-7 border border-sky-400/20 space-y-4">
              <h3 className="text-lg font-bold text-white">Real-Time Community Channels</h3>
              <div className="space-y-3">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-sky-400/15 hover:border-sky-400/40 text-xs text-slate-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-sky-400" />
                    <span>Official Chapter Discord</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">1,420 Online</span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-sky-400/15 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Official Email</span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400">contact@acmchapter.org</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">KNOWLEDGE BASE</span>
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-sky-400/20 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-sky-300 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
