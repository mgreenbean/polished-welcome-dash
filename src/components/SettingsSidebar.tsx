
import { User, CreditCard, MessageSquare, Shield, Bell, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SettingsSidebar = ({ activeTab, setActiveTab }: SettingsSidebarProps) => {
  const sidebarItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "payment", label: "Payment Portal", icon: CreditCard },
    { id: "personal", label: "Personal Information", icon: User },
    { id: "support", label: "Support & Feedback", icon: MessageSquare },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "legal", label: "Legal", icon: FileText },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">MG</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Michael Greenbaum</h3>
            <p className="text-sm text-gray-600">greenbaumichael@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors mb-1",
              activeTab === item.id
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SettingsSidebar;
