"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  BarChart4, 
  Building2, 
  Settings2, 
  Database, 
  TrendingUp, 
  Rocket, 
  Users, 
  ShieldCheck 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: BarChart4,
    title: "Более сильная модель дохода",
    desc: "Платформа создается для того, чтобы опытный продажник мог работать в более выгодной для себя логике, чем обычный найм.",
  },
  {
    icon: Building2,
    title: "Готовая инфраструктура вместо запуска с нуля",
    desc: "Не нужно самостоятельно собирать весь фундамент бизнеса, чтобы начать двигаться в новой модели.",
  },
  {
    icon: Settings2,
    title: "Рабочая система, а не разрозненные инструменты",
    desc: "Клиенты, сделки, процессы и доступ к рабочей среде должны быть собраны в одном понятном контуре.",
  },
  {
    icon: Database,
    title: "Опора на действующий бизнес",
    desc: "За платформой стоит не идея «на бумаге», а реальный рыночный опыт, действующая компания и деловая база.",
  },
  {
    icon: TrendingUp,
    title: "Возможность расти на своем опыте и связях",
    desc: "Если вы умеете продавать и вам доверяют клиенты, это должно работать на вас сильнее.",
  },
  {
    icon: Rocket,
    title: "Путь для тех, кто вырос из роли менеджера",
    desc: "Trader X создается для людей, которые уже чувствуют: старый формат работы им тесен.",
  },
  {
    icon: Users,
    title: "Потенциал для роста не только в одиночку",
    desc: "Платформа интересна не только отдельным продажникам, но и сильным группам, лидерам и людям с собственной командой.",
  },
  {
    icon: ShieldCheck,
    title: "Профессиональная среда вместо серых схем",
    desc: "Сильная модель работы должна вызывать доверие и выглядеть как взрослый бизнес.",
  },
];

export const Features = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".advantage-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="преимущества" ref={container} className="py-32 px-6 sm:px-12 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
           <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">Преимущества</span>
           </div>
           <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter text-primary uppercase leading-[0.9] mb-8">
              Что дает <span className="text-accent underline decoration-accent/10">Trader X</span> сильному продажнику
           </h2>
           <p className="text-lg text-primary/60 max-w-2xl leading-relaxed">
              Мы не обещаем легких денег и не продаем красивую легенду. Мы создаем рабочую модель для людей, которые уже умеют продавать и хотят большего.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {advantages.map((adv, i) => (
             <div 
               key={i} 
               className="advantage-card group relative p-10 bg-offwhite hover:bg-paper rounded-huge border border-primary/5 transition-all duration-700 flex flex-col justify-between items-start min-h-[350px]"
             >
                <div className="flex flex-col gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-white border border-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                      <adv.icon className="w-5 h-5 text-accent group-hover:text-offwhite transition-colors" />
                   </div>
                   <h4 className="text-lg font-sans font-black text-primary leading-tight uppercase tracking-tight group-hover:text-accent transition-colors">
                      {adv.title}
                   </h4>
                </div>
                <p className="text-[13px] text-primary/60 leading-relaxed font-medium mt-10">
                   {adv.desc}
                </p>
                <div className="mt-8 overflow-hidden h-px w-0 bg-accent group-hover:w-full transition-all duration-700" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
