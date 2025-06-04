
import Header from "@/components/Header";
import SeatlyHelper from "@/components/SeatlyHelper";
import { userData, ticketData } from "@/data/ticketData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
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

  // Generate revenue data based on actual sold tickets with more realistic distributions
  const weeklyData = [
    { period: "Mon", revenue: Math.round(metrics.totalRevenue * 0.08), formatted: `$${Math.round(metrics.totalRevenue * 0.08).toLocaleString()}` },
    { period: "Tue", revenue: Math.round(metrics.totalRevenue * 0.12), formatted: `$${Math.round(metrics.totalRevenue * 0.12).toLocaleString()}` },
    { period: "Wed", revenue: Math.round(metrics.totalRevenue * 0.15), formatted: `$${Math.round(metrics.totalRevenue * 0.15).toLocaleString()}` },
    { period: "Thu", revenue: Math.round(metrics.totalRevenue * 0.18), formatted: `$${Math.round(metrics.totalRevenue * 0.18).toLocaleString()}` },
    { period: "Fri", revenue: Math.round(metrics.totalRevenue * 0.22), formatted: `$${Math.round(metrics.totalRevenue * 0.22).toLocaleString()}` },
    { period: "Sat", revenue: Math.round(metrics.totalRevenue * 0.16), formatted: `$${Math.round(metrics.totalRevenue * 0.16).toLocaleString()}` },
    { period: "Sun", revenue: Math.round(metrics.totalRevenue * 0.09), formatted: `$${Math.round(metrics.totalRevenue * 0.09).toLocaleString()}` }
  ];

  const monthlyData = [
    { period: "Jul", revenue: Math.round(metrics.totalRevenue * 0.12), formatted: `$${Math.round(metrics.totalRevenue * 0.12).toLocaleString()}` },
    { period: "Aug", revenue: Math.round(metrics.totalRevenue * 0.15), formatted: `$${Math.round(metrics.totalRevenue * 0.15).toLocaleString()}` },
    { period: "Sep", revenue: Math.round(metrics.totalRevenue * 0.13), formatted: `$${Math.round(metrics.totalRevenue * 0.13).toLocaleString()}` },
    { period: "Oct", revenue: Math.round(metrics.totalRevenue * 0.18), formatted: `$${Math.round(metrics.totalRevenue * 0.18).toLocaleString()}` },
    { period: "Nov", revenue: Math.round(metrics.totalRevenue * 0.20), formatted: `$${Math.round(metrics.totalRevenue * 0.20).toLocaleString()}` },
    { period: "Dec", revenue: Math.round(metrics.totalRevenue * 0.22), formatted: `$${Math.round(metrics.totalRevenue * 0.22).toLocaleString()}` }
  ];

  const yearlyData = [
    { period: "2020", revenue: Math.round(metrics.totalRevenue * 0.15), formatted: `$${Math.round(metrics.totalRevenue * 0.15).toLocaleString()}` },
    { period: "2021", revenue: Math.round(metrics.totalRevenue * 0.18), formatted: `$${Math.round(metrics.totalRevenue * 0.18).toLocaleString()}` },
    { period: "2022", revenue: Math.round(metrics.totalRevenue * 0.22), formatted: `$${Math.round(metrics.totalRevenue * 0.22).toLocaleString()}` },
    { period: "2023", revenue: Math.round(metrics.totalRevenue * 0.28), formatted: `$${Math.round(metrics.totalRevenue * 0.28).toLocaleString()}` },
    { period: "2024", revenue: metrics.totalRevenue, formatted: `$${metrics.totalRevenue.toLocaleString()}` }
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
      label: "Revenue",
      color: "#3b82f6"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header 
        userName={userData.name} 
        notificationCount={notificationCount} 
        notifications={notifications}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-slate-600 font-medium mt-2 text-lg">Track your ticket selling performance and revenue trends</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-800 mb-2 tracking-wide">TOTAL REVENUE</p>
                  <p className="text-3xl font-bold text-emerald-900">${metrics.totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-emerald-600 mt-1 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +22% from last period
                  </p>
                </div>
                <div className="bg-emerald-200 p-3 rounded-full">
                  <DollarSign className="h-8 w-8 text-emerald-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue-800 mb-2 tracking-wide">TICKETS SOLD</p>
                  <p className="text-3xl font-bold text-blue-900">{metrics.totalTicketsSold}</p>
                  <p className="text-sm text-blue-600 mt-1">This month</p>
                </div>
                <div className="bg-blue-200 p-3 rounded-full">
                  <BarChart3 className="h-8 w-8 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-purple-800 mb-2 tracking-wide">AVG PRICE</p>
                  <p className="text-3xl font-bold text-purple-900">${metrics.avgPrice}</p>
                  <p className="text-sm text-purple-600 mt-1">Per ticket</p>
                </div>
                <div className="bg-purple-200 p-3 rounded-full">
                  <TrendingUp className="h-8 w-8 text-purple-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Trends Chart - Full Width Embedded Design */}
        <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Revenue Trends</h2>
                <p className="text-blue-100 mt-1">Track your earnings over time</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={timeFrame === 'weekly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeFrame('weekly')}
                  className={timeFrame === 'weekly' ? 'bg-white text-blue-600 hover:bg-gray-100' : 'border-white text-white hover:bg-white/10'}
                >
                  Weekly
                </Button>
                <Button 
                  variant={timeFrame === 'monthly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeFrame('monthly')}
                  className={timeFrame === 'monthly' ? 'bg-white text-blue-600 hover:bg-gray-100' : 'border-white text-white hover:bg-white/10'}
                >
                  Monthly
                </Button>
                <Button 
                  variant={timeFrame === 'yearly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeFrame('yearly')}
                  className={timeFrame === 'yearly' ? 'bg-white text-blue-600 hover:bg-gray-100' : 'border-white text-white hover:bg-white/10'}
                >
                  Yearly
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={getCurrentData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                  <XAxis 
                    dataKey="period" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                            <p className="font-semibold text-gray-800 mb-2">{label}</p>
                            <p className="text-blue-600 font-bold text-lg">
                              ${payload[0].value?.toLocaleString()}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    strokeWidth={4}
                    dot={{ fill: '#3b82f6', strokeWidth: 3, r: 6, stroke: '#ffffff' }}
                    activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 3, fill: '#ffffff' }}
                    fill="url(#revenueGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Analytics;
