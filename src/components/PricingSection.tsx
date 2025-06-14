
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
    <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Simple, Transparent Pricing</h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pay-per-sale: 10% commission fee on successful sales only.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] scroll-reveal bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg"></div>
            
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-80"></div>
            
            <div className="relative z-10">
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">Pay Per Sale</CardTitle>
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text mb-2">
                  10%
                </div>
                <p className="text-slate-300 text-lg">Commission on successful sales only</p>
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
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-200 text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/register" className="block">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0">
                    Start Selling Now
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Learn More button */}
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToTestimonials}
            className="bg-slate-800/60 backdrop-blur-md border-2 border-slate-600/50 text-slate-200 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg"
          >
            Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
