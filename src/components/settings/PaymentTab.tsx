
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2 } from "lucide-react";

const PaymentTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Portal</h2>
          <p className="text-gray-600">Manage your payout methods and preferences</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Method
        </Button>
      </div>

      {/* Active Payout Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Active Payout Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Zelle */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-sm">Z</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Zelle</h4>
                <p className="text-sm text-gray-600">greenbaumichael@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-blue-100 text-blue-800">Default</Badge>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* PayPal */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">PP</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">PayPal</h4>
                <p className="text-sm text-gray-600">MAGREENBAUM@YAHOO.COM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">Set as Default</Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payout Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payout Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Automatic Payouts</h4>
            <p className="text-sm text-gray-600 mb-3">Get paid automatically when your tickets sell</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Enable automatic payouts</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Minimum Payout Amount</h4>
            <p className="text-sm text-gray-600">Set the minimum amount before a payout is processed</p>
            <div className="mt-3">
              <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                <option>$10</option>
                <option>$25</option>
                <option>$50</option>
                <option>$100</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentTab;
