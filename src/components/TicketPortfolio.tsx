
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Ticket, Calendar, Search } from "lucide-react";

interface TicketData {
  pending: any[];
  live: any[];
  sold: any[];
}

interface TicketPortfolioProps {
  ticketData: TicketData;
}

const TicketPortfolio = ({ ticketData }: TicketPortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState<'pending' | 'live' | 'sold'>('pending');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTickets = ticketData[activeFilter].filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTicketCard = (ticket: any) => {
    const getStatusBadgeClass = (color: string) => {
      const baseClass = "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
      switch (color) {
        case 'amber':
          return `${baseClass} bg-amber-100 text-amber-800`;
        case 'emerald':
          return `${baseClass} bg-emerald-100 text-emerald-800`;
        case 'blue':
          return `${baseClass} bg-blue-100 text-blue-800`;
        default:
          return `${baseClass} bg-slate-100 text-slate-800`;
      }
    };

    const getButtonClass = (color: string) => {
      switch (color) {
        case 'amber':
          return "w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold";
        case 'emerald':
          return "w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold";
        case 'blue':
          return "w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold";
        default:
          return "w-full bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold";
      }
    };

    return (
      <div key={ticket.id} className="relative bg-white/90 backdrop-blur-sm border-2 rounded-lg p-6 mb-4 shadow-xl border-slate-200/50">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-200"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-200"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className={getStatusBadgeClass(ticket.statusColor)}>{ticket.status}</Badge>
                {ticket.expiresIn && <span className="text-sm text-slate-500 font-medium">Expires in {ticket.expiresIn}</span>}
                {ticket.soldDate && <span className="text-sm text-slate-500 font-medium">Sold on {ticket.soldDate}</span>}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">{ticket.title}</h3>
              <p className="text-sm text-blue-600 mb-2 font-medium">{ticket.venue}</p>
              <p className="text-sm text-blue-500 font-medium">{ticket.location}</p>
              <div className="flex items-center space-x-1 text-sm text-blue-500 mt-2">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">{ticket.date}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center border-l border-dashed border-slate-300 pl-6 ml-6">
            <div className="text-2xl font-bold text-blue-900 mb-1">
              ${ticket.marketPrice}
            </div>
            <p className="text-sm text-slate-500 mb-4 font-medium">market price</p>
            
            <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
              <div>
                <p className="text-slate-500 font-medium">SECTION</p>
                <p className="font-semibold text-blue-700">{ticket.section}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium">ROW</p>
                <p className="font-semibold text-blue-700">{ticket.row}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium">SEATS</p>
                <p className="font-semibold text-blue-700">{ticket.seats}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium">QTY</p>
                <p className="font-semibold text-blue-700">{ticket.qty}</p>
              </div>
            </div>
            
            <Button className={getButtonClass(ticket.statusColor)}>
              {ticket.status === 'PENDING REVIEW' && 'APPROVE & LIST'}
              {ticket.status === 'LIVE LISTING' && 'MANAGE LISTING'}
              {ticket.status === 'SOLD' && 'VIEW DETAILS'}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="border-2 border-dashed border-slate-300/50 bg-white/80 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Ticket className="h-5 w-5" />
            <span className="font-bold">Your Ticket Portfolio</span>
          </CardTitle>
          <div className="relative flex-1 max-w-md ml-8">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search tickets, venues, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-0 text-sm w-full">
          <button 
            onClick={() => setActiveFilter('pending')}
            className={`flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md cursor-pointer ${
              activeFilter === 'pending' 
                ? 'bg-white border-2 border-amber-300 text-blue-700' 
                : 'bg-white border border-slate-300 text-blue-600 hover:border-amber-200'
            } px-3 py-2 rounded-l-lg`}
          >
            <span className="font-medium">Pending Review</span>
            <span className="bg-amber-400 text-amber-900 px-2 py-1 rounded-full text-xs font-bold">
              {ticketData.pending.length}
            </span>
          </button>
          <button 
            onClick={() => setActiveFilter('live')}
            className={`flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md cursor-pointer ${
              activeFilter === 'live' 
                ? 'bg-white border-2 border-emerald-300 text-blue-700' 
                : 'bg-white border border-slate-300 text-blue-600 hover:border-emerald-200'
            } px-3 py-2 border-l-0`}
          >
            <span className="font-medium">Live Listings</span>
            <span className="bg-emerald-400 text-emerald-900 px-2 py-1 rounded-full text-xs font-bold">
              {ticketData.live.length}
            </span>
          </button>
          <button 
            onClick={() => setActiveFilter('sold')}
            className={`flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md cursor-pointer ${
              activeFilter === 'sold' 
                ? 'bg-white border-2 border-blue-300 text-blue-700' 
                : 'bg-white border border-slate-300 text-blue-600 hover:border-blue-200'
            } px-3 py-2 rounded-r-lg border-l-0`}
          >
            <span className="font-medium">Sold Tickets</span>
            <span className="bg-blue-400 text-blue-900 px-2 py-1 rounded-full text-xs font-bold">
              {ticketData.sold.length}
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => renderTicketCard(ticket))
        ) : (
          <div className="text-center py-8 text-slate-500">
            <Ticket className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium">No tickets found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TicketPortfolio;
