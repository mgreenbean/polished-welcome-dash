
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Clock, DollarSign } from "lucide-react";

interface MarketInsight {
  category: string;
  items: Array<{
    name: string;
    trend: string;
    change: string;
  }>;
}

interface SidebarProps {
  marketInsights: MarketInsight[];
  marketInsightIndex: number;
}

const Sidebar = ({ marketInsights, marketInsightIndex }: SidebarProps) => {
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
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Sale Completed</span>
            </div>
            <span className="text-sm text-blue-600 font-semibold">$275</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Price Updated</span>
            </div>
            <span className="text-sm text-blue-600 font-semibold">Lakers</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Listing Viewed</span>
            </div>
            <span className="text-sm text-blue-600 font-semibold">43x</span>
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
