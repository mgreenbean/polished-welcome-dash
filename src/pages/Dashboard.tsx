
import Header from "@/components/Header";
import TicketPortfolio from "@/components/TicketPortfolio";
import InstantTransfer from "@/components/InstantTransfer";
import ThemeToggle from "@/components/ThemeToggle";
import { ticketData } from "@/data/ticketData";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Theme toggle in top right */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto py-6 transform scale-90 origin-top">
        <InstantTransfer />
        <TicketPortfolio ticketData={ticketData} />
      </div>
    </div>
  );
};

export default Dashboard;
