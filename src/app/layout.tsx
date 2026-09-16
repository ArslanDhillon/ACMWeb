import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ACM Student Chapter | Advancing Computing as a Science & Profession",
  description: "Official ACM Student Chapter featuring hackathons, dev workshops, competitive programming, executive leadership directory, and research digital library.",
  keywords: ["ACM", "Student Chapter", "Computer Science", "DevDay", "Hackathon", "ICPC", "Research", "Three.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} min-h-screen bg-[#f8fafc] text-slate-800 antialiased relative selection:bg-sky-500 selection:text-white flex flex-col`}
      >
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
