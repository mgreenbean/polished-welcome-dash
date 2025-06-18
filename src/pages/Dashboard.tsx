
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-slate-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/15 rounded-full blur-3xl"></div>
        
        <Header />
        
        <div className="fixed top-4 right-4 z-40">
          <ThemeToggle />
        </div>
        
        <div className="container mx-auto py-8 px-4 max-w-7xl relative">
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
