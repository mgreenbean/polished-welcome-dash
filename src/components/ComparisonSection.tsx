
import { Check, X, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ComparisonSection = () => {
  const comparisons = [{
    feature: "Listing complexity",
    sellMySeats: "One simple form",
    traditional: "Multiple platforms, multiple listings"
  }, {
    feature: "Platform management",
    sellMySeats: "We handle everything",
    traditional: "You manage each site separately"
  }, {
    feature: "Listing fees",
    sellMySeats: "No upfront costs",
    traditional: "Pay to list on each platform"
  }, {
    feature: "Commission",
    sellMySeats: "10% only when sold",
    traditional: "10-15% + listing fees"
  }, {
    feature: "Customer support",
    sellMySeats: "24/7 dedicated support",
    traditional: "Limited or no support"
  }, {
    feature: "Fraud protection",
    sellMySeats: "Full protection included",
    traditional: "Limited or paid add-on"
  }];

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <section id="comparison" className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Features
          </h2>
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
            {comparisons.map((comparison, index) => <div key={index} className={`grid grid-cols-1 md:grid-cols-3 border-b border-slate-200 transition-all duration-300 hover:bg-slate-100/50 ${index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
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
              </div>)}
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-slate-600 mb-4">Ready to sell your tickets the easy way?</p>
          <a href="/register" className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
            Get Started Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <button onClick={scrollToHowItWorks} className="text-slate-500 hover:text-slate-700 transition-colors">
            <ChevronDown className="h-6 w-6" />
          </button>
          <span className="text-slate-400 text-xs mt-1">Next</span>
        </div>
      </div>
    </section>;
};

export default ComparisonSection;
