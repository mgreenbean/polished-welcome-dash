
import { CreditCard, MessageSquare, Shield, Bell, FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SettingsSidebar = ({ activeTab, setActiveTab }: SettingsSidebarProps) => {
  const sidebarItems = [
    { id: "personal", label: "Personal Information", icon: User },
    { id: "payment", label: "Payment Portal", icon: CreditCard },
    { id: "support", label: "Support & Feedback", icon: MessageSquare },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "legal", label: "Legal", icon: FileText },
  ];

  return (
    <div className="w-80 bg-white/90 backdrop-blur-sm border-r border-blue-200/50 min-h-screen shadow-lg">
      {/* User Profile Section */}
      <div className="p-6 border-b border-blue-100/50">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-white font-bold text-lg">MG</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base truncate">Michael Greenbaum</h3>
            <p className="text-xs text-gray-600 truncate">greenbaumichael@gmail.com</p>
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
                "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:shadow-md",
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg'
                  : 'text-gray-600 hover:bg-blue-50/70 hover:text-blue-700 hover:shadow-sm'
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
