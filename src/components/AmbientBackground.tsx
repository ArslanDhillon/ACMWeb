"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <>
      {/* Background Cyber Grid & Luminous Ambient Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cyber-grid opacity-75"></div>
        {/* Glowing light-blue nebula orbs */}
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-sky-300/35 via-sky-200/20 to-transparent rounded-full blur-[130px] animate-pulse-glow"></div>
        <div 
          className="absolute top-[35%] -right-28 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-300/30 via-sky-100/30 to-transparent rounded-full blur-[130px] animate-pulse-glow" 
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute top-[70%] left-[-10%] w-[550px] h-[550px] bg-gradient-to-r from-blue-300/25 via-sky-200/20 to-transparent rounded-full blur-[140px] animate-pulse-glow" 
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating 3D Translucent Glass Geometry */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating 3D Cube (Top-Right) */}
        <div className="absolute top-28 right-12 w-24 h-24 animate-float-slow opacity-80 hidden md:block">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/90 to-sky-100/60 border border-sky-300/70 backdrop-blur-md shadow-[0_15px_35px_rgba(14,165,233,0.18)] transform rotate-12 flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg border border-sky-300/50 transform -rotate-6 bg-sky-200/20"></div>
          </div>
        </div>

        {/* Floating 3D Orb (Left) */}
        <div className="absolute top-72 left-8 w-20 h-20 animate-float-delayed opacity-85 hidden md:block">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/90 via-sky-100/70 to-sky-300/40 border border-sky-300/70 backdrop-blur-lg shadow-[0_15px_35px_rgba(14,165,233,0.2)] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-sky-300/30 blur-xs"></div>
          </div>
        </div>

        {/* Floating Hexagon (Middle-Right) */}
        <div className="absolute top-[52%] right-6 w-28 h-28 animate-float-slow opacity-75 hidden lg:block">
          <div className="w-full h-full rounded-3xl bg-gradient-to-bl from-white/80 via-sky-100/50 to-sky-200/30 border border-sky-300/60 backdrop-blur-md shadow-[0_15px_30px_rgba(14,165,233,0.15)] transform -rotate-45"></div>
        </div>

        {/* Floating Glass Diamond (Lower Left) */}
        <div className="absolute top-[82%] left-16 w-16 h-16 animate-float-delayed opacity-75 hidden md:block">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/90 to-sky-200/60 border border-sky-300/60 backdrop-blur-md transform rotate-45 shadow-[0_10px_25px_rgba(14,165,233,0.18)]"></div>
        </div>
      </div>
    </>
  );
}
