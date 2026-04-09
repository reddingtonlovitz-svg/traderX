"use client";

import React, { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Phone, ArrowRight } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "О платформе", href: "#о-платформе" },
  { name: "Как это работает", href: "#как-это-работает" },
  { name: "Преимущества", href: "#преимущества" },
  { name: "Безопасность", href: "#безопасность" },
  { name: "О компании", href: "#о-компании" },
  { name: "Контакты", href: "#footer" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-10 pointer-events-none">
      <div
        className={cn(
          "flex items-center justify-between w-[95%] max-w-7xl h-14 px-4 sm:px-8 transition-all duration-700 rounded-pill border pointer-events-auto bg-white/95 backdrop-blur-2xl border-primary/5 shadow-2xl scale-[0.98] translate-y-2",
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a href="#" className="font-sans font-bold text-xl tracking-tighter text-primary flex items-center gap-2">
            TRADER <span className="text-accent">X</span>
          </a>
          <div className="hidden lg:flex h-4 w-px bg-primary/10" />
          <a href="tel:+79998887766" className="hidden lg:flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary/60 hover:text-accent transition-colors">
            <Phone className="w-3 h-3 text-accent" />
            +7 (999) 888 77 66
          </a>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 hover:text-accent transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors px-4">
            Войти
          </button>
          <button className="btn-magnetic bg-primary text-offwhite px-6 py-2.5 rounded-pill text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group">
            Доступ
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
};

