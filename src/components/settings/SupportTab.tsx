import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, ExternalLink, Send, User, Clock, ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const SupportTab = () => {
  const [message, setMessage] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [activeChat, setActiveChat] = useState(1);

  // Chat history data
  const chatHistory = [
    {
      id: 1,
      title: "Ticket listing help",
      lastMessage: "Thanks for helping with my listing!",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isActive: true,
      status: "resolved"
    },
    {
      id: 2,
      title: "Payout question",
      lastMessage: "Got it, payments are instant.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      isActive: false,
      status: "resolved"
    },
    {
      id: 3,
      title: "Account verification",
      lastMessage: "Verification completed successfully.",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      isActive: false,
      status: "resolved"
    }
  ];

  const currentChatMessages = [
    {
      id: 1,
      text: "Hello! How can we help you today?",
      isBot: true,
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      agent: "Support Team"
    },
    {
      id: 2,
      text: "I need help listing my concert tickets",
      isBot: false,
      timestamp: new Date(Date.now() - 50 * 60 * 1000)
    },
    {
      id: 3,
      text: "I'd be happy to help you with that! Can you tell me which event and how many tickets you have?",
      isBot: true,
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      agent: "Support Team"
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessage("");
    // In a real app, this would send the message
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -m-6 p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Support & Feedback</h2>
          <p className="text-slate-300">Get help and share your feedback with our team</p>
        </div>

        {/* Live Support Chat */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="bg-slate-700/50 border-b border-slate-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <CardTitle className="text-white">Live Support Chat</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHistory(!showHistory)}
                  className="text-slate-300 hover:text-white hover:bg-slate-600"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  History
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showHistory ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Chat History Dropdown */}
            {showHistory && (
              <div className="border-b border-slate-600 bg-slate-700/30 p-4">
                <div className="text-sm font-medium text-slate-300 mb-3">Recent conversations</div>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {chatHistory.map((chat) => (
                    <div 
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        chat.id === activeChat 
                          ? 'bg-blue-600/20 border border-blue-500/30' 
                          : 'bg-slate-600/30 hover:bg-slate-600/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-white text-sm truncate">{chat.title}</div>
                        <Badge className={`text-xs ${
                          chat.status === 'resolved' 
                            ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                        }`}>
                          {chat.status}
                        </Badge>
                      </div>
                      <div className="text-slate-400 text-xs truncate">{chat.lastMessage}</div>
                      <div className="text-slate-500 text-xs mt-1">{formatDate(chat.timestamp)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-800/30">
              {currentChatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs ${msg.isBot ? '' : 'text-right'}`}>
                    {msg.isBot && (
                      <div className="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {msg.agent} • {formatTime(msg.timestamp)}
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        msg.isBot
                          ? 'bg-slate-700/50 text-slate-200 border border-slate-600/50'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {!msg.isBot && (
                      <div className="text-xs text-slate-400 mt-1">
                        {formatTime(msg.timestamp)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 bg-slate-700/30 border-t border-slate-600">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Support */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Contact Support</CardTitle>
              <p className="text-sm text-slate-300">Need help? Our support team is here to assist you.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 justify-start">
                <Link to="/help-center" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Visit Help Center
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                onClick={() => window.open('tel:1-800-SELLMYSEATS', '_self')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Support Team
              </Button>
            </CardContent>
          </Card>

          {/* Send Feedback */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Send Feedback</CardTitle>
              <p className="text-sm text-slate-300">Help us improve SellMySeats with your feedback.</p>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                onClick={() => window.open('mailto:support@sellmyseats.com?subject=Feedback', '_self')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Feedback
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Other Ways to Reach Us */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Other Ways to Reach Us</CardTitle>
            <p className="text-sm text-slate-300">Multiple channels to get the help you need.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-600 rounded-lg bg-slate-700/30">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone Support</h4>
                  <p className="text-sm text-slate-300">1-800-SELLMYSEATS</p>
                </div>
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">7AM-10PM EST</Badge>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-600 rounded-lg bg-slate-700/30">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email Support</h4>
                  <p className="text-sm text-slate-300">Support@SellMySeats.com</p>
                </div>
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">24h response</Badge>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-600 rounded-lg bg-slate-700/30">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Live Chat</h4>
                  <p className="text-sm text-slate-300">Instant help from our team</p>
                </div>
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Available Now</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportTab;
