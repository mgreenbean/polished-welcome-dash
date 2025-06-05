import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import TicketPortfolio from "@/components/TicketPortfolio";
import ActionNeeded from "@/components/ActionNeeded";
import InstantTransfer from "@/components/InstantTransfer";
import SeatlyHelper from "@/components/SeatlyHelper";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-6">
        <StatsCards />
        <TicketPortfolio />
        <ActionNeeded />
        <InstantTransfer />
      </div>
      
      <SeatlyHelper />
    </div>
  );
};

export default Index;
