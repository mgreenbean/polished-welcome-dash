
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Ticket Listing Process",
      sellMySeats: "Three easy steps to list on all sites.",
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

  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="comparison" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Choose SellMySeats?</h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Skip the hassle of managing multiple platforms. We make ticket selling simple and stress-free.
            </p>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-slate-200/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] group">
          <CardContent className="p-0">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-t-lg">
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold opacity-90">Feature</h3>
              </div>
              <div className="p-6 text-left bg-emerald-500/30 border-l border-emerald-300/40">
                <h3 className="text-lg font-bold">SellMySeats</h3>
              </div>
              <div className="p-6 text-left border-l border-blue-300/40">
                <h3 className="text-lg font-semibold opacity-90">Traditional Platforms</h3>
              </div>
            </div>

            {/* Comparison rows */}
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-3 border-b border-slate-200/50 last:border-b-0 ${index % 2 === 0 ? 'bg-emerald-50/30' : 'bg-blue-50/20'}`}>
                <div className="p-6 font-medium text-slate-800 border-b md:border-b-0 md:border-r border-slate-200/50 text-left leading-relaxed">
                  {comparison.feature}
                </div>
                <div className="p-6 bg-emerald-50/60 border-b md:border-b-0 md:border-r border-slate-200/50 text-left leading-relaxed">
                  <span className="text-slate-800 font-semibold">{comparison.sellMySeats}</span>
                </div>
                <div className="p-6 text-left leading-relaxed">
                  <span className="text-slate-600">{comparison.traditional}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CTA Buttons - positioned together */}
        <div className="text-center mt-12 space-y-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-lg px-8 py-4 hover:scale-105 transition-all duration-200 text-white font-semibold shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/register'}
          >
            Start Selling Your Tickets Today
          </Button>
          
          <div>
            <Button variant="ghost" size="lg" onClick={scrollToTestimonials} className="bg-white/80 backdrop-blur-md border-2 border-emerald-400/50 text-slate-700 hover:bg-emerald-50/80 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg">
              Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
