
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { toast } from "sonner";

const Settings = () => {
  const { userName, setUserName } = useUser();
  const [formData, setFormData] = useState({
    name: userName,
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main Street",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setUserName(formData.name);
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900">Profile & Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Profile Information Section */}
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Mailing Address Section */}
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Mailing Address</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
