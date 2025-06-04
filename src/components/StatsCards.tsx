
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BarChart3, Ticket, DollarSign } from "lucide-react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">PENDING REVIEW</p>
              <p className="text-2xl font-bold text-amber-900">1</p>
              <p className="text-xs text-amber-600 font-medium">Awaiting approval</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-800 mb-1">ACTIVE LISTINGS</p>
              <p className="text-2xl font-bold text-emerald-900">2</p>
              <p className="text-xs text-emerald-600 font-medium">Currently live</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg">
              <BarChart3 className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 shadow-xl backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">TOTAL SALES</p>
              <p className="text-2xl font-bold text-blue-900">47</p>
              <p className="text-xs text-blue-600 font-medium">Tickets sold</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-lg">
              <Ticket className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-slate-300/50 shadow-xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1">REVENUE</p>
              <p className="text-2xl font-bold text-slate-900">$12,450</p>
              <p className="text-xs text-slate-600 font-medium">This month</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center shadow-lg">
              <DollarSign className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
