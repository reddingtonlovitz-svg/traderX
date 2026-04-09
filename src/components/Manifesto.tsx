"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X, ArrowRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const Manifesto = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        }
      });

      tl.from(".manifesto-label", { opacity: 0, y: 20 })
        .from(".manifesto-title", { opacity: 0, y: 40 }, "-=0.3")
        .from(".manifesto-text", { opacity: 0, y: 20 }, "-=0.2")
        .from(".comparison-item", { opacity: 0, x: -20, stagger: 0.1 }, "-=0.2")
        .from(".manifesto-image", { opacity: 0, scale: 1.1, duration: 1.5 }, 0);

      // SplitText-style reveal for the massive focus statement
      gsap.from(".focus-statement span", {
        scrollTrigger: {
          trigger: ".focus-statement",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 px-6 sm:px-12 md:px-24 bg-primary text-paper overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1517088455822-26c507c375c3?q=80&w=2000" 
          alt="Concrete Texture" 
          fill 
          className="object-cover grayscale manifesto-image"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Manifesto Text */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="manifesto-label font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Новый карьерный путь</span>
              <h2 className="manifesto-title text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-[0.9]">
                Есть и третий путь: не оставаться в старой модели и не строить <span className="text-accent italic">все с нуля</span>
              </h2>
              <p className="manifesto-text text-lg text-paper/60 max-w-xl leading-relaxed">
                Trader X создан для тех, кто хочет перейти из роли наемного менеджера в более сильную и самостоятельную модель работы, сохранив доступ к реальной инфраструктуре и деловой базе.
              </p>
            </div>

            <div className="flex flex-col gap-10 py-10 border-y border-paper/10">
              <p className="text-sm font-medium text-paper/80 leading-relaxed uppercase tracking-wider">
                Вы уже умеете продавать. Вы знаете клиентов, рынок, типичные запросы и цену ошибки. Главный вопрос не в том, способны ли вы работать сильнее. 
                <span className="block mt-4 text-accent font-bold">Главный вопрос: есть ли у вас платформа, на которой это можно делать?</span>
              </p>
              
              <div className="flex flex-col gap-4 italic font-serif text-2xl text-paper/40">
                <p>Не &laquo;еще одна CRM&raquo;.</p>
                <p>Не &laquo;очередная вакансия&raquo;.</p>
                <p className="text-paper">А рабочая среда для профессионалов.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Comparison Table Style */}
          <div className="flex flex-col gap-12 lg:pt-24">
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Traditional Model */}
              <div className="flex flex-col gap-8 p-10 bg-paper/5 border border-paper/10 rounded-huge group hover:bg-paper/10 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-accent" />
                  <h4 className="font-sans font-bold uppercase tracking-widest text-sm">Обычная модель</h4>
                </div>
                <ul className="flex flex-col gap-4">
                  {[
                    "Работа внутри чужой системы",
                    "Ограничены правилами",
                    "Не управляете экономикой базы",
                    "Зависите от возможностей компании"
                  ].map((item, i) => (
                    <li key={i} className="comparison-item flex gap-3 text-[11px] text-paper/50 font-medium leading-tight">
                      <span className="text-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trader X Model */}
              <div className="flex flex-col gap-8 p-10 bg-paper text-primary rounded-huge border border-accent shadow-2xl shadow-accent/20 group hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <h4 className="font-sans font-bold uppercase tracking-widest text-sm">Модель Trader X</h4>
                </div>
                <ul className="flex flex-col gap-4">
                  {[
                    "Работа через готовую платформу",
                    "Использование инфраструктуры",
                    "Сильная основа для своих клиентов",
                    "Рост веса вашего вклада"
                  ].map((item, i) => (
                    <li key={i} className="comparison-item flex gap-3 text-[11px] font-bold leading-tight">
                      <span className="text-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4">
               <button className="btn-magnetic group py-4 px-8 text-[11px] flex items-center gap-3">
                  Обсудить модель
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </div>

        {/* Massive Focus Statement at the bottom of the section */}
        <div className="mt-40 focus-statement flex flex-col gap-4 border-t border-paper/10 pt-20">
          <p className="font-sans text-paper/40 text-sm uppercase tracking-[0.3em]">Наш манифест</p>
          <p className="text-4xl sm:text-6xl md:text-8xl font-serif italic text-paper/90 leading-[1.1]">
            {"Большинство фокусируется на жестких рамках найма.".split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em]">{word}</span>
            ))}
          </p>
          <p className="text-4xl sm:text-6xl md:text-8xl font-serif italic text-accent leading-[1.1] text-right mt-4">
            {"Мы — на свободе и доступе к инфраструктуре.".split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em]">{word}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
