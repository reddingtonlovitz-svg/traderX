"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, Users, ShieldCheck, BarChart3, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    icon: ClipboardList,
    title: "Оставляете заявку",
    desc: "Заполняете короткую форму и получаете первичный контакт с командой платформы. Мы свяжемся с вами в течение рабочего дня.",
    color: "bg-paper",
    animation: "laser"
  },
  {
    id: "02",
    icon: Users,
    title: "Проходите знакомство с форматом",
    desc: "Мы показываем, как устроена модель, для кого она подходит и каким может быть ваш следующий шаг в карьере.",
    color: "bg-offwhite",
    animation: "rotate"
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Получаете доступ к платформе",
    desc: "Если формат работы вам подходит, вы входите в рабочую среду Trader X и получаете доступ ко всем инструментам.",
    color: "bg-paper",
    animation: "pulse"
  },
  {
    id: "04",
    icon: BarChart3,
    title: "Начинаете работать с клиентами",
    desc: "Фиксируете сделки, работаете через понятный интерфейс, ведете свою коммерческую активность в более сильной структуре.",
    color: "bg-offwhite",
    animation: "grid"
  },
  {
    id: "05",
    icon: Building2,
    title: "Используете инфраструктуру",
    desc: "Работаете не из пустоты, а на базе реального рынка, реальных процессов и действующей компании.",
    color: "bg-primary",
    textColor: "text-paper",
    animation: "flow"
  }
];

export const HowItWorks = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".process-card");
      
      cards.forEach((card: any, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 10% ",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(card, {
              scale: 1 - progress * 0.1,
              opacity: 1 - progress * 0.5,
              filter: `blur(${progress * 10}px)`
            });
          }
        });
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="как-это-работает" ref={container} className="relative bg-offwhite">
      {/* Section Header */}
      <div className="py-24 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto">
         <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.4em] font-bold">Протокол</span>
            <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter text-primary uppercase leading-[0.9]">
              Как работает <span className="text-accent underline decoration-accent/10">Trader X</span>
            </h2>
         </div>
      </div>

      {/* Stacking Cards */}
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`process-card sticky top-10 h-[90dvh] w-full flex items-center justify-center px-4 sm:px-12 md:px-24 mb-10`}
          >
            <div className={`w-full max-w-7xl h-[80dvh] ${step.color} ${step.textColor || "text-primary"} rounded-[4rem] border border-primary/5 shadow-2xl flex flex-col lg:grid lg:grid-cols-2 relative overflow-hidden`}>
               {/* Content */}
               <div className="p-10 sm:p-20 flex flex-col justify-between h-full relative z-10">
                  <div className="flex flex-col gap-8">
                     <div className="flex items-center gap-4">
                        <span className="font-mono text-2xl font-bold text-accent">{step.id}</span>
                        <div className="h-px w-12 bg-accent/30" />
                     </div>
                     <h3 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter uppercase leading-[0.95]">
                        {step.title}
                     </h3>
                  </div>
                  <p className={`text-lg sm:text-xl ${step.textColor ? "text-paper/60" : "text-primary/60"} max-w-md leading-relaxed`}>
                     {step.desc}
                  </p>
                  <div className="flex items-center gap-4">
                     <div className={`w-12 h-12 rounded-2xl border ${step.textColor ? "border-paper/20" : "border-primary/10"} flex items-center justify-center`}>
                        <step.icon className="w-5 h-5 text-accent" />
                     </div>
                     <span className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-40">Ready for next step</span>
                  </div>
               </div>

               {/* Animation Area */}
               <div className="relative h-full hidden lg:flex items-center justify-center bg-accent/5 overflow-hidden">
                  {step.animation === "laser" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-full h-px bg-accent shadow-[0_0_20px_rgba(230,59,46,0.8)] animate-scan" />
                       <div className="grid grid-cols-8 gap-4 opacity-10">
                          {Array.from({length: 32}).map((_, j) => <div key={j} className="w-2 h-2 bg-accent rounded-full" />)}
                       </div>
                    </div>
                  )}
                  {step.animation === "rotate" && (
                    <div className="relative w-64 h-64 border-2 border-accent/20 rounded-full animate-spin-slow flex items-center justify-center">
                       <div className="w-48 h-48 border-2 border-accent/40 rounded-full animate-spin-reverse flex items-center justify-center">
                          <div className="w-32 h-32 border-4 border-accent rounded-full" />
                       </div>
                    </div>
                  )}
                  {step.animation === "pulse" && (
                     <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-accent/40 rounded-full animate-ping" />
                        <div className="absolute w-24 h-24 bg-accent rounded-full shadow-[0_0_50px_rgba(230,59,46,0.5)]" />
                     </div>
                  )}
                  {step.animation === "grid" && (
                    <div className="w-full h-full p-20 grid grid-cols-4 gap-4 opacity-20">
                       {Array.from({length: 16}).map((_, j) => (
                         <div key={j} className={`h-full bg-accent rounded-xl ${j % 3 === 0 ? "scale-y-125" : "scale-y-75"}`} />
                       ))}
                    </div>
                  )}
                  {step.animation === "flow" && (
                     <div className="w-full h-full flex flex-col justify-center gap-12 px-20">
                        <div className="h-px w-full bg-accent relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-1/4 bg-offwhite animate-move-right" />
                        </div>
                        <div className="h-px w-3/4 bg-accent relative overflow-hidden ml-auto">
                           <div className="absolute top-0 left-0 h-full w-1/3 bg-offwhite animate-move-right" />
                        </div>
                        <div className="h-px w-1/2 bg-accent relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-1/2 bg-offwhite animate-move-right" />
                        </div>
                     </div>
                  )}
               </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% { transform: translateY(-300px); }
          50% { transform: translateY(300px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes move-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-scan { animation: scan 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-move-right { animation: move-right 3s linear infinite; }
      `}</style>
    </section>
  );
};
