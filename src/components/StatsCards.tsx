
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Eye, Clock } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-700/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">MONTHLY REVENUE</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">$12,450</p>
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">+18% from last month</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800 rounded-full flex items-center justify-center shadow-lg">
              <DollarSign className="h-5 w-5 text-green-600 dark:text-green-300" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200/50 dark:border-blue-700/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">AVG SALE PRICE</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">$264</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Last 30 days</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200/50 dark:border-purple-700/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-1">TOTAL VIEWS</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">1,247</p>
              <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">This week</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-800 dark:to-violet-800 rounded-full flex items-center justify-center shadow-lg">
              <Eye className="h-5 w-5 text-purple-600 dark:text-purple-300" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200/50 dark:border-orange-700/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-800 dark:text-orange-300 mb-1">AVG SELL TIME</p>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">3.2</p>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">days to sell</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-800 dark:to-amber-800 rounded-full flex items-center justify-center shadow-lg">
              <Clock className="h-5 w-5 text-orange-600 dark:text-orange-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
