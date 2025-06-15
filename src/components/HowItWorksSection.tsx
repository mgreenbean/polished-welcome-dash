import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";

const HowItWorksSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cardsRef.current;
    if (!node) return;

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add("slide-in-ltr-active");
        }
      });
    };

    const observer = new window.IntersectionObserver(onIntersect, { threshold: 0.25 });
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Mail,
      title: "Transfer Your Tickets",
      description: "Forward your ticket confirmation to our unique email address. It's that simple.",
      step: "1"
    },
    {
      icon: CheckCircle,
      title: "Approve Your Listing",
      description: "Our team verifies and approves your tickets for listing across multiple platforms.",
      step: "2"
    },
    {
      icon: DollarSign,
      title: "Get Paid Upon Sale",
      description: "Receive instant payment when your tickets sell. No waiting, no hassle.",
      step: "3"
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
        {/* Slide-in animation wrapper */}
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-12 opacity-0 -translate-x-16 slide-in-ltr"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full">
              {/* Card - Square aspect, step number badge top-left */}
              <Card
                className="relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-emerald-100 bg-white/90 backdrop-blur-sm scroll-reveal hover:bg-emerald-50/30 shadow-lg opacity-0 translate-y-8 animate-fade-up flex-1 aspect-square min-h-[330px] min-w-[230px] max-w-xs mx-auto"
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-emerald-500 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg shadow shadow-emerald-200 border-2 border-white">
                    {step.step}
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center justify-center h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative">
                      <step.icon className="h-8 w-8 sm:h-9 sm:w-9 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{step.description}</p>
                </CardContent>
              </Card>
              {/* Thicker and green Arrow between cards (except after last one) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex flex-shrink-0 ml-6 lg:ml-8">
                  <ArrowRight className="h-12 w-12 text-emerald-500 opacity-90" strokeWidth={3.5} />
                </div>
              )}
            </div>
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
