
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import TicketPortfolio from "@/components/TicketPortfolio";
import ActionNeeded from "@/components/ActionNeeded";
import InstantTransfer from "@/components/InstantTransfer";
import { ticketData } from "@/data/ticketData";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-6">
        <StatsCards />
        <TicketPortfolio ticketData={ticketData} />
        <ActionNeeded />
        <InstantTransfer />
      </div>
    </div>
  );
};

export default Dashboard;
