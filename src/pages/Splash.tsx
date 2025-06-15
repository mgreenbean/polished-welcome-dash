
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
          entry.target.classList.add('in-section-view');
        }
      });
    }, observerOptions);
    const splashSections = document.querySelectorAll(
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
      <HeroSection />
      <section className="animate-how opacity-0 transform" style={{transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'}}>
        <h2 id="how-it-works" className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 px-4 pt-20 sm:pt-28 text-center tracking-tight" aria-label="How It Works Section">How It Works</h2>
        <HowItWorksSection />
      </section>
      <section className="animate-features opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <h2 id="features" className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 px-4 pt-20 sm:pt-28 text-center tracking-tight" aria-label="Features Section">Features</h2>
        <FeaturesSection />
      </section>
      <section className="animate-pricing opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <h2 id="pricing" className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 px-4 pt-20 sm:pt-28 text-center tracking-tight" aria-label="Pricing Section">Pricing</h2>
        <PricingSection />
      </section>
      <section className="animate-comparison opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <h2 id="comparison" className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 px-4 pt-20 sm:pt-28 text-center tracking-tight" aria-label="Comparison Section">Comparison</h2>
        <ComparisonSection />
      </section>
      <section className="animate-testimonials opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <h2 id="testimonials" className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 px-4 pt-20 sm:pt-28 text-center tracking-tight" aria-label="Testimonials Section">Reviews</h2>
        <TestimonialsSection />
      </section>
      <section className="animate-footer opacity-0 transform" style={{transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)'}}>
        <SplashFooter />
      </section>
    </div>
  );
};

export default Splash;
