"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCheck, HandCoins, PackageSearch, Rocket, AlertTriangle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pains = [
  {
    icon: UserCheck,
    title: "Клиенты держатся на вас, а не только на бренде",
    desc: "Постоянные клиенты часто работают именно с менеджером, потому что доверяют человеку, скорости реакции и умению решать вопросы, а не только названию компании.",
  },
  {
    icon: HandCoins,
    title: "Доход часто не отражает реальную ценность, которую вы создаете",
    desc: "Вы ведете сделки, удерживаете клиентов, возвращаете их, решаете сложные запросы, но итоговая экономика для вас может быть ограничена внутренней системой компании.",
  },
  {
    icon: PackageSearch,
    title: "Текущая компания не всегда может закрыть запрос клиента",
    desc: "Нет нужной позиции, неудобная логистика, ограничения по регионам, условиям или скорости — и клиент, которого вы могли бы удержать, уходит.",
  },
  {
    icon: Rocket,
    title: "Открывать свою компанию с нуля долго, сложно и рискованно",
    desc: "Чтобы выйти из найма, недостаточно просто уметь продавать. Нужны юрлицо, процессы, доверие, поставщики, инфраструктура и рабочая система.",
  },
  {
    icon: AlertTriangle,
    title: "В итоге приходится выбирать между двумя неудобными вариантами",
    desc: "Либо оставаться в найме на ограниченных условиях, либо пытаться запускать все самостоятельно, принимая на себя слишком много риска.",
  },
];

export const PainPoints = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pain-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="почему-это-важно" ref={container} className="py-32 px-6 sm:px-12 md:px-24 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">Контекст рынка</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tighter text-primary uppercase mb-8 leading-[0.9]">
            Сильные продажники часто упираются не в рынок, а в <span className="text-accent underline decoration-accent/20">рамки своей компании</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary/60 font-sans max-w-2xl leading-relaxed">
            Многие менеджеры давно выросли из роли обычного сотрудника, но рынок редко предлагает им промежуточный путь между наймом и запуском собственного бизнеса.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="pain-card group relative p-12 bg-paper rounded-huge border border-primary/5 hover:border-accent/30 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/5 flex flex-col justify-between items-start min-h-[400px]"
            >
              <div className="flex flex-col gap-8 w-full">
                <div className="flex justify-between items-start w-full">
                  <div className="w-14 h-14 rounded-2xl bg-offwhite border border-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                    <pain.icon className="w-6 h-6 text-accent group-hover:text-offwhite transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] text-primary/20 group-hover:text-accent transition-colors">0{i + 1}</span>
                </div>
                <h4 className="text-2xl font-sans font-bold text-primary leading-tight tracking-tight uppercase group-hover:text-accent transition-colors">
                  {pain.title}
                </h4>
              </div>
              <p className="text-primary/60 text-sm leading-relaxed mt-10">
                {pain.desc}
              </p>
            </div>
          ))}
          
          {/* Summary Card */}
          <div className="pain-card hidden lg:flex flex-col justify-center items-center p-12 bg-primary rounded-huge border border-primary/5 text-center aspect-square transition-all duration-700 hover:scale-[1.02]">
            <h5 className="text-paper/40 font-mono text-[10px] uppercase tracking-widest mb-6">Trader X Solution</h5>
            <p className="text-paper text-2xl font-serif italic mb-10 leading-tight">
              Мы создаем платформу, чтобы вы могли работать сильнее.
            </p>
            <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

