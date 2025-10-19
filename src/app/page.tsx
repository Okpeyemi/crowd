import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import EntrepriseSection from "@/components/EntrepriseSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RecipeSection from "@/components/RecipeSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <EntrepriseSection /> {/* À ne pas déplacer. */}
      <WhySection />
      <StepsSection />
      <TestimonialsSection />
      <RecipeSection />
      <FaqSection />
    </div>
  );
}
