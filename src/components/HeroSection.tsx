
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Play } from "lucide-react";
import { Link } from "react-router-dom";
import InteractivePortfolio from "./InteractivePortfolio";

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Can't make the event?<br />
              We'll sell your seats - <span className="text-green-400 font-bold animate-flash">Fast</span>.
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Transform your unused tickets into profit with our AI-powered marketplace. 
              Get instant listings across all major platforms with zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-200 text-white font-semibold">
                  Start Selling Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-200 font-semibold">
                  Show Demo
                  <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link to="/login" className="text-white hover:text-blue-100 underline text-sm font-medium">
                Already a user? Login
              </Link>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="font-medium">Average 15% profit increase</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="text-emerald-400">✓</span>
                  <span className="font-medium">No listing fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-emerald-400">✓</span>
                  <span className="font-medium">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 flex justify-center">
            <InteractivePortfolio />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
