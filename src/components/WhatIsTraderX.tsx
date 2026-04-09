"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Users, FileText, Globe, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const WhatIsTraderX = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".interface-point", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
      
      gsap.from(".mockup-frame", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  const points = [
    { icon: Users, text: "Вести своих клиентов" },
    { icon: FileText, text: "Фиксировать сделки" },
    { icon: Layout, text: "Работать в единой системе" },
    { icon: Globe, text: "Использовать готовый деловой контур" },
    { icon: Workflow, text: "Двигаться в более сильной модели" },
  ];

  return (
    <section id="о-платформе-детали" ref={container} className="py-32 px-6 sm:px-12 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-accent" />
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">Определение</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tighter text-primary uppercase leading-[0.95]">
                Trader X — это платформа для работы внутри <span className="text-accent underline decoration-accent/10">реального</span> бизнес-контура
              </h2>
              <p className="text-lg text-primary/60 max-w-xl leading-relaxed">
                Сервис объединяет рабочий интерфейс, понятную модель взаимодействия и инфраструктуру действующего бизнеса, чтобы сильный продажник мог работать не как обычный менеджер, а в самостоятельном формате.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 py-10 border-t border-primary/5">
              {points.map((point, i) => (
                <div key={i} className="interface-point flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-offwhite flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <point.icon className="w-5 h-5 text-accent group-hover:text-offwhite transition-colors" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract UI Mockup */}
          <div className="mockup-frame relative group hidden lg:block">
            <div className="absolute inset-0 bg-accent/5 rounded-[3rem] blur-3xl -z-10 scale-110 group-hover:scale-125 transition-transform duration-1000" />
            <div className="bg-primary rounded-[3rem] p-8 shadow-2xl border border-primary relative overflow-hidden">
               {/* UI Elements Simulation */}
               <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center pb-6 border-b border-paper/10">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-accent/40" />
                       <div className="w-3 h-3 rounded-full bg-paper/10" />
                       <div className="w-3 h-3 rounded-full bg-paper/10" />
                    </div>
                    <span className="font-mono text-[8px] text-paper/30 uppercase tracking-[0.2em]">Trader X Protocol V1.0</span>
                  </div>
                  
                  <div className="space-y-4 py-8">
                     <div className="h-4 w-2/3 bg-paper/5 rounded-full" />
                     <div className="h-10 w-full bg-paper/5 rounded-2xl flex items-center px-4">
                        <div className="w-full h-1 bg-accent/20 rounded-full overflow-hidden">
                           <div className="w-3/4 h-full bg-accent" />
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="aspect-square bg-paper/5 rounded-3xl p-6 flex flex-col justify-end">
                           <div className="h-2 w-1/2 bg-accent/40 rounded-full mb-2" />
                           <div className="h-4 w-full bg-paper/10 rounded-full" />
                        </div>
                        <div className="aspect-square bg-accent rounded-3xl p-6 flex flex-col justify-end">
                           <div className="h-2 w-1/3 bg-paper/40 rounded-full mb-2" />
                           <div className="h-4 w-2/3 bg-paper/90 rounded-full" />
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="absolute top-10 right-10 flex flex-col gap-2">
                  <div className="w-12 h-1 bg-accent shadow-[0_0_15px_rgba(230,59,46,0.5)]" />
                  <div className="w-8 h-1 bg-accent/40" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
