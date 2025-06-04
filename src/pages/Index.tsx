import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Bell, User, BarChart3, Ticket, Calendar, Copy, Clock, Filter, RefreshCw, TrendingUp, DollarSign, TrendingDown } from "lucide-react";
import SeatlyHelper from "@/components/SeatlyHelper";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketInsightIndex, setMarketInsightIndex] = useState(0);
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'pending' | 'live' | 'sold'>('pending');
  const userName = "Michael Chen";

  const ticketData = {
    pending: [
      {
        id: 1,
        title: "NBA FINALS: TBD AT KNICKS RD 4 HM GM 3",
        venue: "Madison Square Garden",
        location: "New York, NY",
        date: "TBD 2024",
        marketPrice: 525,
        yourPrice: 450,
        section: "213",
        row: "18",
        seats: "11, 12",
        qty: 2,
        status: "PENDING REVIEW",
        statusColor: "amber",
        expiresIn: "2 days"
      }
    ],
    live: [
      {
        id: 2,
        title: "LAKERS VS WARRIORS",
        venue: "Crypto.com Arena",
        location: "Los Angeles, CA",
        date: "Dec 15, 2024",
        marketPrice: 380,
        yourPrice: 350,
        section: "115",
        row: "12",
        seats: "5, 6",
        qty: 2,
        status: "LIVE LISTING",
        statusColor: "emerald",
        views: "127 views today"
      },
      {
        id: 3,
        title: "TAYLOR SWIFT ERAS TOUR",
        venue: "SoFi Stadium",
        location: "Los Angeles, CA",
        date: "Jan 20, 2025",
        marketPrice: 850,
        yourPrice: 800,
        section: "C2",
        row: "8",
        seats: "15, 16",
        qty: 2,
        status: "LIVE LISTING",
        statusColor: "emerald",
        views: "43 views today"
      }
    ],
    sold: [
      {
        id: 4,
        title: "CHIEFS VS BILLS",
        venue: "Arrowhead Stadium",
        location: "Kansas City, MO",
        date: "Nov 20, 2024",
        marketPrice: 290,
        soldPrice: 275,
        section: "129",
        row: "25",
        seats: "7, 8",
        qty: 2,
        status: "SOLD",
        statusColor: "blue",
        soldDate: "Nov 18, 2024"
      }
    ]
  };

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
      setTimeout(() => setJustCopied(false), 2000);
    } catch (err) {
      console.log("Copy failed");
    }
  };

  const renderTicketCard = (ticket: any) => {
    const getStatusBadgeClass = (color: string) => {
      const baseClass = "px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide";
      switch (color) {
        case 'amber':
          return `${baseClass} bg-amber-100 text-amber-800`;
        case 'emerald':
          return `${baseClass} bg-emerald-100 text-emerald-800`;
        case 'blue':
          return `${baseClass} bg-blue-100 text-blue-800`;
        default:
          return `${baseClass} bg-slate-100 text-slate-800`;
      }
    };

    const getButtonClass = (color: string) => {
      switch (color) {
        case 'amber':
          return "w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black";
        case 'emerald':
          return "w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black";
        case 'blue':
          return "w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black";
        default:
          return "w-full bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black";
      }
    };

    return (
      <div key={ticket.id} className="relative bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 rounded-lg p-6 mb-4 shadow-xl">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-200"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-200"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={getStatusBadgeClass(ticket.statusColor)}>{ticket.status}</Badge>
              {ticket.expiresIn && <span className="text-sm text-slate-500 font-black">Expires in {ticket.expiresIn}</span>}
              {ticket.views && <span className="text-sm text-slate-500 font-black">{ticket.views}</span>}
              {ticket.soldDate && <span className="text-sm text-slate-500 font-black">Sold on {ticket.soldDate}</span>}
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-1">{ticket.title}</h3>
            <p className="text-sm text-slate-600 mb-2 font-black">{ticket.venue}</p>
            <p className="text-sm text-slate-500 font-black">{ticket.location}</p>
            <div className="flex items-center space-x-1 text-sm text-slate-500 mt-2">
              <Calendar className="h-4 w-4" />
              <span className="font-black">{ticket.date}</span>
            </div>
          </div>
          
          <div className="text-center border-l border-dashed border-slate-300 pl-6 ml-6">
            <div className="text-2xl font-black text-slate-900 mb-1">
              ${ticket.soldPrice || ticket.marketPrice}
            </div>
            <p className="text-sm text-slate-500 mb-1 font-black">
              {ticket.soldPrice ? 'sold price' : 'market price'}
            </p>
            {ticket.yourPrice && (
              <p className="text-xs text-slate-400 mb-4 font-black">your price: ${ticket.yourPrice}</p>
            )}
            
            <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
              <div>
                <p className="text-slate-500 font-black">SECTION</p>
                <p className="font-black">{ticket.section}</p>
              </div>
              <div>
                <p className="text-slate-500 font-black">ROW</p>
                <p className="font-black">{ticket.row}</p>
              </div>
              <div>
                <p className="text-slate-500 font-black">SEATS</p>
                <p className="font-black">{ticket.seats}</p>
              </div>
              <div>
                <p className="text-slate-500 font-black">QTY</p>
                <p className="font-black">{ticket.qty}</p>
              </div>
            </div>
            
            <Button className={getButtonClass(ticket.statusColor)}>
              {ticket.status === 'PENDING REVIEW' && 'APPROVE & LIST'}
              {ticket.status === 'LIVE LISTING' && 'MANAGE LISTING'}
              {ticket.status === 'SOLD' && 'VIEW DETAILS'}
            </Button>
          </div>
        </div>
      </div>
    );
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-slate-900">SellMySeats</span>
                  <span className="text-xs text-slate-500 -mt-1 font-black">SELL YOUR TICKETS</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-slate-900 font-black border-b-2 border-slate-600 pb-4">Dashboard</a>
                <a href="#" className="text-slate-500 hover:text-slate-900 pb-4 font-black">My Listings</a>
                <a href="#" className="text-slate-500 hover:text-slate-900 pb-4 font-black">Analytics</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search events, venues..."
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm w-64 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white/70 font-black"
                />
              </div>
              <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black">
                <Plus className="h-4 w-4 mr-2" />
                List Tickets
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-slate-100/50 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center font-black">3</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-sm font-black text-slate-700 hidden sm:block">{userName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Instant Ticket Transfer Section */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-slate-300/50 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Instant Ticket Transfer</h2>
                <p className="text-slate-600 font-black">Send your tickets to our secure email for automatic processing and instant listing across all major marketplaces</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-black text-slate-700 mb-3">Transfer Email Address</label>
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  value="greenbay31@bestfan.com"
                  readOnly
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg bg-slate-50/70 text-slate-900 font-mono text-sm font-black"
                />
                <Button 
                  variant="outline" 
                  className="border-slate-400 text-slate-700 hover:bg-slate-100 px-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 relative font-black"
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
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50 shadow-xl backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-amber-800 mb-1">PENDING REVIEW</p>
                  <p className="text-2xl font-black text-amber-900">1</p>
                  <p className="text-xs text-amber-600 font-black">Awaiting approval</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-amber-600 font-black">↗ 12%</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/50 shadow-xl backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-emerald-800 mb-1">ACTIVE LISTINGS</p>
                  <p className="text-2xl font-black text-emerald-900">2</p>
                  <p className="text-xs text-emerald-600 font-black">Currently live</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-emerald-600 font-black">↗ 8%</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 shadow-xl backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-blue-800 mb-1">TOTAL SALES</p>
                  <p className="text-2xl font-black text-blue-900">47</p>
                  <p className="text-xs text-blue-600 font-black">Tickets sold</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-lg">
                  <Ticket className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-blue-600 font-black">↗ 15%</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-300/50 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-700 mb-1">REVENUE</p>
                  <p className="text-2xl font-black text-slate-900">$12,450</p>
                  <p className="text-xs text-slate-600 font-black">This month</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center shadow-lg">
                  <DollarSign className="h-5 w-5 text-slate-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-600 font-black">↗ 23%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Ticket Portfolio */}
          <div className="lg:col-span-3">
            <Card className="border-2 border-dashed border-slate-300/50 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Ticket className="h-5 w-5" />
                    <span className="font-black">Your Ticket Portfolio</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Tickets
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-6 text-sm">
                  <button 
                    onClick={() => setActiveFilter('pending')}
                    className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg ${
                      activeFilter === 'pending' 
                        ? 'bg-amber-200 text-amber-900 ring-2 ring-amber-300' 
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    } px-3 py-2 rounded-lg`}
                  >
                    <span className="text-slate-600 font-black">Pending Review</span>
                    <span className="bg-amber-300 text-amber-900 px-2 py-1 rounded-full text-xs font-black">
                      1
                    </span>
                  </button>
                  <button 
                    onClick={() => setActiveFilter('live')}
                    className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg ${
                      activeFilter === 'live' 
                        ? 'bg-emerald-200 text-emerald-900 ring-2 ring-emerald-300' 
                        : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                    } px-3 py-2 rounded-lg`}
                  >
                    <span className="text-slate-600 font-black">Live Listings</span>
                    <span className="bg-emerald-300 text-emerald-900 px-2 py-1 rounded-full text-xs font-black">
                      2
                    </span>
                  </button>
                  <button 
                    onClick={() => setActiveFilter('sold')}
                    className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg ${
                      activeFilter === 'sold' 
                        ? 'bg-blue-200 text-blue-900 ring-2 ring-blue-300' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    } px-3 py-2 rounded-lg`}
                  >
                    <span className="text-slate-600 font-black">Sold Tickets</span>
                    <span className="bg-blue-300 text-blue-900 px-2 py-1 rounded-full text-xs font-black">
                      47
                    </span>
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                {ticketData[activeFilter].map(ticket => renderTicketCard(ticket))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Market Insights */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-black">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black">
                  <Plus className="h-4 w-4 mr-2" />
                  List New Tickets
                </Button>
                <Button variant="outline" className="w-full border-slate-400 text-slate-700 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-black">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between font-black">
                  Market Insights
                  <span className="text-xs text-slate-500 font-black">Live Data</span>
                </CardTitle>
                <p className="text-sm text-slate-600 font-black">{marketInsights[marketInsightIndex].category}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {marketInsights[marketInsightIndex].items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 font-black">{item.name}</span>
                    <div className={`flex items-center space-x-1 ${item.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {item.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-sm font-black">{item.change}</span>
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
