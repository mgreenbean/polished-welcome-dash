
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Portfolio Management",
      description: "Track all your tickets in one beautiful dashboard. See profits, status, and performance at a glance.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Instant Transfers",
      description: "Lightning-fast ticket transfers and instant payments. No more waiting days for your money.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to help you maximize your profits.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Bank-level security and fraud protection. Your tickets and payments are always safe.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose SellMySeats?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features designed to maximize your ticket selling success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-blue-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
