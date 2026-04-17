"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Target,
  Building,
  Rocket,
  Scale,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustCards = [
  {
    icon: Building,
    title: "За платформой стоит реальный бизнес, а не анонимы",
    desc: "Это не проект из воздуха и не абстрактный стартап без операционной базы. Мы опираемся на действующий рыночный контур.",
  },
  {
    icon: Target,
    title: "Платформа создается на понимании рынка металлопроката",
    desc: "Логику продукта определяют не теоретики, а люди, которые знают, как на самом деле устроены продажи, снабжение и сделки.",
  },
  {
    icon: ShieldCheck,
    title: "Важен не только продукт, но и контур доверия",
    desc: "Поставщики, деловая репутация, понятные контакты и прозрачная подача - это обязательная часть нашего проекта.",
  },
  {
    icon: Rocket,
    title: "Никакой подачи в стиле быстрые деньги",
    desc: "Trader X - это не история про легкий заработок. Это профессиональная платформа для тех, кто уже умеет работать в рынке.",
  },
  {
    icon: Scale,
    title: "Ваше решение должно опираться на факты",
    desc: "Мы отдельно раскрываем, кто стоит за проектом, на каком опыте он создан и почему этой системе можно доверять.",
  },
];

export const TrustProtocol = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trust-protocol-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".founders-box", {
      scrollTrigger: {
        trigger: ".founders-section-animated",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section id="trust-protocol" ref={container} className="bg-primary text-white overflow-hidden">
      <div className="py-28 md:py-36 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">
              Протокол доверия
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Самый важный вопрос здесь - <span className="text-accent underline decoration-accent/10">доверие</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Если вы много лет работаете в металле, у вас есть имя и репутация. Решение работать через новую платформу должно опираться не на обещания, а на реальные основания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className="trust-protocol-card p-12 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-700 group"
            >
              <div className="flex flex-col gap-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                  <card.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-sans font-bold leading-tight uppercase group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="trust-protocol-card p-12 bg-accent rounded-[2rem] flex flex-col justify-center items-center text-center group">
            <CheckCircle className="w-12 h-12 text-primary mb-8 animate-pulse" />
            <p className="text-primary font-sans font-black text-2xl uppercase tracking-tighter leading-none mb-4">
              Факты важнее слов
            </p>
            <p className="text-primary/70 text-xs font-mono font-bold uppercase tracking-widest leading-relaxed">
              Trader X выдерживает проверку на здравый смысл
            </p>
          </div>
        </div>
      </div>

      <div className="founders-section-animated py-28 md:py-36 px-6 sm:px-12 md:px-24 bg-white text-primary rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="founders-box flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">
                Основание платформы
              </span>
              <h3 className="text-3xl sm:text-5xl font-sans font-black tracking-tighter uppercase leading-[0.95]">
                Trader X создают люди, которые <span className="text-accent italic">понимают рынок</span> изнутри
              </h3>
            </div>
            <p className="text-lg text-primary/60 leading-relaxed max-w-xl">
              Платформа строится не как цифровой проект ради идеи, а как развитие реального опыта, накопленного в действующем бизнесе и работе с рынком металлопроката.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 py-8 border-t border-primary/5">
              <div className="flex flex-col gap-3">
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider">
                  Опыт основателей
                </h4>
                <p className="text-xs text-primary/50 leading-relaxed">
                  Люди, которые давно работают внутри рынка, знают его ограничения и требования к реальным продажам.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider">
                  Опора на базу
                </h4>
                <p className="text-xs text-primary/50 leading-relaxed">
                  В основе проекта - опыт действующей компании, понимание логистики, поставщиков и деловой среды.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-video rounded-[2rem] overflow-hidden border border-primary/5 shadow-2xl group">
            <Image
              src="/platform-visual.png"
              alt="Профессиональная рабочая среда и аналитика в металлотрейдинге"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-40 group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-10 left-10 p-8 bg-primary/90 backdrop-blur-xl rounded-[1.5rem] border border-white/10 max-w-xs transition-transform group-hover:translate-x-2">
              <p className="text-white text-sm font-sans font-bold uppercase tracking-widest leading-none mb-4">
                Взрослая коммерческая модель
              </p>
              <p className="text-white/60 text-[10px] leading-relaxed">
                Мы строим среду для профессионалов, которые уже умеют работать в рынке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
