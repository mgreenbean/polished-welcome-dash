
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Minimize2, Maximize2, MessageCircle, User } from "lucide-react";

const SeatlyFallbackIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg`}>
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
      <circle cx="12" cy="8" r="3"/>
      <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"/>
      <circle cx="8" cy="6" r="1" fill="#34d399"/>
      <circle cx="16" cy="6" r="1" fill="#34d399"/>
    </svg>
  </div>
);

interface SeatlyHelperRef {
  openChat: () => void;
}

const SeatlyHelper = forwardRef<SeatlyHelperRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Seatly, your support assistant. I can help you with ticket listings, payouts, selling tips, and connecting with human support. What can I help you with today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  useImperativeHandle(ref, () => ({
    openChat: () => {
      setIsOpen(true);
      setIsMinimized(false);
      setHasBeenClicked(true);
      setShowTooltip(false);
    }
  }));

  // Show tooltip after 30 seconds if not clicked
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasBeenClicked) {
        setShowTooltip(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasBeenClicked]);

  // Bounce animation every 5 minutes (300 seconds)
  useEffect(() => {
    const bounceInterval = setInterval(() => {
      const button = document.querySelector('.seatly-button');
      if (button && !isOpen) {
        button.classList.add('animate-bounce');
        setTimeout(() => {
          button.classList.remove('animate-bounce');
        }, 1000);
      }
    }, 300000);

    return () => clearInterval(bounceInterval);
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand your question. Let me help you with that. You can access ticket management from the main dashboard or create a new ticket using the quick actions panel. Is there anything specific you'd like to know more about?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleButtonClick = () => {
    setIsOpen(true);
    setHasBeenClicked(true);
    setShowTooltip(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Speech bubble */}
          {showTooltip && (
            <div className="absolute bottom-20 right-0 mb-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap shadow-xl animate-fade-in max-w-48">
              <div className="font-medium">Need help?</div>
              <div className="text-xs opacity-90">Click to chat with Seatly!</div>
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-emerald-600"></div>
            </div>
          )}
          
          <Button
            onClick={handleButtonClick}
            className="seatly-button rounded-full h-16 w-16 bg-gradient-to-br from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 p-0 border-0 group"
          >
            {!imageError ? (
              <img 
                src="/lovable-uploads/seatly-mascot.png" 
                alt="Seatly" 
                className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <MessageCircle className="h-8 w-8 text-white" />
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 border-0 ${isMinimized ? 'h-auto' : 'h-[550px]'} bg-white rounded-2xl overflow-hidden`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-4">
          <div className="flex items-center space-x-3">
            {!imageError ? (
              <img 
                src="/lovable-uploads/seatly-mascot.png" 
                alt="Seatly" 
                className="h-8 w-8 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <SeatlyFallbackIcon className="h-8 w-8" />
            )}
            <div>
              <CardTitle className="text-lg font-semibold">Seatly Support</CardTitle>
              <div className="text-xs opacity-90">Online now</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex-1 p-6 overflow-y-auto max-h-96 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs ${msg.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    {msg.isBot && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        {!imageError ? (
                          <img 
                            src="/lovable-uploads/seatly-mascot.png" 
                            alt="Seatly" 
                            className="h-6 w-6 object-contain"
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <MessageCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                    )}
                    {!msg.isBot && (
                      <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-slate-600" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.isBot
                          ? 'bg-white text-slate-800 shadow-sm'
                          : 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white'
                      } ${msg.isBot ? 'rounded-tl-md' : 'rounded-tr-md'}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-white border-t border-slate-200">
              <div className="flex space-x-3">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 px-4 py-3"
                />
                <Button 
                  size="sm" 
                  onClick={handleSendMessage}
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 px-4 py-3 shadow-md transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
});

SeatlyHelper.displayName = "SeatlyHelper";

export default SeatlyHelper;
