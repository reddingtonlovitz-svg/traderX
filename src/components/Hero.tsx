"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Phone, Target, Layers, Briefcase, Zap } from "lucide-react";

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-line-sans", { y: 100, opacity: 0, skewY: 7 })
        .from(".hero-line-serif", { y: 120, opacity: 0, skewY: -5 }, "-=0.9")
        .from(".hero-desc", { y: 40, opacity: 0 }, "-=0.8")
        .from(".hero-points > div", { y: 20, opacity: 0, stagger: 0.1 }, "-=0.7")
        .from(".hero-cta", { y: 30, opacity: 0 }, "-=0.9")
        .from(".hero-overlay", { opacity: 0, duration: 2 }, 0);
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative h-[100dvh] w-full flex items-end overflow-hidden pb-20 px-6 sm:px-12 md:px-24 bg-primary"
    >
      {/* Background Image with Heavy Gradient */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5f649771?q=80&w=2000" 
          alt="Industrial Steel Context" 
          fill 
          className="object-cover opacity-50 grayscale"
          priority
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent hidden lg:block" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:items-center">
        {/* Left Content: Bottom-Left Third (now 2/3 Width) */}
        <div className="lg:col-span-8 flex flex-col gap-8 mb-12">
          <div className="flex flex-col gap-2">
            <h1 className="flex flex-col gap-0 leading-[0.85] max-w-2xl">
              <span className="hero-line-sans font-sans font-black text-lg sm:text-xl md:text-2xl tracking-tighter text-paper uppercase opacity-80">
                Платформа для
              </span>
              <span className="hero-line-serif font-serif italic text-2xl sm:text-4xl md:text-[3.4rem] text-steel mt-[-0.05em] leading-[0.8] drop-shadow-2xl">
                Металлотрейдеров.
              </span>
            </h1>
            <p className="hero-desc w-full max-w-sm text-xs sm:text-sm md:text-base text-paper/60 font-sans leading-relaxed mt-4">
              Работайте через готовую инфраструктуру действующего бизнеса: ведите клиентов, проводите сделки и развивайте свою базу в более сильной модели без запуска компании с нуля.
            </p>
          </div>

          {/* 4 Thesis in One Line */}
          <div className="hero-points flex flex-nowrap items-center gap-x-12 py-8 border-y border-paper/10 overflow-x-auto no-scrollbar">
            {[
              { icon: Target, text: "Свои клиенты" },
              { icon: Layers, text: "Готовая система" },
              { icon: Briefcase, text: "Действующий бизнес" },
              { icon: Zap, text: "Понятный вход" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-paper/40 group-hover:text-accent transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="hero-cta flex flex-wrap items-center gap-6">
            <button className="btn-magnetic group py-5 px-10 text-sm flex items-center gap-3">
              Получить доступ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="font-sans font-bold text-[10px] uppercase tracking-widest text-paper/60 hover:text-accent transition-all flex items-center gap-2 px-8 py-5 border border-paper/10 hover:border-accent/40 rounded-pill">
              <Phone className="w-4 h-4" />
              Связаться с нами
            </button>
          </div>
        </div>

        {/* Right Side: Abstract Market Topology (1/3 Width) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-center items-center h-full relative group">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Central Node / Platform */}
            <div className="absolute w-40 h-40 rounded-full border border-accent/20 flex items-center justify-center animate-pulse">
               <div className="w-32 h-32 rounded-full border border-accent/40 bg-accent/5 backdrop-blur-3xl flex items-center justify-center p-8 text-center text-[10px] font-mono font-black text-accent uppercase tracking-widest">
                  Platform
               </div>
            </div>

            {/* Orbiting Satellite Nodes */}
            {[
              { label: "Сделки", pos: "top-0 left-0", icon: Zap },
              { label: "Клиенты", pos: "top-10 right-0", icon: Target },
              { label: "Рост", pos: "bottom-10 right-10", icon: Layers },
              { label: "Система", pos: "bottom-0 left-10", icon: Briefcase },
            ].map((node, i) => (
              <div 
                key={i} 
                className={`absolute ${node.pos} p-6 bg-white/5 backdrop-blur-2xl border border-paper/10 rounded-large flex flex-col items-center gap-3 hover:bg-white/10 transition-all duration-700 hover:scale-110 hover:-translate-y-2 group/node`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center group-hover/node:border-accent transition-colors">
                   <node.icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="font-mono text-[9px] font-black text-paper uppercase tracking-[0.3em]">{node.label}</span>
              </div>
            ))}

            {/* Connecting SVG Paths (Decorative) */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20" viewBox="0 0 400 400">
               <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" className="text-paper/20 animate-spin-slow" />
               <line x1="200" y1="200" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
               <line x1="200" y1="200" x2="350" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
               <line x1="200" y1="200" x2="320" y2="340" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
               <line x1="200" y1="200" x2="80" y2="350" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

