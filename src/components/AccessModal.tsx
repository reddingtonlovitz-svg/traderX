"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ArrowRight, CheckCircle2, User, Phone, Mail } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  let result = "";

  if (digits.length === 0) return "";
  result = "+7";
  if (digits.length > 1) result += " (" + digits.slice(1, 4);
  if (digits.length >= 4) result += ") " + digits.slice(4, 7);
  if (digits.length >= 7) result += "-" + digits.slice(7, 9);
  if (digits.length >= 9) result += "-" + digits.slice(9, 11);

  return result;
};

export const AccessModal = () => {
  const { isOpen, closeModal } = useModal();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  // Animate in/out
  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return;
    if (isOpen) {
      overlayRef.current.style.opacity = "0";
      panelRef.current.style.transform = "translateY(32px) scale(0.97)";
      panelRef.current.style.opacity = "0";
      requestAnimationFrame(() => {
        if (!overlayRef.current || !panelRef.current) return;
        overlayRef.current.style.transition = "opacity 0.3s ease";
        panelRef.current.style.transition =
          "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease";
        overlayRef.current.style.opacity = "1";
        panelRef.current.style.transform = "translateY(0) scale(1)";
        panelRef.current.style.opacity = "1";
      });
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeModal]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = { name: "", phone: "" };
    let valid = true;
    if (!form.name.trim()) {
      newErrors.name = "Введите ваше ФИО";
      valid = false;
    }
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 11) {
      newErrors.phone = "Введите корректный номер телефона";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setForm((f) => ({ ...f, phone: formatPhone(raw) }));
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "" });
      setErrors({ name: "", phone: "" });
    }, 400);
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
      className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(10,10,20,0.85) 0%, rgba(13,21,42,0.9) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] shadow-2xl"
        style={{
          background:
            "linear-gradient(145deg, #0F0F1A 0%, #131324 50%, #0A0A14 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(13,121,242,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #0D79F2 40%, #22C55E 70%, transparent 100%)",
          }}
        />

        {/* Glow orb */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(13,121,242,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-[60] w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5 text-white/70" />
        </button>

        <div className="relative z-10 p-6 sm:p-8 md:p-10">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center text-center gap-6 py-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  Заявка принята
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                  Наш менеджер свяжется с вами в течение рабочего дня для
                  проведения экспертного интервью.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-2 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Закрыть
              </button>
            </div>
          ) : (
            /* Form State */
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#0D79F2" }}
                  />
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.25em]"
                    style={{ color: "#0D79F2" }}
                  >
                    Trader X — Заявка на доступ
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white leading-tight tracking-tight">
                  Получить{" "}
                  <span className="italic" style={{ color: "#0D79F2" }}>
                    доступ
                  </span>{" "}
                  к платформе
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-white/40 leading-relaxed">
                  Оставьте контакты — мы свяжемся для знакомства и интервью.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-white/40">
                    ФИО <span style={{ color: "#0D79F2" }}>*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    />
                    <input
                      type="text"
                      placeholder="Иванов Иван Иванович"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full pl-11 pr-4 py-4 rounded-2xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: errors.name
                          ? "1px solid rgba(239,68,68,0.5)"
                          : "1px solid rgba(255,255,255,0.07)",
                      }}
                      onFocus={(e) => {
                        if (!errors.name) {
                          e.target.style.border =
                            "1px solid rgba(13,121,242,0.5)";
                          e.target.style.background = "rgba(13,121,242,0.05)";
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors.name) {
                          e.target.style.border =
                            "1px solid rgba(255,255,255,0.07)";
                          e.target.style.background = "rgba(255,255,255,0.04)";
                        }
                      }}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-[11px] text-red-400">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-white/40">
                    Телефон <span style={{ color: "#0D79F2" }}>*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    />
                    <input
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      maxLength={18}
                      className="w-full pl-11 pr-4 py-4 rounded-2xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: errors.phone
                          ? "1px solid rgba(239,68,68,0.5)"
                          : "1px solid rgba(255,255,255,0.07)",
                      }}
                      onFocus={(e) => {
                        if (!errors.phone) {
                          e.target.style.border =
                            "1px solid rgba(13,121,242,0.5)";
                          e.target.style.background = "rgba(13,121,242,0.05)";
                        }
                        if (!form.phone) {
                          setForm((f) => ({ ...f, phone: "+7 " }));
                        }
                      }}
                      onBlur={(e) => {
                        if (!errors.phone) {
                          e.target.style.border =
                            "1px solid rgba(255,255,255,0.07)";
                          e.target.style.background = "rgba(255,255,255,0.04)";
                        }
                      }}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-[11px] text-red-400">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-white/40">
                    Email{" "}
                    <span className="text-white/20 normal-case font-medium tracking-normal">
                      (необязательно)
                    </span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full pl-11 pr-4 py-4 rounded-2xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onFocus={(e) => {
                        e.target.style.border =
                          "1px solid rgba(13,121,242,0.5)";
                        e.target.style.background = "rgba(13,121,242,0.05)";
                      }}
                      onBlur={(e) => {
                        e.target.style.border =
                          "1px solid rgba(255,255,255,0.07)";
                        e.target.style.background = "rgba(255,255,255,0.04)";
                      }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group relative mt-2 w-full py-4.5 rounded-2xl flex items-center justify-center gap-3 font-black text-sm uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D79F2 0%, #0B65CC 100%)",
                    boxShadow: "0 8px 32px rgba(13,121,242,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 12px 40px rgba(13,121,242,0.5)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 32px rgba(13,121,242,0.35)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <span>Отправить заявку</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust note */}
                <p className="text-center text-[10px] text-white/20 leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
