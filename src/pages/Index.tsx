
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Bell, User, BarChart3, Ticket, Calendar, Copy, Shield, Zap, Clock, Filter, RefreshCw, TrendingUp, DollarSign, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SeatlyHelper from "@/components/SeatlyHelper";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketInsightIndex, setMarketInsightIndex] = useState(0);
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
  const { toast } = useToast();
  const userName = "Michael Chen";

  const marketInsights = [
    {
      category: "NBA Finals",
      items: [
        { name: "Boston vs Dallas", trend: "up", change: "+24%" },
        { name: "Lakers Playoffs", trend: "up", change: "+18%" },
        { name: "Warriors Home Games", trend: "up", change: "+12%" }
      ]
    },
    {
      category: "Concerts",
      items: [
        { name: "Taylor Swift Eras", trend: "up", change: "+35%" },
        { name: "Olivia Rodrigo", trend: "up", change: "+22%" },
        { name: "Bad Bunny", trend: "up", change: "+19%" }
      ]
    },
    {
      category: "Broadway",
      items: [
        { name: "Hamilton", trend: "up", change: "+15%" },
        { name: "Lion King", trend: "up", change: "+8%" },
        { name: "Wicked", trend: "down", change: "-3%" }
      ]
    },
    {
      category: "Football",
      items: [
        { name: "Super Bowl", trend: "up", change: "+42%" },
        { name: "Chiefs vs Bills", trend: "up", change: "+28%" },
        { name: "Cowboys Home", trend: "up", change: "+16%" }
      ]
    }
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("greenbay31@bestfan.com");
      setJustCopied(true);
      toast({
        title: "🎉 Email Copied!",
        description: "Transfer email has been copied to your clipboard",
        duration: 3000,
      });
      
      setTimeout(() => setJustCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please select and copy the email manually",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const marketTimer = setInterval(() => {
      setMarketInsightIndex((prev) => (prev + 1) % marketInsights.length);
    }, 20000);
    return () => clearInterval(marketTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900">SellMySeats</span>
                  <span className="text-xs text-slate-500 -mt-1">SELL YOUR TICKETS</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-slate-900 font-medium border-b-2 border-rose-500 pb-4">Dashboard</a>
                <a href="#" className="text-slate-500 hover:text-slate-900 pb-4">My Listings</a>
                <a href="#" className="text-slate-500 hover:text-slate-900 pb-4">Analytics</a>
              </nav>
            </div>

            {/* Right side - Search, Actions, and User */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search events, venues..."
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm w-64 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white/70"
                />
              </div>
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Plus className="h-4 w-4 mr-2" />
                List Tickets
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-slate-100/50 transition-all duration-200 hover:scale-105">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center">3</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">{userName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Instant Ticket Transfer Section */}
        <Card className="mb-8 bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Instant Ticket Transfer</h2>
                <p className="text-slate-600">Send your tickets to our secure email for automatic processing and instant listing across all major marketplaces</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">Transfer Email Address</label>
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  value="greenbay31@bestfan.com"
                  readOnly
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg bg-slate-50/70 text-slate-900 font-mono text-sm"
                />
                <Button 
                  variant="outline" 
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 px-6 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 relative"
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setIsHoveringCopy(true)}
                  onMouseLeave={() => setIsHoveringCopy(false)}
                >
                  <Copy className={`h-4 w-4 mr-2 transition-transform duration-200 ${justCopied ? 'scale-125 text-green-600' : ''}`} />
                  {justCopied ? 'Copied!' : isHoveringCopy ? 'Copy' : 'Copy'}
                  {justCopied && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                  )}
                </Button>
              </div>
            </div>

            {/* Compact Trust Features */}
            <div className="flex items-center justify-center space-x-6 py-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200/50">
              <div className="flex items-center space-x-1.5">
                <Shield className="h-3.5 w-3.5 text-teal-600" />
                <span className="text-xs font-medium text-slate-700">Secure</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-600" />
                <span className="text-xs font-medium text-slate-700">Instant</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="h-3.5 w-3.5 text-indigo-600" />
                <span className="text-xs font-medium text-slate-700">24/7</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50 shadow-lg backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-800 mb-1">PENDING REVIEW</p>
                  <p className="text-2xl font-bold text-amber-900">1</p>
                  <p className="text-xs text-amber-600">Awaiting approval</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center shadow-md">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-amber-600">↗ 12%</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/50 shadow-lg backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-800 mb-1">ACTIVE LISTINGS</p>
                  <p className="text-2xl font-bold text-emerald-900">2</p>
                  <p className="text-xs text-emerald-600">Currently live</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-md">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-emerald-600">↗ 8%</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 shadow-lg backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800 mb-1">TOTAL SALES</p>
                  <p className="text-2xl font-bold text-blue-900">47</p>
                  <p className="text-xs text-blue-600">Tickets sold</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-md">
                  <Ticket className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-blue-600">↗ 15%</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 shadow-lg backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-violet-800 mb-1">REVENUE</p>
                  <p className="text-2xl font-bold text-violet-900">$12,450</p>
                  <p className="text-xs text-violet-600">This month</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center shadow-md">
                  <DollarSign className="h-5 w-5 text-violet-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-violet-600">↗ 23%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Ticket Portfolio */}
          <div className="lg:col-span-3">
            <Card className="border-2 border-dashed border-slate-300/50 bg-white/60 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Ticket className="h-5 w-5" />
                    <span>Your Ticket Portfolio</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Tickets
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-600">Pending Review</span>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">1</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-600">Live Listings</span>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">2</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-600">Sold Tickets</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">47</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Ticket shaped card */}
                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-slate-200/50 rounded-lg p-6 mb-4 shadow-lg">
                  {/* Ticket notches */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-200"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-200"></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-amber-100 text-amber-800">PENDING REVIEW</Badge>
                        <span className="text-sm text-slate-500">Expires in 2 days</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">NBA FINALS: TBD AT KNICKS RD 4 HM GM 3</h3>
                      <p className="text-sm text-slate-600 mb-2">Madison Square Garden</p>
                      <p className="text-sm text-slate-500">New York, NY</p>
                      <div className="flex items-center space-x-1 text-sm text-slate-500 mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>TBD 2024</span>
                      </div>
                    </div>
                    
                    <div className="text-center border-l border-dashed border-slate-300 pl-6 ml-6">
                      <div className="text-2xl font-bold text-slate-900 mb-1">$450</div>
                      <p className="text-sm text-slate-500 mb-4">each</p>
                      
                      <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                        <div>
                          <p className="text-slate-500">SECTION</p>
                          <p className="font-semibold">213</p>
                        </div>
                        <div>
                          <p className="text-slate-500">ROW</p>
                          <p className="font-semibold">18</p>
                        </div>
                        <div>
                          <p className="text-slate-500">SEATS</p>
                          <p className="font-semibold">11, 12</p>
                        </div>
                        <div>
                          <p className="text-slate-500">QTY</p>
                          <p className="font-semibold">2</p>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                        APPROVE & LIST
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Market Insights */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  <Plus className="h-4 w-4 mr-2" />
                  List New Tickets
                </Button>
                <Button variant="outline" className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  Market Insights
                  <span className="text-xs text-slate-500 font-normal">Live Data</span>
                </CardTitle>
                <p className="text-sm text-slate-600">{marketInsights[marketInsightIndex].category}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {marketInsights[marketInsightIndex].items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{item.name}</span>
                    <div className={`flex items-center space-x-1 ${item.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {item.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-sm font-semibold">{item.change}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Seatly Helper Widget */}
      <SeatlyHelper />
    </div>
  );
};

export default Index;
