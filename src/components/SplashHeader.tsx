
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SplashHeader = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-blue-200/70 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg relative animate-bounce-once">
              <span className="text-white font-bold text-sm">SMS</span>
              <div className="absolute -top-1 -right-1 w-4 h-3 border-2 border-white rounded-sm bg-transparent"></div>
            </div>
            <div className="flex flex-col animate-bounce-once">
              <span className="text-xl font-bold text-blue-900">SellMySeats</span>
              <span className="text-xs text-blue-500 -mt-1 font-medium">SELL YOUR TICKETS</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-blue-600 hover:text-blue-900 font-medium">Features</a>
            <a href="#how-it-works" className="text-blue-600 hover:text-blue-900 font-medium">How It Works</a>
            <a href="#pricing" className="text-blue-600 hover:text-blue-900 font-medium">Pricing</a>
            <a href="#testimonials" className="text-blue-600 hover:text-blue-900 font-medium">Reviews</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SplashHeader;
