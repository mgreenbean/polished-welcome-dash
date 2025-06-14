import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SplashHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`bg-white/90 backdrop-blur-sm shadow-lg border-b border-blue-200/70 fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}>
          <div className="flex items-center space-x-3">
            <div className={`bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg relative animate-bounce-once transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10 sm:w-12 sm:h-12'}`}>
              <span className={`text-white font-bold transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm sm:text-base'}`}>SMS</span>
              <div className={`absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm transform rotate-12 shadow-sm transition-all duration-300 ${isScrolled ? 'w-2 h-2' : 'w-3 h-3 sm:w-4 sm:h-3'}`}></div>
            </div>
            <div className="flex flex-col animate-bounce-once">
              <span className={`font-bold text-blue-900 transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg sm:text-xl'}`}>SellMySeats</span>
              <span className={`text-blue-500 -mt-1 font-medium transition-all duration-300 ${isScrolled ? 'text-xs hidden' : 'text-xs hidden sm:block'}`}>CONSIGN YOUR TICKETS</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <a href="#how-it-works" className={`text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-sm lg:text-base'}`}>How It Works</a>
            <a href="#features" className={`text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-sm lg:text-base'}`}>Features</a>
            <a href="#pricing" className={`text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-sm lg:text-base'}`}>Pricing</a>
            <a href="#testimonials" className={`text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-sm lg:text-base'}`}>Reviews</a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/login">
              <Button variant="outline" className={`border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300 ${isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2 sm:px-4 sm:py-2'}`}>
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className={`bg-blue-600 hover:bg-blue-700 font-semibold transition-all duration-300 ${isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2 sm:px-4 sm:py-2'}`}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>;
};
export default SplashHeader;