"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Target, Zap, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA = ({ onCTA }: { onCTA: () => void }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section ref={container} className="relative py-40 px-6 sm:px-12 md:px-24 bg-primary text-paper overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
           {Array.from({length: 12}).map((_, i) => (
             <div key={i} className="border-r border-paper/20 h-full" />
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-16 relative z-10">
        <div className="flex flex-col gap-8 max-w-4xl">
          <div className="flex justify-center items-center gap-4 mb-4">
             <div className="w-12 h-px bg-accent" />
             <span className="font-mono text-[10px] text-accent uppercase tracking-[0.4em] font-bold">Финальный шаг</span>
             <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="cta-title text-5xl sm:text-7xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.9]">
            Готовы к новому уровню <span className="text-accent italic">самостоятельности?</span>
          </h2>
          <p className="text-lg sm:text-xl text-paper/60 max-w-2xl mx-auto leading-relaxed">
            Trader X — это платформа для тех, кто хочет работать сильнее. Оставьте заявку, чтобы мы могли познакомиться и обсудить формат вашего участия.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 w-full">
          <button 
            onClick={onCTA}
            className="btn-magnetic group py-10 px-20 bg-accent text-primary rounded-huge shadow-2xl shadow-accent/20 hover:scale-[1.02] transition-all duration-500 overflow-hidden relative"
          >
            <div className="relative z-10 flex items-center gap-6 text-3xl font-black uppercase tracking-tighter">
               Получить доступ
               <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
          </button>
          
          <div className="grid sm:grid-cols-3 gap-12 py-12 border-y border-paper/10 w-full mt-12">
            {[
              { icon: Target, text: "Живое знакомство" },
              { icon: Zap, text: "Реальная модель" },
              { icon: ShieldCheck, text: "Без обязательств" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-paper/5 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                    <item.icon className="w-4 h-4 text-accent group-hover:text-primary transition-colors" />
                 </div>
                 <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-paper/40 group-hover:text-paper transition-colors duration-500">
                    {item.text}
                 </span>
              </div>
            ))}
          </div>
          
          <p className="text-[11px] font-mono text-paper/20 uppercase tracking-[0.3em] font-bold mt-8">
             System operational // protocol x-2024
          </p>
        </div>
      </div>
    </section>
  );
};

