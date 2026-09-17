"use client";

import React, { useState } from "react";
import TiltCard from "@/components/TiltCard";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown,
  Globe
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/Icons";

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
      q: "Who can join the Superior ACM Society?",
      a: "Membership and event participation are open to all students across Computer Science, Software Engineering, AI, and related computing disciplines at Superior University.",
    },
    {
      q: "How can I attend upcoming seminars and workshops?",
      a: "Upcoming events are announced on our Events page and through our official LinkedIn, Facebook, and Instagram channels. You can register directly through the event detail links.",
    },
    {
      q: "How do I apply for a role in one of the sub-committees?",
      a: "Recruitment drives for the IT, Events, Marketing, PR, HR, Creative, and Social Media committees are announced each academic term. You can submit a message through this contact form expressing your interest.",
    },
    {
      q: "How can industry partners and guest speakers collaborate with Superior ACM?",
      a: "We actively collaborate with tech companies, industry leaders, and startup founders for seminars, mentoring sessions, and hiring drives. Please select 'Industry Collaboration / Sponsorship' in the form below.",
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
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold badge-glow">
          <Mail className="w-3.5 h-3.5 text-sky-600" />
          <span>SUPERIOR ACM SOCIETY • CAMPUS HEADQUARTERS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Get In Touch With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
            Superior ACM
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have a question about our chapter, a collaboration proposal, an event inquiry, or want to join a committee? Reach out to our executive council.
        </p>

        {/* Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-slate-600 font-medium">
          <span className="px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 shadow-xs">
            Avg Response: &lt; 24 Hrs
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 shadow-xs">
            Superior University Main Campus
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 shadow-xs">
            Lahore, Pakistan
          </span>
        </div>
      </section>

      {/* 2. MAIN SPLIT: CONTACT FORM & CAMPUS HQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Col: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-sky-200 space-y-6 shadow-md">
            <div className="border-b border-sky-100 pb-4">
              <span className="text-[10px] font-mono text-sky-600 font-bold uppercase tracking-widest">CHAPTER DISPATCH</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Send a Message</h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Transmitted!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, {formData.name}. The Superior ACM Society executive team has received your message and will respond shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Student ID / Roll No.</label>
                    <input
                      type="text"
                      placeholder="e.g. BCS-F23-102"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@superior.edu.pk or personal email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                  >
                    <option value="MEMBERSHIP">Sub-Committee Recruitment</option>
                    <option value="SPONSORSHIP">Industry Collaboration / Sponsorship</option>
                    <option value="EVENTS">Seminars &amp; Workshops Inquiry</option>
                    <option value="FEEDBACK">General Feedback &amp; Ideas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry, proposed topic, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Superior ACM Society →</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Col: Campus HQ */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard className="glass-panel p-7 border border-sky-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-sky-600">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900">Campus Location</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Faculty of Computer Science &amp; Information Technology, Superior University, Main Campus, Raiwind Road, Lahore, Punjab, Pakistan.
              </p>
              <div className="text-[11px] font-mono text-sky-700 font-semibold">
                Main Campus • CS &amp; IT Department
              </div>
              <div className="space-y-1.5 pt-2 text-xs text-slate-500 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Mon - Fri: 08:30 AM - 04:30 PM PKT</span>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="glass-panel p-7 border border-sky-200 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Official Social &amp; Community Channels</h3>
              <div className="space-y-2.5">
                <a
                  href="https://www.linkedin.com/company/superior-acm-society/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-sky-50/80 border border-sky-200 hover:border-sky-400 text-xs text-slate-700 hover:text-sky-700 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold">Superior ACM Society</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-600 font-bold">LinkedIn ↗</span>
                </a>

                <a
                  href="https://www.facebook.com/share/1Bzt9cGbLj/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-sky-50/80 border border-sky-200 hover:border-sky-400 text-xs text-slate-700 hover:text-sky-700 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <FacebookIcon className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold">Superior ACM Society</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-600 font-bold">Facebook ↗</span>
                </a>

                <a
                  href="https://instagram.com/superior_acm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-sky-50/80 border border-sky-200 hover:border-sky-400 text-xs text-slate-700 hover:text-sky-700 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold">@superior_acm</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-600 font-bold">Instagram ↗</span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/80 border border-sky-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold">Society Email</span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-600 font-bold">acm@superior.edu.pk</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">QUESTIONS &amp; ANSWERS</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-sky-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
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
