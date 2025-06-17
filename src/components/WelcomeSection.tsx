
import { useUser } from "@/contexts/UserContext";

const WelcomeSection = () => {
  const { userName } = useUser();

  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Welcome, {userName}!</h1>
      <p className="text-blue-100 font-medium text-lg">Here's your ticket selling dashboard overview</p>
    </div>
  );
};

export default WelcomeSection;
