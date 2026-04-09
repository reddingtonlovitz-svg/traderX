"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "Это вакансия?",
    answer: "Нет, это отдельный формат работы через платформу для самостоятельных профессионалов, которые хотят работать в более сильной модели, чем обычный найм.",
  },
  {
    question: "Кому подходит Trader X?",
    answer: "Сильным продажникам рынка металлопроката с опытом, базой и пониманием того, как устроены сделки. Тем, кто хочет большего дохода и самостоятельности.",
  },
  {
    question: "Нужно ли открывать свою компанию?",
    answer: "Нет, в этом и смысл. Вы используете готовую инфраструктуру, снабжение, логистику и юридический контур Trader X, чтобы сосредоточиться на продажах.",
  },
  {
    question: "Что я получу после заявки?",
    answer: "Мы свяжемся с вами, проведем короткое знакомство и покажем, как именно устроена модель изнутри. После этого вы сможете получить доступ к системе.",
  },
  {
    question: "Почему вам можно доверять?",
    answer: "За проектом стоит реальная операционная база, опыт в рынке металлопроката и понятная деловая логика. Мы строим профессиональную среду для профессионалов.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="faq" ref={container} className="py-40 px-6 md:px-12 bg-offwhite flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="mb-24 flex flex-col items-center gap-6">
           <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-accent" />
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">INFO</span>
              <div className="w-10 h-1 bg-accent" />
           </div>
           <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter text-primary uppercase leading-none text-center">
             Частые вопросы
           </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq-item group rounded-huge border transition-all duration-700 overflow-hidden ${
                openIndex === i ? "bg-paper border-accent/20" : "bg-paper/50 border-primary/5 hover:border-accent/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-10 px-8 sm:px-12 flex items-center justify-between text-left group"
              >
                <span className={`text-xl sm:text-2xl font-sans font-black uppercase tracking-tight transition-colors duration-500 ${openIndex === i ? "text-accent" : "text-primary/80"}`}>
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === i ? "bg-accent text-primary rotate-180" : "bg-primary/5 text-accent"
                }`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div
                className={`transition-all duration-700 ease-in-out ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="px-8 sm:px-12 pb-12 text-lg text-primary/60 font-sans leading-relaxed flex flex-col gap-6">
                  <div className="h-px w-full bg-primary/5" />
                  <p>{item.answer}</p>
                  <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest font-bold mt-2">
                     <ArrowRight className="w-3 h-3" />
                     Trader X Protocol
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

