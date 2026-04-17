"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { type LucideIcon, Zap, Users2, Truck, LayoutGrid, Clock, MousePointer2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const managerImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Shuffler = () => {
  const items = [
    { label: "ПРОВЕРКА СДЕЛКИ", color: "text-amber-500", bg: "bg-amber-50" },
    { label: "ОДОБРЕНИЕ ВЫПЛАТЫ", color: "text-primary", bg: "bg-primary/5" },
    { label: "СРЕДСТВА ОТПРАВЛЕНЫ", color: "text-green-500", bg: "bg-green-50" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative h-20 w-full overflow-hidden rounded-2xl bg-gray-50 border border-black/5 p-4">
      {items.map((item, i) => (
        <div key={i} className={`absolute inset-0 flex items-center justify-between px-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${i === currentIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
          <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.label}</span>
          <div className={`w-2 h-2 rounded-full ${item.bg.replace("/5", "")} animate-pulse`} />
        </div>
      ))}
    </div>
  );
};

const Telemetry = () => {
  const [text, setText] = useState("");
  const fullText = "> ПОДКЛЮЧЕНО К СЕТИ... ДОСТУП РАЗРЕШЕН. НОВАЯ СДЕЛКА: 45т Арматура А500С. МАРЖА: +12.4%. СТАТУС: В ПУТИ.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i += 1;
      if (i > fullText.length) i = 0;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-24 bg-accent rounded-2xl p-4 font-mono text-[10px] text-primary leading-relaxed overflow-hidden flex flex-col gap-1">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="opacity-50 text-[8px] uppercase tracking-widest">Live Telemetry</span>
      </div>
      <p className="break-all">
        {text}
        <span className="inline-block w-1.5 h-3 bg-primary ml-1 animate-none opacity-50" />
      </p>
    </div>
  );
};

const Scheduler = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cursorRef.current, { x: 40, y: 20, duration: 1.5, ease: "power2.inOut" })
      .to(cursorRef.current, { scale: 0.8, duration: 0.2 })
      .to(".grid-cell-target", { backgroundColor: "rgba(13, 121, 242, 0.2)", duration: 0.3 })
      .to(cursorRef.current, { scale: 1, duration: 0.2 })
      .to(cursorRef.current, { x: 100, y: 60, duration: 1.5, delay: 0.5, ease: "power2.inOut" })
      .to(".grid-save-btn", { backgroundColor: "#0D79F2", color: "#fff", duration: 0.3 })
      .to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 1 })
      .set(cursorRef.current, { x: 0, y: 0, opacity: 1 })
      .set(".grid-cell-target", { backgroundColor: "transparent" })
      .set(".grid-save-btn", { backgroundColor: "transparent", color: "rgba(0,0,0,0.4)" });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-32 bg-gray-50 rounded-2xl border border-black/5 p-4 overflow-hidden">
      <div className="grid grid-cols-7 gap-1 h-16 mb-4">
        {[...Array(14)].map((_, i) => (
          <div key={i} className={`rounded-sm border border-black/[0.03] ${i === 4 ? "grid-cell-target" : ""}`} />
        ))}
      </div>
      <div className="grid-save-btn w-full py-2 border border-black/10 rounded-lg text-[8px] font-black uppercase tracking-widest text-black/40 text-center">
        Подтвердить график
      </div>
      <div ref={cursorRef} className="absolute top-4 left-4 pointer-events-none z-20">
        <MousePointer2 className="w-4 h-4 text-primary fill-primary" />
      </div>
    </div>
  );
};

type EfficiencyCardProps = {
  title?: string;
  desc?: string;
  icon?: LucideIcon;
  className?: string;
  variant?: "white" | "dark" | "gray" | "primary" | "image";
  children?: React.ReactNode;
};

const EfficiencyCard = ({ title, desc, icon: Icon, className = "", variant = "white", children }: EfficiencyCardProps) => {
  const bgClasses = {
    white: "bg-white text-black border-black/10",
    dark: "bg-[#0A0A0F] text-white border-white/5",
    gray: "bg-[#F3F4F6] text-black border-black/5",
    primary: "bg-primary text-white border-white/10",
    image: "p-0 overflow-hidden border-none bg-transparent",
  };

  return (
    <div className={`efficiency-card group relative p-5 sm:p-6 md:p-8 rounded-[2.5rem] border transition-all duration-500 ${bgClasses[variant]} ${className}`}>
      {variant !== "image" && (
        <div className="relative z-10 h-full flex flex-col">
          {Icon && (
            <div className={`mb-6 p-4 w-fit rounded-2xl transition-all duration-500 ${variant === "dark" || variant === "primary" ? "bg-white/10 text-white" : "bg-primary/5 text-primary"}`}>
              <Icon className="w-6 h-6" />
            </div>
          )}

          {title && (
            <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-4 ${variant === "dark" || variant === "primary" ? "text-white" : "text-black"}`}>
              {title}
            </h3>
          )}

          {desc && (
            <p className={`text-sm md:text-base font-bold leading-relaxed mb-6 ${variant === "dark" || variant === "primary" ? "text-white/60" : "text-black/70"}`}>
              {desc}
            </p>
          )}

          {children && <div className="mt-auto">{children}</div>}
        </div>
      )}

      {variant === "image" && children}
    </div>
  );
};

