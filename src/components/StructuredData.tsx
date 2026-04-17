import { siteConfig } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/logo.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  description: siteConfig.description,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
  description: siteConfig.description,
  inLanguage: "ru-RU",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что такое Trader X?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trader X - это платформа для опытных металлотрейдеров, которые хотят работать через инфраструктуру действующего бизнеса и усиливать доход на собственной клиентской базе.",
      },
    },
    {
      "@type": "Question",
      name: "Это вакансия или другой формат работы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Это не классическая вакансия. Платформа предлагает более самостоятельную модель работы без необходимости строить всю инфраструктуру бизнеса с нуля.",
      },
    },
    {
      "@type": "Question",
      name: "Кому подходит Trader X?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В первую очередь действующим менеджерам по продажам металлопроката, у которых уже есть опыт, база клиентов и понимание рынка.",
      },
    },
  ],
};

export const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationJsonLd, websiteJsonLd, faqJsonLd]),
      }}
    />
  );
};
