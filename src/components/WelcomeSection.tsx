
import { useUser } from "@/contexts/UserContext";

const WelcomeSection = () => {
  const { userName } = useUser();

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome, {userName}!</h1>
      <p className="text-blue-600 font-medium">Here's your ticket selling dashboard overview</p>
    </div>
  );
};

export default WelcomeSection;
