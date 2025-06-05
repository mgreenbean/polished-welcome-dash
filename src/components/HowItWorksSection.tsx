
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
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Three simple steps to turn your unused tickets into profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20 scroll-reveal"
              style={{
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
