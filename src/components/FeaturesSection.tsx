
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Zap, Shield, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Portfolio Management",
      description: "Track all your ticket listings in one beautiful dashboard. Monitor performance, pricing, and sales analytics in real-time."
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Forward your ticket emails and watch them automatically appear in your dashboard. AI-powered extraction means zero manual entry."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security protects your tickets and earnings. We handle all the complex marketplace integrations safely."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team. Chat, call, or email - we're always here for you."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to maximize your ticket reselling profits, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-blue-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
