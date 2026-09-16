"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 w-full border-b border-sky-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(14,165,233,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-12 h-12 flex-shrink-0 drop-shadow-[0_4px_14px_rgba(14,165,233,0.45)] group-hover:drop-shadow-[0_6px_20px_rgba(14,165,233,0.65)] transition-all group-hover:scale-110">
            <Image
              src="/acm-logo-3d.jpg"
              alt="ACM Superior Chapter 3D Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain rounded-full"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-base tracking-wide group-hover:text-sky-600 transition-colors whitespace-nowrap">
                ACM STUDENT CHAPTER
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-600 border border-sky-200 flex-shrink-0">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium whitespace-nowrap">Official University Chapter</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "text-sky-700 bg-sky-100/70 border border-sky-300 shadow-[0_0_12px_rgba(14,165,233,0.15)]"
                    : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Join Chapter</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-sky-600 bg-white border border-sky-200 shadow-xs flex-shrink-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden border-b border-sky-200/80 bg-white/95 backdrop-blur-2xl px-6 py-5 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "text-sky-700 bg-sky-100/70 border border-sky-300"
                      : "text-slate-600 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  <Icon className="w-4 h-4 text-sky-500" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 flex justify-center">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)]"
            >
              Join ACM Student Chapter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
