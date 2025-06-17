
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar } from "lucide-react";

const TicketPortfolioSection = () => {
  return (
    <Card className="bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <Clock className="h-5 w-5 text-emerald-500" />
            <span>Your Ticket Portfolio</span>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-emerald-500 hover:text-emerald-600" />
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
              className="pl-10 bg-slate-50 border-slate-300 focus:bg-white text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 text-slate-800 px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2">
            <span className="font-medium">Pending Review</span>
            <Badge className="bg-amber-100 text-amber-800 border-amber-300">1</Badge>
          </div>
          <div className="bg-slate-50 border border-slate-300 text-slate-800 px-4 py-3 border-l-0 flex items-center justify-center space-x-2 hover:bg-slate-100 transition-all cursor-pointer">
            <span className="font-medium">Live Listings</span>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">8</Badge>
          </div>
          <div className="bg-slate-50 border border-slate-300 text-slate-800 px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2 hover:bg-slate-100 transition-all cursor-pointer">
            <span className="font-medium">Sold Tickets</span>
            <Badge className="bg-blue-100 text-blue-800 border-blue-300">2</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-300 mb-3">PENDING REVIEW</Badge>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">Coldplay: Music Of The Spheres World Tour</h3>
              <p className="text-emerald-600 font-medium mb-1">Rogers Stadium, Toronto, ON</p>
              <div className="flex items-center space-x-1 text-sm text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>7/12/2025</span>
              </div>
            </div>
            <div className="text-center border-l border-dashed border-slate-300 pl-6 ml-6">
              <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                <div>
                  <p className="text-slate-500 font-medium">SECTION</p>
                  <p className="font-semibold text-slate-800">GA21</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium">ROW</p>
                  <p className="font-semibold text-slate-800">20</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium">SEATS</p>
                  <p className="font-semibold text-slate-800">General Admission</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium">QTY</p>
                  <p className="font-semibold text-slate-800">1</p>
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
