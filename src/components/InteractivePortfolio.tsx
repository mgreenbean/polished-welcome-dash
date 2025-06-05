
import { useState } from "react";
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
      event: "Taylor Swift Concert",
      date: "Jan 20, 2025",
      section: "Floor A",
      price: "$850",
      profit: "+$250",
      status: "Sold",
      color: "bg-blue-100 border-blue-300"
    },
    {
      event: "Broadway Show",
      date: "Feb 5, 2025",
      section: "Orchestra",
      price: "$320",
      profit: "+$80",
      status: "Pending",
      color: "bg-amber-100 border-amber-300"
    }
  ];

  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-blue-200/50 animate-scale-in">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-900">My Ticket Portfolio</h3>
        <p className="text-sm text-slate-600">Click on any ticket to see details</p>
      </div>
      
      <div className="space-y-3 mb-4">
        {tickets.map((ticket, index) => (
          <Card 
            key={index}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedTicket === index ? ticket.color : 'hover:bg-blue-50'
            }`}
            onClick={() => setSelectedTicket(index)}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900">{ticket.event}</h4>
                  <p className="text-sm text-slate-600">{ticket.date} • {ticket.section}</p>
                  <p className="text-lg font-bold text-emerald-600">{ticket.price}</p>
                </div>
                <div className="text-right">
                  <Badge variant={ticket.status === 'Sold' ? 'default' : ticket.status === 'Listed' ? 'secondary' : 'outline'}>
                    {ticket.status}
                  </Badge>
                  <p className="text-sm text-emerald-600 font-medium mt-1">{ticket.profit}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg p-4">
        <div className="text-center">
          <p className="text-sm text-slate-600">Total Portfolio Value</p>
          <p className="text-2xl font-bold text-blue-900">$1,620</p>
          <p className="text-sm text-emerald-600 font-medium">+$450 profit</p>
        </div>
      </div>
    </div>
  );
};

export default InteractivePortfolio;
