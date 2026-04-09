"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadForm = ({ isOpen, onClose }: LeadFormProps) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({ city: "", fullName: "", phone: "" });

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("form");
        setFormData({ city: "", fullName: "", phone: "" });
      }, 500);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStep("success");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative w-full max-w-xl glass rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden border border-white/20 animate-in zoom-in-95 fade-in duration-500",
          step === "success" ? "bg-accent/10" : "bg-white"
        )}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full bg-ghost/50 text-graphite hover:bg-accent hover:text-white transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div className="flex flex-col gap-8">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tighter leading-none">
                Получить доступ к Trader X
              </h2>
              <p className="text-lg text-graphite/60 leading-relaxed max-w-sm font-medium">
                Оставьте данные, и мы свяжемся с вами, чтобы показать формат платформы.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                { id: "city", label: "Город", type: "text", placeholder: "Например, Москва" },
                { id: "fullName", label: "ФИО", type: "text", placeholder: "Иванов Иван Иванович" },
                { id: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label htmlFor={field.id} className="text-[10px] font-black uppercase tracking-widest text-accent ml-4">
                    {field.label}
                  </label>
                  <input
                    required
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full h-16 px-8 rounded-pill bg-ghost/50 border border-transparent focus:border-accent focus:bg-white transition-all duration-300 outline-none text-primary font-bold text-lg placeholder:text-graphite/20"
                  />
                </div>
              ))}

              <button 
                type="submit" 
                className="btn-primary w-full h-20 text-xl font-black flex items-center justify-center gap-4 mt-4 shadow-[0_20px_40px_rgba(123,97,255,0.4)]"
              >
                Отправить заявку
                <Send className="w-6 h-6" />
              </button>
            </form>
            
            <p className="text-[10px] uppercase font-bold text-graphite/30 tracking-widest text-center leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8 py-10 text-center animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_40px_rgba(123,97,255,0.6)]">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tighter">
                Заявка принята
              </h2>
              <p className="text-xl text-graphite/60 leading-relaxed max-w-sm font-medium">
                Мы свяжемся с вами в ближайшее время, чтобы показать формат платформы и обсудить детали.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="px-10 h-16 rounded-pill border-2 border-accent text-accent font-extrabold hover:bg-accent hover:text-white transition-all duration-500 uppercase text-xs tracking-widest"
            >
              Отлично, жду
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
