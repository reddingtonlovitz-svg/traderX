import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AccessModal } from "@/components/AccessModal";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Trader X | Платформа для опытных металлтрейдеров",
  description:
    "Trader X — экосистема для опытных металлтрейдеров: ваша база, сделки, логистика и рост в более сильной модели.",
  keywords: [
    "металлопрокат",
    "металлотрейдер",
    "платформа для продаж",
    "b2b продажи металла",
    "торговля металлопрокатом",
  ],
  openGraph: {
    title: "Trader X | Платформа для опытных металлтрейдеров",
    description:
      "Платформа для тех, кто уже умеет продавать металл и хочет работать в более сильной и выгодной модели.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trader X | Платформа для опытных металлтрейдеров",
    description:
      "Платформа для тех, кто уже умеет продавать металл и хочет работать в более сильной и выгодной модели.",
  },
  alternates: {
    canonical: "/",
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
        className={`${inter.variable} font-sans min-h-screen selection:bg-accent/20 selection:text-primary relative overflow-x-hidden`}
      >
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.02] mix-blend-multiply">
          <svg className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <AccessModal />
        </ModalProvider>
      </body>
    </html>
  );
}
