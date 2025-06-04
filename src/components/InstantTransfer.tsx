
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Copy } from "lucide-react";

const InstantTransfer = () => {
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [justCopied, setJustCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("greenbay31@bestfan.com");
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch (err) {
      console.log("Copy failed");
    }
  };

  return (
    <Card className="mb-8 bg-white/80 backdrop-blur-sm border-slate-300/50 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Send className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Instant Ticket Transfer</h2>
            <p className="text-slate-600 font-medium">Send your tickets to our secure email for automatic processing and instant listing across all major marketplaces</p>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">Transfer Email Address</label>
          <div className="flex space-x-3">
            <input 
              type="email" 
              value="greenbay31@bestfan.com"
              readOnly
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg bg-slate-50/70 text-slate-900 font-mono text-sm"
            />
            <Button 
              variant="outline" 
              className="border-slate-400 text-slate-700 hover:bg-slate-100 px-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 relative font-medium"
              onClick={handleCopyEmail}
              onMouseEnter={() => setIsHoveringCopy(true)}
              onMouseLeave={() => setIsHoveringCopy(false)}
            >
              <Copy className={`h-4 w-4 mr-2 transition-transform duration-200 ${justCopied ? 'scale-125 text-green-600' : ''}`} />
              {justCopied ? 'Copied!' : isHoveringCopy ? 'Copy' : 'Copy'}
              {justCopied && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
              )}
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Forward your ticket confirmation email</h4>
                <p className="text-sm text-slate-600 font-medium">Send your ticket email to the address above</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Our system automatically extracts ticket details and pricing</h4>
                <p className="text-sm text-slate-600 font-medium">AI processes your tickets instantly</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Your tickets appear in your dashboard for review and go live instantly</h4>
                <p className="text-sm text-slate-600 font-medium">Review and approve for instant listing</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstantTransfer;
