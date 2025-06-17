import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, DollarSign, TrendingUp, Calendar, Award } from "lucide-react";
const PaymentTab = () => {
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Portal</h2>
        <p className="text-gray-600">Overview of your account, earnings, and payout methods</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Earned</p>
                <p className="text-2xl font-bold text-gray-900">$0</p>
                <p className="text-xs text-gray-500">Your actual earnings</p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Payouts</p>
                <p className="text-2xl font-bold text-gray-900">$0</p>
                <p className="text-xs text-gray-500">Awaiting processing</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Last Payout</p>
                <p className="text-2xl font-bold text-gray-900">$0</p>
                <p className="text-xs text-gray-500">Most recent payout</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">$0</p>
                <p className="text-xs text-gray-500">Current month earnings</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Payout Methods</h3>
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
        
        
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
              <span>Date</span>
              <span>Event</span>
              <span>Sale Amount</span>
              <span>Commission</span>
              <span>Net Payout</span>
              <span>Status</span>
            </div>
            
            <div className="grid grid-cols-6 gap-4 text-sm py-3 border-b">
              <span className="text-gray-900">6/16/2025</span>
              <span className="text-gray-900">Sample Concert B</span>
              <span className="text-gray-900">$0.00</span>
              <span className="text-red-600">-$0.00</span>
              <span className="text-green-600">$0.00</span>
              <Badge className="bg-green-100 text-green-800 text-xs">sold</Badge>
            </div>
            
            <div className="grid grid-cols-6 gap-4 text-sm py-3">
              <span className="text-gray-900">6/16/2025</span>
              <span className="text-gray-900">Sample Concert A</span>
              <span className="text-gray-900">$0.00</span>
              <span className="text-red-600">-$0.00</span>
              <span className="text-green-600">$0.00</span>
              <Badge className="bg-green-100 text-green-800 text-xs">sold</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default PaymentTab;