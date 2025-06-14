
import TestimonialsCarousel from "./TestimonialsCarousel";
import { ChevronDown } from "lucide-react";

const TestimonialsSection = () => {
  const scrollToFooter = () => {
    const element = document.querySelector('footer');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Real Sellers. Real Profits. Real Support.</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of successful ticket sellers who trust SellMySeats.
          </p>
        </div>

        <TestimonialsCarousel />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <button onClick={scrollToFooter} className="text-slate-500 hover:text-slate-700 transition-colors">
            <ChevronDown className="h-6 w-6" />
          </button>
          <span className="text-slate-400 text-xs mt-1">Footer</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
