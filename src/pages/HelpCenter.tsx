import { useState } from "react";
import { Search, MessageCircle, Phone, Mail, Clock, ChevronRight, ChevronDown, User, FileText, CreditCard, Shield, Bell } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [chatMessage, setChatMessage] = useState("");

  const faqData = [
    {
      id: "selling",
      question: "How do I list my tickets for sale?",
      answer: "To list your tickets, go to your dashboard and click 'Add New Listing'. Upload photos of your tickets, set your price, and provide event details. Our team will verify your listing within 24 hours."
    },
    {
      id: "payment",
      question: "When do I get paid for my tickets?",
      answer: "Payment is processed within 24 hours after the buyer receives and validates the tickets. Funds are transferred directly to your linked bank account or PayPal."
    },
    {
      id: "fees",
      question: "What fees does SellMySeats charge?",
      answer: "We charge a 10% commission on successful sales plus a $2.99 processing fee. There are no upfront costs or listing fees."
    },
    {
      id: "transfer",
      question: "How does ticket transfer work?",
      answer: "We facilitate secure digital transfers through official ticketing platforms. For physical tickets, we provide insured shipping labels and tracking."
    },
    {
      id: "refunds",
      question: "What is your refund policy?",
      answer: "Full refunds are available if the event is cancelled. For other situations, refunds are handled case-by-case within our buyer protection policy."
    }
  ];

  const chatHistory = [
    {
      id: 1,
      type: "user",
      message: "Hi, I need help with listing my concert tickets",
      time: "2:30 PM"
    },
    {
      id: 2,
      type: "agent",
      message: "Hello! I'd be happy to help you list your concert tickets. Can you tell me which event and how many tickets you have?",
      time: "2:31 PM"
    },
    {
      id: 3,
      type: "user",
      message: "I have 2 tickets for Taylor Swift at MetLife Stadium on July 15th",
      time: "2:32 PM"
    },
    {
      id: 4,
      type: "agent",
      message: "Great! That's a popular event. To get started, please go to your dashboard and click 'Add New Listing'. Make sure to upload clear photos of both tickets.",
      time: "2:33 PM"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    alert("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  const handleChatSend = () => {
    if (!chatMessage.trim()) return;
    alert("Message sent to support team!");
    setChatMessage("");
  };

  const handleQuickAction = (action: string) => {
    alert(`Opening ${action} assistance...`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">How can we help you?</h1>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("faq")}>
                <CardHeader>
                  <FileText className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <p className="text-sm text-gray-600">Find quick answers to common questions</p>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("contact")}>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Contact Support</CardTitle>
                  <p className="text-sm text-gray-600">Get in touch with our support team</p>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("chat")}>
                <CardHeader>
                  <Phone className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Live Support</CardTitle>
                  <p className="text-sm text-gray-600">Chat with our team in real-time</p>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Help Topics</h2>
              <div className="space-y-2">
                {faqData.slice(0, 3).map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => {
                      setActiveTab("faq");
                      setExpandedFaq(faq.id);
                    }}
                    className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-gray-900">{faq.question}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "faq":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to the most common questions about SellMySeats</p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <Card key={faq.id} className="border border-gray-200">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === faq.id && (
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Contact Support</h2>
              <p className="text-gray-600">Send us a message and we'll get back to you as soon as possible</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <Input 
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <Input 
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <Input 
                      placeholder="What's this about?" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <Textarea 
                      placeholder="Describe your issue or question..." 
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-2">1-800-SELLMYSEATS</p>
                  <Badge className="bg-green-100 text-green-800">7AM-10PM EST</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-2">support@sellmyseats.com</p>
                  <Badge className="bg-blue-100 text-blue-800">24h response</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-2">Instant help</p>
                  <Badge className="bg-green-100 text-green-800">Available Now</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Live Support Chat</h2>
              <p className="text-gray-600">Chat with our support team in real-time</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="h-96">
                  <CardHeader className="bg-blue-600 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Support Agent</CardTitle>
                        <p className="text-sm text-blue-100">Online now</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                      {chatHistory.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs px-3 py-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>{msg.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Type your message..." 
                        className="flex-1" 
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                      />
                      <Button onClick={handleChatSend} className="bg-blue-600 hover:bg-blue-700">Send</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleQuickAction("Payment Issue")}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Issue
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleQuickAction("Listing Help")}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Listing Help
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleQuickAction("Account Security")}
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Account Security
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleQuickAction("Notifications")}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Support Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>7AM - 10PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9AM - 8PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>10AM - 6PM EST</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "overview", label: "Overview" },
                { id: "faq", label: "FAQ" },
                { id: "contact", label: "Contact" },
                { id: "chat", label: "Live Chat" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
