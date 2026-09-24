import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilityBar } from "@/components/home/CapabilityBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { WhyWorkWithMeSection } from "@/components/home/WhyWorkWithMeSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FeaturedCaseStudySection } from "@/components/home/FeaturedCaseStudySection";
import { WorkingPrinciplesSection } from "@/components/home/WorkingPrinciplesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — CAPABILITY BAR */}
      <CapabilityBar />

      {/* SECTION 3 — SERVICES */}
      <ServicesSection />

      {/* SECTION 4 — FEATURED PROJECTS */}
      <FeaturedProjectsSection />

      {/* SECTION 5 — WHY WORK WITH ME */}
      <WhyWorkWithMeSection />

      {/* SECTION 6 — DEVELOPMENT PROCESS */}
      <ProcessSection />

      {/* SECTION 7 — TECH STACK */}
      <TechStackSection />

      {/* SECTION 8 — FEATURED CASE STUDY */}
      <FeaturedCaseStudySection />

      {/* SECTION 9 — WORKING PRINCIPLES */}
      <WorkingPrinciplesSection />

      {/* SECTION 10 — FAQ */}
      <FAQSection />

      {/* SECTION 11 — FINAL CTA */}
      <FinalCTASection />
    </>
  );
}
