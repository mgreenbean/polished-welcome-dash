
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
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 opacity-0 animate-smooth-fade-in">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pay-per-sale: 10% commission fee on successful sales only.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-smooth-scale-in bg-slate-800/95 backdrop-blur-sm border-0 relative overflow-hidden shadow-2xl">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 rounded-lg p-[1px]">
              <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg h-full w-full"></div>
            </div>
            
            <div className="relative z-10">
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">Pay Per Sale</CardTitle>
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text mb-2">10%</div>
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
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-200 text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/register" className="block">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg py-4 font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
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
            className="bg-white/10 backdrop-blur-md border-2 border-blue-400/30 text-white hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg"
          >
            Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
