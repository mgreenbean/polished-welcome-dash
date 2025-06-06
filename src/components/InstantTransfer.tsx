
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Copy, X, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const InstantTransfer = () => {
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
  const [showFirstTimePrompt, setShowFirstTimePrompt] = useState(false);
  const [hasSeenPrompt, setHasSeenPrompt] = useState(
    localStorage.getItem('hasSeenTransferPrompt') === 'true'
  );

  const handleCopyEmail = async () => {
    if (!hasSeenPrompt) {
      setShowFirstTimePrompt(true);
      return;
    }
    
    try {
      await navigator.clipboard.writeText("greenbay31@bestfan.com");
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch (err) {
      console.log("Copy failed");
    }
  };

  const handlePromptContinue = async () => {
    setShowFirstTimePrompt(false);
    setHasSeenPrompt(true);
    localStorage.setItem('hasSeenTransferPrompt', 'true');
    
    try {
      await navigator.clipboard.writeText("greenbay31@bestfan.com");
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch (err) {
      console.log("Copy failed");
    }
  };

  return (
    <>
      <Card className="mb-6 sm:mb-8 bg-white/80 backdrop-blur-sm border-slate-300/50 shadow-xl">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          {/* Header Section */}
          <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Instant Ticket Transfer</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Send your tickets to our secure email for automatic processing and instant listing across all major marketplaces
              </p>
            </div>
          </div>

          {/* Email Input Section */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <label className="block text-sm font-semibold text-slate-700">
                Transfer Email Address
              </label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">
                    Forward your ticket confirmation emails to this address. 
                    Our system will automatically extract details and list your tickets.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input 
                type="email" 
                value="greenbay31@bestfan.com"
                readOnly
                className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border border-slate-300 rounded-lg bg-slate-50/70 text-slate-900 font-mono text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Ticket transfer email address"
              />
              <Button 
                variant="outline" 
                className="border-slate-400 text-slate-700 hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-medium text-sm sm:text-base"
                onClick={handleCopyEmail}
                onMouseEnter={() => setIsHoveringCopy(true)}
                onMouseLeave={() => setIsHoveringCopy(false)}
                aria-label="Copy email address to clipboard"
              >
                <Copy className={`h-4 w-4 mr-2 transition-all duration-200 ${
                  justCopied ? 'scale-125 text-green-600' : ''
                }`} />
                {justCopied ? 'Copied!' : isHoveringCopy ? 'Copy' : 'Copy'}
              </Button>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="border-t border-slate-200 pt-6 sm:pt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 sm:mb-6">How It Works</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                    Forward your ticket confirmation email
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Send your ticket email to the address above
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                    Our system automatically extracts ticket details and pricing
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    AI processes your tickets instantly
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                    Your tickets appear in your dashboard for review and go live instantly
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Review and approve for instant listing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* First Time User Modal */}
      {showFirstTimePrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full bg-white shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">First time using Instant Transfer?</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowFirstTimePrompt(false)}
                  className="hover:bg-slate-100"
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Before copying the email address, we recommend reading the "How It Works" section below to understand our secure transfer process.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setShowFirstTimePrompt(false)}
                  className="flex-1"
                >
                  I'll read it first
                </Button>
                <Button 
                  onClick={handlePromptContinue}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Copy anyway
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default InstantTransfer;
