
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DollarSign, TrendingUp, Eye, Clock, Ticket, Bell, Settings, User } from "lucide-react";

const InteractivePortfolio = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentStats, setCurrentStats] = useState(0);

  const statsData = [
    { label: "Monthly Revenue", value: "$12,450", change: "+18%", icon: DollarSign, color: "text-green-600" },
    { label: "Active Listings", value: "7", change: "+3", icon: Ticket, color: "text-blue-600" },
    { label: "Total Views", value: "1,247", change: "+24%", icon: Eye, color: "text-purple-600" },
    { label: "Avg Sell Time", value: "3.2 days", change: "-0.8", icon: Clock, color: "text-orange-600" }
  ];

  const recentActivity = [
    { event: "Lakers vs Warriors", status: "Sold", price: "$380", time: "2 hours ago", color: "bg-green-100 text-green-800" },
    { event: "Taylor Swift Concert", status: "Listed", price: "$850", time: "5 hours ago", color: "bg-blue-100 text-blue-800" },
    { event: "Hamilton Broadway", status: "Pending", price: "$285", time: "1 day ago", color: "bg-amber-100 text-amber-800" }
  ];

  // Auto-cycle through stats every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStats((prev) => (prev + 1) % statsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [statsData.length, isAutoPlaying]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <TooltipProvider>
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-200/50 animate-scale-in w-full max-w-lg mx-auto">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-sm">Michael Chen</h3>
              <p className="text-xs text-blue-600">Premium Member</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bell className="h-4 w-4 text-blue-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <Settings className="h-4 w-4 text-blue-600" />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 gap-3">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                    currentStats === index ? 'ring-2 ring-blue-300 shadow-lg' : 'hover:shadow-md opacity-80'
                  }`}
                  onClick={handleInteraction}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-slate-600">{stat.label}</p>
                        <p className="text-lg font-bold text-blue-900">{stat.value}</p>
                        <p className={`text-xs font-medium ${stat.color}`}>{stat.change}</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                        <Icon className={`h-4 w-4 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-blue-50 rounded-lg p-1">
            {['overview', 'tickets', 'analytics'].map((view) => (
              <button
                key={view}
                onClick={() => {
                  setSelectedView(view);
                  handleInteraction();
                }}
                className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 ${
                  selectedView === view 
                    ? 'bg-white text-blue-700 shadow-sm' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Selected View */}
          {selectedView === 'overview' && (
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-blue-900 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-blue-900 truncate">{activity.event}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={`text-xs ${activity.color}`}>{activity.status}</Badge>
                        <span className="text-xs text-slate-500">{activity.time}</span>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-green-600">{activity.price}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {selectedView === 'tickets' && (
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-blue-900 flex items-center space-x-2">
                  <Ticket className="h-4 w-4" />
                  <span>Active Tickets</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-xs font-medium text-blue-900">Lakers vs Warriors</p>
                    <p className="text-xs text-slate-600">Section 115 • Dec 15</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-600">$380</p>
                    <Badge className="text-xs bg-emerald-100 text-emerald-800">Live</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-xs font-medium text-blue-900">NBA Finals Game</p>
                    <p className="text-xs text-slate-600">Section 213 • TBD</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-amber-600">$525</p>
                    <Badge className="text-xs bg-amber-100 text-amber-800">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedView === 'analytics' && (
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-blue-900 flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Success Rate</span>
                  <span className="text-sm font-bold text-green-600">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Avg Markup</span>
                  <span className="text-sm font-bold text-blue-600">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Total Profit</span>
                  <span className="text-sm font-bold text-emerald-600">$2,340</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs">
              Add Tickets
            </Button>
            <Button size="sm" variant="outline" className="flex-1 text-xs border-blue-300 text-blue-700 hover:bg-blue-50">
              View All
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default InteractivePortfolio;
