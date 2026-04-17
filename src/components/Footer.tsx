"use client";

import React from "react";
import { ArrowUpRight, Send, MessageSquare, Share2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useModal();

  const menuMain = [
    { name: "О платформе", href: "#about" },
    { name: "Преимущества", href: "#benefits" },
    { name: "Сравнение", href: "#comparison" },
    { name: "Безопасность", href: "#trust" },
  ];

  const menuAbout = [
    { name: "О компании", href: "#company" },
    { name: "Основатели", href: "#company" },
    { name: "Вопросы и ответы", href: "#faq" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <footer id="footer" className="bg-[#0D0D12] text-white pt-24 md:pt-40 pb-12 px-6 md:px-12 rounded-t-[4rem] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8 items-start mb-20 md:mb-32">
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-black tracking-tighter text-white">
                TRADER <span className="text-primary italic">X</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold">
                Платформа для роста
              </span>
            </div>

            <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed font-medium">
              Первая экосистема для профессиональных трейдеров металлопроката. Создаем опору для вашего масштабирования.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">Основное</p>
            <nav className="flex flex-col gap-5">
              {menuMain.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-white/40 hover:text-white transition-all flex items-center gap-2 group">
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">О проекте</p>
            <nav className="flex flex-col gap-5">
              {menuAbout.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-white/40 hover:text-white transition-all flex items-center gap-2 group">
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">Связь</p>
            <div className="flex flex-col gap-8">
              <a href="tel:+79998887766" className="group block">
                <span className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Телефон компании</span>
                <span className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">+7 (999) 888 77 66</span>
              </a>
              <a href="mailto:access@traderx.pro" className="group block">
                <span className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Электронная почта</span>
                <span className="text-xl font-bold text-white group-hover:text-primary transition-colors border-b border-white/5 pb-1">access@traderx.pro</span>
              </a>

              <div className="flex items-center gap-4 mt-2">
                <button onClick={openModal} aria-label="Написать на email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Send className="w-4 h-4 text-white/40 group-hover:text-white" />
                </button>
                <button onClick={openModal} aria-label="Позвонить" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <MessageSquare className="w-4 h-4 text-white/40 group-hover:text-white" />
                </button>
                <button onClick={openModal} aria-label="Оставить заявку" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Share2 className="w-4 h-4 text-white/40 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
            <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#trust" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Правовая информация</a>
            <a href="#faq" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Файлы cookie</a>
          </div>

          <div className="flex flex-col md:items-end items-center gap-2">
            <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.3em]">
              © {currentYear} TRADER X
            </p>
            <p className="text-[8px] font-mono text-white/5 uppercase tracking-[0.2em]">
              Сделано с фокусом на результат
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden flex justify-center opacity-[0.03]">
        <span className="text-[20vw] font-black text-white uppercase tracking-tighter whitespace-nowrap leading-none">
          TRADER X
        </span>
      </div>
    </footer>
  );
};
