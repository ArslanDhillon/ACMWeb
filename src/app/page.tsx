"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThreeCanvas from "@/components/ThreeCanvas";
import TiltCard from "@/components/TiltCard";
import {
  Sparkles,
  ArrowRight,
  Users,
  Calendar,
  Trophy,
  Cpu,
  Code,
  ShieldCheck,
  Terminal,
  ChevronRight,
  Flame,
  Mail,
  Quote,
} from "lucide-react";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 18, hours: 7, minutes: 42, seconds: 19 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Active Chapter Members", value: "500+", icon: Users, hint: "Undergrads & Postgrads" },
    { label: "Conducted Tech Events", value: "45+", icon: Calendar, hint: "Workshops & Seminars" },
    { label: "Years Active", value: "5+", icon: Trophy, hint: "Since Charter 2021" },
    { label: "Student-Led Community", value: "100%", icon: Terminal, hint: "Peer-to-Peer Growth" },
  ];

  const tracks = [
    {
      title: "Artificial Intelligence & ML",
      desc: "Deep learning, LLMs, computer vision, and neural network research.",
      badge: "SIGAI",
      icon: Cpu,
    },
    {
      title: "Competitive Programming",
      desc: "ICPC training, advanced algorithms, graph theory, and dynamic programming.",
      badge: "ICPC TRACK",
      icon: Code,
    },
    {
      title: "Full-Stack & Cloud Systems",
      desc: "Modern web architecture, distributed microservices, Docker, and Kubernetes.",
      badge: "DEV TRACK",
      icon: Terminal,
    },
    {
      title: "Cyber Security & Systems",
      desc: "Penetration testing, cryptographic network analysis, and Linux kernel fundamentals.",
      badge: "SIGSAC",
      icon: ShieldCheck,
    },
  ];

  const testimonials = [
    {
      quote: "Joining ACM Superior was the best decision of my university life. The seminars directly connected me with industry professionals.",
      name: "Student Member",
      role: "Computer Science, Superior University",
      initials: "SM",
    },
    {
      quote: "The ACM Seminar on 'From Learning to Employment' gave me practical insights that no classroom could have provided.",
      name: "Chapter Member",
      role: "Software Engineering, Superior University",
      initials: "CM",
    },
    {
      quote: "Being part of the ACM Superior community has opened doors to internships and networking opportunities I never expected.",
      name: "Active Member",
      role: "IT, Superior University",
      initials: "AM",
    },
  ];

  // Gallery preview — use real event images
  const galleryPreviews = [
    "/eventsImages/IMG_4159.JPG.jpeg",
    "/eventsImages/IMG_4338.JPG.jpeg",
    "/eventsImages/IMG_4352.JPG.jpeg",
    "/eventsImages/IMG_4367.JPG.jpeg",
    "/eventsImages/IMG_4382.JPG.jpeg",
    "/eventsImages/IMG_4383.JPG.jpeg",
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-7 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sky-300 text-sky-900 text-xs font-semibold badge-glow shadow-xs">
                <Image
                  src="/superior-acm-icon.png"
                  alt="Superior ACM Emblem"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span>SUPERIOR ACM SOCIETY • SUPERIOR UNIVERSITY LAHORE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Advancing Computing as a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
                  Science &amp; Profession
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Empowering the next generation of engineers, researchers, and developers through
                hands-on seminars, workshops, hackathons, and global industry mentorship at Superior University, Lahore.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_6px_20px_rgba(14,165,233,0.35)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Our Events</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/members"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-sky-700 bg-white border border-sky-300 hover:bg-sky-50 shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4 text-sky-600" />
                  <span>Meet The Team</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>ACM Digital Library Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Industry Seminars & Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Professional Networking</span>
                </div>
              </div>
            </div>

            {/* Right 3D Canvas */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 border border-sky-200 shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
                <div className="flex items-center justify-between pb-3 border-b border-sky-100 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  {/* <span className="text-[11px] font-mono text-sky-700 font-semibold">acm-3d-crystal.obj [WebGL]</span> */}
                </div>
                <ThreeCanvas />
                {/* <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-sky-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    Interactive 3D • Move Mouse
                  </span>
                  <span className="font-mono">FPS: 60 • Three.js</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard key={idx} className="glass-card p-6 border border-sky-200/80">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-300 flex items-center justify-center text-sky-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Metric 0{idx + 1}</span> */}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">{item.value}</span>
                </div>
                <div className="text-xs font-bold text-slate-800">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-1">{item.hint}</div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 3. FLAGSHIP BANNER: ACM SEMINAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-sky-200 p-8 lg:p-12 shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>FLAGSHIP EVENT — PAST EVENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                ACM Seminar:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                  From Learning to Employment
                </span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                A landmark event connecting students with industry professionals — bridging the gap between
                academic learning and real-world employment in the technology sector.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/events/acm-seminar-learning-to-employment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all"
                >
                  <span>View Event Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">Superior University, Lahore</span>
              </div>
            </div>

            {/* Countdown placeholder replaced with event highlight */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {[
                  { label: "Attendees", value: "200+" },
                  { label: "Speakers", value: "5+" },
                  { label: "Duration", value: "Full Day" },
                  { label: "Year", value: "2026" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-white border border-sky-200 shadow-sm">
                    <span className="text-xl font-extrabold text-sky-600 font-mono">{s.value}</span>
                    <span className="text-[10px] text-slate-500 font-bold tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL TRACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold">
            <span>DISCIPLINES &amp; WORKSHOPS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Special Interest Groups (SIGs)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Dedicated research and development tracks focused on high-impact computer science fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <TiltCard key={i} className="glass-card p-6 border border-sky-200/80 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-300 flex items-center justify-center text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200">
                      {track.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-wide">{track.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{track.desc}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <span>View Resources</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 5. GALLERY PREVIEW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">Event Gallery</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Chapter Highlights</h2>
            <p className="text-sm text-slate-600">Moments from the ACM Seminar: From Learning to Employment</p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryPreviews.map((src, i) => (
            <Link key={i} href="/gallery" className="group relative aspect-square rounded-2xl overflow-hidden bg-sky-50 border border-sky-100 hover:border-sky-300 transition-all hover:shadow-[0_6px_24px_rgba(14,165,233,0.2)]">
              <Image
                src={src}
                alt={`Event photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/20 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Student Voices</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What Our Members Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TiltCard key={i} className="glass-card p-6 border border-sky-200/80 flex flex-col gap-4">
              <Quote className="w-6 h-6 text-sky-300" />
              <p className="text-sm text-slate-600 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 7. UPCOMING EVENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">What&apos;s Coming</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Upcoming Events</h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors">
            <span>All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              type: "SEMINAR",
              title: "Tech Career Pathways 2026",
              desc: "Explore diverse career paths in software engineering, AI research, and tech entrepreneurship.",
              status: "Coming Soon",
              statusColor: "bg-amber-50 text-amber-700 border-amber-200",
            },
            {
              type: "WORKSHOP",
              title: "Web Development Bootcamp",
              desc: "Hands-on workshop covering modern full-stack development with React, Next.js, and Node.js.",
              status: "Coming Soon",
              statusColor: "bg-amber-50 text-amber-700 border-amber-200",
            },
            {
              type: "HACKATHON",
              title: "CodeStorm 2026",
              desc: "24-hour hackathon where teams build innovative solutions to real-world problems.",
              status: "Coming Soon",
              statusColor: "bg-amber-50 text-amber-700 border-amber-200",
            },
          ].map((ev, i) => (
            <TiltCard key={i} className="glass-card p-6 border border-sky-200/80 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200">
                  {ev.type}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${ev.statusColor}`}>
                  {ev.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{ev.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">{ev.desc}</p>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER SIGNUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel border border-sky-200 p-10 sm:p-14 text-center space-y-6 overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>NEWSLETTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Stay in the Loop
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Get notified about upcoming events, workshops, and chapter news. No spam — only the good stuff.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm py-4">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">✓</span>
                You&apos;re subscribed! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your university email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl text-sm border border-sky-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent shadow-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
