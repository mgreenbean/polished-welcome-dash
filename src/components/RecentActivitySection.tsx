
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Activity, X } from "lucide-react";
import { useState } from "react";

const RecentActivitySection = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "sale",
      title: "Ticket Sold",
      description: "Sample Concert B - $80",
      time: "Jun 16, 6:16 PM"
    },
    {
      id: 2,
      type: "sale",
      title: "Ticket Sold",
      description: "Sample Concert A - $120",
      time: "Jun 16, 4:16 PM"
    },
    {
      id: 3,
      type: "listing",
      title: "Ticket Listed",
      description: "Real Example is now live",
      time: "Jun 16, 3:46 PM"
    }
  ]);

  const removeActivity = (id: number) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-slate-800">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="group relative flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400 hover:transform hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                {activity.type === "sale" ? (
                  <DollarSign className="text-white h-3 w-3" />
                ) : (
                  <Activity className="text-white h-3 w-3" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800">{activity.title}</p>
                <p className="text-sm text-slate-600">{activity.description}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeActivity(activity.id);
                }}
                className="absolute top-2 right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
              >
                <X className="h-3 w-3 text-white" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivitySection;
