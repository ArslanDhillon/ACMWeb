"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Trophy, 
  CheckCircle2, 
  Users 
} from "lucide-react";

export default function DevDayPage() {
  const [selectedPass, setSelectedPass] = useState("STUDENT");
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", studentId: "", department: "" });

  const passes = [
    {
      id: "STUDENT",
      title: "Student Attendee Pass",
      price: "FREE",
      desc: "Full access to all 3 conference days, keynote auditoriums, and workshop labs.",
      features: [
        "Keynote Stage Access (Google & Microsoft)",
        "Technical Workshop Labs Admission",
        "Official DevDay 2026 Swag Kit & Badge",
        "Networking Lunch & Career Fair Expo",
        "Cryptographically Verified Certificate",
      ],
      badge: "POPULAR",
    },
    {
      id: "HACKATHON",
      title: "Hackathon Squad Pass",
      price: "FREE",
      desc: "Eligible for competing in the 36-hour hackathon for the PKR 500,000 prize pool.",
      features: [
        "All Student Pass Inclusions",
        "Dedicated Team Workstation & High-Speed LAN",
        "24/7 Red Bull & Midnight Snacks Catering",
        "Exclusive Cloud API Credits (AWS & GCP)",
        "Direct Mentorship by Senior Tech Judges",
      ],
      badge: "SQUADS (3-4 DEV)",
    },
    {
      id: "VIP",
      title: "VIP Delegate / Researcher",
      price: "FREE (INVITE / NOMINATED)",
      desc: "Priority VIP seating, executive speaker dinner, and research paper presentation slot.",
      features: [
        "Reserved Front-Row Seating",
        "Access to Speaker Lounge & Executive Dinner",
        "Paper Presentation Defense Slot",
        "Direct Fast-Track Interviews with Sponsors",
      ],
      badge: "INVITATION",
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO */}
      <section className="relative pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-sky-200 relative overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>ANNUAL FLAGSHIP FESTIVAL • PKR 500,000 PRIZE POOL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              DevDay 2026:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
                Developer Summit
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              3 non-stop days of hackathons, algorithmic code sprints, AI workshops, and keynotes by global software leaders. Connect with 500+ student developers and tech recruiters.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>March 28-30, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>09:00 AM - 08:00 PM EST Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Grand Campus Arena &amp; CS-302</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECT PASS & REGISTER FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">TICKET TIERS</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Select Your Conference Pass</h2>
          <p className="text-xs sm:text-sm text-slate-600">All passes are fully funded and free for eligible university students.</p>
        </div>

        {/* Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passes.map((pass) => (
            <TiltCard
              key={pass.id}
              className={`p-7 rounded-2xl border transition-all cursor-pointer ${
                selectedPass === pass.id
                  ? "bg-sky-50/90 border-sky-500 shadow-[0_10px_30px_rgba(14,165,233,0.25)]"
                  : "glass-card border-sky-200/80 hover:border-sky-400"
              }`}
            >
              <div onClick={() => setSelectedPass(pass.id)} className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">
                    {pass.badge}
                  </span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPass === pass.id ? "border-sky-600 bg-sky-600" : "border-slate-300"
                  }`}>
                    {selectedPass === pass.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{pass.title}</h3>
                  <div className="text-2xl font-extrabold text-sky-600 font-mono mt-1">{pass.price}</div>
                  <p className="text-xs text-slate-500 mt-2">{pass.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs">
                  {pass.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Interactive Registration Form */}
        <div className="max-w-2xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-sky-200/80 shadow-md">
          {isRegistered ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Registration Confirmed!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your pass has been cryptographically generated and sent to your email. Check your digital pass with QR verification in your Member Dashboard.
              </p>
              <div className="pt-4">
                <a
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)]"
                >
                  View Digital QR Pass in Dashboard →
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Confirm DevDay 2026 RSVP</h3>
                <p className="text-xs text-slate-500">Selected Pass: <span className="text-sky-600 font-bold">{selectedPass} PASS</span></p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Student ID / Roll No.</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CS-2023-882"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">University Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                  <input
                    type="text"
                    required
                    placeholder="Computer Science / SE"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.5)] transition-all font-mono tracking-wide"
                >
                  CONFIRM &amp; GENERATE OFFICIAL PASS →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
