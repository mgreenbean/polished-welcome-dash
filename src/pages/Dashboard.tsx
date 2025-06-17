
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import WelcomeSection from "@/components/WelcomeSection";
import TransferEmailSection from "@/components/TransferEmailSection";
import TicketPortfolioSection from "@/components/TicketPortfolioSection";
import RecentActivitySection from "@/components/RecentActivitySection";
import { TooltipProvider } from "@/components/ui/tooltip";

const Dashboard = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <Header />
        
        <div className="fixed top-4 right-4 z-40">
          <ThemeToggle />
        </div>
        
        <div className="container mx-auto py-8 px-4 max-w-7xl">
          <WelcomeSection />
          <TransferEmailSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <TicketPortfolioSection />
            </div>
            <div className="lg:col-span-1">
              <RecentActivitySection />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Dashboard;
