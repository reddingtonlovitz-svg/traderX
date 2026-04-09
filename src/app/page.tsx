"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { WhatIsTraderX } from "@/components/WhatIsTraderX";
import { Manifesto } from "@/components/Manifesto";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TasksAndResults } from "@/components/TasksAndResults";
import { FinancialModel } from "@/components/FinancialModel";
import { TrustProtocol } from "@/components/TrustProtocol";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-white selection:bg-accent selection:text-white">
      {/* Global Noise Texture Overlay handled via globals.css */}
      
      <Navbar />

      <Hero />

      <PainPoints />

      <WhatIsTraderX />

      <Manifesto />

      <HowItWorks />

      <Features />

      <TasksAndResults />

      <FinancialModel />

      <TrustProtocol />

      <FinalCTA onCTA={() => setIsFormOpen(true)} />

      <FAQ />

      <Footer />

      {/* Modals & Overlays */}
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-[150] mix-blend-difference hidden sm:block">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-accent transition-all duration-300" style={{ height: 'var(--scroll-progress, 0%)' }} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 rotate-90 origin-left translate-x-1">Scroll</span>
        </div>
      </div>
    </main>
  );
}

