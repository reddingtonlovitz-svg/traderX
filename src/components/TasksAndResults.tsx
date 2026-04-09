"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, TrendingUp, ShieldAlert, BarChart, LayoutGrid, Users2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tasks = [
  {
    icon: TrendingUp,
    title: "Зарабатывать на своей базе в более сильной модели",
    desc: "Если у вас есть клиенты, связи и опыт, логично хотеть больше контроля над тем, как это превращается в ваш доход.",
  },
  {
    icon: ShieldAlert,
    title: "Не терять клиентов из-за ограничений системы",
    desc: "Когда запрос клиента упирается не в рынок, а в слабые возможности компании, нужен другой рабочий контур.",
  },
  {
    icon: LayoutGrid,
    title: "Не запускать бизнес с нуля ради нового формата",
    desc: "Своё юрлицо, операционка и процессы — слишком тяжелый старт для человека, который хочет просто продавать сильнее.",
  },
  {
    icon: Target,
    title: "Монетизировать опыт, а не начинать заново",
    desc: "Если вы уже были в рынке и знаете, как устроены сделки, нет смысла возвращаться в нулевую точку.",
  },
  {
    icon: BarChart,
    title: "Работать в системе, а не хаотично «на коленке»",
    desc: "Даже сильные самостоятельные продажи требуют среды: прозрачности, структуры и управляемости.",
  },
  {
    icon: Users2,
    title: "Перейти в следующую карьерную роль в рынке",
    desc: "Не просто «быть менеджером», а выйти на новый уровень самостоятельности, ответственности и дохода.",
  },
];

export const TasksAndResults = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".result-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section id="задачи" ref={container} className="py-32 px-6 md:px-12 bg-offwhite flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">Результат</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tighter text-primary uppercase leading-[0.9] mb-8">
            Trader X нужен не ради интерфейса. <span className="text-accent underline decoration-accent/10">Он нужен ради результата</span>
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl leading-relaxed">
            Платформа закрывает те задачи, которые сильный продажник рынка металлопроката рано или поздно начинает чувствовать особенно остро.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 py-12 border-t border-primary/5">
          {tasks.map((task, i) => (
            <div key={i} className="result-card flex flex-col gap-8 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <task.icon className="w-5 h-5 text-accent group-hover:text-offwhite transition-colors" />
                </div>
                <span className="font-mono text-[10px] text-primary/20 tracking-widest font-bold">TASK_{i + 1}</span>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-sans font-bold text-primary tracking-tight leading-tight uppercase group-hover:text-accent transition-colors duration-300">
                  {task.title}
                </h4>
                <div className="h-px w-10 bg-accent/20 group-hover:w-full transition-all duration-700" />
                <p className="text-sm text-primary/60 leading-relaxed font-medium">
                  {task.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
