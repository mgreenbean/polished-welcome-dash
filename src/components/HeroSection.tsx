
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import InteractivePortfolio from "./InteractivePortfolio";

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Can't make the event?<br />
              <span className="block mt-2">We'll sell your seats - </span>
              <span className="text-green-400 font-bold animate-flash">Fast</span>.
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your unused tickets into profit with our AI-powered marketplace. 
              Get instant listings across all major platforms with zero hassle.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-6 sm:mb-8">
              <Link to="/register" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-200 text-white font-semibold"
                >
                  Start Selling Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link 
                to="/login" 
                className="text-white hover:text-blue-100 underline text-sm font-medium transition-colors duration-200"
              >
                Already a user? Login
              </Link>
            </div>

            {/* Features List */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="font-medium">Average 15% profit increase</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="font-medium">No listing fees</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="font-medium">24/7 support</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Demo Section */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md">
              <InteractivePortfolio />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
