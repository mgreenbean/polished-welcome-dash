
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import TicketPortfolio from "@/components/TicketPortfolio";
import ActionNeeded from "@/components/ActionNeeded";
import InstantTransfer from "@/components/InstantTransfer";
import Sidebar from "@/components/Sidebar";
import { ticketData } from "@/data/ticketData";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [marketInsightIndex, setMarketInsightIndex] = useState(0);
  
  const marketInsights = [
    {
      category: "Sports Events",
      items: [
        { name: "Lakers vs Warriors", trend: "up", change: "+15%" },
        { name: "NFL Playoffs", trend: "up", change: "+22%" },
        { name: "March Madness", trend: "down", change: "-8%" },
        { name: "MLB World Series", trend: "up", change: "+12%" }
      ]
    },
    {
      category: "Concerts",
      items: [
        { name: "Taylor Swift", trend: "up", change: "+35%" },
        { name: "Drake Tour", trend: "up", change: "+18%" },
        { name: "Rock Festivals", trend: "down", change: "-5%" },
        { name: "Classical Music", trend: "up", change: "+7%" }
      ]
    },
    {
      category: "Theater & Shows",
      items: [
        { name: "Broadway Shows", trend: "up", change: "+12%" },
        { name: "Comedy Shows", trend: "up", change: "+25%" },
        { name: "Magic Shows", trend: "down", change: "-3%" },
        { name: "Dance Performances", trend: "up", change: "+9%" }
      ]
    }
  ];

  // Rotate market insights every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketInsightIndex((prev) => (prev + 1) % marketInsights.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [marketInsights.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <StatsCards />
            <TicketPortfolio ticketData={ticketData} />
            <ActionNeeded />
            <InstantTransfer />
          </div>
          
          <Sidebar 
            marketInsights={marketInsights} 
            marketInsightIndex={marketInsightIndex}
            ticketData={ticketData}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
