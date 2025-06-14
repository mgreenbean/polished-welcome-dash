
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InteractivePortfolio from "./InteractivePortfolio";

const HeroSection = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [currentTicketType, setCurrentTicketType] = useState(0);
  const ticketTypes = ["Event tickets", "Extra tickets", "Yankees Tickets", "Concert Tickets", "MSG Tickets", "US Open Tickets"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTicketType(prev => (prev + 1) % ticketTypes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [ticketTypes.length]);

  const scrollToComparison = () => {
    const element = document.getElementById('comparison');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-emerald-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full text-center">
          {/* Centered Hero Text */}
          <div className="animate-fade-in space-y-8 sm:space-y-10 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Trusted by 10,000+ ticket sellers
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight max-w-5xl mx-auto">
              <span className="block mb-4">Can't make the event?</span>
              <span className="block">
                We'll sell your{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text glow-text">
                  <span key={currentTicketType} className="animate-slide-fade-in">
                    {ticketTypes[currentTicketType]}
                  </span>
                </span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              Your tickets get maximum exposure on the biggest resale sites - all managed by us, for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-lg px-10 py-6 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-2xl border-0 rounded-full">
                  Start Selling Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/10 text-lg px-10 py-6 hover:scale-105 transition-all duration-300 font-semibold rounded-full" onClick={() => setShowDemoModal(true)}>
                Watch Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8">
              <Link to="/login" className="text-slate-300 hover:text-white underline text-base font-medium transition-colors">
                Already a user? Login
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-base text-slate-300">
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400 text-lg">✓</span>
                <span className="font-medium">No listing fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400 text-lg">✓</span>
                <span className="font-medium">24/7 support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400 text-lg">✓</span>
                <span className="font-medium">Instant payouts</span>
              </div>
            </div>
          </div>
          
          {/* Portfolio Section Below Text */}
          <div className="relative flex justify-center animate-scale-in">
            <div className="max-w-md">
              <InteractivePortfolio />
            </div>
          </div>
        </div>

        {/* Learn More button */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToComparison}
            className="bg-white/5 backdrop-blur-md border-2 border-emerald-400/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg hover:border-emerald-400/50"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] relative shadow-2xl border border-gray-200 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"></div>
            <button onClick={() => setShowDemoModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all">
              <X className="h-5 w-5" />
            </button>
            <div className="p-8 pt-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Product Demo</h3>
              <p className="text-gray-600 mb-8">See how SellMySeats works for you</p>
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl aspect-video flex items-center justify-center border border-blue-100">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full p-6 mx-auto mb-6 w-24 h-24 flex items-center justify-center shadow-lg">
                    <Play className="h-12 w-12 text-white ml-1" />
                  </div>
                  <p className="text-gray-700 text-xl font-semibold mb-2">Demo video coming soon...</p>
                  <p className="text-gray-500 text-base">Watch how SellMySeats works in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </>;
};

export default HeroSection;
