"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { useAuth } from "@/context/AuthContext";
import { 
  Award, 
  QrCode, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  User, 
  Wifi, 
  Lightbulb, 
  Send, 
  LogOut,
  LogIn
} from "lucide-react";

export default function DashboardPage() {
  const { user, logout, loginAsDemo, cancelRsvp, submitProposal, proposals } = useAuth();
  const [activeTab, setActiveTab] = useState<"PASSES" | "CERTS" | "IDEA">("PASSES");

  // Project Idea Form State
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaCategory, setIdeaCategory] = useState("AI & Machine Learning");
  const [ideaDesc, setIdeaDesc] = useState("");
  const [ideaSubmitted, setIdeaSubmitted] = useState(false);

  // Fallback demo member if not logged in
  const member = user || {
    id: "ACM-SUP-2026-1042",
    name: "Guest Student",
    email: "student@superior.edu.pk",
    studentId: "BCS-F23-088",
    department: "Faculty of CS & IT, Superior University",
    tier: "Explorer Pass",
    points: 100,
    rank: "#28 in Chapter",
    joinDate: "2026",
    rsvps: [
      {
        id: "TKT-SEM-2026-01",
        eventTitle: "ACM Seminar — From Learning to Employment",
        slug: "acm-seminar-learning-to-employment",
        date: "February 2026",
        venue: "Auditorium Hall, Superior University Main Campus",
        seatOrStation: "Auditorium Hall • Row 4",
        type: "SEMINAR DELEGATE PASS",
        qrCodeData: "ACM-SEM-2026-SUPERIOR-VERIFIED",
      },
    ],
    certificates: [
      {
        id: "CERT-SEM-2026-881",
        title: "Certificate of Participation: Learning to Employment",
        issuer: "Superior ACM Society & Faculty of CS & IT",
        date: "February 2026",
        credentialId: "ACM-SUP-SEM2026-0881",
      },
    ],
  };

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaTitle || !ideaDesc) return;
    submitProposal({
      title: ideaTitle,
      category: ideaCategory,
      description: ideaDesc,
    });
    setIdeaSubmitted(true);
    setIdeaTitle("");
    setIdeaDesc("");
    setTimeout(() => setIdeaSubmitted(false), 4000);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* 1. TOP APP BAR & WELCOME */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 rounded-3xl border border-sky-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-sky-300 shadow-sm bg-white p-1 flex-shrink-0">
              <Image
                src="/superior-acm-icon.png"
                alt="Superior ACM Emblem"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900">{member.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">
                  {member.tier}
                </span>
              </div>
              <p className="text-xs text-slate-500">{member.department} • Roll No: {member.studentId}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-white/90 border border-sky-200 shadow-xs text-slate-700">
              <span className="text-slate-400 block text-[9px] uppercase font-mono font-semibold">Society Points</span>
              <span className="font-bold text-sky-600">{member.points} XP</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white/90 border border-sky-200 shadow-xs text-slate-700">
              <span className="text-slate-400 block text-[9px] uppercase font-mono font-semibold">Chapter Standing</span>
              <span className="font-bold text-emerald-600">{member.rank}</span>
            </div>
            {user ? (
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors font-semibold text-xs"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={loginAsDemo}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition-colors font-semibold text-xs shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Demo Student Login</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. 3D HOLOGRAPHIC DIGITAL MEMBER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card Presentation */}
          <div className="lg:col-span-6">
            <TiltCard className="p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/90 to-blue-100/70 border-2 border-sky-300/80 shadow-[0_20px_50px_rgba(14,165,233,0.18)] relative overflow-hidden min-h-[290px] flex flex-col justify-between">
              {/* Card Holographic Watermark */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/15 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Card Header with Official Emblem */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-sky-300 p-0.5 flex-shrink-0 shadow-xs">
                    <Image
                      src="/superior-acm-icon.png"
                      alt="Superior ACM Emblem"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-sky-700 uppercase tracking-wide block">
                      SUPERIOR ACM SOCIETY
                    </span>
                    <span className="text-[10px] text-slate-600 font-semibold block">
                      SUPERIOR UNIVERSITY LAHORE • STUDENT CREDENTIAL
                    </span>
                  </div>
                </div>

                {/* Chip & NFC */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 border border-amber-200 shadow-xs flex items-center justify-center">
                    <div className="w-5 h-4 border border-amber-700/30 rounded-xs" />
                  </div>
                  <Wifi className="w-4 h-4 text-sky-600 rotate-90" />
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 space-y-1 my-5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">MEMBER NAME</span>
                <div className="text-2xl font-black text-slate-900 tracking-wide">{member.name}</div>
                <div className="text-xs font-mono text-sky-600 font-semibold tracking-wider pt-0.5">
                  ID: {member.id} • {member.studentId}
                </div>
                <p className="text-[11px] text-slate-500">{member.department}</p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex items-end justify-between border-t border-sky-200/80 pt-3 text-xs font-mono text-slate-500">
                <div>
                  <span className="text-[9px] block uppercase text-slate-400 font-semibold">VALID TENURE</span>
                  <span className="text-slate-900 font-bold">2025 - 2026 ACADEMIC YEAR</span>
                </div>
                <div className="flex items-center gap-1.5 text-sky-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] tracking-wider">OFFICIALLY CHARTERED</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Quick Tabs & Services */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">MEMBER SERVICES</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Your Chapter Hub</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                View your registered passes for seminars at Superior University, verify your certificates of attendance, or submit project and workshop ideas to the chapter council.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                onClick={() => setActiveTab("PASSES")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === "PASSES"
                    ? "bg-white border-sky-400 text-slate-900 shadow-md shadow-sky-100 ring-2 ring-sky-400/20"
                    : "glass-card border-sky-200/80 text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <QrCode className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Event Passes</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">{member.rsvps.length} Active tickets</p>
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
                <h4 className="text-sm font-bold text-slate-900">Certificates</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">{member.certificates.length} Verified</p>
              </button>

              <button
                onClick={() => setActiveTab("IDEA")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTab === "IDEA"
                    ? "bg-white border-sky-400 text-slate-900 shadow-md shadow-sky-100 ring-2 ring-sky-400/20"
                    : "glass-card border-sky-200/80 text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <Lightbulb className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Submit Idea</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Project proposals</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* PASSES TAB */}
        {activeTab === "PASSES" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <QrCode className="w-5 h-5 text-sky-600" />
                <span>My Registered Event Gate Passes</span>
              </h3>
              <Link
                href="/events"
                className="text-xs font-semibold text-sky-600 hover:underline"
              >
                Browse More Events →
              </Link>
            </div>

            {member.rsvps.length === 0 ? (
              <div className="text-center py-12 glass-panel rounded-2xl border border-sky-200">
                <p className="text-sm text-slate-500 mb-3">You have not registered for any upcoming events yet.</p>
                <Link
                  href="/events"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm"
                >
                  Explore Chapter Seminars &amp; Workshops
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.rsvps.map((t) => (
                  <div key={t.id} className="glass-panel p-6 rounded-2xl border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-shadow">
                    <div className="space-y-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-700 border border-sky-300">
                        {t.type}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">{t.eventTitle}</h4>
                      <p className="text-xs text-slate-600">{t.date} • {t.venue}</p>
                      {t.seatOrStation && (
                        <p className="text-xs text-sky-700 font-mono font-semibold">{t.seatOrStation}</p>
                      )}
                      <div className="pt-2 flex items-center gap-3">
                        <Link
                          href={`/events/${t.slug}`}
                          className="text-xs font-semibold text-sky-600 hover:underline"
                        >
                          View Event Details
                        </Link>
                        {user && (
                          <button
                            onClick={() => cancelRsvp(t.id)}
                            className="text-xs text-rose-500 hover:text-rose-700 font-medium"
                          >
                            Cancel RSVP
                          </button>
                        )}
                      </div>
                    </div>

                    {/* QR Code Pass */}
                    <div className="p-3 bg-sky-50/80 border border-sky-200 rounded-2xl flex-shrink-0 shadow-xs text-slate-900 flex flex-col items-center">
                      <QrCode className="w-20 h-20 text-sky-900" />
                      <span className="text-[9px] font-mono font-bold mt-1 text-slate-600">{t.id}</span>
                      <span className="text-[8px] font-mono text-emerald-600 font-semibold">GATE ADMIT</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CERTIFICATES TAB */}
        {activeTab === "CERTS" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-600" />
              <span>Verified Attendance &amp; Workshop Certifications</span>
            </h3>

            <div className="space-y-4">
              {member.certificates.map((c) => (
                <div key={c.id} className="glass-panel p-6 rounded-2xl border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">{c.id} • {c.date}</span>
                    <h4 className="text-base font-bold text-slate-900">{c.title}</h4>
                    <p className="text-xs text-sky-700 font-medium">{c.issuer}</p>
                    <p className="text-[10px] font-mono text-slate-500">Verification Credential: {c.credentialId}</p>
                  </div>
                  <button
                    onClick={() => alert(`Downloading verified certificate for ${member.name}: ${c.title}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-sm transition-all flex-shrink-0 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Certificate PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBMIT PROJECT IDEA TAB (FROM BRIEF - LGU.ACM.ORG INSPIRATION) */}
        {activeTab === "IDEA" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-sky-200 space-y-5">
              <div className="border-b border-sky-100 pb-3">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  Innovate With Superior ACM
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Submit a Project or Workshop Idea
                </h3>
                <p className="text-xs text-slate-500">
                  Pitch a tech project, open-source repository, or workshop idea to get faculty mentorship, peer team members, and event stage slots.
                </p>
              </div>

              {ideaSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Proposal Submitted!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    The Superior ACM Technical Council has received your pitch and will contact you via your university email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleIdeaSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project / Topic Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AI-Powered Medical Image Screening"
                      value={ideaTitle}
                      onChange={(e) => setIdeaTitle(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                    <select
                      value={ideaCategory}
                      onChange={(e) => setIdeaCategory(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                    >
                      <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
                      <option value="Web & Cloud Systems">Web &amp; Cloud Systems</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Competitive Programming Workshop">Competitive Programming Workshop</option>
                      <option value="Cyber Security / Ethical Hacking">Cyber Security / Ethical Hacking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Description &amp; Goals *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Explain the problem your project solves and what support you need from the chapter..."
                      value={ideaDesc}
                      onChange={(e) => setIdeaDesc(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Proposal to Council →</span>
                  </button>
                </form>
              )}
            </div>

            {/* Submitted List */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-base font-bold text-slate-900">Submitted Proposals</h4>
              <div className="space-y-3">
                {proposals.map((p) => (
                  <div key={p.id} className="glass-panel p-4 rounded-2xl border border-sky-200 space-y-1.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-sky-700 uppercase bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        {p.category}
                      </span>
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {p.status}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">{p.title}</h5>
                    <p className="text-xs text-slate-500 line-clamp-2">{p.description}</p>
                    <span className="text-[10px] font-mono text-slate-400 block pt-1">Submitted: {p.submittedAt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
