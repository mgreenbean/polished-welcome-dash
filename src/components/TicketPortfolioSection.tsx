
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Clock, RefreshCw, Search, HelpCircle, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const TicketPortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'live' | 'sold'>('pending');

  const renderTicketCard = () => {
    if (activeTab === 'pending') {
      return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 font-medium">
                  PENDING REVIEW
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Coldplay: Music Of The Spheres World Tour
              </h3>
              <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                <MapPin className="h-4 w-4" />
                <span>Rogers Stadium, Toronto, ON</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>July 12, 2025</span>
              </div>
            </div>
            
            <div className="ml-6 text-right">
              <div className="grid grid-cols-2 gap-4 text-sm mb-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-gray-500 font-medium text-xs uppercase tracking-wide">Section</p>
                  <p className="font-semibold text-gray-900">GA21</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-xs uppercase tracking-wide">Row</p>
                  <p className="font-semibold text-gray-900">20</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-xs uppercase tracking-wide">Seats</p>
                  <p className="font-semibold text-gray-900">GA</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-xs uppercase tracking-wide">Qty</p>
                  <p className="font-semibold text-gray-900">1</p>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                APPROVE & LIST
              </Button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="text-center py-12 text-gray-500">
        <Clock className="h-12 w-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">No {activeTab} tickets</p>
        <p className="text-sm">Your {activeTab} tickets will appear here</p>
      </div>
    );
  };

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
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search tickets, venues, locations..." 
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-0">
          <button 
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-3 rounded-l-lg border transition-all font-medium text-sm ${
              activeTab === 'pending' 
                ? 'bg-orange-50 border-orange-200 text-orange-800' 
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-orange-25 cursor-pointer'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span>Pending Review</span>
              <Badge className={`${
                activeTab === 'pending' 
                  ? 'bg-orange-100 text-orange-800 border-orange-200' 
                  : 'bg-gray-100 text-gray-600 border-gray-200'
              }`}>
                1
              </Badge>
            </div>
          </button>
          
          <button 
            onClick={() => setActiveTab('live')}
            className={`px-4 py-3 border-l-0 border transition-all font-medium text-sm ${
              activeTab === 'live' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-green-25 cursor-pointer'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span>Live Listings</span>
              <Badge className={`${
                activeTab === 'live' 
                  ? 'bg-green-100 text-green-800 border-green-200' 
                  : 'bg-gray-100 text-gray-600 border-gray-200'
              }`}>
                5
              </Badge>
            </div>
          </button>
          
          <button 
            onClick={() => setActiveTab('sold')}
            className={`px-4 py-3 rounded-r-lg border-l-0 border transition-all font-medium text-sm ${
              activeTab === 'sold' 
                ? 'bg-blue-50 border-blue-200 text-blue-800' 
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-blue-25 cursor-pointer'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span>Sold Tickets</span>
              <Badge className={`${
                activeTab === 'sold' 
                  ? 'bg-blue-100 text-blue-800 border-blue-200' 
                  : 'bg-gray-100 text-gray-600 border-gray-200'
              }`}>
                2
              </Badge>
            </div>
          </button>
        </div>
      </CardHeader>
      
      <CardContent>
        {renderTicketCard()}
      </CardContent>
    </Card>
  );
};

export default TicketPortfolioSection;
