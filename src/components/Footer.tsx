"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Terminal, MessageSquare, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-sky-200/80 bg-white/90 backdrop-blur-2xl z-10 text-slate-600 shadow-[0_-4px_20px_rgba(14,165,233,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Chapter Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 p-[1.5px] shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                  <span className="font-extrabold text-sky-600 text-sm">ACM</span>
                </div>
              </div>
              <span className="font-bold text-slate-900 text-base tracking-wide">
                ACM STUDENT CHAPTER
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mb-5">
              Dedicated to advancing computing as a science and profession. Empowering university students with hackathons, research publications, competitive coding, and career mentorship.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-100 hover:border-sky-300 transition-all"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-500" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-sky-600 transition-colors">
                  Home Portal
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-600 transition-colors">
                  About Our Chapter
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-sky-600 transition-colors text-sky-600 font-bold">
                  Executive Council &amp; Leads
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-sky-600 transition-colors">
                  Events &amp; Workshops
                </Link>
              </li>
              <li>
                <Link href="/events/devday-2026" className="hover:text-sky-600 transition-colors">
                  DevDay 2026 Summit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Competitions & Vault */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Initiatives</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/hackathon" className="hover:text-sky-600 transition-colors">
                  CodeStorm &amp; ICPC Hub
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-sky-600 transition-colors">
                  Digital Library &amp; Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-600 transition-colors">
                  Chapter Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-sky-600 transition-colors">
                  Member Portal &amp; Badges
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-600 transition-colors">
                  Contact &amp; Campus HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reference Chapters */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-sky-500" />
              <span>Partner Chapters</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="https://hitms.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>HITMS ACM</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://szabist.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>SZABIST ACM</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://maju.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>MAJU ACM</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.lgu.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>LGU ACM</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://rcet.acm.org" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
                  <span>RCET ACM</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 ACM Student Chapter. All rights reserved. Chartered under ACM International.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              All Systems Operational
            </span>
            <span>•</span>
            <Link href="/contact" className="hover:text-sky-600 transition-colors">
              Code of Conduct
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-sky-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
