"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Filter, X } from "lucide-react";

type Category = "all" | "seminar";

const photos = [
  { src: "/eventsImages/IMG_4159.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4338.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4352.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4367.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4382.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4383.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4398.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4446.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4449.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_4460.JPG.jpeg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_5457.jpg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_5493.jpg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_5542.jpg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
  { src: "/eventsImages/IMG_5615.jpg", event: "ACM Seminar: From Learning to Employment", year: "2026", category: "seminar" as const },
];

const categoryLabels: Record<Category, string> = {
  all: "All Events",
  seminar: "Seminars",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all" ? photos : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0));
  const nextPhoto = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : 0));

  return (
    <div className="pb-24 space-y-12">
      {/* HEADER */}
      <section className="pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-semibold">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>CHAPTER GALLERY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">Gallery</span>
          </h1>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Moments captured from ACM Superior Society events. Browse photos from our seminars, workshops,
            and community activities.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Filter className="w-4 h-4 text-sky-500" />
            <span>Filter by event:</span>
          </div>
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600"
              }`}
            >
              {categoryLabels[cat]}
              {cat !== "all" && (
                <span className="ml-1.5 opacity-70">
                  ({photos.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* YEAR GROUP: 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-sky-600 font-mono">2026</span>
          <div className="flex-1 h-px bg-sky-100" />
          <span className="text-xs text-slate-500 font-semibold">{filtered.length} photos</span>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((photo, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative w-full rounded-2xl overflow-hidden bg-sky-50 border border-sky-100 hover:border-sky-300 hover:shadow-[0_4px_20px_rgba(14,165,233,0.15)] transition-all group block break-inside-avoid mb-3"
            >
              <Image
                src={photo.src}
                alt={`${photo.event} — Photo ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/20 transition-colors flex items-end p-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-semibold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                  {photo.event}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl z-10 transition-colors"
          >
            ‹
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].event}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl z-10 transition-colors"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs">
            {lightboxIndex + 1} / {filtered.length} — {filtered[lightboxIndex].event}
          </div>
        </div>
      )}

      {/* LINK TO EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-600 mb-4">
          Want to see more? Check out the full event details.
        </p>
        <Link
          href="/events/acm-seminar-learning-to-employment"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:from-sky-400 hover:to-blue-500 transition-all"
        >
          View Event Details
        </Link>
      </section>
    </div>
  );
}
