
import SplashHeader from "@/components/SplashHeader";
import SplashFooter from "@/components/SplashFooter";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Splash = () => {
  return (
    <div className="min-h-screen">
      <SplashHeader />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <SplashFooter />
    </div>
  );
};

export default Splash;
