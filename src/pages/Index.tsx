
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Plus, Search, Bell, User, Settings, BarChart3, Ticket, Users, Calendar, Copy, Shield, Zap, Clock, Filter, RefreshCw, TrendingUp, DollarSign } from "lucide-react";
import SeatlyHelper from "@/components/SeatlyHelper";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const userName = "Michael Chen";

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">SellMySeats</span>
                <span className="text-sm text-gray-500">SELL YOUR TICKETS</span>
              </div>
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-900 font-medium">Dashboard</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">My Listings</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Analytics</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search events, venues, or artists..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                List Tickets
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <span className="ml-1 text-xs bg-red-500 text-white rounded-full px-1">3</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{userName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Instant Ticket Transfer Section */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Instant Ticket Transfer</h2>
                <p className="text-gray-600">Send your tickets to our secure email for automatic processing and instant listing</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Email Address</label>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  value="greenbay31@bestfan.com"
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                />
                <Button variant="outline">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Secure Processing</h3>
                <p className="text-sm text-gray-600">Bank-level encryption protects your ticket transfers</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Instant Listing</h3>
                <p className="text-sm text-gray-600">Tickets go live automatically within minutes</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">24/7 Monitoring</h3>
                <p className="text-sm text-gray-600">Round-the-clock processing and support</p>
              </div>
            </div>

            <div className="bg-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">How it works:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span>Forward your ticket confirmation email to the address above</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span>Our system automatically extracts ticket details and pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span>Your tickets appear in your dashboard for review and go live instantly</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-800 mb-1">PENDING REVIEW</p>
                  <p className="text-2xl font-bold text-orange-900">1</p>
                  <p className="text-xs text-orange-600">Awaiting approval</p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-orange-600">↗ 12%</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800 mb-1">ACTIVE LISTINGS</p>
                  <p className="text-2xl font-bold text-blue-900">2</p>
                  <p className="text-xs text-blue-600">Currently live</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-blue-600">↗ 8%</div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800 mb-1">TOTAL SALES</p>
                  <p className="text-2xl font-bold text-green-900">47</p>
                  <p className="text-xs text-green-600">Tickets sold</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-green-600">↗ 15%</div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-800 mb-1">REVENUE</p>
                  <p className="text-2xl font-bold text-purple-900">$12,450</p>
                  <p className="text-xs text-purple-600">This month</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-purple-600">↗ 23%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Ticket Portfolio */}
          <div className="lg:col-span-3">
            <Card className="border-2 border-dashed border-gray-300 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Ticket className="h-5 w-5" />
                    <span>Your Ticket Portfolio</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Tickets
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Pending Review</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">1</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Live Listings</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">2</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Sold Tickets</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">47</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Ticket shaped card */}
                <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 mb-4">
                  {/* Ticket notches */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-50 rounded-full border-2 border-gray-200"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-gray-50 rounded-full border-2 border-gray-200"></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-orange-100 text-orange-800">PENDING REVIEW</Badge>
                        <span className="text-sm text-gray-500">Expires in 2 days</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">NBA FINALS: TBD AT KNICKS RD 4 HM GM 3</h3>
                      <p className="text-sm text-gray-600 mb-2">Madison Square Garden</p>
                      <p className="text-sm text-gray-500">New York, NY</p>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>TBD 2024</span>
                      </div>
                    </div>
                    
                    <div className="text-center border-l border-dashed border-gray-300 pl-6 ml-6">
                      <div className="text-2xl font-bold text-gray-900 mb-1">$450</div>
                      <p className="text-sm text-gray-500 mb-4">each</p>
                      
                      <div className="grid grid-cols-4 gap-4 text-center text-sm mb-4">
                        <div>
                          <p className="text-gray-500">SECTION</p>
                          <p className="font-semibold">213</p>
                        </div>
                        <div>
                          <p className="text-gray-500">ROW</p>
                          <p className="font-semibold">18</p>
                        </div>
                        <div>
                          <p className="text-gray-500">SEATS</p>
                          <p className="font-semibold">11, 12</p>
                        </div>
                        <div>
                          <p className="text-gray-500">QTY</p>
                          <p className="font-semibold">2</p>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        APPROVE & LIST
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Market Insights */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  List New Tickets
                </Button>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Market Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">NBA Finals</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">+15%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Concerts</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">+8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Broadway</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">+12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Seatly Helper Widget */}
      <SeatlyHelper />
    </div>
  );
};

export default Index;
