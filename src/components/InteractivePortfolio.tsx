
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InteractivePortfolio = () => {
  const [selectedTicket, setSelectedTicket] = useState(0);

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
      event: "Hamilton Broadway",
      date: "Feb 5, 2025",
      section: "Orchestra",
      price: "$285",
      profit: "+$65",
      status: "Pending",
      color: "bg-amber-100 border-amber-300",
      expiresIn: "18 hours"
    }
  ];

  // Auto-cycle through tickets every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTicket((prev) => (prev + 1) % tickets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tickets.length]);

  return (
    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-blue-200/50 animate-scale-in">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-900">My Ticket Portfolio</h3>
        <p className="text-sm text-slate-600">Auto-cycling through tickets</p>
      </div>
      
      {/* Fixed height container to prevent layout shifts */}
      <div className="h-[280px] mb-4">
        <div className="space-y-3">
          {tickets.map((ticket, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] relative z-10 ${
                selectedTicket === index ? ticket.color + ' shadow-lg' : 'hover:bg-blue-50 hover:shadow-md opacity-70'
              }`}
              style={{
                transform: selectedTicket === index ? 'scale(1.02)' : 'scale(1)',
                transformOrigin: 'center'
              }}
              onClick={() => setSelectedTicket(index)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-900 text-sm">{ticket.event}</h4>
                    <p className="text-xs text-slate-600 mb-1">{ticket.date} • {ticket.section}</p>
                    <p className="text-lg font-bold text-emerald-600">{ticket.price}</p>
                    {/* Fixed height container for additional details */}
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
                  <div className="text-right">
                    <Badge variant={
                      ticket.status === 'Sold' ? 'default' : 
                      ticket.status === 'Listed' ? 'secondary' : 
                      'outline'
                    } className="text-xs">
                      {ticket.status}
                    </Badge>
                    <p className="text-sm text-emerald-600 font-medium mt-1">{ticket.profit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="flex justify-center space-x-2 mb-4">
        {tickets.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedTicket === index ? 'bg-blue-600' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg p-4">
        <div className="text-center">
          <p className="text-sm text-slate-600">Total Portfolio Value</p>
          <p className="text-2xl font-bold text-blue-900">$1,685</p>
          <p className="text-sm text-emerald-600 font-medium">+$565 profit this month</p>
        </div>
      </div>
    </div>
  );
};

export default InteractivePortfolio;
