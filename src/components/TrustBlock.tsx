"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type LucideIcon, Shield, Users, Briefcase, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TrustBadge = ({ text }: { text: string }) => (
  <div className="px-6 py-2.5 bg-white/10 border border-white/20 rounded-full flex items-center gap-3 transition-colors hover:bg-white/20">
    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(13,121,242,0.8)]" />
    <span className="text-[10px] md:text-[11px] uppercase font-black tracking-[0.15em] text-white">{text}</span>
  </div>
);

const TrustCard = ({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) => {
  return (
    <div className="trust-card group bg-[#16161D] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 md:p-12 transition-all duration-500">
      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-10 transition-all duration-500">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg text-white/60 leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
};

export const TrustBlock = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trust-reveal", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
    });
  }, { scope: container });

  const cards = [
    {
      icon: Briefcase,
      title: "Реальные активы",
      desc: "За платформой стоит фундамент действующего бизнеса с подтвержденными оборотами и складами.",
    },
    {
      icon: Users,
      title: "Экспертиза рынка",
      desc: "Наши кураторы - это практики металлопроката, знающие каждый нюанс ценообразования и логистики.",
    },
    {
      icon: Shield,
      title: "Правовая чистота",
      desc: "Прозрачные договоры, проверенные контрагенты и отсутствие юридических рисков для вашего портфеля.",
    },
    {
      icon: Star,
      title: "Безупречная репутация",
      desc: "Мы ценим доверие партнеров выше краткосрочной выгоды. Наш бренд - ваша гарантия стабильности.",
    },
  ];

  const badges = ["Реальный бизнес", "Рынок", "Опыт", "Репутация"];

  return (
    <section id="trust" ref={container} className="relative bg-[#0A0A0F] overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
          <div className="trust-reveal max-w-3xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-8 block text-[10px]">Безопасность и опора</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.9] text-white">
              Инфраструктура <br />
              <span className="italic text-primary">проверенная годами</span>
            </h2>
          </div>
          <div className="trust-reveal max-w-sm">
            <p className="text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed border-l-4 border-primary pl-8 py-2">
              Мы не строим гипотезы - мы даем доступ к реально работающим активам и лимитам.
            </p>
          </div>
        </div>

        <div className="trust-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <TrustCard key={i} {...card} />
          ))}
        </div>

        <div className="trust-footer-reveal mt-24 md:mt-32 flex flex-col gap-12">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge, i) => (
              <TrustBadge key={i} text={badge} />
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <p className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tight italic leading-tight">
              Trader X - это платформа для профессионалов рынка, <br className="hidden md:block" />
              <span className="text-primary">а не красивая легенда без основы.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
};
