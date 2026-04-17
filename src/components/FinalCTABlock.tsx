"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FinalCTABlock = () => {
  const container = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { openModal } = useModal();

  useGSAP(() => {
    gsap.from(".cta-content > *", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: container });

  const argumentsList = [
    "Понятный первый шаг",
    "Живой контакт с командой",
    "Без сложного входа на старте",
  ];

  return (
    <section id="contact" ref={container} className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="relative z-10 section-container cta-content">
        <div className="flex flex-col items-start gap-8 md:gap-12">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-black leading-[0.95] max-w-5xl">
            Если вы понимаете, что ваша текущая модель <br />
            <span className="italic text-primary">уже тесна</span> - стоит посмотреть, <br />
            что дает Trader X
          </h2>

          <p className="text-lg md:text-xl text-accent/60 font-medium max-w-2xl">
            Оставьте заявку и получите доступ к знакомству с платформой.
          </p>

          <div className="flex flex-col items-start gap-10 mt-4">
            <button ref={buttonRef} onClick={openModal} className="magnetic-btn group relative px-12 py-6 bg-primary text-white rounded-full overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3 text-lg md:text-xl font-black uppercase tracking-widest">
                Получить доступ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-accent/60">
              <a href="tel:+79998887766" className="rounded-pill border border-black/10 px-5 py-3 hover:border-primary hover:text-primary transition-colors">
                +7 (999) 888 77 66
              </a>
              <a href="mailto:access@traderx.pro" className="rounded-pill border border-black/10 px-5 py-3 hover:border-primary hover:text-primary transition-colors">
                access@traderx.pro
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-y-4 gap-x-8 md:gap-x-12">
              {argumentsList.map((arg, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black/50">
                    {arg}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
