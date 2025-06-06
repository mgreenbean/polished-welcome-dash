
import { useEffect } from "react";
import SplashHeader from "@/components/SplashHeader";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Splash = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-fade');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SplashHeader />
      <HeroSection />
      <div className="scroll-fade">
        <HowItWorksSection />
      </div>
      <div className="scroll-reveal">
        <FeaturesSection />
      </div>
      <div className="scroll-reveal">
        <PricingSection />
      </div>
      <div className="scroll-fade">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Splash;
