
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
      color: "bg-blue-100 border-blue-300",
      soldDate: "2 hours ago"
    },
    {
      event: "Chiefs vs Bills AFC Championship",
      date: "Jan 26, 2025",
      section: "Lower Bowl",
      price: "$685",
      profit: "+$285",
      status: "Pending",
      color: "bg-amber-100 border-amber-300",
      expiresIn: "18 hours"
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
    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-200/50 animate-scale-in w-full max-w-sm sm:max-w-md mx-auto">
      <div className="p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-blue-900">Your Ticket Portfolio</h3>
        </div>
        
        {/* Container for tickets with proper spacing */}
        <div className="space-y-3">
          {tickets.map((ticket, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] relative ${
                selectedTicket === index ? ticket.color + ' shadow-lg scale-[1.02]' : 'hover:bg-blue-50 hover:shadow-md opacity-70'
              }`}
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
                    {/* Container for additional details */}
                    <div className="h-4 mt-2">
                      <div className={`text-xs text-slate-600 transition-all duration-300 ${
                        selectedTicket === index ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {ticket.status === 'Sold' && `Sold ${ticket.soldDate}`}
                        {ticket.status === 'Pending' && `Expires in ${ticket.expiresIn}`}
                        {ticket.status === 'Listed' && 'Currently live on 3 platforms'}
                      </div>
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
  );
};

export default InteractivePortfolio;
