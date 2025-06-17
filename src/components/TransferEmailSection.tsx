
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const TransferEmailSection = () => {
  return (
    <div className="mb-8 animate-fade-in">
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15">
        <CardContent className="p-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
              <Mail className="text-white h-6 w-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 drop-shadow-sm">Your Transfer Email</h2>
              <p className="text-blue-100 font-medium">Send your tickets to your unique email for automatic processing and instant listing across all major marketplaces</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-blue-100 mb-3">Transfer Email Address</label>
            <div className="flex space-x-3">
              <input 
                type="email" 
                value="greenbay31@bestfan.com"
                readOnly
                className="flex-1 px-4 py-3 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 placeholder-blue-200"
              />
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/20 px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 font-medium backdrop-blur-sm"
              >
                Copy
              </Button>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg">1</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Forward your ticket confirmation email</h4>
                  <p className="text-sm text-blue-100">Send your ticket email to the address above</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg">2</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Our system automatically extracts the ticket details</h4>
                  <p className="text-sm text-blue-100">AI processes your tickets instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg">3</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Your tickets appear in your dashboard for review and go live instantly</h4>
                  <p className="text-sm text-blue-100">Review and approve for instant listing</p>
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
