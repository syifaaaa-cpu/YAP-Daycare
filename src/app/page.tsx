// File: src/app/page.tsx
import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CoreValuesSection } from "@/components/CoreValuesSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { FeaturedProgramsSection } from "@/components/FeaturedProgramsSection";
import { DailyRoutineSection } from "@/components/DailyRoutineSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { TestimonialsAndNewsSection } from "@/components/TestimonialsAndNewsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { getFeaturedPrograms } from "@/services/featuredProgramService";
import { getTestimonials } from "@/services/testimonialService";
import { getNews } from "@/services/newsService";
import { getSiteInformation } from "@/services/siteService";
import { getSliders } from "@/services/sliderService"; // <-- Import service slider

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const programsData = await getFeaturedPrograms();
  const testimonialsData = await getTestimonials();
  const newsData = await getNews();
  const siteInfo = await getSiteInformation();
  const slidersData = await getSliders(); // <-- Ambil data slider dari API

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Kirim data sliders ke HeroSection */}
        <HeroSection sliders={slidersData} />
        <WhyUsSection />
        <CoreValuesSection />
        <ProgramsSection />
        <FeaturedProgramsSection data={programsData} />
        <DailyRoutineSection />
        <FacilitiesSection />
        <TestimonialsAndNewsSection
          testimonialsData={testimonialsData}
          newsData={newsData}
        />
        <CtaSection />
      </div>

      <Footer siteInfo={siteInfo} />
    </main>
  );
}