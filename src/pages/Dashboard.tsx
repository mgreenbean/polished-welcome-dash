
import Header from "@/components/Header";
import TicketPortfolio from "@/components/TicketPortfolio";
import InstantTransfer from "@/components/InstantTransfer";
import ThemeToggle from "@/components/ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ticketData } from "@/data/ticketData";
import { useUser } from "@/contexts/UserContext";
import { DollarSign, TrendingUp, Clock, Activity, RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const { userName } = useUser();

  const stats = [
    {
      title: "Total Earned",
      value: "$4,250",
      subtitle: "+12% from last month",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Pending Payouts",
      value: "$890",
      subtitle: "3 transactions processing",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Last Payout",
      value: "$1,250",
      subtitle: "5 days ago",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "This Month",
      value: "$2,100",
      subtitle: "+25% vs last month",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <Header />
      
      {/* Theme toggle in top right */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome, {userName}!</h1>
          <p className="text-blue-600 font-medium">Here's your ticket selling dashboard overview</p>
        </div>

        {/* Transfer Email Section */}
        <div className="mb-8">
          <Card className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">📧</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Your Transfer Email</h2>
                  <p className="text-slate-600 font-medium">Send your tickets to your unique email for automatic processing and instant listing across all major marketplaces</p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Transfer Email Address</label>
                <div className="flex space-x-3">
                  <input 
                    type="email" 
                    value="greenbay31@bestfan.com"
                    readOnly
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50/70 text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300"
                  />
                  <Button 
                    variant="outline" 
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 font-medium"
                  >
                    Copy
                  </Button>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Forward your ticket confirmation email</h4>
                      <p className="text-sm text-slate-600">Send your ticket email to the address above</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Our system automatically extracts the ticket details</h4>
                      <p className="text-sm text-slate-600">AI processes your tickets instantly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Your tickets appear in your dashboard for review and go live instantly</h4>
                      <p className="text-sm text-slate-600">Review and approve for instant listing</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Portfolio and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Ticket Portfolio */}
          <div className="lg:col-span-3">
            <Card className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Your Ticket Portfolio</span>
                    <span className="text-blue-600 text-sm font-normal">ℹ️</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="Search tickets, venues, locations..." 
                      className="pl-10 bg-slate-50/50 border-slate-200 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-0 mt-4">
                  <div className="bg-amber-50 border-2 border-amber-200 text-slate-700 px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2">
                    <span className="font-medium">Pending Review</span>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200">1</Badge>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3 border-l-0 flex items-center justify-center space-x-2">
                    <span className="font-medium">Live Listings</span>
                    <Badge className="bg-green-100 text-green-800 border-green-200">8</Badge>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2">
                    <span className="font-medium">Sold Tickets</span>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">2</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Sample Ticket */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-3">PENDING REVIEW</Badge>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Coldplay: Music Of The Spheres World Tour</h3>
                      <p className="text-blue-600 font-medium mb-1">Rogers Stadium, Toronto, ON</p>
                      <div className="flex items-center space-x-1 text-sm text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>7/12/2025</span>
                      </div>
                    </div>
                    <div className="text-center border-l border-dashed border-slate-300 pl-6 ml-6">
                      <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                        <div>
                          <p className="text-slate-500 font-medium">SECTION</p>
                          <p className="font-semibold text-slate-900">GA21</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">ROW</p>
                          <p className="font-semibold text-slate-900">20</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">SEATS</p>
                          <p className="font-semibold text-slate-900">General Admission</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">QTY</p>
                          <p className="font-semibold text-slate-900">1</p>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                        APPROVE & LIST
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <Card className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-900">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">$</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">Ticket Sold</p>
                      <p className="text-sm text-slate-600">Sample Concert B - $80</p>
                      <p className="text-xs text-slate-500">Jun 16, 6:16 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">$</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">Ticket Sold</p>
                      <p className="text-sm text-slate-600">Sample Concert A - $120</p>
                      <p className="text-xs text-slate-500">Jun 16, 4:16 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👁</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">Ticket Listed</p>
                      <p className="text-sm text-slate-600">Real Example is now live</p>
                      <p className="text-xs text-slate-500">Jun 16, 3:46 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
