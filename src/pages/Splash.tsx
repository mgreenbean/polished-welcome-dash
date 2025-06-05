
import { useEffect } from "react";
import SplashHeader from "@/components/SplashHeader";
import SplashFooter from "@/components/SplashFooter";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Splash = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SplashHeader />
      <HeroSection />
      <div className="scroll-reveal">
        <FeaturesSection />
      </div>
      <div className="scroll-slide-left">
        <HowItWorksSection />
      </div>
      <div className="scroll-scale">
        <PricingSection />
      </div>
      <div className="scroll-slide-right">
        <TestimonialsSection />
      </div>
      <SplashFooter />
    </div>
  );
};

export default Splash;
