
import { Bell, User, Settings, CreditCard, LogOut } from "lucide-react";
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
  const { userName, notifications, notificationCount } = useUser();

  const isActive = (path: string) => {
    if (path === "/dashboard" && location.pathname === "/dashboard") return true;
    if (path !== "/dashboard" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-blue-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg relative ${isHomePage ? 'animate-bounce-once' : ''}`}>
                <span className="text-white font-bold text-sm">SMS</span>
                <div className="absolute -top-1 -right-1 w-4 h-3 border-2 border-white rounded-sm bg-transparent"></div>
              </div>
              <div className={`flex flex-col ${isHomePage ? 'animate-bounce-once' : ''}`}>
                <span className="text-xl font-bold text-blue-900">SellMySeats</span>
                <span className="text-xs text-blue-500 -mt-1 font-medium">SELL YOUR TICKETS</span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link 
                to="/dashboard" 
                className={`py-4 font-medium ${
                  isActive("/dashboard") 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-600" 
                    : "text-blue-500 hover:text-blue-900"
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/analytics" 
                className={`py-4 font-medium ${
                  isActive("/analytics") 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-600" 
                    : "text-blue-500 hover:text-blue-900"
                }`}
              >
                Analytics
              </Link>
              <Link 
                to="/support" 
                className={`py-4 font-medium ${
                  isActive("/support") 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-600" 
                    : "text-blue-500 hover:text-blue-900"
                }`}
              >
                Support
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative hover:bg-blue-100/50 transition-all duration-200 hover:scale-105">
                    <Bell className="h-4 w-4" />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center font-semibold">
                        {notificationCount}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 cursor-pointer">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium text-sm">{notification.title}</span>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <div className={`mt-2 px-2 py-1 rounded-full text-xs ${
                          notification.type === 'pending' ? 'bg-amber-100 text-amber-800' :
                          notification.type === 'success' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {notification.type === 'pending' ? 'Pending Review' : 
                           notification.type === 'success' ? 'Success' : 'Info'}
                        </div>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <DropdownMenuItem className="p-4">
                      <span className="text-gray-500">No notifications</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-3 hover:bg-blue-100/50 transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-blue-700 hidden sm:block">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/payout-settings">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Payout Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
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
