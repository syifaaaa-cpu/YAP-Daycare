"use client";
import React from 'react';
import { HeroSection } from './HeroSection';
import { WhyUsSection } from './WhyUsSection';
import { CoreValuesSection } from './CoreValuesSection';
import { ProgramsSection } from './ProgramsSection';
import { FeaturedProgramsSection } from './FeaturedProgramsSection';
import { DailyRoutineSection } from './DailyRoutineSection';
import { FacilitiesSection } from './FacilitiesSection';
import { TestimonialsAndNewsSection } from './TestimonialsAndNewsSection';
import { CtaSection } from './CtaSection';
import { Footer } from './Footer';

export function ReferenceLandingPage() {
  const handleOpenPpdb = () => {
    alert("Membuka halaman PPDB 2026/2027");
  };

  const handleOpenBrochure = () => {
    alert("Mengunduh e-Brosur");
  };

  const handleSubscribeNewsletter = (email: string) => {
    console.log("Newsletter email:", email);
  };

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="reference-page">
      <HeroSection onOpenPpdb={handleOpenPpdb} />
      <WhyUsSection />
      <CoreValuesSection />
      <ProgramsSection />
      <FeaturedProgramsSection />
      <DailyRoutineSection />
      <FacilitiesSection />
      <TestimonialsAndNewsSection />
      <CtaSection onOpenPpdb={handleOpenPpdb} />
      
      <Footer 
        onOpenPpdb={handleOpenPpdb}
        onOpenBrochure={handleOpenBrochure}
        onSubscribeNewsletter={handleSubscribeNewsletter}
        onNavigateSection={handleNavigateSection}
      />
    </main>
  );
}