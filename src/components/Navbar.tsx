"use client";

import React, { useEffect, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { label: "О платформе", href: "/#about" },
  { label: "Преимущества", href: "/#benefits" },
  { label: "Сравнение", href: "/#comparison" },
  { label: "Как это работает", href: "/#how-it-works" },
  { label: "Безопасность", href: "/#trust" },
  { label: "О компании", href: "/#company" },
  { label: "FAQ", href: "/#faq" },
  { label: "Контакты", href: "/#contact" },
];

const phoneDisplay = "+7 (999) 888 77 66";
const phoneHref = "tel:+79998887766";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 90% 5%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        ".nav-item-mobile",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 90% 5%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-4 md:py-6 pointer-events-none">
      <div
        className={cn(
          "flex items-center justify-between w-[95%] max-w-7xl h-14 px-4 sm:px-8 transition-all duration-500 rounded-pill border pointer-events-auto",
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-white/10 scale-100 translate-y-0 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-accent/20 backdrop-blur-md border-white/5 scale-[0.98] translate-y-2"
        )}
      >
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/" className="flex items-center mr-2">
            <span className="text-xl font-black tracking-tighter text-white">
              TRADER <span className="text-primary italic">X</span>
            </span>
          </Link>
          <div className="hidden xl:flex h-4 w-px bg-white/10" />
          <a href={phoneHref} className="hidden lg:flex items-center gap-2 font-medium text-white/40 hover:text-primary transition-colors text-[10px] whitespace-nowrap">
            <Phone className="w-3 h-3 text-primary shrink-0" />
            {phoneDisplay}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold text-white/40 hover:text-white transition-all duration-300 relative group uppercase tracking-[0.1em] whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden sm:flex items-center gap-1 font-bold text-white/60 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all px-6 py-2.5 rounded-pill text-[10px] uppercase tracking-widest whitespace-nowrap">
            Войти
          </button>
          <button onClick={openModal} className="btn-glow animate-pulse-glow px-5 sm:px-8 py-2.5 font-bold flex items-center gap-2 group text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
            Доступ
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white"
            aria-label="Открыть меню"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-accent z-[150] flex flex-col pt-32 px-8 pointer-events-auto"
        style={{ clipPath: "circle(0% at 90% 5%)" }}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10 p-3 bg-white/5 rounded-full"
          aria-label="Закрыть меню"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="nav-item-mobile text-3xl font-black text-white hover:text-primary transition-colors flex items-center justify-between group"
            >
              <span className="opacity-20 text-sm font-mono mr-4">0{i + 1}</span>
              {link.label}
              <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-12 flex flex-col gap-6">
          <div className="h-px w-full bg-white/10" />
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Связь</span>
              <a href={phoneHref} className="text-white font-medium text-lg">{phoneDisplay}</a>
            </div>
            <button onClick={() => { setIsMenuOpen(false); openModal(); }} className="btn-glow px-10 py-5 font-bold uppercase tracking-widest text-xs">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
