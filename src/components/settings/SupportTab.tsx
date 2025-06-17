import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";

const SupportTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Support & Feedback</h2>
        <p className="text-gray-600">Get help and share your feedback with our team</p>
      </div>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <p className="text-sm text-gray-600">Need help? Our support team is here to assist you.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start">
            <MessageCircle className="h-4 w-4 mr-2" />
            Visit Help Center
            <ExternalLink className="h-4 w-4 ml-auto" />
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Phone className="h-4 w-4 mr-2" />
            Contact Support Team
          </Button>
        </CardContent>
      </Card>

      {/* Send Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Send Feedback</CardTitle>
          <p className="text-sm text-gray-600">Help us improve SellMySeats with your feedback.</p>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full justify-start">
            <Mail className="h-4 w-4 mr-2" />
            Send Feedback
          </Button>
        </CardContent>
      </Card>

      {/* Other Ways to Reach Us */}
      <Card>
        <CardHeader>
          <CardTitle>Other Ways to Reach Us</CardTitle>
          <p className="text-sm text-gray-600">Multiple channels to get the help you need.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Phone Support</h4>
                <p className="text-sm text-gray-600">1-800-SELLMYSEATS</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">7AM-10PM EST</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email Support</h4>
                <p className="text-sm text-gray-600">Support@SellMySeats.com</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">24h response</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Live Chat</h4>
                <p className="text-sm text-gray-600">Instant help from our team</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">Available Now</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportTab;
