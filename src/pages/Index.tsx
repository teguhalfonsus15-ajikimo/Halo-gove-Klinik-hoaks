import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsSection from "@/components/ResultsSection";
import IntegrationSection from "@/components/IntegrationSection";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <IntegrationSection />
      <DemoSection />
      <CTASection />
    </div>
  );
};

export default Index;