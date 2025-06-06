
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, DollarSign } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Mail,
      title: "Transfer Tickets",
      description: "Forward your ticket confirmation to our unique email address. It's that simple.",
      step: "01"
    },
    {
      icon: CheckCircle,
      title: "We Approve",
      description: "Our team verifies and approves your tickets for listing across multiple platforms.",
      step: "02"
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Receive instant payment when your tickets sell. No waiting, no hassle.",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-blue-900">How It Works</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to turn your unused tickets into profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100 bg-white/80 backdrop-blur-sm scroll-reveal"
              style={{
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-blue-800 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs sm:text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
