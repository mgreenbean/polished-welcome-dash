import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { 
  User, 
  CreditCard, 
  Shield, 
  Bell, 
  MessageSquare, 
  FileText, 
  Download,
  Trash2,
  Phone,
  Mail,
  MessageCircle,
  Upload,
  Eye,
  EyeOff
} from "lucide-react";

const Settings = () => {
  const { userName, setUserName } = useUser();
  const [activeTab, setActiveTab] = useState("profile");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Dean",
    lastName: "Greenbaum",
    email: "greenbaumdean@gmail.com",
    phone: "+5516377274",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  });

  const [notifications, setNotifications] = useState({
    ticketSold: true,
    priceAlerts: false,
    emailDigest: true,
    smsNotifications: false,
    pushNotifications: true
  });

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setUserName(`${formData.firstName} ${formData.lastName}`);
    showMessage("Settings saved successfully!");
  };

  const sidebarItems = [
    { id: "profile", label: "My Information", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "support", label: "Support & Feedback", icon: MessageSquare },
    { id: "legal", label: "Legal", icon: FileText },
  ];

  const renderProfileTab = () => (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-blue-900">My Information</h3>
          <Button variant="outline" size="sm" className="border-blue-300 text-blue-600">
            <User className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="mt-1"
              />
            </div>
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

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <h4 className="text-lg font-medium text-blue-800 mb-4">Mailing Address</h4>
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
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-6">Security</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-blue-800 mb-4">Change Password</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showPassword ? "text" : "password"}
                    className="mt-1 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  className="mt-1"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Update Password
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-medium text-blue-800 mb-4">Active Sessions</h4>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">Current Session</p>
                  <p className="text-sm text-slate-600">Chrome on macOS • Last active now</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Current</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-6">Notification Preferences</h3>
        
        <div className="space-y-6">
          {[
            { key: 'ticketSold', label: 'Ticket Sold Notifications', desc: 'Get notified when your tickets are sold' },
            { key: 'priceAlerts', label: 'Price Alerts', desc: 'Get notified about price changes' },
            { key: 'emailDigest', label: 'Email Digest', desc: 'Weekly summary of your ticket activity' },
            { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Get text messages for important updates' },
            { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser notifications for real-time updates' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">{item.label}</p>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
              <Switch
                checked={notifications[item.key as keyof typeof notifications]}
                onCheckedChange={(checked) => handleNotificationChange(item.key, checked)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSupportTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-6">Support & Feedback</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-blue-800 mb-4">Contact Support</h4>
            <p className="text-slate-600 mb-4">Need help? Our support team is here to assist you.</p>
            
            <div className="grid gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 justify-start">
                <MessageCircle className="h-4 w-4 mr-2" />
                Visit Help Center
              </Button>
              <Button variant="outline" className="justify-start border-blue-300 text-blue-600">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support Team
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-medium text-blue-800 mb-4">Send Feedback</h4>
            <p className="text-slate-600 mb-4">Help us improve SellMySeats with your feedback.</p>
            <Button variant="outline" className="border-blue-300 text-blue-600">
              <Mail className="h-4 w-4 mr-2" />
              Send Feedback
            </Button>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-medium text-blue-800 mb-4">Other Ways to Reach Us</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-slate-900">Phone Support</p>
                    <p className="text-sm text-slate-600">1-800-SELLMYSEATS</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">24/7 Available</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-slate-900">Email Support</p>
                    <p className="text-sm text-slate-600">support@seatxfer.com</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">24hr response</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-slate-900">Live Chat</p>
                    <p className="text-sm text-slate-600">Instant help from our team</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Available Now</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLegalTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-6">Legal</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-blue-800 mb-4">Terms & Policies</h4>
            <p className="text-slate-600 mb-4">Review our terms of service and privacy policies.</p>
            
            <div className="space-y-3">
              {[
                { label: 'Terms of Service', icon: FileText },
                { label: 'Privacy Policy', icon: FileText },
                { label: 'Cookie Policy', icon: FileText }
              ].map((item) => (
                <Button key={item.label} variant="outline" className="w-full justify-between border-slate-200">
                  <div className="flex items-center">
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </div>
                  <span className="text-slate-400">→</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-medium text-blue-800 mb-4">Tax Documents</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-slate-900 mb-3">W-9 Form</h5>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-600 mb-2">Upload your W-9 form</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-slate-900 mb-3">1099 Forms</h5>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-900">2024 1099-MISC</span>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-slate-900 mb-3">Payout Tracker</h5>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-900">Progress to $600 threshold</span>
                    <span className="text-slate-600">$527 / $600</span>
                  </div>
                  <Progress value={88} className="h-2" />
                  <p className="text-xs text-slate-500 mt-2">$73 remaining until 1099 required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-medium text-blue-800 mb-4">Account Actions</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-slate-200">
                <Download className="h-4 w-4 mr-2" />
                Download My Data
              </Button>
              <Button variant="outline" className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile": return renderProfileTab();
      case "security": return renderSecurityTab();
      case "notifications": return renderNotificationsTab();
      case "support": return renderSupportTab();
      case "legal": return renderLegalTab();
      default: return renderProfileTab();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-blue-200/50">
                <CardContent className="p-0">
                  {/* User Profile Section */}
                  <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">DG</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Dean Greenbaum</h3>
                        <p className="text-sm text-slate-600">greenbaumdean@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="p-2">
                    {sidebarItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-blue-200/50">
                <CardContent className="p-8">
                  {message && (
                    <Alert className="mb-6 bg-green-50 border-green-200">
                      <AlertDescription className="text-green-700">
                        {message}
                      </AlertDescription>
                    </Alert>
                  )}

                  {renderTabContent()}

                  {activeTab === "profile" && (
                    <div className="pt-6 border-t">
                      <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                        Save Changes
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
