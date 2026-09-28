import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { HowIWorkSection } from "@/components/home/HowIWorkSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <HowIWorkSection />
      <TechStackSection />
      <FinalCTASection />
    </>
  );
}
