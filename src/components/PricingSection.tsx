
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Only pay when you succeed. No hidden fees, no monthly charges.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-white mb-2">Pay Per Sale</CardTitle>
              <div className="text-5xl font-bold text-emerald-400 mb-2">10%</div>
              <p className="text-blue-100">Commission on successful sales only</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Unlimited ticket listings",
                  "Portfolio management dashboard",
                  "Real-time analytics",
                  "Instant payment processing",
                  "24/7 customer support",
                  "Multi-platform distribution",
                  "Fraud protection",
                  "No monthly fees"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link to="/register">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-3 font-semibold">
                    Start Selling Now
                  </Button>
                </Link>
              </div>
              
              <p className="text-center text-sm text-blue-200">
                No setup fees • Cancel anytime • 30-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
