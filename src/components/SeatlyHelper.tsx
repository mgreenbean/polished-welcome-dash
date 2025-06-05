
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Minimize2, Maximize2 } from "lucide-react";

const SeatlyFallbackIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg`}>
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
      <circle cx="12" cy="8" r="3"/>
      <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"/>
      <circle cx="8" cy="6" r="1" fill="orange"/>
      <circle cx="16" cy="6" r="1" fill="orange"/>
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
      text: "Hi! I'm Seatly. How can I assist you today?",
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

  // Bounce animation every 10 seconds
  useEffect(() => {
    const bounceInterval = setInterval(() => {
      const button = document.querySelector('.seatly-button');
      if (button && !isOpen) {
        button.classList.add('animate-bounce');
        setTimeout(() => {
          button.classList.remove('animate-bounce');
        }, 1000);
      }
    }, 10000);

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
        text: "I understand your question. Let me help you with that. You can access ticket management from the main dashboard or create a new ticket using the quick actions panel.",
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
            <div className="absolute bottom-16 right-0 mb-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fade-in">
              Need help? Click me!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-600"></div>
            </div>
          )}
          
          <Button
            onClick={handleButtonClick}
            className="seatly-button rounded-full h-14 w-14 bg-transparent hover:bg-gray-100 shadow-lg transition-all hover:scale-105 p-0 border-0"
          >
            {!imageError ? (
              <img 
                src="/lovable-uploads/seatly-mascot.png" 
                alt="Seatly" 
                className="h-14 w-14 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <SeatlyFallbackIcon className="h-14 w-14" />
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-xl transition-all ${isMinimized ? 'h-auto' : 'h-[500px]'}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            {!imageError ? (
              <img 
                src="/lovable-uploads/seatly-mascot.png" 
                alt="Seatly" 
                className="h-6 w-6 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <SeatlyFallbackIcon className="h-6 w-6" />
            )}
            <CardTitle className="text-base font-medium">Seatly Assistant</CardTitle>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white hover:bg-blue-700"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      msg.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t flex space-x-2">
              <Input
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
});

SeatlyHelper.displayName = "SeatlyHelper";

export default SeatlyHelper;
