
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Mail,
      title: "Transfer Your Tickets",
      description: "Forward your ticket confirmation to our unique email address. It's that simple.",
      step: "01"
    },
    {
      icon: CheckCircle,
      title: "Approve Your Listing",
      description: "Our team verifies and approves your tickets for listing across multiple platforms.",
      step: "02"
    },
    {
      icon: DollarSign,
      title: "Get Paid Upon Sale",
      description: "Receive instant payment when your tickets sell. No waiting, no hassle.",
      step: "03"
    }
  ];

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 pt-28 bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-slate-900">How It Works</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Three simple steps to get your tickets listed and get paid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-emerald-100 bg-white/90 backdrop-blur-sm scroll-reveal hover:bg-emerald-50/30 shadow-lg opacity-0 translate-y-8 animate-fade-up"
              style={{
                animationDelay: `${0.2 + index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-8 w-8 sm:h-9 sm:w-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-base sm:text-lg">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Features button with proper spacing */}
        <div className="flex justify-center mt-16 sm:mt-20">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToFeatures}
            className="bg-white/70 backdrop-blur-md border-2 border-emerald-400/60 text-slate-700 hover:bg-white/90 hover:border-emerald-500 transition-all duration-300 hover:scale-105 px-12 py-4 rounded-full shadow-lg font-semibold text-lg hover:shadow-xl"
          >
            Our Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
