export const siteConfig = {
  name: "Trader X",
  shortName: "TraderX",
  domain: "https://traderx.io",
  title: "Trader X - платформа для роста в металлопрокате",
  description:
    "Платформа для опытных металлотрейдеров: свои клиенты, действующая инфраструктура, прозрачные условия и сильнее экономика, чем в классическом найме.",
  ogImage: "/hero-bg.png",
  email: "access@traderx.pro",
  phone: "+79998887766",
  phoneDisplay: "+7 (999) 888 77 66",
  nav: [
    { label: "О платформе", href: "/#about" },
    { label: "Преимущества", href: "/#benefits" },
    { label: "Сравнение", href: "/#comparison" },
    { label: "Как это работает", href: "/#how-it-works" },
    { label: "Безопасность", href: "/#trust" },
    { label: "О компании", href: "/#company" },
    { label: "FAQ", href: "/#faq" },
    { label: "Контакты", href: "/#contact" },
  ],
} as const;

export const contactHref = {
  tel: `tel:${siteConfig.phone}`,
  mail: `mailto:${siteConfig.email}`,
  apply: "#contact",
} as const;
