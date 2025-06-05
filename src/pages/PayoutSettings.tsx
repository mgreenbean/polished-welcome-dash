
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { Plus, Trash2, Check } from "lucide-react";

const PayoutSettings = () => {
  const [paypalEmails, setPaypalEmails] = useState([
    { id: 1, email: "john.doe@paypal.com", isDefault: true },
    { id: 2, email: "business@paypal.com", isDefault: false }
  ]);
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  const addPaypalEmail = () => {
    if (!newEmail || !newEmail.includes("@")) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    if (paypalEmails.some(item => item.email === newEmail)) {
      showMessage("This email is already added", "error");
      return;
    }

    const newId = Math.max(...paypalEmails.map(e => e.id), 0) + 1;
    setPaypalEmails(prev => [...prev, { 
      id: newId, 
      email: newEmail, 
      isDefault: paypalEmails.length === 0 
    }]);
    setNewEmail("");
    showMessage("PayPal email added successfully!", "success");
  };

  const removePaypalEmail = (id: number) => {
    const emailToRemove = paypalEmails.find(e => e.id === id);
    if (emailToRemove?.isDefault && paypalEmails.length > 1) {
      showMessage("Cannot remove default email. Set another email as default first.", "error");
      return;
    }

    setPaypalEmails(prev => prev.filter(e => e.id !== id));
    showMessage("PayPal email removed successfully!", "success");
  };

  const setDefaultEmail = (id: number) => {
    setPaypalEmails(prev => prev.map(email => ({
      ...email,
      isDefault: email.id === id
    })));
    showMessage("Default PayPal email updated!", "success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900">Payout Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4">PayPal Email Addresses</h3>
                
                {message && (
                  <Alert variant={messageType === "error" ? "destructive" : "default"} className={`mb-4 ${messageType === "error" ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}>
                    <AlertDescription className={messageType === "error" ? "text-red-700" : "text-green-700"}>
                      {message}
                    </AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-3">
                  {paypalEmails.map((emailItem) => (
                    <div key={emailItem.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-900">{emailItem.email}</span>
                        {emailItem.isDefault && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            Default
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        {!emailItem.isDefault && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setDefaultEmail(emailItem.id)}
                            className="text-blue-600 border-blue-300 hover:bg-blue-50"
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Set Default
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removePaypalEmail(emailItem.id)}
                          className="text-red-600 border-red-300 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex space-x-2">
                  <div className="flex-1">
                    <Label htmlFor="newEmail">Add New PayPal Email</Label>
                    <Input
                      id="newEmail"
                      type="email"
                      placeholder="Enter PayPal email address"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="mt-1"
                      onKeyPress={(e) => e.key === 'Enter' && addPaypalEmail()}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={addPaypalEmail} className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Important Information</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Payouts are processed within 1-3 business days</li>
                    <li>• Make sure your PayPal account can receive payments</li>
                    <li>• You must have at least one PayPal email set as default</li>
                    <li>• PayPal fees may apply to transactions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PayoutSettings;
