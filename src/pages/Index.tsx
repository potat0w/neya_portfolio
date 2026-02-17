import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import StackSection from "@/components/StackSection";
import BuildingSection from "@/components/BuildingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <StackSection />
        <BuildingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
