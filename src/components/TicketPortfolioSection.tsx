
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { ticketData } from "@/data/ticketData";

const TicketPortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("pending");

  const getCurrentTickets = () => {
    switch (activeFilter) {
      case "pending":
        return ticketData.pending;
      case "live":
        return ticketData.live;
      case "sold":
        return ticketData.sold;
      default:
        return ticketData.pending;
    }
  };

  const getStatusBadge = (status: string, statusColor: string) => {
    const colorMap = {
      amber: "bg-amber-500 text-white",
      emerald: "bg-emerald-500 text-white",
      blue: "bg-blue-500 text-white"
    };
    
    return (
      <Badge className={`${colorMap[statusColor as keyof typeof colorMap]} border-0 mb-2 px-2 py-1 text-xs font-medium`}>
        {status}
      </Badge>
    );
  };

  return (
    <Card className="bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in border border-slate-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <span>Your Ticket Portfolio</span>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-blue-500 hover:text-blue-600" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Manage and track all your ticket listings in one place</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-100">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search tickets, venues, locations..." 
              className="pl-10 bg-white border-slate-300 focus:bg-white text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4">
          <button
            onClick={() => setActiveFilter("pending")}
            className={`px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              activeFilter === "pending" 
                ? "bg-amber-50 border-2 border-amber-300 text-slate-800" 
                : "bg-slate-50 border border-slate-300 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="font-medium">Pending Review</span>
            <Badge className="bg-amber-100 text-amber-800 border-amber-300">{ticketData.pending.length}</Badge>
          </button>
          <button
            onClick={() => setActiveFilter("live")}
            className={`px-4 py-3 border-l-0 flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              activeFilter === "live" 
                ? "bg-emerald-50 border-2 border-emerald-300 text-slate-800" 
                : "bg-slate-50 border border-slate-300 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="font-medium">Live Listings</span>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">{ticketData.live.length}</Badge>
          </button>
          <button
            onClick={() => setActiveFilter("sold")}
            className={`px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              activeFilter === "sold" 
                ? "bg-blue-50 border-2 border-blue-300 text-slate-800" 
                : "bg-slate-50 border border-slate-300 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="font-medium">Sold Tickets</span>
            <Badge className="bg-blue-100 text-blue-800 border-blue-300">{ticketData.sold.length}</Badge>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {getCurrentTickets().map((ticket) => (
            <div key={ticket.id} className="relative bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              {/* Minimal perforated left edge */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-50 flex flex-col justify-evenly items-center">
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>
              
              <div className="ml-4 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-2">
                      {getStatusBadge(ticket.status, ticket.statusColor)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{ticket.title}</h3>
                    <div className="flex items-center space-x-1 text-blue-600 font-medium mb-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{ticket.venue}, {ticket.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>{ticket.date}</span>
                    </div>
                  </div>
                  
                  {/* Right side with ticket details */}
                  <div className="text-center border-l border-slate-200 pl-6 ml-6">
                    <div className="grid grid-cols-4 gap-3 text-center text-sm mb-4">
                      <div>
                        <p className="text-slate-500 font-medium text-xs uppercase tracking-wide mb-2">SECTION</p>
                        <p className="font-bold text-slate-800">{ticket.section}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium text-xs uppercase tracking-wide mb-2">ROW</p>
                        <p className="font-bold text-slate-800">{ticket.row}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium text-xs uppercase tracking-wide mb-2">SEATS</p>
                        <p className="font-bold text-slate-800 text-xs">{ticket.seats || "General"}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium text-xs uppercase tracking-wide mb-2">QTY</p>
                        <p className="font-bold text-slate-800">{ticket.qty}</p>
                      </div>
                    </div>
                    {activeFilter === "pending" && (
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 py-2">
                        APPROVE & LIST
                      </Button>
                    )}
                    {activeFilter === "live" && (
                      <div className="space-y-2">
                        <p className="text-sm text-slate-600">{ticket.views}</p>
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 py-2">
                          EDIT LISTING
                        </Button>
                      </div>
                    )}
                    {activeFilter === "sold" && (
                      <div className="space-y-2">
                        <p className="text-lg font-bold text-emerald-600">${ticket.soldPrice}</p>
                        <p className="text-sm text-slate-600">Sold on {ticket.soldDate}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketPortfolioSection;
