"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X, Minus, ArrowUpRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FeatureStatus = "yes" | "no" | "neutral";

type ComparisonColProps = {
  title: string;
  subtitle: string;
  features: { label: string; value: string; status: FeatureStatus }[];
  isPrimary?: boolean;
};

const ComparisonCol = ({ title, subtitle, features, isPrimary = false }: ComparisonColProps) => {
  const { openModal } = useModal();
  return (
    <div className={`flex flex-col h-full rounded-[2.5rem] transition-all duration-500 ${isPrimary ? "bg-accent border border-primary/20 shadow-2xl shadow-primary/10" : "bg-white border border-black/5"}`}>
      <div className={`p-6 sm:p-8 md:p-10 border-b ${isPrimary ? "border-white/10" : "border-black/5"}`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${isPrimary ? "text-primary" : "text-black/40"}`}>
            {subtitle}
          </div>
          {isPrimary && (
            <div className="px-3 py-1 bg-primary/10 rounded-full text-[9px] font-black uppercase text-primary tracking-widest border border-primary/20">
              Выбор профи
            </div>
          )}
        </div>
        <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter ${isPrimary ? "text-white" : "text-black"}`}>
          {title}
        </h3>
      </div>

      <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className={`text-[10px] uppercase font-bold tracking-wider ${isPrimary ? "text-white/30" : "text-black/30"}`}>
              {f.label}
            </div>
            <div className="flex items-center gap-3">
              {f.status === "yes" && <Check className="w-4 h-4 text-green-500" />}
              {f.status === "no" && <X className="w-4 h-4 text-red-500" />}
              {f.status === "neutral" && <Minus className="w-4 h-4 text-gray-400" />}
              <span className={`text-sm md:text-base font-bold ${isPrimary ? "text-white" : "text-black/80"}`}>
                {f.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {isPrimary && (
        <div className="p-8 md:p-10 pt-0">
          <button onClick={openModal} className="w-full btn-glow py-5 flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-widest">
            Стать партнером
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export const ComparisonBlock = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".comparison-col", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: container });

  const data = [
    {
      title: "Обычный найм",
      subtitle: "Безопасно, но тесно",
      features: [
        { label: "Доход", value: "Оклад + малый %", status: "neutral" as const },
        { label: "Потолок роста", value: "Жестко ограничен", status: "no" as const },
        { label: "Своя база", value: "Принадлежит компании", status: "no" as const },
        { label: "Свобода", value: "Зависимость от КУ", status: "no" as const },
      ],
    },
    {
      title: "Trader X",
      subtitle: "Платформа роста",
      isPrimary: true,
      features: [
        { label: "Доход", value: "% выше рынка", status: "yes" as const },
        { label: "Потолок роста", value: "Только ваши амбиции", status: "yes" as const },
        { label: "Своя база", value: "Ваш личный актив", status: "yes" as const },
        { label: "Свобода", value: "Автономия в сделках", status: "yes" as const },
      ],
    },
    {
      title: "Свой бизнес",
      subtitle: "Рискованно и сложно",
      features: [
        { label: "Доход", value: "Весь ваш (после налогов)", status: "yes" as const },
        { label: "Потолок роста", value: "Нет, но есть долги", status: "neutral" as const },
        { label: "Операционка", value: "100% на вас", status: "no" as const },
        { label: "Инфраструктура", value: "Нужно строить с нуля", status: "no" as const },
      ],
    },
  ];

  return (
    <section id="comparison" ref={container} className="relative bg-white overflow-hidden">
      <div className="section-container">
        <div className="mb-10 md:mb-12 text-left">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.9]">
            Выберите <br />
            <span className="italic text-primary">свой путь</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {data.map((col, i) => (
            <div key={i} className="comparison-col h-full">
              <ComparisonCol {...col} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-black/40 text-xs md:text-sm font-medium">
          Мы не предлагаем работу, мы предлагаем партнерскую среду для профессионалов.
        </div>
      </div>
    </section>
  );
};
