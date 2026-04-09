"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCheck, History, Share2, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const personas = [
  {
    icon: UserCheck,
    title: "Действующим менеджерам",
    desc: "Тем, кто хочет большего дохода и большей свободы",
    isMain: true,
  },
  {
    icon: History,
    title: "Бывшим продажникам",
    desc: "Тем, у кого остались связи, база и понимание",
  },
  {
    icon: Share2,
    title: "Продажникам смежных ниш",
    desc: "Тем, кто получает запросы на металл",
  },
  {
    icon: Users,
    title: "Руководителям групп",
    desc: "Тем, кто мыслит шире обычной роли менеджера",
  },
];

export const WhoItIsFor = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".persona-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="для-кого" ref={container} className="py-32 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono font-extrabold text-accent uppercase tracking-widest mb-4">
            Профиль
          </h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-6">
            Кому подходит Trader X
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {personas.map((persona, i) => (
            <div
              key={i}
              className={`persona-card relative p-10 rounded-[3rem] border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                persona.isMain 
                  ? "bg-primary text-white border-primary shadow-2xl scale-105 z-10" 
                  : "bg-ghost/30 border-graphite/5 hover:border-accent/40"
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-10 ${
                  persona.isMain ? "bg-accent text-white" : "bg-white text-accent shadow-sm"
                }`}>
                  <persona.icon className="w-6 h-6" />
                </div>
                <h4 className={`text-xl font-extrabold mb-4 leading-tight tracking-tight ${
                  persona.isMain ? "text-white" : "text-primary"
                }`}>
                  {persona.title}
                </h4>
                <p className={`text-sm font-bold leading-relaxed ${
                  persona.isMain ? "text-white/60" : "text-graphite/40"
                }`}>
                  {persona.desc}
                </p>
              </div>
              
              {persona.isMain && (
                <div className="mt-12 flex justify-end">
                   <div className="px-3 py-1 bg-accent rounded-pill text-[10px] font-extrabold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(123,97,255,0.4)]">
                     Core Segment
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
