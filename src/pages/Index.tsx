import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import RentalSection from "@/components/RentalSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <RentalSection />
        <ProjectsSection />
        <TeamSection />
        <AwardsSection />
        <TestimonialsSection />
        <BrandsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
