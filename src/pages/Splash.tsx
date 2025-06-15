
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

    // Observe all .anim-sleek, .anim-up, .anim-scale, .anim-fade and .scroll-fade for new effects
    const animationElements = document.querySelectorAll(
      '.anim-sleek, .anim-up, .anim-scale, .anim-fade, .scroll-fade'
    );
    animationElements.forEach((el) => observer.observe(el));

    return () => {
      animationElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SplashHeader />

      {/* Hero: Fade up & scale for big impact */}
      <section className="anim-scale">
        <HeroSection />
      </section>

      {/* How it Works: Slide-in left to right, already has animation inside HowItWorksSection, so just fade and stagger wrapper */}
      <section className="anim-sleek">
        <HowItWorksSection />
      </section>

      {/* Features: Animate up and scale */}
      <section className="anim-up">
        <FeaturesSection />
      </section>

      {/* Pricing: Fade in gently */}
      <section className="anim-fade">
        <PricingSection />
      </section>

      {/* Comparison: Fade in */}
      <section className="scroll-fade">
        <ComparisonSection />
      </section>

      {/* Testimonials: Animate up */}
      <section className="anim-up">
        <TestimonialsSection />
      </section>

      <SplashFooter />
    </div>
  );
};

export default Splash;

