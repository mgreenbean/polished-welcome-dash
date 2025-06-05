
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, DollarSign } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Mail,
      title: "Forward Your Ticket Email",
      description: "Simply forward your ticket confirmation email to our secure transfer address. Our AI instantly extracts all ticket details.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Review & Approve",
      description: "Check the automatically generated listing in your dashboard. Approve pricing and details with one click.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: DollarSign,
      title: "Get Paid When They Sell",
      description: "Your tickets go live across all major platforms instantly. Get paid automatically when they sell.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Selling your tickets has never been easier. Our 3-step process gets your tickets listed and selling in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-blue-100">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute top-4 left-4 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
