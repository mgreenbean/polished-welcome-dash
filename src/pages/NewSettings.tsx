
import { useState } from "react";
import Header from "@/components/Header";
import SettingsSidebar from "@/components/SettingsSidebar";
import ProfileTab from "@/components/settings/ProfileTab";
import PaymentTab from "@/components/settings/PaymentTab";
import PersonalInfoTab from "@/components/settings/PersonalInfoTab";
import SupportTab from "@/components/settings/SupportTab";
import SecurityTab from "@/components/settings/SecurityTab";
import NotificationsTab from "@/components/settings/NotificationsTab";
import LegalTab from "@/components/settings/LegalTab";

const NewSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
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
        return <ProfileTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewSettings;
