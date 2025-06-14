
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  // Debug log to ensure component is rendering
  console.log("FeaturesSection is rendering");

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
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      
      {/* Additional spotlight effects for modern layering */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 sm:w-56 sm:h-56 bg-emerald-400/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 scroll-reveal">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-12 relative z-20" 
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              color: '#ffffff'
            }}
          >
            More Features
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed relative z-20">
            Powerful features designed to maximize your ticket selling success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:bg-white/15 opacity-0 translate-y-8 animate-fade-up hover:scale-[1.02]"
              style={{
                animationDelay: `${0.2 + index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardContent className="p-8 sm:p-10 text-center">
                {/* Enhanced icon container with depth and glow */}
                <div className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-300 border-2 border-white/10`}>
                  <feature.icon className="h-8 w-8 sm:h-9 sm:w-9 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Pricing button with increased spacing */}
        <div className="flex justify-center mt-20 sm:mt-24">
          <Button 
            size="lg" 
            onClick={scrollToPricing} 
            className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 text-lg px-12 py-4 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl rounded-full"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
