
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InteractivePortfolio from "./InteractivePortfolio";

const HeroSection = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [currentTicketType, setCurrentTicketType] = useState(0);
  const ticketTypes = ["Yankees Tickets", "Concert Tickets", "MSG Tickets", "US Open Tickets", "Extra Tickets"];

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
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in space-y-8 sm:space-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Can't make the event?</span>
                <span className="block">We'll sell your{" "}
                  <span className="text-emerald-400 glow-text inline-block relative">
                    <span key={currentTicketType} className="animate-slide-fade-in">
                      {ticketTypes[currentTicketType]}
                    </span>
                  </span>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Your tickets get maximum exposure on the biggest resale sites - all managed by us, for you.
              </p>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/register">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-4 hover:scale-105 transition-all duration-200 text-white font-semibold shadow-lg">
                    Start Selling Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 hover:scale-105 transition-all duration-200 font-semibold" onClick={() => setShowDemoModal(true)}>
                  Show Demo
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8">
                <Link to="/login" className="text-white/90 hover:text-white underline text-base font-medium">
                  Already a user? Login
                </Link>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-base text-blue-100">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 text-lg">✓</span>
                    <span className="font-medium">No listing fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400 text-lg">✓</span>
                    <span className="font-medium">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0 flex justify-center">
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
            className="bg-white/10 backdrop-blur-md border-2 border-emerald-400/50 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-full shadow-lg font-bold text-lg"
            style={{
              boxShadow: '0 0 20px rgba(52, 211, 153, 0.4), 0 0 40px rgba(52, 211, 153, 0.2)',
            }}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] relative shadow-2xl border border-gray-200 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500"></div>
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
