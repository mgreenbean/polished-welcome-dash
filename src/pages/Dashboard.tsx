
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Theme toggle in top right */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto py-8 px-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Welcome, {userName}!</h1>
          <p className="text-blue-600 font-medium">Here's your ticket selling dashboard overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-blue-900">Your Ticket Portfolio</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      Pending Review: 3
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Live Listings: 8
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Sold Tickets: 12
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="Search tickets, venues, locations..." 
                      className="pl-10 bg-slate-50 border-slate-200"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 font-medium">No recent activity</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transfer Email and Ticket Portfolio */}
        <div className="transform scale-95 origin-top">
          <InstantTransfer />
          <TicketPortfolio ticketData={ticketData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
