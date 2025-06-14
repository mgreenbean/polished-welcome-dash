
import TestimonialsCarousel from "./TestimonialsCarousel";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
            Real Sellers. Real Profits. Real Support.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful ticket sellers who trust SellMySeats.
          </p>
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
