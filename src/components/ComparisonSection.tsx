
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Ticket Listing Process",
      sellMySeats: "One simple form. We do the rest.",
      traditional: "Separate listings on each site"
    },
    {
      feature: "Account Management",
      sellMySeats: "We handle pricing, platforms, transfers, and support.",
      traditional: "You handle pricing, delivery, and support"
    },
    {
      feature: "Upfront Costs",
      sellMySeats: "Free to list. No hidden fees.",
      traditional: "Upfront or hidden listing fees"
    },
    {
      feature: "Sales Commission",
      sellMySeats: "10% only after your ticket sells.",
      traditional: "10–15% plus fees"
    },
    {
      feature: "Customer Support",
      sellMySeats: "Real support, 24/7. No bots. No runaround.",
      traditional: "Slow or no help when you need it"
    }
  ];

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="comparison" className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose SellMySeats?</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Skip the hassle of managing multiple platforms. We make ticket selling simple and stress-free.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group">
          <CardContent className="p-0">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-base sm:text-lg font-semibold opacity-90">Feature</h3>
              </div>
              <div className="p-4 sm:p-6 text-center bg-emerald-500/20 border-l border-emerald-400/30">
                <h3 className="text-base sm:text-lg font-bold">SellMySeats</h3>
              </div>
              <div className="p-4 sm:p-6 text-center border-l border-blue-400/30">
                <h3 className="text-base sm:text-lg font-semibold opacity-90">Traditional Platforms</h3>
              </div>
            </div>

            {/* Comparison rows */}
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-3 border-b border-slate-200 transition-all duration-300 hover:bg-slate-100/50 ${index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                <div className="p-3 sm:p-4 font-medium text-slate-700 border-b md:border-b-0 md:border-r border-slate-200 text-sm sm:text-base">
                  {comparison.feature}
                </div>
                <div className="p-3 sm:p-4 bg-emerald-50/50 border-b md:border-b-0 md:border-r border-slate-200">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium text-sm sm:text-base">{comparison.sellMySeats}</span>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm sm:text-base">{comparison.traditional}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-6 sm:mt-8">
          <a href="/register" className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
            Get Started
          </a>
        </div>

        {/* Learn More button */}
        <div className="flex justify-center mt-16">
          <Button variant="ghost" size="lg" onClick={scrollToHowItWorks} className="bg-white/60 backdrop-blur-md border-2 border-blue-400/50 text-slate-700 hover:bg-white/80 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg">
            How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
