
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', ticketsSold: 4000, revenue: 2400 },
  { name: 'Feb', ticketsSold: 3000, revenue: 1398 },
  { name: 'Mar', ticketsSold: 2000, revenue: 9800 },
  { name: 'Apr', ticketsSold: 2780, revenue: 3908 },
  { name: 'May', ticketsSold: 1890, revenue: 4800 },
  { name: 'Jun', ticketsSold: 2390, revenue: 3800 },
  { name: 'Jul', ticketsSold: 3490, revenue: 4300 },
  { name: 'Aug', ticketsSold: 3000, revenue: 1398 },
  { name: 'Sep', ticketsSold: 2000, revenue: 9800 },
  { name: 'Oct', ticketsSold: 2780, revenue: 3908 },
  { name: 'Nov', ticketsSold: 1890, revenue: 4800 },
  { name: 'Dec', ticketsSold: 2390, revenue: 3800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const pieData = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 },
  { name: 'Category D', value: 200 },
];

const chartConfig = {
  ticketsSold: {
    label: "Tickets Sold",
    color: "hsl(var(--primary))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--secondary))",
  },
  "Category A": {
    label: "Category A",
    color: COLORS[0],
  },
  "Category B": {
    label: "Category B",
    color: COLORS[1],
  },
   "Category C": {
    label: "Category C",
    color: COLORS[2],
  },
   "Category D": {
    label: "Category D",
    color: COLORS[3],
  },
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold text-blue-900 mb-8 text-center">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Revenue Overview */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Tickets Sold */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Tickets Sold</CardTitle>
              <CardDescription>Number of tickets sold per month</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="ticketsSold" fill="hsl(var(--secondary))" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Category Distribution</CardTitle>
              <CardDescription>Distribution of tickets across categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
