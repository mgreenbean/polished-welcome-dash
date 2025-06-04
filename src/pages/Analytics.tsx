
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, Target } from "lucide-react";
import Header from "@/components/Header";

const Analytics = () => {
  // Real ticket data from dashboard
  const ticketData = {
    pending: [
      {
        id: 1,
        title: "NBA FINALS: TBD AT KNICKS RD 4 HM GM 3",
        venue: "Madison Square Garden",
        location: "New York, NY",
        date: "TBD 2024",
        marketPrice: 525,
        yourPrice: 450,
        section: "213",
        row: "18",
        seats: "11, 12",
        qty: 2,
        status: "PENDING REVIEW",
        statusColor: "amber",
        expiresIn: "2 days"
      }
    ],
    live: [
      {
        id: 2,
        title: "LAKERS VS WARRIORS",
        venue: "Crypto.com Arena",
        location: "Los Angeles, CA",
        date: "Dec 15, 2024",
        marketPrice: 380,
        yourPrice: 350,
        section: "115",
        row: "12",
        seats: "5, 6",
        qty: 2,
        status: "LIVE LISTING",
        statusColor: "emerald",
        views: "127 views today"
      },
      {
        id: 3,
        title: "TAYLOR SWIFT ERAS TOUR",
        venue: "SoFi Stadium",
        location: "Los Angeles, CA",
        date: "Jan 20, 2025",
        marketPrice: 850,
        yourPrice: 800,
        section: "C2",
        row: "8",
        seats: "15, 16",
        qty: 2,
        status: "LIVE LISTING",
        statusColor: "emerald",
        views: "43 views today"
      }
    ],
    sold: [
      {
        id: 4,
        title: "CHIEFS VS BILLS",
        venue: "Arrowhead Stadium",
        location: "Kansas City, MO",
        date: "Nov 20, 2024",
        marketPrice: 290,
        soldPrice: 275,
        section: "129",
        row: "25",
        seats: "7, 8",
        qty: 2,
        status: "SOLD",
        statusColor: "blue",
        soldDate: "Nov 18, 2024"
      }
    ]
  };

  // Calculate real metrics from ticket data
  const totalRevenue = ticketData.sold.reduce((sum, ticket) => sum + (ticket.soldPrice * ticket.qty), 0);
  const totalTicketsSold = ticketData.sold.reduce((sum, ticket) => sum + ticket.qty, 0);
  const averageSalePrice = totalTicketsSold > 0 ? Math.round(totalRevenue / totalTicketsSold) : 0;
  const activeListings = ticketData.pending.length + ticketData.live.length;

  // Generate monthly data based on actual sales (projecting backwards for demo)
  const currentMonthRevenue = totalRevenue;
  const monthlySales = [
    { month: "Jul", revenue: 0, tickets: 0 },
    { month: "Aug", revenue: 0, tickets: 0 },
    { month: "Sep", revenue: 0, tickets: 0 },
    { month: "Oct", revenue: 0, tickets: 0 },
    { month: "Nov", revenue: currentMonthRevenue, tickets: totalTicketsSold },
    { month: "Dec", revenue: 0, tickets: 0 },
  ];

  // Event categories based on actual tickets
  const eventCategories = [
    { name: "Sports", value: 100, color: "#3b82f6" }, // Only sports tickets so far
    { name: "Concerts", value: 0, color: "#10b981" },
    { name: "Theater", value: 0, color: "#f59e0b" },
    { name: "Comedy", value: 0, color: "#ef4444" },
  ];

  // Top events from actual data
  const topEvents = [
    ...ticketData.sold.map(ticket => ({
      event: ticket.title,
      sales: ticket.qty,
      revenue: ticket.soldPrice * ticket.qty
    })),
    ...ticketData.live.map(ticket => ({
      event: ticket.title,
      sales: 0,
      revenue: 0
    }))
  ].sort((a, b) => b.revenue - a.revenue);

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
                  <p className="text-2xl font-bold text-blue-900">${totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    From {totalTicketsSold} tickets sold
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
                  <p className="text-2xl font-bold text-blue-900">{totalTicketsSold}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    All time total
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
                  <p className="text-2xl font-bold text-blue-900">${averageSalePrice}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    Per ticket average
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
                  <p className="text-2xl font-bold text-blue-900">{activeListings}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    {ticketData.pending.length} pending review
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
                <CardTitle className="text-blue-900">Event Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topEvents.length > 0 ? topEvents.map((event, index) => (
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
                  )) : (
                    <div className="text-center py-8 text-blue-600">
                      <p>No events data available yet</p>
                    </div>
                  )}
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
                  <CardTitle className="text-blue-900">Category Breakdown</CardTitle>
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
