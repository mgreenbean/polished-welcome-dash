
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar, MapPin } from "lucide-react";

const TicketPortfolioSection = () => {
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
              className="pl-10 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-300 focus:bg-white text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 text-slate-800 px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2">
            <span className="font-medium">Pending Review</span>
            <Badge className="bg-amber-100 text-amber-800 border-amber-300">1</Badge>
          </div>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-300 text-slate-800 px-4 py-3 border-l-0 flex items-center justify-center space-x-2 hover:bg-slate-100 transition-all cursor-pointer">
            <span className="font-medium">Live Listings</span>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">8</Badge>
          </div>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-300 text-slate-800 px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2 hover:bg-slate-100 transition-all cursor-pointer">
            <span className="font-medium">Sold Tickets</span>
            <Badge className="bg-blue-100 text-blue-800 border-blue-300">2</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Ticket styled like a real ticket with perforated edges */}
        <div className="relative bg-white border-2 border-dashed border-amber-300 rounded-lg shadow-lg overflow-hidden">
          {/* Perforated left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-white">
            <div className="flex flex-col justify-evenly h-full items-center">
              <div className="w-3 h-3 bg-gray-200 rounded-full border border-amber-300"></div>
              <div className="w-3 h-3 bg-gray-200 rounded-full border border-amber-300"></div>
              <div className="w-3 h-3 bg-gray-200 rounded-full border border-amber-300"></div>
              <div className="w-3 h-3 bg-gray-200 rounded-full border border-amber-300"></div>
              <div className="w-3 h-3 bg-gray-200 rounded-full border border-amber-300"></div>
            </div>
          </div>
          
          <div className="ml-6 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="mb-3">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 mb-3 px-3 py-1 text-xs font-bold">PENDING REVIEW</Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Coldplay: Music Of The Spheres World Tour</h3>
                <div className="flex items-center space-x-1 text-emerald-600 font-medium mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rogers Stadium, Toronto, ON</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-slate-600">
                  <Calendar className="h-4 w-4" />
                  <span>7/12/2025</span>
                </div>
              </div>
              
              {/* Right side with ticket details */}
              <div className="text-center border-l-2 border-dashed border-amber-300 pl-6 ml-6">
                <div className="grid grid-cols-4 gap-6 text-center text-sm mb-6">
                  <div>
                    <p className="text-slate-500 font-medium text-xs uppercase tracking-wide">SECTION:</p>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded">
                      <p className="font-bold text-slate-800 text-lg">GA21</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium text-xs uppercase tracking-wide">ROW:</p>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded">
                      <p className="font-bold text-slate-800 text-lg">20</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium text-xs uppercase tracking-wide">SEATS:</p>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded">
                      <p className="font-bold text-slate-800 text-sm">General Admission</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium text-xs uppercase tracking-wide">QUANTITY:</p>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded">
                      <p className="font-bold text-slate-800 text-lg">1</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 py-3">
                  APPROVE & LIST
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketPortfolioSection;
