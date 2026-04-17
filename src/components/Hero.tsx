"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const FluidWords = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = [
    "Клиенты", "Сделки", "Доход", "Маржа", "База", "Опора", "Свобода",
    "Рост", "Контроль", "Доверие", "Партнерство", "Развитие", "Результат", "Система", "Опыт",
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = gsap.utils.toArray<HTMLElement>(".fluid-item");
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const focusRadius = 120;

    items.forEach((item) => {
      const setRandomPath = () => {
        const side = Math.random() > 0.5 ? 1 : -1;
        const startX = centerX + side * (200 + Math.random() * 100);
        const startY = centerY + (Math.random() - 0.5) * 400;
        const endX = centerX - side * (200 + Math.random() * 100);
        const endY = centerY + (Math.random() - 0.5) * 400;

        gsap.fromTo(
          item,
          { x: startX, y: startY, opacity: 0 },
          {
            x: endX,
            y: endY,
            opacity: 0.8,
            duration: 8 + Math.random() * 10,
            ease: "none",
            onUpdate: () => {
              const curX = gsap.getProperty(item, "x") as number;
              const curY = gsap.getProperty(item, "y") as number;
              const dx = curX - centerX;
              const dy = curY - centerY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const focus = Math.max(0, 1 - distance / focusRadius);

              gsap.set(item, {
                color: focus > 0.3 ? "#22C55E" : "rgba(255,255,255,0.2)",
                scale: 0.8 + focus * 0.4,
                filter: `blur(${Math.max(0, 2 - focus * 4)}px)`,
                zIndex: focus > 0.5 ? 50 : 20,
                fontWeight: focus > 0.5 ? "900" : "500",
              });
            },
            onComplete: setRandomPath,
          }
        );
      };

      setRandomPath();
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-visible">
      <div className="pulse-wave absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/40 blur-[90px] rounded-full pointer-events-none z-0" />
      <div className="pulse-wave absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="logo-hub-inner w-24 h-24 md:w-40 md:h-40 rounded-full bg-primary/10 backdrop-blur-3xl border border-primary/20 flex items-center justify-center shadow-[0_0_60px_rgba(13,121,242,0.2)]">
          <span className="text-sm md:text-2xl font-black tracking-tighter text-white uppercase leading-none whitespace-nowrap px-4">
            TRADER <span className="text-primary italic">X</span>
          </span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-30">
        {words.map((word, i) => (
          <div
            key={`${word}-${i}`}
            className="fluid-item absolute text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap will-change-transform"
            style={{ top: 0, left: 0 }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.8 } });
    tl.from(".hero-content > *", { y: 20, opacity: 0, stagger: 0.1, delay: 0.2 }).from(
      ".hero-animation",
      { scale: 0.98, opacity: 0, duration: 1.2 },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative min-h-[100svh] w-full flex items-center overflow-hidden pt-24 md:pt-28 pb-12 bg-accent">
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="hero-content lg:col-span-8 flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] xl:text-[2.8rem] text-white font-medium leading-[1.2]">
              <span className="font-black uppercase tracking-tight">TRADER <span className="text-primary italic">X</span></span> - платформа для металлотрейдеров, где <span className="italic text-primary">ваши</span> клиенты могут приносить вам <span className="italic text-green-500">больше</span>, чем процент в найме
            </h2>
            <p className="text-[11px] md:text-sm lg:text-base text-white/70 max-w-2xl leading-relaxed">
              Работайте через готовую инфраструктуру действующего бизнеса и зарабатывайте на своей клиентской базе в более сильной модели.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button onClick={openModal} className="btn-glow group py-4.5 md:py-5 px-12 md:px-14 font-black flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(13,121,242,0.2)]">
              Получить доступ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={openModal} className="font-bold text-white/40 hover:text-white transition-all flex items-center gap-2 px-10 py-4.5 md:py-5 border border-white/5 hover:border-white/20 rounded-pill uppercase text-[9px] md:text-[10px] tracking-[0.2em]">
              Связаться с нами
            </button>
          </div>
          <div className="flex flex-row flex-nowrap items-center gap-3 mt-4 overflow-x-auto pb-1">
            {["Свои клиенты", "Готовая инфраструктура", "Реальный бизнес", "Понятный старт"].map((text, i) => (
              <div key={i} className="px-5 py-2.5 bg-white/10 border border-white/10 rounded-pill flex items-center gap-2 shrink-0">
                <div className="w-1 h-1 rounded-full bg-primary/60" />
                <span className="text-[8px] md:text-[9.5px] text-white/70 font-black uppercase tracking-[0.05em]">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-animation lg:col-span-4 w-full flex justify-center items-center">
          <FluidWords />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(13,121,242,0.04)_0%,transparent_80%)] pointer-events-none" />
    </section>
  );
};
