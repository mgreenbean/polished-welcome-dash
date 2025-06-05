
import Header from "@/components/Header";
import SeatlyHelper from "@/components/SeatlyHelper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, FileText, HelpCircle, Bug } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [showSeatlyHelper, setShowSeatlyHelper] = useState(false);

  const supportCategories = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our AI assistant Seatly",
      action: "Start Chat",
      onClick: () => setShowSeatlyHelper(true)
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly for urgent issues",
      action: "Call Now"
    }
  ];

  const faqItems = [
    {
      question: "How do I list my tickets?",
      answer: "Simply click 'List Tickets' on your dashboard and follow the step-by-step process."
    },
    {
      question: "What fees do you charge?",
      answer: "We charge a small service fee only when your tickets sell successfully."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are processed instantly to your connected bank account once tickets are sold."
    },
    {
      question: "Is it safe to sell my tickets here?",
      answer: "Yes, we use secure payment processing and verify all buyers before transactions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header 
        userName="John Doe" 
        notificationCount={3}
        notifications={[
          {
            id: 1,
            title: "Ticket Sale",
            message: "Your Lakers vs Warriors tickets sold!",
            time: "2 mins ago",
            type: 'success'
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Support Center</h1>
          <p className="text-blue-600">Get help when you need it. We're here to assist you.</p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {supportCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={category.onClick}
                >
                  {category.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your issue or question..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                <FileText className="h-4 w-4 mr-2" />
                View All FAQs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>Other ways to get help and learn more</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <FileText className="h-5 w-5" />
                <span className="text-sm">Help Center</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <Bug className="h-5 w-5" />
                <span className="text-sm">Report a Bug</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">Community Forum</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <SeatlyHelper />
    </div>
  );
};

export default Support;
