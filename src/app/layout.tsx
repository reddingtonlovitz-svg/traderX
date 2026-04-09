import type { Metadata } from "next";
import { Space_Grotesk, DM_Serif_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Trader X — Платформа для роста в металлопрокате",
  description: "Работайте через готовую инфраструктуру действующей компании. Больше самостоятельности. Сильнее экономика. Платформа для опытных металлотрейдеров.",
  keywords: ["металлопрокат", "трейдинг", "платформа для продаж", "металлотрейдеры", "бизнес в металле"],
  authors: [{ name: "Trader X Team" }],
  openGraph: {
    title: "Trader X — Платформа для роста в металлопрокате",
    description: "Новая модель работы для сильных продажников в рынке металла.",
    url: "https://traderx.io",
    siteName: "Trader X",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trader X — Платформа для роста в металлопрокате",
    description: "Больше самостоятельности. Сильнее экономика.",
  },
  alternates: {
    canonical: "https://traderx.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans min-h-screen selection:bg-accent/20 selection:text-primary relative overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}


