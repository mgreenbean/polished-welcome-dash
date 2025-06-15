
import { ArrowRight } from "lucide-react";
import React from "react";

interface HowItWorksArrowProps {
  className?: string;
}

const HowItWorksArrow: React.FC<HowItWorksArrowProps> = ({ className }) => (
  <div className={className ? className : "hidden md:flex flex-shrink-0 ml-6 lg:ml-8"}>
    <ArrowRight className="h-12 w-12 text-emerald-500 opacity-90" strokeWidth={3.5} />
  </div>
);

export default HowItWorksArrow;
