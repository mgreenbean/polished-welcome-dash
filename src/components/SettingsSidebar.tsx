
import { CreditCard, MessageSquare, Shield, Bell, FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SettingsSidebar = ({ activeTab, setActiveTab }: SettingsSidebarProps) => {
  const sidebarItems = [
    { id: "payment", label: "Payment Portal", icon: CreditCard },
    { id: "personal", label: "Personal Information", icon: User },
    { id: "support", label: "Support & Feedback", icon: MessageSquare },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "legal", label: "Legal", icon: FileText },
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 min-h-screen">
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">MG</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg truncate">Michael Greenbaum</h3>
            <p className="text-sm text-gray-600 truncate">greenbaumichael@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SettingsSidebar;
