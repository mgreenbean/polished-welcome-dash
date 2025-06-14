
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
        <div className="text-center mb-16 sm:mb-20 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10">More Features</h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Powerful features designed to maximize your ticket selling success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/10 backdrop-blur-sm border-white/20 shadow-lg hover:bg-white/15 opacity-0 translate-y-8 animate-fade-up"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Pricing button with proper spacing and consistent styling */}
        <div className="flex justify-center mt-16 sm:mt-20">
          <Button 
            size="lg" 
            onClick={scrollToPricing} 
            className="bg-emerald-500 hover:bg-emerald-600 text-lg px-12 py-4 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-2xl rounded-full glow-button"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
