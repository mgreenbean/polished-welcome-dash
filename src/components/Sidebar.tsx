
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Clock, DollarSign, Eye, Ticket } from "lucide-react";

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
  // Calculate stats from ticket data
  const pendingCount = ticketData?.pending.length || 0;
  const liveCount = ticketData?.live.length || 0;
  const totalRevenue = ticketData?.sold.reduce((sum, ticket) => sum + ticket.soldPrice, 0) || 0;

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
              <span className="text-sm font-medium text-blue-900">Total Revenue</span>
            </div>
            <span className="text-sm text-blue-600 font-semibold">${totalRevenue.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between font-bold text-blue-900">
            Market Insights
            <span className="text-xs text-blue-500 font-medium">Live Data</span>
          </CardTitle>
          <p className="text-sm text-blue-600 font-semibold">{marketInsights[marketInsightIndex].category}</p>
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
