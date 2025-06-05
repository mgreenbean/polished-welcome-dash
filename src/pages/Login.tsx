
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl backdrop-blur-sm bg-white/90 border-0 animate-fade-in hover:shadow-3xl transition-all duration-500">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg relative animate-bounce-once group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-base">SMS</span>
              <div className="absolute -top-1 -right-1 w-4 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm transform rotate-12 shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">SellMySeats</span>
              <span className="text-xs text-blue-500 -mt-1 font-medium tracking-wider">SELL YOUR TICKETS</span>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent mb-2">Welcome Back</CardTitle>
          <p className="text-slate-600 text-lg">Sign in to your account</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-12 px-4 bg-white/80 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="h-12 px-4 bg-white/80 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-white"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign In
            </Button>
          </form>
          
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium">New to SellMySeats?</span>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center w-full h-12 text-blue-600 hover:text-blue-700 font-semibold border-2 border-blue-200 hover:border-blue-300 rounded-md transition-all duration-300 hover:bg-blue-50"
            >
              Create Account
            </Link>
          </div>
          
          <div className="text-center pt-4">
            <Link 
              to="/" 
              className="text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors duration-200 inline-flex items-center"
            >
              ← Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
