
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Clock, DollarSign, Eye, Ticket } from "lucide-react";
import { useState, useEffect } from "react";

interface MarketInsight {
  category: string;
  items: Array<{
    name: string;
    trend: string;
    change: string;
  }>;
}

interface TicketData {
  pending: Array<{
    id: number;
    title: string;
    venue: string;
    location: string;
    date: string;
    marketPrice: number;
    yourPrice: number;
    section: string;
    row: string;
    seats: string;
    qty: number;
    status: string;
    statusColor: string;
    expiresIn?: string;
  }>;
  live: Array<{
    id: number;
    title: string;
    venue: string;
    location: string;
    date: string;
    marketPrice: number;
    yourPrice: number;
    section: string;
    row: string;
    seats: string;
    qty: number;
    status: string;
    statusColor: string;
    views?: string;
  }>;
  sold: Array<{
    id: number;
    title: string;
    venue: string;
    location: string;
    date: string;
    marketPrice: number;
    soldPrice: number;
    section: string;
    row: string;
    seats: string;
    qty: number;
    status: string;
    statusColor: string;
    soldDate: string;
  }>;
}

interface SidebarProps {
  marketInsights: MarketInsight[];
  marketInsightIndex: number;
  ticketData?: TicketData;
}

const Sidebar = ({ marketInsights, marketInsightIndex, ticketData }: SidebarProps) => {
  const [isMonthlyView, setIsMonthlyView] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // Update timestamp every 30 seconds to simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate stats from ticket data
  const pendingCount = ticketData?.pending.length || 0;
  const liveCount = ticketData?.live.length || 0;
  const totalRevenue = ticketData?.sold.reduce((sum, ticket) => sum + ticket.soldPrice, 0) || 0;
  
  // Calculate weekly revenue (assuming 75% of total for demo)
  const weeklyRevenue = Math.floor(totalRevenue * 0.75);
  const displayRevenue = isMonthlyView ? totalRevenue : weeklyRevenue;
  const revenueLabel = isMonthlyView ? "Monthly Revenue" : "Weekly Revenue";

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="lg:col-span-1 space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-blue-900 flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Ticket className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-900">Pending Review</span>
            </div>
            <span className="text-sm text-amber-600 font-semibold">{pendingCount}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900">Live Listings</span>
            </div>
            <span className="text-sm text-emerald-600 font-semibold">{liveCount}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-blue-900">{revenueLabel}</span>
                <button 
                  onClick={() => setIsMonthlyView(!isMonthlyView)}
                  className="text-xs text-blue-600 hover:text-blue-800 underline text-left mt-1 cursor-pointer"
                >
                  Switch to {isMonthlyView ? 'Weekly' : 'Monthly'}
                </button>
              </div>
            </div>
            <span className="text-sm text-blue-600 font-semibold">${displayRevenue.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between font-bold text-blue-900">
            Market Insights
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-500 font-medium">Live Data</span>
            </div>
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-600 font-semibold">{marketInsights[marketInsightIndex].category}</p>
            <p className="text-xs text-slate-500">Updated {formatTime(lastUpdated)}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {marketInsights[marketInsightIndex].items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium">{item.name}</span>
              <div className={`flex items-center space-x-1 ${item.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {item.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span className="text-sm font-semibold">{item.change}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
