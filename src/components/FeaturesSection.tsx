
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Portfolio Management",
      description: "Track all your tickets in one beautiful, intuitive dashboard. See profits, status, and performance at a glance.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Instant Transfers",
      description: "Lightning-fast ticket transfers and quick payments. No more payout guessing.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Real support from our U.S.-based team, available whenever you need help.",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "High-level security and fraud protection. Ensuring your tickets and payments are always safe.",
      color: "from-blue-600 to-blue-700"
    }
  ];

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Why Choose SellMySeats</h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to maximize your ticket selling success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learn More button */}
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToPricing}
            className="bg-white/10 backdrop-blur-md border-2 border-emerald-400/50 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg"
            style={{
              boxShadow: '0 0 20px rgba(52, 211, 153, 0.4), 0 0 40px rgba(52, 211, 153, 0.2)',
            }}
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
