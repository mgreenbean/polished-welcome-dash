
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Can't make the event?<br />
              We'll sell your seats - <span className="text-emerald-500">Fast.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your unused tickets into profit with our AI-powered marketplace. 
              Get instant listings across all major platforms with zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 hover:scale-105 transition-all duration-200">
                  Start Selling Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span>Average 15% profit increase</span>
              </div>
              <div>✓ No listing fees</div>
              <div>✓ 24/7 support</div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-200/50">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-300 to-emerald-300 rounded animate-pulse"></div>
                <div className="h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-blue-100 rounded"></div>
                  <div className="h-16 bg-emerald-100 rounded"></div>
                  <div className="h-16 bg-amber-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
