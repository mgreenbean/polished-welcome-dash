
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const InteractivePortfolio = () => {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

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
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setSelectedTicket((prev) => (prev + 1) % tickets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tickets.length, isAutoPlaying]);

  const handleTicketClick = (index: number) => {
    setSelectedTicket(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("tickets@seatly.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.log("Copy failed");
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-4 sm:space-y-6">
      {/* Quick Start Process */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
        <h4 className="text-sm font-semibold text-blue-900 mb-3 text-center">How it works</h4>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="space-y-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <p className="text-xs text-blue-700 font-medium">Forward tickets</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <p className="text-xs text-emerald-700 font-medium">We list & sell</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <p className="text-xs text-amber-700 font-medium">You get paid</p>
          </div>
        </div>
      </div>

      {/* Magic Email Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50 shadow-lg">
        <h4 className="text-base font-bold text-blue-900 mb-3">Your Magic Email</h4>
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="flex items-center justify-between gap-2">
            <code className="text-sm font-mono text-slate-800 flex-1 break-all">
              tickets@seatly.com
            </code>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              className="flex-shrink-0 h-8 px-3"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-3 w-3 mr-1 text-green-600" />
                  <span className="text-xs text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-1" />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </Button>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2">
          Forward your ticket confirmations here and we'll handle the rest
        </p>
      </div>

      {/* Portfolio Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/50 animate-scale-in">
        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-900">Your Ticket Portfolio</h3>
            <p className="text-sm text-slate-600 mt-1">Track your listings and earnings</p>
          </div>
          
          <div className="space-y-3">
            {tickets.map((ticket, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] relative ${
                  selectedTicket === index 
                    ? ticket.color + ' shadow-md scale-[1.02]' 
                    : 'hover:bg-blue-50 hover:shadow-sm opacity-75'
                }`}
                onClick={() => handleTicketClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTicketClick(index);
                  }
                }}
                aria-label={`View ${ticket.event} ticket details`}
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-blue-900 text-sm truncate">{ticket.event}</h4>
                      <p className="text-xs text-slate-600 mb-1">{ticket.date} • {ticket.section}</p>
                      <p className="text-base font-bold text-emerald-600">{ticket.price}</p>
                      <div className={`text-xs text-slate-600 transition-all duration-300 mt-1 ${
                        selectedTicket === index ? 'opacity-100 max-h-6' : 'opacity-0 max-h-0 overflow-hidden'
                      }`}>
                        {ticket.status === 'Sold' && `Sold ${ticket.soldDate}`}
                        {ticket.status === 'Pending' && `Expires in ${ticket.expiresIn}`}
                        {ticket.status === 'Listed' && 'Live on 3 platforms'}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <Badge 
                        variant={
                          ticket.status === 'Sold' ? 'default' : 
                          ticket.status === 'Listed' ? 'secondary' : 
                          'outline'
                        } 
                        className="text-xs"
                      >
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
      </div>
    </div>
  );
};

export default InteractivePortfolio;
