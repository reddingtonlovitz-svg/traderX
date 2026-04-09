"use client";

import React from "react";
import { Phone, Mail, Instagram, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-paper pt-40 pb-12 px-6 md:px-12 rounded-t-[4rem] relative overflow-hidden">
      {/* Structural Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-6 h-full">
           {Array.from({length: 6}).map((_, i) => (
             <div key={i} className="border-r border-paper h-full" />
           ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col gap-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start">
          {/* Brand Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-black text-4xl tracking-tighter text-paper uppercase leading-none">
                TRADER <span className="text-accent underline decoration-accent/20">X</span>
              </span>
              <p className="text-paper/40 font-mono text-[10px] uppercase tracking-widest font-bold mt-2">Platform for Growth</p>
            </div>
            <p className="text-paper/60 leading-relaxed font-sans text-sm max-w-xs">
              Платформа для новой модели работы в рынке металлопроката. Больше свободы, выше доход, взрослая инфраструктура.
            </p>
            <div className="flex items-center gap-4 py-4 border-y border-paper/10 w-fit">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="font-mono text-[8px] font-black uppercase tracking-[0.3em] text-paper/30">system_operational_2.4.0</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-10">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-accent">Меню</h4>
            <nav className="flex flex-col gap-5">
              {[
                { name: "О платформе", href: "#о-платформе-детали" },
                { name: "Как это работает", href: "#как-это-работает" },
                { name: "Преимущества", href: "#преимущества" },
                { name: "Безопасность", href: "#безопасность" },
                { name: "Финансы", href: "#финансы" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="text-xs font-bold text-paper/40 hover:text-accent transition-all flex items-center gap-2 group tracking-widest uppercase">
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Auth */}
          <div className="flex flex-col gap-10">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-accent">Платформа</h4>
            <div className="flex flex-col gap-4">
               <button className="flex items-center gap-3 text-xs font-bold text-paper/40 hover:text-paper transition-all uppercase tracking-widest">
                  Личный кабинет
                  <ArrowUpRight className="w-3 h-3" />
               </button>
               <button className="flex items-center gap-3 text-xs font-bold text-paper transition-all group uppercase tracking-widest">
                  Запросить доступ
                  <div className="h-px w-8 bg-accent group-hover:w-12 transition-all duration-500" />
               </button>
            </div>
            <div className="flex items-center gap-6 pt-6 border-t border-paper/10 mt-2 opacity-40">
               {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                 <a key={i} href="#" className="hover:text-accent transition-colors">
                    <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-10">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-accent">Связь</h4>
            <div className="flex flex-col gap-8">
              <a href="tel:+79998887766" className="flex flex-col gap-2 group">
                <span className="text-xs font-mono text-paper/30 uppercase tracking-widest">Телефон</span>
                <span className="text-2xl font-sans font-black text-paper group-hover:text-accent transition-colors">+7 (999) 888 77 66</span>
              </a>
              <a href="mailto:access@traderx.io" className="flex flex-col gap-2 group">
                <span className="text-xs font-mono text-paper/30 uppercase tracking-widest">Email</span>
                <span className="text-lg font-sans font-black text-paper group-hover:text-accent transition-colors tracking-tight">access@traderx.io</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-paper/10 gap-8">
           <div className="flex flex-wrap gap-10">
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.2em] text-paper/20 hover:text-paper transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.2em] text-paper/20 hover:text-paper transition-colors">Правовая информация</a>
           </div>
           <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-paper/10 text-right">
              © 2024 TRADER X // BUILT_FOR_SCALE
           </p>
        </div>
      </div>
    </footer>
  );
};

