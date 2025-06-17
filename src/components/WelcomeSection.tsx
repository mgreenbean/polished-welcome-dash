import { useUser } from "@/contexts/UserContext";
const WelcomeSection = () => {
  const {
    userName
  } = useUser();
  return <div className="mb-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-2 drop-shadow-lg">Welcome, {userName}!</h1>
      <p className="font-medium text-lg text-zinc-800">Here's your ticket selling dashboard overview</p>
    </div>;
};
export default WelcomeSection;