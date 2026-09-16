"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  Cpu, 
  Users, 
  Calendar, 
  Trophy, 
  BookOpen, 
  Image as ImageIcon, 
  Mail, 
  LayoutDashboard,
  ShieldCheck
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Cpu },
    { name: "About", href: "/about", icon: ShieldCheck },
    { name: "Members", href: "/members", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "DevDay '26", href: "/events/devday-2026", icon: Sparkles },
    { name: "Hackathon", href: "/hackathon", icon: Trophy },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-400/15 bg-[#0b0f19]/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 via-sky-600 to-blue-900 p-[1px] shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-200 text-lg tracking-wider">
                ACM
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base tracking-wide group-hover:text-sky-400 transition-colors">
                ACM STUDENT CHAPTER
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Official University Chapter</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "text-sky-400 bg-sky-500/10 border border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_25px_rgba(56,189,248,0.55)] transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Chapter</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/60 border border-sky-400/20"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden border-b border-sky-400/15 bg-[#0b0f19]/95 backdrop-blur-2xl px-6 py-5">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "text-sky-400 bg-sky-500/10 border border-sky-400/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 flex justify-center">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              Join ACM Student Chapter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
