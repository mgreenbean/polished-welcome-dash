
import { User, Settings, CreditCard, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName } = useUser();

  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-2xl border-b border-blue-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg relative ${isHomePage ? 'animate-bounce-once' : ''}`}>
                <span className="text-white font-bold text-base">SMS</span>
                <div className="absolute -top-1 -right-1 w-4 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-sm transform rotate-12 shadow-sm"></div>
              </div>
              <div className={`flex flex-col ${isHomePage ? 'animate-bounce-once' : ''}`}>
                <span className="text-xl font-bold text-white">SellMySeats</span>
                <span className="text-xs text-blue-100 -mt-1 font-medium">Your ticket marketplace dashboard</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{userName.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{userName}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-200 shadow-xl z-50">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/dashboard">
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/analytics">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/payout-settings">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Payment Portal</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/support">
                    <User className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
