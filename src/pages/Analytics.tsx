
import Header from "@/components/Header";
import SeatlyHelper from "@/components/SeatlyHelper";
import StatsCards from "@/components/StatsCards";
import { userData } from "@/data/ticketData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Analytics = () => {
  // Revenue data over time
  const revenueData = [
    { month: "Jul", revenue: 8400 },
    { month: "Aug", revenue: 9200 },
    { month: "Sep", revenue: 7800 },
    { month: "Oct", revenue: 11200 },
    { month: "Nov", revenue: 10500 },
    { month: "Dec", revenue: 12450 }
  ];

  // Ticket category performance
  const categoryData = [
    { category: "Sports", sales: 42, revenue: 11200 },
    { category: "Concerts", sales: 28, revenue: 8900 },
    { category: "Theater", sales: 15, revenue: 4200 },
    { category: "Comedy", sales: 8, revenue: 1800 }
  ];

  // Ticket status distribution
  const statusData = [
    { name: "Live Listings", value: 65, color: "#10b981" },
    { name: "Sold", value: 28, color: "#3b82f6" },
    { name: "Pending", value: 7, color: "#f59e0b" }
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#3b82f6"
    },
    sales: {
      label: "Sales",
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
          <h1 className="text-3xl font-bold text-blue-900">Analytics</h1>
          <p className="text-blue-600 font-medium mt-1">Track your ticket selling performance</p>
        </div>

        <StatsCards />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Trends</h2>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </div>

          {/* Category Performance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales by Category</h2>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Ticket Status Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ticket Status Distribution</h2>
          <div className="flex justify-center">
            <ChartContainer config={chartConfig} className="h-[300px] w-[400px]">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Analytics;
