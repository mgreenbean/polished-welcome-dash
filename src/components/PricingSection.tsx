
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Only pay when you succeed. No hidden fees, no monthly charges.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-blue-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-blue-900">Success-Based</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold text-blue-900">10%</span>
                <span className="text-xl text-slate-600 ml-2">commission</span>
              </div>
              <p className="text-slate-600 mt-2">Only when your tickets sell</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Unlimited ticket listings",
                  "AI-powered pricing optimization",
                  "Multi-platform distribution",
                  "Real-time analytics dashboard",
                  "24/7 priority support",
                  "Instant payment processing",
                  "Secure ticket transfers"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link to="/register" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
