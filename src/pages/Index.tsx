
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import InstantTransfer from "@/components/InstantTransfer";
import TicketPortfolio from "@/components/TicketPortfolio";
import Sidebar from "@/components/Sidebar";
import SeatlyHelper from "@/components/SeatlyHelper";
import { ticketData, marketInsights, userData } from "@/data/ticketData";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketInsightIndex, setMarketInsightIndex] = useState(0);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const marketTimer = setInterval(() => {
      setMarketInsightIndex((prev) => (prev + 1) % marketInsights.length);
    }, 20000);
    return () => clearInterval(marketTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      <Header userName={userData.name} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-blue-900">{getGreeting()}, {userData.name.split(' ')[0]}</h1>
          <p className="text-lg text-blue-600 font-medium mt-2">Here's your ticket selling dashboard overview</p>
        </div>

        <InstantTransfer />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TicketPortfolio ticketData={ticketData} />
          </div>

          <Sidebar 
            marketInsights={marketInsights} 
            marketInsightIndex={marketInsightIndex}
            ticketData={ticketData}
          />
        </div>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Index;
