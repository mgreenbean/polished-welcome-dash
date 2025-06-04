import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-blue-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900">SellMySeats</span>
                <span className="text-xs text-blue-500 -mt-1 font-medium">SELL YOUR TICKETS</span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`pb-4 font-medium ${
                  isActive("/") 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-600" 
                    : "text-blue-500 hover:text-blue-900"
                }`}
              >
                Dashboard
              </Link>
              <a href="#" className="text-blue-500 hover:text-blue-900 pb-4 font-medium">My Listings</a>
              <Link 
                to="/analytics" 
                className={`pb-4 font-medium ${
                  isActive("/analytics") 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-600" 
                    : "text-blue-500 hover:text-blue-900"
                }`}
              >
                Analytics
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="sm" className="relative hover:bg-blue-100/50 transition-all duration-200 hover:scale-105">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center font-semibold">3</span>
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-700 hidden sm:block">{userName}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
