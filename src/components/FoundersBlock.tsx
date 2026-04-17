"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useModal } from "@/context/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SocialIcon = ({ type }: { type: "tg" | "tc" | "vk" }) => {
  const icons = {
    tg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
    tc: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    vk: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.162 18.994c-6.098 0-9.57-4.172-9.714-11.109h3.01c.107 5.106 2.355 7.269 4.138 7.715V7.885h2.836v4.406c1.734-.183 3.582-2.188 4.197-4.406h2.834a9.053 9.053 0 0 1-3.837 5.568 9.38 9.38 0 0 1 4.544 5.541h-3.116c-.61-1.9-2.138-3.374-4.122-3.572v3.572h-.573z" />
      </svg>
    ),
  };
  return icons[type];
};

const FounderCard = ({ image, name, title, bio }: { image: string; name: string; title: string; bio: string }) => {
  const { openModal } = useModal();
  return (
    <div className="founder-card group relative bg-white border border-black/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-black/5 flex flex-col h-full">
      <div className="relative aspect-[1/1] overflow-hidden bg-gray-100">
        <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary mb-2 opacity-80">Founding Partner</div>
          <h3 className="text-2xl md:text-3xl font-black italic text-white leading-[1.1] drop-shadow-sm">
            {name.split(" ").map((part, i) => (
              <span key={i} className="block">{part}</span>
            ))}
          </h3>
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="text-[10px] uppercase font-black tracking-widest text-primary italic leading-tight mb-4 min-h-[3rem] flex items-center">
          {title}
        </div>
        <div className="mb-6 flex-grow">
          <p className="text-sm text-accent/70 leading-relaxed font-medium">
            {bio}
          </p>
        </div>
        <div className="mt-auto flex items-center gap-4 pt-6 border-t border-black/5">
          <button onClick={openModal} className="p-3.5 rounded-full border border-black/5 hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"><SocialIcon type="tg" /></button>
          <button onClick={openModal} className="p-3.5 rounded-full border border-black/5 hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"><SocialIcon type="tc" /></button>
          <button onClick={openModal} className="p-3.5 rounded-full border border-black/5 hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"><SocialIcon type="vk" /></button>
        </div>
      </div>
    </div>
  );
};

export const FoundersBlock = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Unified enter animation for all block components
    gsap.from([".manifesto-content > *", ".founder-card"], {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: container });

  const founders = [
    {
      name: "Джураев Дмитрий",
      title: "Генеральный директор ООО \"Металлобаза Волхонка\"",
      bio: "Практический опыт в металлопрокате, понимание логики продаж, клиентской работы и реального устройства рынка.",
      image: "/founder_portrait_1_1775810974494.png",
    },
    {
      name: "Коломиец Артур",
      title: "Генеральный директор ООО \"МК Групп\"",
      bio: "Технологический подход к созданию платформ, системность, цифровая логика продукта и превращение бизнес-идеи в рабочий инструмент.",
      image: "/founder_portrait_2_1775810989885.png",
    },
  ];

  return (
    <section id="company" ref={container} className="relative bg-[#F9FAFB] overflow-hidden py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Manifesto First (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
            <div className="manifesto-content flex flex-col gap-10">
              <div className="relative">
                <Quote className="absolute -top-6 -left-8 w-16 h-16 text-primary/5 -rotate-12" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight">
                  Trader X создан на стыке <br />
                  <span className="italic text-primary">реального опыта</span> и <span className="italic text-[#22C55E]">технологий</span>
                </h2>
              </div>

              <div className="flex flex-col gap-8 text-accent/60 font-medium leading-relaxed">
                <p>
                  Trader X появился не как абстрактная digital-идея, а как продукт, выросший из реального опыта работы в металлопрокате и понимания того, как должна выглядеть современная платформа для сильных продажников рынка.
                </p>

                <div className="flex flex-col gap-4 pt-4">
                  {[
                    "Репутация в рынке",
                    "Сильный деловой фундамент",
                    "Технологии для роста",
                  ].map((teaser, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm md:text-base font-black uppercase tracking-tight text-black">{teaser}</span>
                    </div>
                  ))}
                </div>

                <p className="text-primary font-black uppercase text-xs md:text-sm tracking-[0.05em] leading-relaxed mt-6">
                  Наш приоритет - доверие, понятельная модель и реальная опора для роста.
                </p>
              </div>
            </div>
          </div>

          {/* Founders Second (Right on Desktop, Bottom on Mobile) */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-stretch">
              {founders.map((founder, i) => (
                <FounderCard key={i} {...founder} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full translate-x-1/3 translate-y-1/3 blur-[120px] pointer-events-none" />
    </section>
  );
};
