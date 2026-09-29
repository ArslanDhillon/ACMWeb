"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Mission", href: "/about#mission" },
      { name: "Faculty Advisor", href: "/about#advisor" },
      { name: "Sub-Committees", href: "/about#committees" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/members" },
  { name: "Gallery", href: "/gallery" },
  { name: "ACM-W", href: "/acm-w" },
  { name: "Contact", href: "/contact" },
];

function DropdownMenu({
  children,
  isOpen,
}: {
  children: { name: string; href: string }[];
  isOpen: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-52 bg-white border border-sky-100 rounded-2xl shadow-[0_8px_30px_rgba(14,165,233,0.12)] overflow-hidden transition-all duration-200 ${isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
    >
      {children.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
        >
          {child.name}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(14,165,233,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 py-3 relative">

        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative h-11 w-auto flex-shrink-0 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/superior-acm-logo.png"
              alt="Superior ACM Society - Superior University"
              width={320}
              height={102}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2" ref={dropdownRef}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const hasChildren = item.children && item.children.length > 0;
            const isDropOpen = openDropdown === item.name;

            return (
              <div key={item.name} className="relative">
                {hasChildren ? (
                  <button
                    onClick={() => setOpenDropdown(isDropOpen ? null : item.name)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${isActive
                      ? "text-sky-700 bg-sky-100/70 border border-sky-300"
                      : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/80"
                      }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${isDropOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all block ${isActive
                      ? "text-sky-700 bg-sky-100/70 border border-sky-300 shadow-[0_0_12px_rgba(14,165,233,0.15)]"
                      : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/80"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}

                {hasChildren && item.children && (
                  <DropdownMenu children={item.children} isOpen={isDropOpen} />
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-sky-600 bg-white border border-sky-200 shadow-sm flex-shrink-0"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-sky-200/80 bg-white/98 backdrop-blur-2xl px-4 py-4 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive
                      ? "text-sky-700 bg-sky-100/70 border border-sky-300"
                      : "text-slate-600 hover:text-sky-600 hover:bg-sky-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-3 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
