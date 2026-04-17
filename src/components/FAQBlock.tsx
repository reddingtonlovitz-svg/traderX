"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";

type FAQEntry = {
  question: string;
  answer: string;
};

const faqData: FAQEntry[] = [
  {
    question: "Что такое Trader X?",
    answer: "Trader X - это платформа для сильных продажников рынка металлопроката, которые хотят работать в более самостоятельной и выгодной модели. Она объединяет в одном окне работу с клиентами, сделками и процессами, а также дает опору на действующий бизнес, инфраструктуру и понятную систему.",
  },
  {
    question: "Это вакансия или другой формат работы?",
    answer: "Trader X - это не классическая вакансия в привычном понимании. Это отдельный формат работы через платформу для тех, кто хочет выйти за рамки обычного найма, но при этом не готов запускать всю инфраструктуру бизнеса с нуля.",
  },
  {
    question: "Кому в первую очередь подходит Trader X?",
    answer: "В первую очередь платформа подходит действующим менеджерам по продажам металлопроката, у которых уже есть опыт, клиентская база и понимание рынка. Также формат может быть интересен бывшим продажникам металла, сильным специалистам из смежных B2B-направлений и тем, кто хочет расти в более самостоятельной модели.",
  },
  {
    question: "Нужно ли открывать свою компанию, ИП или самозанятость?",
    answer: "Смысл Trader X как раз в том, чтобы не заставлять человека собирать все с нуля самостоятельно. Платформа создается как более простой путь входа в новую модель работы - с опорой на действующий бизнес, инфраструктуру и понятный рабочий контур. Конкретный формат подключения обсуждается после заявки.",
  },
  {
    question: "Что я получаю после заявки на доступ?",
    answer: "После заявки с вами связывается команда Trader X, чтобы познакомить вас с форматом работы, понять ваш опыт, ответить на вопросы и показать, как устроена платформа. Это первый шаг, который помогает понять, подходит ли вам модель в принципе.",
  },
  {
    question: "Что именно дает мне платформа в ежедневной работе?",
    answer: "Trader X помогает работать проще и системнее: клиенты, сделки и процессы собраны в одном окне, меньше хаоса в коммуникациях, меньше ручной рутины, понятнее следующий шаг по каждому клиенту. Это дает больше времени на главное - продажи, переговоры и результат.",
  },
  {
    question: "Кто берет на себя логистику и вопросы по поставке?",
    answer: "Одна из сильных сторон платформы - логистика под ключ. Trader X создается так, чтобы снять с трейдера постоянный головняк, связанный с поставкой и организацией отгрузки. Это позволяет не распыляться на операционные мелочи и держать фокус на клиенте и сделке.",
  },
  {
    question: "Как происходит вывод денег и почему это важно?",
    answer: "Для сильного трейдера важны не только сделки, но и скорость доступа к заработанному. Поэтому в Trader X отдельный акцент сделан на понятной и удобной логике вывода денег. Это один из базовых факторов доверия к платформе и комфорта в ежедневной работе.",
  },
];

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQEntry; isOpen: boolean; onToggle: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  return (
    <div className={`faq-item border-b border-black/5 transition-all duration-300 ${isOpen ? "pb-6" : "pb-0"}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between py-6 text-left group gap-8">
        <span className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors duration-300 ${isOpen ? "text-primary" : "text-black group-hover:text-primary"}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary border-primary text-white rotate-180" : "bg-white text-black"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="text-base md:text-lg text-accent/60 font-medium leading-relaxed max-w-3xl pr-12">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export const FAQBlock = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef<HTMLDivElement>(null);

  return (
    <section id="faq" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(13,121,242,0.05),transparent_40%)]" />

      <div ref={container} className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-8">
              Часто задаваемые <br />
              <span className="italic text-primary">вопросы</span>
            </h2>
            <p className="text-lg text-accent/60 font-medium max-w-sm">
              Короткие ответы на то, что чаще всего интересует будущих резидентов платформы.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-black/5">
              {faqData.map((item, i) => (
                <FAQItem key={i} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
