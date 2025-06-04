
import { Search, Bell, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-blue-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900">SellMySeats</span>
                <span className="text-xs text-blue-500 -mt-1 font-medium">SELL YOUR TICKETS</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-900 font-semibold border-b-2 border-blue-600 pb-4">Dashboard</a>
              <a href="#" className="text-blue-500 hover:text-blue-900 pb-4 font-medium">My Listings</a>
              <a href="#" className="text-blue-500 hover:text-blue-900 pb-4 font-medium">Analytics</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <input 
                type="text" 
                placeholder="Search events, venues..."
                className="pl-10 pr-4 py-2 border border-blue-300 rounded-lg text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70"
              />
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">This Month</span>
              <span className="text-xs text-blue-600">earnings period</span>
            </div>
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
