"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type LucideIcon, TrendingUp, Layers, Target, Layout, Building2, ArrowUpRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  isLarge?: boolean;
};

const BenefitCard = ({ icon: Icon, title, description, isLarge = false }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current || !iconRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      gsap.to(iconRef.current, {
        x: x * 0.15,
        y: y * 0.15,
        rotation: x * 0.02,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(iconRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const card = cardRef.current;
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="benefit-card group relative h-full w-full bg-white border border-black/5 rounded-[2.5rem] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-default">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <div ref={iconRef} className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isLarge ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-accent/5 text-primary group-hover:bg-primary group-hover:text-white"}`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div className="mt-6 flex flex-col gap-3 flex-1">
          <h3 className={`font-black uppercase tracking-tight leading-tight text-black text-xl md:text-2xl ${isLarge ? "lg:text-3xl" : ""}`}>
            {title}
          </h3>
          <p className="text-sm md:text-base text-black/40 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {isLarge && (
          <div className="mt-10 flex justify-end">
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const BenefitsBlock = () => {
  const container = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useGSAP(() => {
    gsap.from(".benefit-header > *", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".benefit-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: ".benefit-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-[#FAF8F5] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="benefit-header flex flex-col gap-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase leading-none">
            Что вы получаете <br />
            <span className="italic text-primary">с Trader X</span>
          </h2>
        </div>

        <div className="benefit-grid grid grid-cols-12 gap-5 items-stretch">
          <div className="col-span-12 lg:col-span-6 h-full">
            <BenefitCard isLarge icon={TrendingUp} title="Больше со своих клиентов" description="Если клиент работает с вами, вы должны зарабатывать на этом больше, чем обычный процент в найме." />
          </div>
          <div className="col-span-12 lg:col-span-6 h-full">
            <BenefitCard isLarge icon={Layers} title="Готовую базу для работы" description="Не нужно с нуля собирать компанию, процессы и рабочую систему - все уже настроено для вашего старта." />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <BenefitCard icon={Target} title="Меньше упущенных сделок" description="Проще закрывать заявки, которые в обычной компании часто теряются из-за бюрократии." />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <BenefitCard icon={Layout} title="Понятную работу" description="Все в одном месте: клиент, сделка и следующий шаг. Простая и эффективная CRM-логика." />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <BenefitCard icon={Building2} title="Опору на бизнес" description="За платформой стоит не просто идея, а действующая компания с реальными активами и опытом." />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <BenefitCard icon={ArrowUpRight} title="Шаг вперед" description="Это не просто вакансия менеджера, а возможность стать партнером в более сильной модели." />
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-20">
          <button onClick={openModal} className="btn-glow group px-12 md:px-14 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3">
            Получить доступ
            <div className="w-5 h-px bg-white/40 group-hover:w-8 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
};
