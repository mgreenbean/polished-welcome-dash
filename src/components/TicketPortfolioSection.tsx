
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar } from "lucide-react";

const TicketPortfolioSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl font-bold text-white flex items-center space-x-2 drop-shadow-sm">
            <Clock className="h-5 w-5 text-emerald-300" />
            <span>Your Ticket Portfolio</span>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-emerald-300 hover:text-emerald-200" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Manage and track all your ticket listings in one place</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-200" />
            <Input 
              placeholder="Search tickets, venues, locations..." 
              className="pl-10 bg-white/10 border-white/20 focus:bg-white/15 text-white placeholder-blue-200 backdrop-blur-sm focus:border-emerald-400/50"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4">
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-400/20 border-2 border-amber-300/50 text-white px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2 backdrop-blur-sm">
            <span className="font-medium">Pending Review</span>
            <Badge className="bg-amber-400/30 text-amber-100 border-amber-300/50 backdrop-blur-sm">1</Badge>
          </div>
          <div className="bg-white/10 border border-white/20 text-white px-4 py-3 border-l-0 flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-white/15 transition-all cursor-pointer">
            <span className="font-medium">Live Listings</span>
            <Badge className="bg-emerald-400/30 text-emerald-100 border-emerald-300/50 backdrop-blur-sm">8</Badge>
          </div>
          <div className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-white/15 transition-all cursor-pointer">
            <span className="font-medium">Sold Tickets</span>
            <Badge className="bg-blue-400/30 text-blue-100 border-blue-300/50 backdrop-blur-sm">2</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-white/15 to-white/10 border border-amber-300/30 rounded-lg p-6 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Badge className="bg-gradient-to-r from-amber-400/30 to-orange-400/30 text-amber-100 border-amber-300/50 mb-3 backdrop-blur-sm">PENDING REVIEW</Badge>
              <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-sm">Coldplay: Music Of The Spheres World Tour</h3>
              <p className="text-emerald-200 font-medium mb-1">Rogers Stadium, Toronto, ON</p>
              <div className="flex items-center space-x-1 text-sm text-blue-100">
                <Calendar className="h-4 w-4" />
                <span>7/12/2025</span>
              </div>
            </div>
            <div className="text-center border-l border-dashed border-white/30 pl-6 ml-6">
              <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                <div>
                  <p className="text-blue-200 font-medium">SECTION</p>
                  <p className="font-semibold text-white">GA21</p>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">ROW</p>
                  <p className="font-semibold text-white">20</p>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">SEATS</p>
                  <p className="font-semibold text-white">General Admission</p>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">QTY</p>
                  <p className="font-semibold text-white">1</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105">
                APPROVE & LIST
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketPortfolioSection;
