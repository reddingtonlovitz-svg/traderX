import { Hero } from "@/components/Hero";
import { ProblemBlock } from "@/components/ProblemBlock";
import { BenefitsBlock } from "@/components/BenefitsBlock";
import { EfficiencyBlock } from "@/components/EfficiencyBlock";
import { ComparisonBlock } from "@/components/ComparisonBlock";
import { StepsBlock } from "@/components/StepsBlock";
import { TrustBlock } from "@/components/TrustBlock";
import { FoundersBlock } from "@/components/FoundersBlock";
import { FAQBlock } from "@/components/FAQBlock";
import { FinalCTABlock } from "@/components/FinalCTABlock";

export default function Home() {
  return (
    <main className="relative bg-white selection:bg-accent selection:text-white overflow-x-hidden">
      <div className="flex flex-col">
        <Hero />
        <ProblemBlock />
        <BenefitsBlock />
        <EfficiencyBlock />
        <ComparisonBlock />
        <StepsBlock />
        <TrustBlock />
        <FoundersBlock />
        <FAQBlock />
        <FinalCTABlock />
      </div>
    </main>
  );
}
