
import Header from "@/components/Header";
import SeatlyHelper from "@/components/SeatlyHelper";
import StatsCards from "@/components/StatsCards";
import { userData } from "@/data/ticketData";

const Analytics = () => {
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

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Overview</h2>
          <p className="text-gray-600">Your ticket selling metrics are displayed above. Track your monthly revenue, average sale prices, listing views, and average time to sell tickets.</p>
        </div>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Analytics;
