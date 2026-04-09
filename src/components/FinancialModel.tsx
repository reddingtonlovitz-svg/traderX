"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RussianRuble, TrendingUp, ArrowRight, Zap, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const FinancialModel = () => {
  const container = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "SYSTEM_UPDATE: Generating revenue model... 30% of margin allocated to platform member. Base operational costs: 70%. Model validated.";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".revenue-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });

      // Typewriter animation trigger
      ScrollTrigger.create({
        trigger: ".telemetry-feed",
        start: "top 80%",
        onEnter: () => {
          let i = 0;
          const timer = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
          }, 30);
        }
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="финансы" ref={container} className="py-32 px-6 sm:px-12 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
          {/* Left: Telemetry Typewriter */}
          <div className="telemetry-feed flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">Live Feed</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter text-primary uppercase leading-[0.9]">
                Как зарабатывать на своей базе? <span className="text-accent underline decoration-accent/10">Модель Trader X</span>
              </h2>
            </div>
            
            <div className="bg-primary p-10 rounded-huge border border-primary/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8">
                  <Zap className="w-6 h-6 text-accent/20 group-hover:text-accent group-hover:rotate-12 transition-all duration-700" />
               </div>
               <div className="font-mono text-[12px] text-paper/40 leading-relaxed uppercase tracking-wider min-h-[100px]">
                  {typedText}
                  <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink" />
               </div>
               <div className="mt-10 flex flex-col gap-4 border-t border-paper/10 pt-8">
                  <div className="flex justify-between items-center text-paper">
                     <span className="text-[10px] font-bold tracking-widest uppercase">Member Share</span>
                     <span className="text-2xl font-black text-accent">30% OF MARGIN</span>
                  </div>
                  <div className="flex justify-between items-center text-paper/40">
                     <span className="text-[10px] font-bold tracking-widest uppercase">System Share</span>
                     <span className="text-xl font-bold">70%</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Comparison & Content */}
          <div className="flex flex-col gap-12">
            <p className="text-lg text-primary/60 max-w-xl leading-relaxed">
              Мы не ограничиваем ваш заработок классическим процентом менеджера. Модель Trader X создана для максимальной монетизации вашего опыта и деловых связей.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               <div className="revenue-card p-10 bg-offwhite rounded-huge border border-primary/5 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest">Традиционная модель</span>
                     <h4 className="text-xl font-black text-primary uppercase tracking-tight">7-10% в найме</h4>
                  </div>
                  <p className="text-[11px] text-primary/50 leading-relaxed">В обычной компании вы получаете фиксированный процент от маржи, который редко отражает реальный вклад в сделку.</p>
               </div>

               <div className="revenue-card p-10 bg-paper rounded-huge border border-accent shadow-xl shadow-accent/10 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">Trader X Модель</span>
                     <h4 className="text-xl font-black text-primary uppercase tracking-tight">30% ОТ МАРЖИ</h4>
                  </div>
                  <p className="text-[11px] text-primary/60 leading-relaxed">Ваша доля прибыли в 3 раза выше, чем в найме. При этом всю инфраструктуру, риски и снабжение мы берем на себя.</p>
               </div>
            </div>

            <div className="flex items-center gap-4 text-primary/40 font-mono text-[9px] uppercase tracking-[0.3em] font-bold">
               <Target className="w-4 h-4 text-accent" />
               Validation: Professional Financial Protocol v2.4
            </div>
            
            <button className="btn-magnetic group py-5 px-12 bg-primary text-paper rounded-pill flex items-center gap-3 w-fit text-[11px] font-bold uppercase tracking-widest">
               Рассчитать профит
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
};
