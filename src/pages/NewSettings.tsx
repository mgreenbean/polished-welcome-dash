
import { useState } from "react";
import Header from "@/components/Header";
import SettingsSidebar from "@/components/SettingsSidebar";
import PaymentTab from "@/components/settings/PaymentTab";
import PersonalInfoTab from "@/components/settings/PersonalInfoTab";
import SupportTab from "@/components/settings/SupportTab";
import SecurityTab from "@/components/settings/SecurityTab";
import NotificationsTab from "@/components/settings/NotificationsTab";
import LegalTab from "@/components/settings/LegalTab";

const NewSettings = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "payment":
        return <PaymentTab />;
      case "personal":
        return <PersonalInfoTab />;
      case "support":
        return <SupportTab />;
      case "security":
        return <SecurityTab />;
      case "notifications":
        return <NotificationsTab />;
      case "legal":
        return <LegalTab />;
      default:
        return <PersonalInfoTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      
      <Header />
      
      <div className="flex max-w-7xl mx-auto relative border border-blue-200/30 rounded-xl overflow-hidden mt-4 mx-4 bg-white/60 backdrop-blur-sm shadow-lg">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6 lg:p-8 border-l border-blue-100/50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm p-6">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewSettings;
