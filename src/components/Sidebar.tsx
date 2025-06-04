
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BarChart3, TrendingUp, TrendingDown } from "lucide-react";

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
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold">
            <Plus className="h-4 w-4 mr-2" />
            List New Tickets
          </Button>
          <Button variant="outline" className="w-full border-slate-400 text-slate-700 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-medium">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Analytics
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between font-bold">
            Market Insights
            <span className="text-xs text-slate-500 font-medium">Live Data</span>
          </CardTitle>
          <p className="text-sm text-slate-600 font-semibold">{marketInsights[marketInsightIndex].category}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {marketInsights[marketInsightIndex].items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">{item.name}</span>
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
