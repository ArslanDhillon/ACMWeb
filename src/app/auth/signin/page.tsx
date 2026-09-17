"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { LogIn, Mail, Lock, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const { login, loginAsDemo } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your university email");
      return;
    }
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const ok = login(email);
      if (ok) {
        router.push("/dashboard");
      } else {
        setError("Invalid credentials. Try demo student login.");
        setIsLoading(false);
      }
    }, 400);
  };

  const handleDemoLogin = () => {
    loginAsDemo();
    router.push("/dashboard");
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
            Member Portal
          </h1>
          <p className="text-xs text-slate-500">
            Sign in to access your digital membership ID, event tickets, and certificates.
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel p-8 rounded-3xl border border-sky-200/90 shadow-[0_20px_50px_rgba(14,165,233,0.1)] space-y-6">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">University Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@superior.edu.pk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700">Password</label>
                <span className="text-[11px] text-sky-600 hover:underline cursor-pointer">Forgot?</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_16px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>{isLoading ? "Authenticating..." : "Sign In to Portal"}</span>
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div className="text-center">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Instant Preview Mode
              </span>
            </div>

            <button
              onClick={handleDemoLogin}
              type="button"
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-300 hover:bg-sky-100 hover:border-sky-400 transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Quick Demo Student Login (Hamza Tariq)</span>
            </button>
          </div>

          <div className="text-center pt-1 text-xs text-slate-500">
            Don&apos;t have an account yet?{" "}
            <Link href="/auth/signup" className="text-sky-600 font-bold hover:underline">
              Create Chapter Account
            </Link>
          </div>
        </div>

        {/* Security badge */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Superior University Chartered ACM Student Chapter</span>
        </div>
      </div>
    </div>
  );
}
