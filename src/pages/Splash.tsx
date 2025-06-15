
import { useEffect } from "react";
import SplashHeader from "@/components/SplashHeader";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SplashFooter from "@/components/SplashFooter";

const Splash = () => {
  useEffect(() => {
    // Add section-based observers for improved animation control
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-section-view');
        }
      });
    }, observerOptions);

    // Collect all animated splash section wrappers EXCEPT hero
    const splashSections = document.querySelectorAll(
      // target the custom classes below
      ".animate-how, .animate-features, .animate-pricing, .animate-comparison, .animate-testimonials, .animate-footer"
    );
    splashSections.forEach((el) => observer.observe(el));

    return () => {
      splashSections.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SplashHeader />
      {/* HeroSection is intentionally not wrapped to remain unaffected */}
      <HeroSection />
      <div className="animate-how opacity-0 transform" style={{transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'}}>
        <HowItWorksSection />
      </div>
      <div className="animate-features opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <FeaturesSection />
      </div>
      <div className="animate-pricing opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <PricingSection />
      </div>
      <div className="animate-comparison opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <ComparisonSection />
      </div>
      <div className="animate-testimonials opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <TestimonialsSection />
      </div>
      <div className="animate-footer opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <SplashFooter />
      </div>
    </div>
  );
};

export default Splash;

