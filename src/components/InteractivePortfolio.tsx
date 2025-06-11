
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InteractivePortfolio = () => {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const tickets = [
    {
      event: "Lakers vs Warriors",
      date: "Dec 15, 2024",
      section: "Section 101",
      price: "$450",
      profit: "+$120",
      status: "Listed",
      color: "bg-green-100 border-green-300"
    },
    {
      event: "Taylor Swift Eras Tour",
      date: "Jan 20, 2025",
      section: "Floor A",
      price: "$950",
      profit: "+$380",
      status: "Sold",
      color: "bg-blue-100 border-blue-300"
    },
    {
      event: "Chiefs vs Bills AFC Championship",
      date: "Jan 26, 2025",
      section: "Lower Bowl",
      price: "$685",
      profit: "+$285",
      status: "Pending",
      color: "bg-amber-100 border-amber-300"
    }
  ];

  // Auto-cycle through tickets every 3 seconds, but only if not manually overridden
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setSelectedTicket((prev) => (prev + 1) % tickets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tickets.length, isAutoPlaying]);

  const handleTicketClick = (index: number) => {
    setSelectedTicket(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative perspective-1000">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-200/50 animate-scale-in w-full max-w-sm sm:max-w-md mx-auto transform-gpu hover:scale-105 transition-all duration-500 hover:shadow-3xl hover:rotate-y-5">
        <div className="p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900">Your Ticket Portfolio</h3>
          </div>
          
          {/* Container for tickets with proper spacing and 3D effects */}
          <div className="space-y-3">
            {tickets.map((ticket, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] relative transform-gpu hover:rotate-x-2 hover:shadow-2xl ${
                  selectedTicket === index 
                    ? ticket.color + ' shadow-2xl scale-[1.02] rotate-x-1 z-10' 
                    : 'hover:bg-blue-50 hover:shadow-xl opacity-70 hover:rotate-x-1'
                }`}
                style={{
                  transform: selectedTicket === index 
                    ? 'translateZ(20px) rotateX(2deg)' 
                    : index === 0 ? 'translateZ(10px)' : index === 1 ? 'translateZ(5px)' : 'translateZ(0px)',
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => handleTicketClick(index)}
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-blue-900 text-sm sm:text-base truncate">{ticket.event}</h4>
                      <p className="text-xs text-slate-600 mb-1">{ticket.date} • {ticket.section}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-lg font-bold text-emerald-600">{ticket.price}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <Badge variant={
                        ticket.status === 'Sold' ? 'default' : 
                        ticket.status === 'Listed' ? 'secondary' : 
                        'outline'
                      } className="text-xs mb-1">
                        {ticket.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <p className="text-sm text-emerald-600 font-semibold">{ticket.profit}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePortfolio;
