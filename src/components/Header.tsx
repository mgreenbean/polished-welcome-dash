
import { User, Settings, CreditCard, LogOut, ChevronDown, HelpCircle } from "lucide-react";
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
    <header className="bg-white shadow-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-xl relative ${isHomePage ? 'animate-bounce-once' : ''}`}>
                <span className="text-white font-bold text-base">SMS</span>
                <div className="absolute -top-1 -right-1 w-4 h-3 bg-blue-500 rounded-sm transform rotate-12 shadow-sm"></div>
              </div>
              <div className={`flex flex-col ${isHomePage ? 'animate-bounce-once' : ''}`}>
                <span className="text-xl font-bold text-slate-800">SellMySeats</span>
                <span className="text-xs text-blue-600 -mt-1 font-medium">SELL YOUR TICKETS</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-3 hover:bg-slate-100 transition-all duration-200 bg-white border-2 border-slate-300 px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 hidden sm:block">{userName}</span>
                  <ChevronDown className="h-4 w-4 text-slate-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-white shadow-xl border-2 border-slate-200 z-[9999]"
                sideOffset={5}
              >
                <DropdownMenuLabel className="text-slate-700">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50">
                  <Link to="/settings" className="flex items-center w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50">
                  <Link to="/payout-settings" className="flex items-center w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Payment Portal</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50">
                  <Link to="/support" className="flex items-center w-full">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleLogout} 
                  className="cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
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
