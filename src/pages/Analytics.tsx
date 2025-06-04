
import Header from "@/components/Header";
import SeatlyHelper from "@/components/SeatlyHelper";
import { userData, ticketData } from "@/data/ticketData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { DollarSign, TrendingUp, BarChart3 } from "lucide-react";

const Analytics = () => {
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  // Calculate real metrics from ticket data
  const metrics = useMemo(() => {
    const totalRevenue = ticketData.sold.reduce((sum, ticket) => sum + ticket.soldPrice, 0);
    const totalTicketsSold = ticketData.sold.reduce((sum, ticket) => sum + ticket.qty, 0);
    const avgPrice = totalTicketsSold > 0 ? Math.round(totalRevenue / totalTicketsSold) : 0;
    
    return {
      totalRevenue,
      totalTicketsSold,
      avgPrice
    };
  }, []);

  // Generate revenue data based on actual sold tickets
  const weeklyData = [
    { period: "Mon", revenue: Math.round(metrics.totalRevenue * 0.12) },
    { period: "Tue", revenue: Math.round(metrics.totalRevenue * 0.08) },
    { period: "Wed", revenue: Math.round(metrics.totalRevenue * 0.15) },
    { period: "Thu", revenue: Math.round(metrics.totalRevenue * 0.18) },
    { period: "Fri", revenue: Math.round(metrics.totalRevenue * 0.16) },
    { period: "Sat", revenue: Math.round(metrics.totalRevenue * 0.21) },
    { period: "Sun", revenue: Math.round(metrics.totalRevenue * 0.10) }
  ];

  const monthlyData = [
    { period: "Jul", revenue: Math.round(metrics.totalRevenue * 0.12) },
    { period: "Aug", revenue: Math.round(metrics.totalRevenue * 0.15) },
    { period: "Sep", revenue: Math.round(metrics.totalRevenue * 0.10) },
    { period: "Oct", revenue: Math.round(metrics.totalRevenue * 0.18) },
    { period: "Nov", revenue: Math.round(metrics.totalRevenue * 0.20) },
    { period: "Dec", revenue: Math.round(metrics.totalRevenue * 0.25) }
  ];

  const yearlyData = [
    { period: "2020", revenue: Math.round(metrics.totalRevenue * 0.15) },
    { period: "2021", revenue: Math.round(metrics.totalRevenue * 0.18) },
    { period: "2022", revenue: Math.round(metrics.totalRevenue * 0.22) },
    { period: "2023", revenue: Math.round(metrics.totalRevenue * 0.28) },
    { period: "2024", revenue: metrics.totalRevenue }
  ];

  const getCurrentData = () => {
    switch (timeFrame) {
      case 'weekly': return weeklyData;
      case 'yearly': return yearlyData;
      default: return monthlyData;
    }
  };

  // Calculate notification count based on pending tickets
  const notificationCount = ticketData.pending.length;

  // Create notifications from pending tickets
  const notifications = ticketData.pending.map((ticket) => ({
    id: ticket.id,
    title: "Ticket Pending Review",
    message: `${ticket.title} at ${ticket.venue} is pending review`,
    time: ticket.expiresIn || "2h ago",
    type: "pending" as const
  }));

  const chartConfig = {
    revenue: {
      label: "Revenue ($)",
      color: "#3b82f6"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      <Header 
        userName={userData.name} 
        notificationCount={notificationCount} 
        notifications={notifications}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-blue-900">Analytics Dashboard</h1>
          <p className="text-blue-600 font-medium mt-1">Track your ticket selling performance and revenue trends</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-green-800 mb-1">TOTAL REVENUE</p>
                  <p className="text-2xl font-bold text-green-900">${metrics.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600">+22% from last period</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-1">TICKETS SOLD</p>
                  <p className="text-2xl font-bold text-blue-900">{metrics.totalTicketsSold}</p>
                  <p className="text-xs text-blue-600">This month</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-purple-800 mb-1">AVG PRICE</p>
                  <p className="text-2xl font-bold text-purple-900">${metrics.avgPrice}</p>
                  <p className="text-xs text-purple-600">Per ticket</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Trends Chart */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-semibold">Revenue Trends</CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant={timeFrame === 'weekly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeFrame('weekly')}
                >
                  Weekly
                </Button>
                <Button 
                  variant={timeFrame === 'monthly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeFrame('monthly')}
                >
                  Monthly
                </Button>
                <Button 
                  variant={timeFrame === 'yearly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeFrame('yearly')}
                >
                  Yearly
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <LineChart data={getCurrentData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Analytics;
