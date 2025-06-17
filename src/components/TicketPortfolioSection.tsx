
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar } from "lucide-react";

const TicketPortfolioSection = () => {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
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
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search tickets, venues, locations..." 
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4">
          <div className="bg-orange-50 border border-orange-200 text-gray-700 px-4 py-3 rounded-l-lg flex items-center justify-center space-x-2">
            <span className="font-medium">Pending Review</span>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">1</Badge>
          </div>
          <div className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-3 border-l-0 flex items-center justify-center space-x-2">
            <span className="font-medium">Live Listings</span>
            <Badge className="bg-green-100 text-green-800 border-green-200">5</Badge>
          </div>
          <div className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-3 rounded-r-lg border-l-0 flex items-center justify-center space-x-2">
            <span className="font-medium">Sold Tickets</span>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">2</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-white border border-orange-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="mb-3">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">PENDING REVIEW</Badge>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Coldplay: Music Of The Spheres World Tour</h3>
              <p className="text-blue-600 font-medium mb-1">Rogers Stadium, Toronto, ON</p>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>7/12/2025</span>
              </div>
            </div>
            <div className="text-center border-l border-gray-200 pl-6 ml-6">
              <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                <div>
                  <p className="text-gray-500 font-medium">SECTION</p>
                  <p className="font-semibold text-gray-900">GA21</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium">ROW</p>
                  <p className="font-semibold text-gray-900">20</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium">SEATS</p>
                  <p className="font-semibold text-gray-900">General Admission</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium">QTY</p>
                  <p className="font-semibold text-gray-900">1</p>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
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
