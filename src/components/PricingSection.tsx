
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">Simple, Transparent Pricing</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pay-per-sale: 10% commission fee on successful sales only.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] scroll-reveal bg-white/80 backdrop-blur-sm border-slate-200 relative overflow-hidden group">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-2xl font-bold text-slate-900 mb-4">Pay Per Sale</CardTitle>
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text mb-2">
                10%
              </div>
              <p className="text-slate-600 text-lg">Commission on successful sales only</p>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <div className="space-y-4 mb-8">
                {[
                  "Unlimited listing capabilities",
                  "Sales analytics",
                  "Fraud/ticket protection",
                  "Real-time visibility",
                  "24/7 customer support",
                  "Multi-platform distribution",
                  "Zero monthly fees"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-slate-700 text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/register" className="block">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  Start Selling Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Learn More button */}
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToTestimonials}
            className="bg-white/60 backdrop-blur-md border-2 border-blue-400/50 text-slate-700 hover:bg-white/80 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg"
          >
            Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
