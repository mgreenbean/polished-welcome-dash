
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Users, Ticket } from "lucide-react";

const ActionNeeded = () => {
  const actionItems = [
    {
      id: 1,
      title: "High Priority Tickets",
      description: "3 tickets require immediate attention",
      urgency: "urgent",
      count: 3,
      icon: AlertTriangle,
      action: "Review Now"
    },
    {
      id: 2,
      title: "Pending Approvals",
      description: "5 user requests awaiting approval",
      urgency: "medium",
      count: 5,
      icon: Users,
      action: "Approve"
    },
    {
      id: 3,
      title: "Overdue Tasks",
      description: "2 tasks are past due date",
      urgency: "urgent",
      count: 2,
      icon: Clock,
      action: "Complete"
    },
    {
      id: 4,
      title: "System Updates",
      description: "New features ready for deployment",
      urgency: "low",
      count: 1,
      icon: Ticket,
      action: "Deploy"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'low':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getBadgeColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          <span>Action Needed</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actionItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`p-4 rounded-lg border ${getUrgencyColor(item.urgency)} transition-all hover:shadow-sm`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4" />
                    <h4 className="font-medium text-sm">{item.title}</h4>
                  </div>
                  <Badge className={getBadgeColor(item.urgency)} variant="secondary">
                    {item.count}
                  </Badge>
                </div>
                
                <p className="text-xs text-gray-600 mb-3">
                  {item.description}
                </p>
                
                <Button size="sm" variant="outline" className="w-full text-xs h-8">
                  {item.action}
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <Button className="w-full" size="sm">
            View All Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionNeeded;
