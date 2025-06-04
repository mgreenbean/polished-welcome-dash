
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, Target } from "lucide-react";
import Header from "@/components/Header";

const Analytics = () => {
  // Sample sales data
  const monthlySales = [
    { month: "Jan", revenue: 2400, tickets: 12 },
    { month: "Feb", revenue: 1398, tickets: 8 },
    { month: "Mar", revenue: 9800, tickets: 24 },
    { month: "Apr", revenue: 3908, tickets: 18 },
    { month: "May", revenue: 4800, tickets: 22 },
    { month: "Jun", revenue: 3800, tickets: 16 },
  ];

  const eventCategories = [
    { name: "Sports", value: 45, color: "#3b82f6" },
    { name: "Concerts", value: 30, color: "#10b981" },
    { name: "Theater", value: 15, color: "#f59e0b" },
    { name: "Comedy", value: 10, color: "#ef4444" },
  ];

  const topEvents = [
    { event: "Lakers vs Warriors", sales: 8, revenue: 3200 },
    { event: "Taylor Swift Concert", sales: 6, revenue: 4800 },
    { event: "Hamilton Musical", sales: 4, revenue: 1600 },
    { event: "Comedy Night Live", sales: 3, revenue: 720 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#3b82f6",
    },
    tickets: {
      label: "Tickets",
      color: "#10b981",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header userName="Sarah Chen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Analytics Dashboard</h1>
          <p className="text-blue-600">Track your ticket sales performance and market insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-blue-900">$26,108</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Tickets Sold</p>
                  <p className="text-2xl font-bold text-blue-900">100</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last month
                  </p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Avg. Sale Price</p>
                  <p className="text-2xl font-bold text-blue-900">$261</p>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -2.1% from last month
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Active Listings</p>
                  <p className="text-2xl font-bold text-blue-900">24</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    3 expiring soon
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlySales}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="revenue" fill="var(--color-revenue)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Tickets Sold Chart */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Tickets Sold Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlySales}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="tickets" stroke="var(--color-tickets)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Top Performing Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-blue-50/50 rounded-lg">
                      <div>
                        <p className="font-semibold text-blue-900">{event.event}</p>
                        <p className="text-sm text-blue-600">{event.sales} tickets sold</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">${event.revenue}</p>
                        <p className="text-sm text-blue-500">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category Distribution */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Sales by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={eventCategories}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {eventCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Category Performance */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Category Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {eventCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-blue-900">{category.name}</span>
                          <span className="text-sm text-blue-600">{category.value}%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${category.value}%`, 
                              backgroundColor: category.color 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
