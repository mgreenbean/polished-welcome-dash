
import Header from "@/components/Header";
import SeatlyHelper from "@/components/SeatlyHelper";
import { userData } from "@/data/ticketData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DollarSign, TrendingUp, Users, BarChart3 } from "lucide-react";

const Analytics = () => {
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  // Revenue data for different time frames
  const weeklyData = [
    { period: "Mon", revenue: 1200 },
    { period: "Tue", revenue: 890 },
    { period: "Wed", revenue: 1450 },
    { period: "Thu", revenue: 2100 },
    { period: "Fri", revenue: 1800 },
    { period: "Sat", revenue: 2400 },
    { period: "Sun", revenue: 1950 }
  ];

  const monthlyData = [
    { period: "Jul", revenue: 8400 },
    { period: "Aug", revenue: 9200 },
    { period: "Sep", revenue: 7800 },
    { period: "Oct", revenue: 11200 },
    { period: "Nov", revenue: 10500 },
    { period: "Dec", revenue: 12450 }
  ];

  const yearlyData = [
    { period: "2020", revenue: 45000 },
    { period: "2021", revenue: 52000 },
    { period: "2022", revenue: 68000 },
    { period: "2023", revenue: 89000 },
    { period: "2024", revenue: 125000 }
  ];

  const getCurrentData = () => {
    switch (timeFrame) {
      case 'weekly': return weeklyData;
      case 'yearly': return yearlyData;
      default: return monthlyData;
    }
  };

  // Sales performance by event type
  const salesData = [
    { type: "Sports", tickets: 145, revenue: 38500 },
    { type: "Concerts", tickets: 89, revenue: 24600 },
    { type: "Theater", tickets: 67, revenue: 18900 },
    { type: "Comedy", tickets: 34, revenue: 9800 }
  ];

  // Market share data
  const marketData = [
    { name: "Premium", value: 45, color: "#3b82f6" },
    { name: "Standard", value: 35, color: "#10b981" },
    { name: "Budget", value: 20, color: "#f59e0b" }
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue ($)",
      color: "#3b82f6"
    },
    tickets: {
      label: "Tickets Sold",
      color: "#10b981"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      <Header 
        userName={userData.name} 
        notificationCount={0} 
        notifications={[]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-blue-900">Analytics Dashboard</h1>
          <p className="text-blue-600 font-medium mt-1">Track your ticket selling performance and revenue trends</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-green-800 mb-1">TOTAL REVENUE</p>
                  <p className="text-2xl font-bold text-green-900">$125,450</p>
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
                  <p className="text-2xl font-bold text-blue-900">335</p>
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
                  <p className="text-2xl font-bold text-purple-900">$374</p>
                  <p className="text-xs text-purple-600">Per ticket</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-orange-800 mb-1">ACTIVE BUYERS</p>
                  <p className="text-2xl font-bold text-orange-900">127</p>
                  <p className="text-xs text-orange-600">This month</p>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
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

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales by Event Type */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Event Type</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="tickets" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Market Share */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Price Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <ChartContainer config={chartConfig} className="h-[300px] w-[300px]">
                  <PieChart>
                    <Pie
                      data={marketData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {marketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Analytics;
