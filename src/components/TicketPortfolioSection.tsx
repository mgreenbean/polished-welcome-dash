
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar, MapPin, TrendingUp, Eye } from "lucide-react";
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
      amber: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg",
      emerald: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg",
      blue: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
    };
    
    return (
      <Badge className={`${colorMap[statusColor as keyof typeof colorMap]} border-0 mb-3 px-3 py-1.5 text-xs font-bold uppercase tracking-wide animate-pulse`}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/5 to-blue-300/10 top-[5%] right-[10%] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/5 to-cyan-300/10 bottom-[20%] left-[5%] animate-[float_10s_ease-in-out_infinite] [animation-delay:3s]"></div>
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/5 to-blue-300/10 top-[40%] left-[15%] animate-[float_12s_ease-in-out_infinite] [animation-delay:6s]"></div>
      </div>

      <Card className="bg-gradient-to-br from-white via-blue-50/30 to-slate-50/50 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in border border-blue-200/60 backdrop-blur-sm relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.03)_1px,_transparent_0)] [background-size:24px_24px] pointer-events-none"></div>
        
        <CardHeader className="pb-4 relative">
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span>Your Ticket Portfolio</span>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-blue-500 hover:text-blue-600 transition-colors" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Manage and track all your ticket listings in one place</p>
                </TooltipContent>
              </Tooltip>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
              <Input 
                placeholder="Search tickets, venues, locations..." 
                className="pl-10 bg-white/80 border-blue-300 focus:bg-white text-slate-800 placeholder-blue-400/70 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-0 mt-4">
            <button
              onClick={() => setActiveFilter("pending")}
              className={`px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeFilter === "pending" 
                  ? "bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 text-slate-800 shadow-lg" 
                  : "bg-white/70 border border-slate-300 text-slate-600 hover:bg-blue-50 hover:border-blue-300 shadow-sm"
              }`}
            >
              <span className="font-medium">Pending Review</span>
              <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm">{ticketData.pending.length}</Badge>
            </button>
            <button
              onClick={() => setActiveFilter("live")}
              className={`px-4 py-3 border-l-0 flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeFilter === "live" 
                  ? "bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 text-slate-800 shadow-lg" 
                  : "bg-white/70 border border-slate-300 text-slate-600 hover:bg-blue-50 hover:border-blue-300 shadow-sm"
              }`}
            >
              <span className="font-medium">Live Listings</span>
              <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-sm">{ticketData.live.length}</Badge>
            </button>
            <button
              onClick={() => setActiveFilter("sold")}
              className={`px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeFilter === "sold" 
                  ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 text-slate-800 shadow-lg" 
                  : "bg-white/70 border border-slate-300 text-slate-600 hover:bg-blue-50 hover:border-blue-300 shadow-sm"
              }`}
            >
              <span className="font-medium">Sold Tickets</span>
              <Badge className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-sm">{ticketData.sold.length}</Badge>
            </button>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-6">
            {getCurrentTickets().map((ticket, index) => (
              <div 
                key={ticket.id} 
                className="group relative bg-gradient-to-br from-white via-blue-50/30 to-white border-2 border-blue-200/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-300/70 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Ticket perforations - enhanced design */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-blue-50 to-slate-50 flex flex-col justify-evenly items-center border-r border-dashed border-blue-300/50">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 bg-blue-300/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="ml-6 px-6 py-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        {getStatusBadge(ticket.status, ticket.statusColor)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-800 transition-colors">{ticket.title}</h3>
                      <div className="flex items-center space-x-2 text-blue-600 font-medium mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{ticket.venue}, {ticket.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{ticket.date}</span>
                      </div>
                      
                      {/* Additional info for live listings */}
                      {activeFilter === "live" && ticket.views && (
                        <div className="flex items-center space-x-2 text-sm text-emerald-600">
                          <Eye className="h-4 w-4" />
                          <span className="font-medium">{ticket.views}</span>
                          <TrendingUp className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    
                    {/* Enhanced right side with ticket details */}
                    <div className="text-center border-l-2 border-dashed border-blue-300/50 pl-8 ml-8 relative">
                      {/* Decorative elements */}
                      <div className="absolute -left-1 top-4 w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="absolute -left-1 bottom-4 w-2 h-2 bg-blue-300 rounded-full"></div>
                      
                      <div className="grid grid-cols-4 gap-4 text-center text-sm mb-6">
                        <div className="bg-blue-50/50 rounded-lg p-3 transform transition-transform group-hover:scale-105">
                          <p className="text-blue-500 font-medium text-xs uppercase tracking-wide mb-2">SECTION</p>
                          <p className="font-bold text-slate-800 text-lg">{ticket.section}</p>
                        </div>
                        <div className="bg-blue-50/50 rounded-lg p-3 transform transition-transform group-hover:scale-105" style={{ transitionDelay: '50ms' }}>
                          <p className="text-blue-500 font-medium text-xs uppercase tracking-wide mb-2">ROW</p>
                          <p className="font-bold text-slate-800 text-lg">{ticket.row}</p>
                        </div>
                        <div className="bg-blue-50/50 rounded-lg p-3 transform transition-transform group-hover:scale-105" style={{ transitionDelay: '100ms' }}>
                          <p className="text-blue-500 font-medium text-xs uppercase tracking-wide mb-2">SEATS</p>
                          <p className="font-bold text-slate-800 text-sm">{ticket.seats || "General"}</p>
                        </div>
                        <div className="bg-blue-50/50 rounded-lg p-3 transform transition-transform group-hover:scale-105" style={{ transitionDelay: '150ms' }}>
                          <p className="text-blue-500 font-medium text-xs uppercase tracking-wide mb-2">QTY</p>
                          <p className="font-bold text-slate-800 text-lg">{ticket.qty}</p>
                        </div>
                      </div>
                      
                      {activeFilter === "pending" && (
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3">
                          APPROVE & LIST
                        </Button>
                      )}
                      {activeFilter === "live" && (
                        <div className="space-y-3">
                          <p className="text-sm text-emerald-600 font-medium">{ticket.views}</p>
                          <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3">
                            EDIT LISTING
                          </Button>
                        </div>
                      )}
                      {activeFilter === "sold" && (
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                            <p className="text-2xl font-bold text-blue-600">${ticket.soldPrice}</p>
                            <p className="text-sm text-slate-600 mt-1">Sold on {ticket.soldDate}</p>
                          </div>
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
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) scale(1.05);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default TicketPortfolioSection;
