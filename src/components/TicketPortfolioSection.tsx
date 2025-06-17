
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar } from "lucide-react";

const TicketPortfolioSection = () => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Your Ticket Portfolio</span>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-blue-600 hover:text-blue-800" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Manage and track all your ticket listings in one place</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
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
              className="pl-10 bg-slate-50/50 border-slate-200 focus:bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4">
          <div className="bg-amber-50 border-2 border-amber-200 text-slate-700 px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2">
            <span className="font-medium">Pending Review</span>
            <Badge className="bg-amber-100 text-amber-800 border-amber-200">1</Badge>
          </div>
          <div className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3 border-l-0 flex items-center justify-center space-x-2">
            <span className="font-medium">Live Listings</span>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">8</Badge>
          </div>
          <div className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2">
            <span className="font-medium">Sold Tickets</span>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">2</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-white border border-amber-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-3">PENDING REVIEW</Badge>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Coldplay: Music Of The Spheres World Tour</h3>
              <p className="text-blue-600 font-medium mb-1">Rogers Stadium, Toronto, ON</p>
              <div className="flex items-center space-x-1 text-sm text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>7/12/2025</span>
              </div>
            </div>
            <div className="text-center border-l border-dashed border-slate-300 pl-6 ml-6">
              <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                <div>
                  <p className="text-slate-500 font-medium">SECTION</p>
                  <p className="font-semibold text-slate-900">GA21</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium">ROW</p>
                  <p className="font-semibold text-slate-900">20</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium">SEATS</p>
                  <p className="font-semibold text-slate-900">General Admission</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium">QTY</p>
                  <p className="font-semibold text-slate-900">1</p>
                </div>
              </div>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
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
