"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, ArrowLeft, CheckCircle2, Camera } from "lucide-react";

const eventPhotos = [
  "/eventsImages/IMG_4159.JPG.jpeg",
  "/eventsImages/IMG_4338.JPG.jpeg",
  "/eventsImages/IMG_4352.JPG.jpeg",
  "/eventsImages/IMG_4367.JPG.jpeg",
  "/eventsImages/IMG_4382.JPG.jpeg",
  "/eventsImages/IMG_4383.JPG.jpeg",
  "/eventsImages/IMG_4398.JPG.jpeg",
  "/eventsImages/IMG_4446.JPG.jpeg",
  "/eventsImages/IMG_4449.JPG.jpeg",
  "/eventsImages/IMG_4460.JPG.jpeg",
  "/eventsImages/IMG_5457.jpg",
  "/eventsImages/IMG_5493.jpg",
  "/eventsImages/IMG_5542.jpg",
  "/eventsImages/IMG_5615.jpg",
];

const highlights = [
  "Keynote talks by experienced tech professionals from leading companies",
  "Career pathway guidance tailored for CS and IT students",
  "Interactive Q&A panel with industry experts",
  "Networking opportunities with working professionals",
  "Practical insights on landing internships and first jobs in tech",
  "Resume and CV review tips from hiring managers",
  "Overview of the Pakistani tech industry landscape and opportunities",
];

export default function SeminarDetailPage() {
  return (
    <div className="pb-24 space-y-12">
      {/* BACK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Events
        </Link>
      </div>

      {/* HERO IMAGE */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] overflow-hidden">
        <Image
          src="/eventsImages/IMG_4367.JPG.jpeg"
          alt="ACM Seminar: From Learning to Employment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-600 text-white">SEMINAR</span>
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">PAST EVENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            ACM Seminar: From Learning to Employment
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Event Meta */}
            <div className="glass-panel rounded-2xl border border-sky-100 p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: "Date", value: "2026" },
                { icon: Clock, label: "Duration", value: "Full Day" },
                { icon: MapPin, label: "Location", value: "Superior University, Lahore" },
                { icon: Users, label: "Attendees", value: "200+" },
              ].map((meta, i) => {
                const Icon = meta.icon;
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{meta.label}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{meta.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900">About This Event</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The ACM Superior Society organized a landmark seminar titled &ldquo;From Learning to
                Employment&rdquo; — a full-day event that brought together students and industry
                professionals under one roof. The goal was simple: to bridge the critical gap between
                what students learn in the classroom and what employers actually expect in the
                professional world.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Students from across Superior University&apos;s Faculty of Computer Sciences &amp;
                Information Technology gathered to hear from experienced professionals who shared
                real-world insights, career strategies, and lessons learned from their own journeys
                in the tech industry.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The seminar featured engaging talks, an interactive Q&amp;A panel, and ample
                networking time — giving attendees the chance to ask questions, make connections,
                and leave with actionable career advice.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900">Event Highlights</h2>
              <ul className="space-y-2.5">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-sky-500" />
                <h2 className="text-xl font-extrabold text-slate-900">Event Photos</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {eventPhotos.map((src, i) => (
                  <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-sky-50 border border-sky-100 hover:border-sky-300 hover:shadow-[0_4px_20px_rgba(14,165,233,0.15)] transition-all group">
                    <Image
                      src={src}
                      alt={`Event photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            {/* Status Card */}
            <div className="glass-panel rounded-2xl border border-sky-100 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-slate-900">Event Status</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  COMPLETED
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                This event has already taken place. Check our Events page for upcoming events and register your interest.
              </p>
              <Link
                href="/events"
                className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:from-sky-400 hover:to-blue-500 transition-all"
              >
                View Upcoming Events
              </Link>
            </div>

            {/* Organized By */}
            <div className="glass-panel rounded-2xl border border-sky-100 p-6 space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900">Organized By</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-sky-300 p-0.5 flex-shrink-0 shadow-xs">
                  <Image
                    src="/superior-acm-icon.png"
                    alt="Superior ACM Emblem"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Superior ACM Society</p>
                  <p className="text-[11px] text-slate-500">Superior University, Lahore</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-panel rounded-2xl border border-sky-100 p-6 space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900">Follow Us</h3>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/superior_acm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-[9px] font-bold">IG</span>
                  @superior_acm
                </a>
                <a
                  href="https://www.linkedin.com/company/superior-acm-society/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-[9px] font-bold">in</span>
                  Superior ACM Society
                </a>
                <a
                  href="https://www.facebook.com/share/1Bzt9cGbLj/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-blue-700 flex items-center justify-center text-white text-[9px] font-bold">fb</span>
                  ACM Superior
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-panel rounded-2xl border border-sky-100 p-6 space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900">Get In Touch</h3>
              <p className="text-xs text-slate-500">Have questions about this event or future events?</p>
              <Link
                href="/contact"
                className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold text-sky-700 bg-white border border-sky-300 hover:bg-sky-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
