"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, CheckCircle2, TrendingUp, Cpu, Network, Briefcase, Zap, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const NewPath = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".comparison-col", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section className="py-32 px-6 md:px-12 bg-white flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-4xl mx-auto">
          <h2 className="text-sm font-mono font-extrabold text-accent uppercase tracking-widest mb-2">
            А так можно было?
          </h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight">
            Не только найм. Не только свой бизнес с нуля. Есть третий путь
          </h3>
          <p className="text-lg text-graphite/60 leading-relaxed font-medium">
            Trader X — платформа для тех, кто хочет работать сильнее, не собирая всю инфраструктуру самостоятельно.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 relative">
          {/* Column 1: Traditional Mode */}
          <div className="comparison-col p-12 rounded-[3.5rem] bg-ghost/20 grayscale hover:grayscale-0 transition-all group flex flex-col">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="text-base font-bold text-primary">Найм</h4>
            </div>
            
            <ul className="space-y-6 mb-auto">
              {[
                "Ограниченный доход",
                "Чужие правила",
                "Зависимость от компании",
              ].map((text, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold font-mono uppercase tracking-widest text-graphite/30">0{i+1}</span>
                  <p className="text-lg text-graphite/70 font-semibold">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Own Business */}
          <div className="comparison-col p-12 rounded-[3.5rem] bg-ghost/20 grayscale hover:grayscale-0 transition-all group flex flex-col">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="text-base font-bold text-primary">Свой бизнес с нуля</h4>
            </div>
            
            <ul className="space-y-6 mb-auto">
              {[
                "Много рисков",
                "Нужна инфраструктура",
                "Долгий старт",
              ].map((text, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold font-mono uppercase tracking-widest text-graphite/30">0{i+1}</span>
                  <p className="text-lg text-graphite/70 font-semibold">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trader X (Winner) */}
          <div className="comparison-col relative p-12 rounded-[3.5rem] bg-accent text-white shadow-[0_40px_100px_-20px_rgba(123,97,255,0.4)] flex flex-col group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white">Trader X</h4>
                </div>
                <Zap className="w-5 h-5 text-white/50 animate-pulse" />
              </div>
              
              <ul className="space-y-6 mb-auto">
                {[
                  "Готовая система",
                  "Более сильная модель",
                  "Опора на бизнес",
                ].map((text, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="text-[10px] font-extrabold font-mono uppercase tracking-widest text-white/40">STEP_0{i+1}</span>
                    <p className="text-xl text-white font-extrabold tracking-tight">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button className="btn-primary py-6 px-12 text-lg font-extrabold shadow-xl hover:scale-[1.05]">
            Получить доступ
          </button>
        </div>
      </div>
    </section>
  );
};
