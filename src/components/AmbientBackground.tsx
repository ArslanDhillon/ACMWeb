"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <>
      {/* Background Cyber Grid & Ambient Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cyber-grid opacity-60"></div>
        {/* Glowing light-blue nebula orbs */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent rounded-full blur-[140px] animate-pulse-glow"></div>
        <div 
          className="absolute top-[35%] -right-32 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/20 via-sky-400/10 to-transparent rounded-full blur-[130px] animate-pulse-glow" 
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute top-[70%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-transparent rounded-full blur-[150px] animate-pulse-glow" 
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating 3D Glass Geometry in Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating 3D Cube (Top-Right) */}
        <div className="absolute top-28 right-12 w-24 h-24 animate-float-slow opacity-65 hidden md:block">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-sky-300/30 to-sky-600/10 border border-sky-300/40 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.3)] transform rotate-12 flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg border border-sky-300/30 transform -rotate-6"></div>
          </div>
        </div>

        {/* Floating 3D Orb (Left) */}
        <div className="absolute top-72 left-8 w-20 h-20 animate-float-delayed opacity-70 hidden md:block">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-sky-500/35 to-sky-200/20 border border-sky-400/40 backdrop-blur-lg shadow-[0_0_35px_rgba(56,189,248,0.35)] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-sky-300/30 blur-sm"></div>
          </div>
        </div>

        {/* Floating Hexagon (Middle-Right) */}
        <div className="absolute top-[52%] right-6 w-28 h-28 animate-float-slow opacity-60 hidden lg:block">
          <div className="w-full h-full rounded-3xl bg-gradient-to-bl from-sky-400/20 via-blue-900/40 to-transparent border border-sky-400/30 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.25)] transform -rotate-45"></div>
        </div>

        {/* Floating Glass Diamond (Lower Left) */}
        <div className="absolute top-[82%] left-16 w-16 h-16 animate-float-delayed opacity-50 hidden md:block">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-sky-400/30 to-indigo-500/10 border border-sky-300/30 backdrop-blur-md transform rotate-45 shadow-[0_0_20px_rgba(56,189,248,0.3)]"></div>
        </div>
      </div>
    </>
  );
}
