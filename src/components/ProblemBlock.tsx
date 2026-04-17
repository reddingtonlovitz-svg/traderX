"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCheck, TrendingUp, ShieldAlert, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProblemBlock = () => {
  const container = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useGSAP(() => {
    if (hasAnimated) return;

    gsap.from(".problem-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        onEnter: () => setHasAnimated(true),
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all",
    });
  }, { scope: container });

  const problems = [
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Клиенты держатся на вас",
      desc: "Они звонят вам, возвращаются к вам и доверяют именно вам. Вы - главный актив ваших сделок.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Ваш вклад больше, чем ваш процент",
      desc: "Вы создаете результат, но работаете внутри чужой модели. Ваша реальная ценность не отражается в доходе.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      title: "Часть сделок теряется не из-за рынка",
      desc: "А из-за ограничений компании, в которой вы сейчас работаете. Лимитов, условий или отсутствия ресурса.",
    },
  ];

  return (
    <section id="problem" ref={container} className="relative bg-[#F9FAFB] overflow-hidden">
      <div className="section-container text-accent">
        <div className="max-w-4xl mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1]">
            Вы ведете клиентов. Вы двигаете сделки. Но экономика часто остается <span className="italic text-primary">не на вашей стороне.</span>
          </h2>
        </div>

        <div className="problem-grid grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {problems.map((problem, i) => (
            <div key={i} className="problem-card bg-white p-6 md:p-8 rounded-[2.5rem] border border-black/[0.03] transition-all hover:-translate-y-1 h-full">
              <div className="mb-6 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center transition-colors">
                {problem.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight leading-tight text-black">
                {problem.title}
              </h3>
              <p className="text-sm md:text-base text-accent/60 leading-relaxed font-medium">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-10 border-t border-black/[0.1]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="text-lg md:text-xl font-bold opacity-80 max-w-2xl italic leading-relaxed">
              Если у вас есть клиенты, опыт и доверие рынка, логично хотеть модель, в которой это работает на вас сильнее.
            </p>
            <a href="#comparison" className="flex items-center gap-3 text-primary font-black uppercase text-[10px] tracking-widest group">
              Узнать больше о модели
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
