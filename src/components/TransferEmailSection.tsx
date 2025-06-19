
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const TransferEmailSection = () => {
  return (
    <div className="mb-6 animate-fade-in">
      <Card className="bg-gradient-to-br from-blue-50 to-white shadow-2xl hover:shadow-3xl transition-all duration-300 border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 mb-5">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Mail className="text-white h-6 w-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-800 mb-2">Your Transfer Email</h2>
              <p className="text-blue-600 font-medium">Send your tickets to your unique email for automatic processing and instant listing across all major marketplaces</p>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-blue-700 mb-2">Transfer Email Address</label>
            <div className="flex space-x-3">
              <input 
                type="email" 
                value="greenbay31@bestfan.com"
                readOnly
                className="flex-1 px-4 py-3 border border-blue-300 rounded-lg bg-blue-50 text-blue-800 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
              />
              <Button 
                variant="outline" 
                className="border-blue-300 text-blue-700 hover:bg-blue-100 px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
              >
                Copy
              </Button>
            </div>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg">1</div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Forward your ticket confirmation email</h4>
                  <p className="text-sm text-blue-600">Send your ticket email to the address above</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg">2</div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Our system automatically extracts the ticket details</h4>
                  <p className="text-sm text-blue-600">AI processes your tickets instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg">3</div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Your tickets appear in your dashboard for review and go live instantly</h4>
                  <p className="text-sm text-blue-600">Review and approve for instant listing</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransferEmailSection;
