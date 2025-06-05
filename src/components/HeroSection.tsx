
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import InteractivePortfolio from "./InteractivePortfolio";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Can't make the event?<br />
              We'll sell your seats - <span className="text-green-400 font-extrabold bg-green-400 text-green-900 px-2 py-1 rounded shadow-lg">Fast</span>.
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your unused tickets into profit with our AI-powered marketplace. 
              Get instant listings across all major platforms with zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/register">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-4 hover:scale-105 transition-all duration-200 text-white">
                  Start Selling Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login" className="text-white hover:text-blue-100 underline text-sm mt-2 sm:mt-0 sm:ml-4 flex items-center">
                Already a user? Login
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span>Average 15% profit increase</span>
              </div>
              <div>✓ No listing fees</div>
              <div>✓ 24/7 support</div>
            </div>
          </div>
          
          <div className="relative">
            <InteractivePortfolio />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
