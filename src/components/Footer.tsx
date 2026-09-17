"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Terminal,
  Sparkles,
  ExternalLink,
  Mail,
  CheckCircle2,
  Globe,
  BookOpen
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-sky-200/80 bg-white/95 backdrop-blur-2xl z-10 text-slate-600 shadow-[0_-4px_20px_rgba(14,165,233,0.04)]">
      {/* Top Newsletter Bar */}
      {/* <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50/70 via-blue-50/40 to-sky-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Stay Connected</span>
              <h3 className="text-xl font-extrabold text-slate-900">Subscribe to Superior ACM Newsletter</h3>
              <p className="text-xs text-slate-500">Get announcements, upcoming seminar invitations, and workshop slides right in your inbox.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing! You are on our dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative w-full sm:w-72">
                  <Mail className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your university email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-sm transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Chapter Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/superior-acm-logo.png"
                  alt="Superior ACM Society - Superior University"
                  width={220}
                  height={52}
                  className="h-11 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Dedicated to advancing computing as a science and profession at Superior University, Lahore. Empowering students through industry seminars, hands-on workshops, hackathons, and global ACM resources.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/company/superior-acm-society/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="LinkedIn - Superior ACM Society"
                title="LinkedIn - Superior ACM Society"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1Bzt9cGbLj/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="Facebook - Superior ACM Society"
                title="Facebook - Superior ACM Society"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/superior_acm"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="Instagram @superior_acm"
                title="Instagram @superior_acm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-500" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-sky-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-600 transition-colors">
                  About Chapter
                </Link>
              </li>
              <li>
                <Link href="/about#advisor" className="hover:text-sky-600 transition-colors">
                  Faculty Advisor
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-sky-600 transition-colors">
                  Executive Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-sky-600 transition-colors">
                  Events &amp; Seminars
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-600 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-600 transition-colors">
                  Contact HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Chapter Initiatives */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Programs</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/events/acm-seminar-learning-to-employment" className="hover:text-sky-600 transition-colors">
                  ACM Seminar 2026
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-sky-600 transition-colors">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link href="/about#committees" className="hover:text-sky-600 transition-colors">
                  Sub-Committees
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-sky-600 transition-colors">
                  Upcoming Workshops
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-600 transition-colors">
                  Join Committees
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: ACM Global Resources (Mandatory from Brief) */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span>ACM Global</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="https://www.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>acm.org</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://dl.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>ACM Digital Library</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://learning.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>Learning Center</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.acm.org/code-of-ethics" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>Code of Ethics</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.acm.org/chapters/students" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>Student Chapters</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Superior ACM Society • Superior University, Lahore. Chartered under ACM International.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              Chapter Active
            </span>
            <span>•</span>
            <Link href="/contact" className="hover:text-sky-600 transition-colors">
              Campus Location
            </Link>
            <span>•</span>
            <a href="https://www.acm.org/code-of-ethics" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors">
              ACM Code of Ethics
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