export const EfficiencyBlock = () => {
  const container = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useGSAP(() => {
    gsap.from(".efficiency-card", {
      y: 40,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    gsap.from(".header-reveal", {
      y: 20,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
    });
  }, { scope: container });

  return (
    <section className="relative bg-[#F9F9FB] overflow-hidden">
      <div ref={container} className="section-container">
        <div className="max-w-4xl mb-12 md:mb-16 text-black text-left">
          <span className="header-reveal text-primary font-bold tracking-[0.3em] uppercase mb-4 block text-[10px]">Ваша эффективность</span>
          <h2 className="header-reveal text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-8">
            Убираем лишнее <br />
            <span className="italic text-primary">между вами и результатом</span>
          </h2>
          <p className="header-reveal text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-2xl">
            Trader X берет на себя рутину, процессы и операционные вопросы, чтобы вы фокусировались на клиентах, сделках и доходе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          <EfficiencyCard variant="image" className="md:col-span-4 overflow-hidden">
            <div className="relative w-full h-full min-h-[400px] md:min-h-[auto] overflow-hidden rounded-[2.5rem] group">
              <Image src={managerImage} alt="Интерфейс платформы Trader X" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-white/60 font-black uppercase tracking-[0.2em] text-[9px]">Интерфейс платформы</span>
                </div>
                <h3 className="text-xl font-black uppercase text-white mb-2">Trader X OS</h3>
                <p className="text-sm font-bold text-white/60 leading-relaxed">
                  Интуитивная среда для управления сделками и мониторинга рынка в реальном времени.
                </p>
              </div>
            </div>
          </EfficiencyCard>

          <EfficiencyCard variant="white" icon={Users2} title="Комьюнити трейдеров" desc="Профессиональная среда, где рынок понимают так же, как вы" className="md:col-span-4">
            <Telemetry />
          </EfficiencyCard>

          <EfficiencyCard variant="white" icon={Truck} title="Логистика под ключ" desc="Поставка и отгрузка не превращаются в постоянный головняк" className="md:col-span-4">
            <Scheduler />
          </EfficiencyCard>

          <EfficiencyCard variant="gray" icon={Zap} title="Быстрый вывод денег" desc="Заработанное не должно зависать в долгих и непонятных процессах" className="md:col-span-4 shadow-sm">
            <Shuffler />
          </EfficiencyCard>

          <EfficiencyCard variant="gray" icon={LayoutGrid} title="Одно окно для работы" desc="Клиенты, сделки и процессы собраны в одной системе" className="md:col-span-4" />

          <EfficiencyCard variant="primary" icon={Clock} title="Поддержка без хаоса" desc="Меньше ручной рутины, лишних согласований и операционной нагрузки" className="md:col-span-4">
            <button onClick={openModal} className="w-full bg-white/10 p-3 rounded-xl border border-white/10 text-[10px] uppercase font-black tracking-widest text-center mt-auto hover:bg-white/20 transition-colors">
              Начать работу
            </button>
          </EfficiencyCard>
        </div>
      </div>
    </section>
  );
};
