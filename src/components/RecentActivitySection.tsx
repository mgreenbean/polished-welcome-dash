
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Activity } from "lucide-react";

const RecentActivitySection = () => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-slate-800">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <DollarSign className="text-white h-3 w-3" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Ticket Sold</p>
              <p className="text-sm text-slate-600">Sample Concert B - $80</p>
              <p className="text-xs text-slate-500">Jun 16, 6:16 PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <DollarSign className="text-white h-3 w-3" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Ticket Sold</p>
              <p className="text-sm text-slate-600">Sample Concert A - $120</p>
              <p className="text-xs text-slate-500">Jun 16, 4:16 PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Activity className="text-white h-3 w-3" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Ticket Listed</p>
              <p className="text-sm text-slate-600">Real Example is now live</p>
              <p className="text-xs text-slate-500">Jun 16, 3:46 PM</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivitySection;
