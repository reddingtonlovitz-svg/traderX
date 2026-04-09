"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Briefcase, History, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Сергей",
    role: "CEO & Founder",
    image: "/ceo.png",
    bio: "Более 15 лет в управлении металлоторговыми компаниями. Знает рынок «от и до».",
  },
  {
    name: "Алексей",
    role: "CTO & Co-founder",
    image: "/cto.png",
    bio: "Архитектор сложных B2B систем. 10 лет опыта в финтехе и логистике.",
  },
];

export const FoundersRow = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founder-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="о-компании" ref={container} className="py-32 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Photos Side */}
          <div className="grid grid-cols-2 gap-6 relative">
            {founders.map((founder, i) => (
              <div key={i} className="founder-card group relative">
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-graphite/5 bg-ghost">
                  <Image 
                    src={founder.image} 
                    alt={`Основатель платформы Trader X — ${founder.name}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <h4 className="text-2xl font-bold text-white tracking-tight leading-tight">{founder.name}</h4>
                    <p className="text-white/60 font-medium text-sm">{founder.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-sm font-mono font-extrabold text-accent uppercase tracking-widest mb-2">
                Команда
              </h2>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight">
                За Trader X стоят люди, которые понимают рынок изнутри
              </h3>
              <div className="flex flex-col gap-4 text-lg text-graphite/60 leading-relaxed font-medium">
                <p>
                  Trader X создается на базе практического понимания рынка металлопроката и реального опыта работы в нем.
                </p>
                <p>
                  Это не абстрактная digital-идея, а платформа, выросшая из понимания того, как на самом деле устроены сделки, доверие и ограничения компании.
                </p>
              </div>
            </div>

            {/* Trust Thesis */}
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: History, text: "Реальный опыт в металлопрокате" },
                { icon: Briefcase, text: "Понимание логики снабжения" },
                { icon: Award, text: "Опора на действующий бизнес" },
                { icon: Database, text: "Фундамент для взрослой платформы" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-3xl bg-ghost/30 border border-graphite/5">
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-bold text-primary leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Partner Logos Placeholder */}
            <div className="pt-10 border-t border-graphite/5">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-graphite/30 mb-6 block">
                 Отраслевое присутствие
              </span>
              <div className="flex flex-wrap items-center gap-12 opacity-30 grayscale contrast-125">
                 <div className="text-2xl font-black italic tracking-tighter">METALL-PRO</div>
                 <div className="text-2xl font-black italic tracking-tighter">STEEL_CORE</div>
                 <div className="text-2xl font-black italic tracking-tighter">NODE_SYSTEM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
