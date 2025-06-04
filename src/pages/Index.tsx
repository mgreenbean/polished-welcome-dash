
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import InstantTransfer from "@/components/InstantTransfer";
import TicketPortfolio from "@/components/TicketPortfolio";
import Sidebar from "@/components/Sidebar";
import SeatlyHelper from "@/components/SeatlyHelper";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketInsightIndex, setMarketInsightIndex] = useState(0);
  const userName = "Michael Chen";

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

  const marketInsights = [
    {
      category: "NBA Finals",
      items: [
        { name: "Boston vs Dallas", trend: "up", change: "+24%" },
        { name: "Lakers Playoffs", trend: "up", change: "+18%" },
        { name: "Warriors Home Games", trend: "up", change: "+12%" }
      ]
    },
    {
      category: "Concerts",
      items: [
        { name: "Taylor Swift Eras", trend: "up", change: "+35%" },
        { name: "Olivia Rodrigo", trend: "up", change: "+22%" },
        { name: "Bad Bunny", trend: "up", change: "+19%" }
      ]
    },
    {
      category: "Broadway",
      items: [
        { name: "Hamilton", trend: "up", change: "+15%" },
        { name: "Lion King", trend: "up", change: "+8%" },
        { name: "Wicked", trend: "down", change: "-3%" }
      ]
    },
    {
      category: "Football",
      items: [
        { name: "Super Bowl", trend: "up", change: "+42%" },
        { name: "Chiefs vs Bills", trend: "up", change: "+28%" },
        { name: "Cowboys Home", trend: "up", change: "+16%" }
      ]
    }
  ];

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
      <Header userName={userName} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-blue-900">{getGreeting()}, Dean</h1>
          <p className="text-blue-600 font-medium">Here's your ticket selling dashboard overview</p>
        </div>

        <InstantTransfer />
        
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <TicketPortfolio ticketData={ticketData} />
          </div>

          <Sidebar marketInsights={marketInsights} marketInsightIndex={marketInsightIndex} />
        </div>
      </div>

      <SeatlyHelper />
    </div>
  );
};

export default Index;
