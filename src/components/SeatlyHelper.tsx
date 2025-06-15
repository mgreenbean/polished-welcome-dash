
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Minimize2, Maximize2, MessageCircle, User, Clock, ChevronDown } from "lucide-react";

const SeatlyFallbackIcon = ({ className }: { className?: string }) => (
  <div className={`${className} bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg`}>
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
      <circle cx="12" cy="8" r="3"/>
      <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"/>
      <circle cx="8" cy="6" r="1" fill="#60a5fa"/>
      <circle cx="16" cy="6" r="1" fill="#60a5fa"/>
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
  const [showHistory, setShowHistory] = useState(false);
  const [currentChatId] = useState(1);

  // Suggested questions
  const suggestedQuestions = [
    "How do I list my tickets?",
    "What are your fees?",
    "How do I get paid?",
    "How to cancel a listing?"
  ];

  // Chat history/memories
  const chatHistory = [
    {
      id: 1,
      title: "Ticket listing help",
      lastMessage: "Thanks for helping with my listing!",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isActive: true
    },
    {
      id: 2,
      title: "Payout question",
      lastMessage: "Got it, payments are instant.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      isActive: false
    },
    {
      id: 3,
      title: "Account verification",
      lastMessage: "Verification completed successfully.",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      isActive: false
    }
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can we help you today?",
      isBot: true,
      timestamp: new Date(),
      agent: "Seatly"
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

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date(),
      agent: "You"
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand your question. Let me help you with that. You can access ticket management from the main dashboard or create a new ticket using the quick actions panel. Is there anything specific you'd like to know more about?",
        isBot: true,
        timestamp: new Date(),
        agent: "Seatly"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessage(question);
    handleSendMessage();
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Speech bubble */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 mb-2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl animate-fade-in max-w-44">
              <div className="font-medium text-xs">Need help?</div>
              <div className="text-xs opacity-90">Start a conversation</div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
            </div>
          )}
          
          <Button
            onClick={handleButtonClick}
            className="rounded-full h-14 w-14 bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-0 border-0"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-xl transition-all duration-300 border border-slate-200 ${isMinimized ? 'h-14' : 'h-[500px]'} bg-white rounded-lg overflow-hidden`}>
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 bg-slate-800 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div>
              <CardTitle className="text-sm font-medium">Live Chat</CardTitle>
              <div className="text-xs opacity-75">We're online</div>
            </div>
          </div>
          <div className="flex space-x-1">
            {!isMinimized && chatHistory.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 text-white hover:bg-white/20"
                onClick={() => setShowHistory(!showHistory)}
              >
                <Clock className="h-3 w-3" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-white hover:bg-white/20"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-full">
            {/* Chat History Dropdown */}
            {showHistory && (
              <div className="border-b border-slate-200 bg-slate-50 p-3 max-h-32 overflow-y-auto">
                <div className="text-xs font-medium text-slate-600 mb-2">Recent conversations</div>
                <div className="space-y-1">
                  {chatHistory.map((chat) => (
                    <div 
                      key={chat.id}
                      className={`p-2 rounded text-xs cursor-pointer hover:bg-white transition-colors ${
                        chat.id === currentChatId ? 'bg-blue-50 border border-blue-200' : 'bg-white'
                      }`}
                    >
                      <div className="font-medium text-slate-800 truncate">{chat.title}</div>
                      <div className="text-slate-500 truncate">{chat.lastMessage}</div>
                      <div className="text-slate-400 text-xs mt-1">{formatDate(chat.timestamp)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs ${msg.isBot ? '' : 'text-right'}`}>
                    {msg.isBot && (
                      <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        {msg.agent} • {formatTime(msg.timestamp)}
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        msg.isBot
                          ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {!msg.isBot && (
                      <div className="text-xs text-slate-500 mt-1">
                        {formatTime(msg.timestamp)}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="mt-4">
                  <div className="text-xs font-medium text-slate-600 mb-2">Suggested questions:</div>
                  <div className="space-y-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="w-full text-left p-2 text-sm bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 h-9 text-sm border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                />
                <Button 
                  size="sm" 
                  onClick={handleSendMessage}
                  className="h-9 w-9 p-0 bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="text-xs text-slate-400">Powered by Seatly</div>
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
