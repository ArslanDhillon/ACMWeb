"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface EventTicket {
  id: string;
  eventTitle: string;
  slug: string;
  date: string;
  venue: string;
  seatOrStation?: string;
  type: string;
  qrCodeData: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export interface MemberUser {
  id: string;
  name: string;
  email: string;
  studentId: string;
  department: string;
  tier: string;
  points: number;
  rank: string;
  joinDate: string;
  rsvps: EventTicket[];
  certificates: Certificate[];
}

export interface ProjectProposal {
  id: string;
  title: string;
  category: string;
  description: string;
  submittedAt: string;
  status: "Under Review" | "Approved" | "In Mentorship";
}

interface AuthContextType {
  user: MemberUser | null;
  isLoading: boolean;
  login: (email: string, studentId?: string) => boolean;
  loginAsDemo: () => void;
  register: (data: { name: string; email: string; studentId: string; department: string }) => boolean;
  logout: () => void;
  rsvpEvent: (event: Omit<EventTicket, "id" | "qrCodeData">) => boolean;
  cancelRsvp: (ticketId: string) => void;
  isRegisteredForEvent: (eventSlug: string) => boolean;
  submitProposal: (proposal: Omit<ProjectProposal, "id" | "submittedAt" | "status">) => void;
  proposals: ProjectProposal[];
}

const DEFAULT_DEMO_USER: MemberUser = {
  id: "ACM-SUP-2026-1042",
  name: "Hamza Tariq",
  email: "hamza.tariq@superior.edu.pk",
  studentId: "BCS-F23-088",
  department: "BS Computer Science",
  tier: "Gold Fellow",
  points: 850,
  rank: "#7 in Chapter",
  joinDate: "October 2025",
  rsvps: [
    {
      id: "TKT-SEM-2026-01",
      eventTitle: "ACM Seminar — From Learning to Employment",
      slug: "acm-seminar-learning-to-employment",
      date: "February 2026",
      venue: "Auditorium Hall, Superior University Main Campus",
      seatOrStation: "Auditorium Hall • Seat 42",
      type: "SEMINAR DELEGATE PASS",
      qrCodeData: "ACM-SEM-2026-HAMZA-TARIQ-VERIFIED",
    },
    {
      id: "TKT-WS-2026-02",
      eventTitle: "Full-Stack Web & Next.js Architecture Workshop",
      slug: "devday-2026",
      date: "April 2026",
      venue: "CS Lab 04, Superior University",
      seatOrStation: "Terminal Station #14",
      type: "HANDS-ON WORKSHOP PASS",
      qrCodeData: "ACM-WS-2026-HAMZA-TARIQ-DEV",
    },
  ],
  certificates: [
    {
      id: "CERT-SEM-2026-881",
      title: "Certificate of Participation: Learning to Employment",
      issuer: "Superior ACM Society & Faculty of CS & IT",
      date: "February 2026",
      credentialId: "ACM-SUP-SEM2026-0881",
    },
    {
      id: "CERT-AI-2025-412",
      title: "Foundations of Applied Machine Learning",
      issuer: "Superior ACM Technical Council",
      date: "December 2025",
      credentialId: "ACM-SUP-ML2025-0412",
    },
  ],
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MemberUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [proposals, setProposals] = useState<ProjectProposal[]>([
    {
      id: "PROP-01",
      title: "Automated Campus Navigation Map using Graph Algorithms",
      category: "Mobile & Algorithms",
      description: "Developing a campus route finder for new freshmen at Superior University using Dijkstra algorithm.",
      submittedAt: "Feb 18, 2026",
      status: "Approved",
    },
  ]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("acm_user_session");
      if (stored) {
        setUser(JSON.parse(stored));
      }
      const storedProps = localStorage.getItem("acm_proposals");
      if (storedProps) {
        setProposals(JSON.parse(storedProps));
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveUser = (u: MemberUser | null) => {
    setUser(u);
    if (u) {
      localStorage.setItem("acm_user_session", JSON.stringify(u));
    } else {
      localStorage.removeItem("acm_user_session");
    }
  };

  const login = (email: string, studentId?: string): boolean => {
    if (!email) return false;
    // If logging in as demo email
    if (email.toLowerCase().includes("hamza")) {
      saveUser(DEFAULT_DEMO_USER);
      return true;
    }
    // Extract a name from email
    const namePart = email.split("@")[0].replace(/[._]/g, " ");
    const formattedName = namePart
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

    const newUser: MemberUser = {
      id: `ACM-SUP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formattedName || "Student Member",
      email,
      studentId: studentId || "BCS-2026-STU",
      department: "Faculty of CS & IT",
      tier: "Active Member",
      points: 250,
      rank: "#24 in Chapter",
      joinDate: "March 2026",
      rsvps: [],
      certificates: [],
    };
    saveUser(newUser);
    return true;
  };

  const loginAsDemo = () => {
    saveUser(DEFAULT_DEMO_USER);
  };

  const register = (data: { name: string; email: string; studentId: string; department: string }): boolean => {
    const newUser: MemberUser = {
      id: `ACM-SUP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name: data.name,
      email: data.email,
      studentId: data.studentId,
      department: data.department || "BS Computer Science",
      tier: "New Member",
      points: 100,
      rank: "#32 in Chapter",
      joinDate: "March 2026",
      rsvps: [],
      certificates: [],
    };
    saveUser(newUser);
    return true;
  };

  const logout = () => {
    saveUser(null);
  };

  const rsvpEvent = (eventData: Omit<EventTicket, "id" | "qrCodeData">): boolean => {
    if (!user) return false;
    const exists = user.rsvps.some((r) => r.slug === eventData.slug);
    if (exists) return false;

    const newTicket: EventTicket = {
      ...eventData,
      id: `TKT-${Math.floor(10000 + Math.random() * 90000)}`,
      qrCodeData: `ACM-SUP-${eventData.slug.toUpperCase()}-${user.id}`,
    };

    const updatedUser = {
      ...user,
      points: user.points + 50,
      rsvps: [newTicket, ...user.rsvps],
    };
    saveUser(updatedUser);
    return true;
  };

  const cancelRsvp = (ticketId: string) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      rsvps: user.rsvps.filter((r) => r.id !== ticketId),
    };
    saveUser(updatedUser);
  };

  const isRegisteredForEvent = (eventSlug: string): boolean => {
    if (!user) return false;
    return user.rsvps.some((r) => r.slug === eventSlug);
  };

  const submitProposal = (proposal: Omit<ProjectProposal, "id" | "submittedAt" | "status">) => {
    const newProp: ProjectProposal = {
      ...proposal,
      id: `PROP-0${proposals.length + 1}`,
      submittedAt: "Today",
      status: "Under Review",
    };
    const updated = [newProp, ...proposals];
    setProposals(updated);
    try {
      localStorage.setItem("acm_proposals", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        loginAsDemo,
        register,
        logout,
        rsvpEvent,
        cancelRsvp,
        isRegisteredForEvent,
        submitProposal,
        proposals,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
