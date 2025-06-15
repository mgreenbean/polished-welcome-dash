
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Eye, Clock } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-green-800 mb-1">MONTHLY REVENUE</p>
              <p className="text-2xl font-bold text-green-900">$12,450</p>
              <p className="text-xs text-green-600 font-medium">+18% from last month</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">AVG SALE PRICE</p>
              <p className="text-2xl font-bold text-blue-900">$264</p>
              <p className="text-xs text-blue-600 font-medium">Last 30 days</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-800 mb-1">TOTAL VIEWS</p>
              <p className="text-2xl font-bold text-purple-900">1,247</p>
              <p className="text-xs text-purple-600 font-medium">This week</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center shadow-lg">
              <Eye className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-800 mb-1">AVG SELL TIME</p>
              <p className="text-2xl font-bold text-orange-900">3.2</p>
              <p className="text-xs text-orange-600 font-medium">days to sell</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center shadow-lg">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
