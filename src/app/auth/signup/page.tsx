"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { UserPlus, Mail, Lock, User, Hash, GraduationCap, ShieldCheck } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "BS Computer Science",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.studentId) {
      setError("Please fill out all required fields.");
      return;
    }
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const ok = register({
        name: formData.name,
        email: formData.email,
        studentId: formData.studentId,
        department: formData.department,
      });
      if (ok) {
        router.push("/dashboard");
      } else {
        setError("Registration error. Please try again.");
        setIsLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-block">
            <Image
              src="/superior-acm-logo.png"
              alt="Superior ACM Society"
              width={260}
              height={62}
              className="h-14 sm:h-16 w-auto mx-auto object-contain"
              priority
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Join Superior ACM Society
          </h1>
          <p className="text-xs text-slate-500">
            Create your chapter member account to RSVP to events, claim digital tickets, and access member perks.
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel p-8 rounded-3xl border border-sky-200/90 shadow-[0_20px_50px_rgba(14,165,233,0.1)] space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Bilal Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Student Roll No *</label>
                <div className="relative">
                  <Hash className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="BCS-F23-102"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Department</label>
                <div className="relative">
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                  >
                    <option value="BS Computer Science">BS Computer Science</option>
                    <option value="BS Software Engineering">BS Software Eng</option>
                    <option value="BS Artificial Intelligence">BS AI</option>
                    <option value="BS Information Technology">BS IT</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">University / Contact Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@superior.edu.pk or personal"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Create Password *</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>{isLoading ? "Creating Profile..." : "Create Chapter Account →"}</span>
            </button>
          </form>

          <div className="text-center pt-2 text-xs text-slate-500 border-t border-slate-100">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-sky-600 font-bold hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        {/* Security badge */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Chartered ACM Student Chapter • Superior University Lahore</span>
        </div>
      </div>
    </div>
  );
}
