"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StepItem = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="step-item relative flex flex-col gap-6 lg:w-1/3">
      <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center overflow-hidden">
        <span className="text-xl md:text-2xl font-black text-primary italic">0{number}</span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-black/40 leading-relaxed max-w-[320px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export const StepsBlock = () => {
  const container = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useGSAP(() => {
    gsap.from(".steps-header > *", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
    });

    gsap.fromTo(
      progressLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".steps-flow",
          start: "top 75%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );

    gsap.from(".step-item", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".steps-flow",
        start: "top 75%",
      },
    });
  }, { scope: container });

  const steps = [
    {
      number: "1",
      title: "Экспертное интервью",
      description: "Оставляете заявку. Обсуждаем ваш опыт, текущую базу и цели в рынке металлопроката.",
    },
    {
      number: "2",
      title: "Интеграция в среду",
      description: "Получаете доступ к платформе Trader X, лимитам отгрузок, складам и готовой логистике.",
    },
    {
      number: "3",
      title: "Максимум прибыли",
      description: "Переводите свои сделки на платформу и начинаете зарабатывать по модели прямого партнерства.",
    },
  ];

  return (
    <section id="how-it-works" ref={container} className="relative bg-[#F9FAFB] overflow-hidden">
      <div className="section-container relative z-10">
        <div className="steps-header max-w-4xl mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.9]">
            Всего 3 шага <br />
            <span className="italic text-primary">до новой модели</span>
          </h2>
        </div>

        <div className="steps-flow relative flex flex-col lg:flex-row gap-12 lg:gap-20 py-8">
          <div className="hidden lg:block absolute top-[2.4rem] left-0 w-full h-[2px] bg-black/[0.05] overflow-hidden rounded-full">
            <div ref={progressLineRef} className="h-full w-full bg-primary" />
          </div>

          {steps.map((step, i) => (
            <StepItem key={i} {...step} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-6 sm:p-8 md:p-10 bg-accent rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">Готовы обсудить ваш переход?</h4>
            <p className="text-sm md:text-base text-white/40">Обычно интервью занимает не более 30 минут.</p>
          </div>
          <button onClick={openModal} className="btn-glow px-12 py-5 font-black uppercase text-[10px] tracking-widest whitespace-nowrap">
            Записаться на встречу
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(0,121,242,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};
