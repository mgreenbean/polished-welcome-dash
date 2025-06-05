
import Header from "@/components/Header";
import TicketPortfolio from "@/components/TicketPortfolio";
import InstantTransfer from "@/components/InstantTransfer";
import BottomNavigation from "@/components/BottomNavigation";
import { ticketData } from "@/data/ticketData";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-6 transform scale-90 origin-top">
        <InstantTransfer />
        <TicketPortfolio ticketData={ticketData} />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
