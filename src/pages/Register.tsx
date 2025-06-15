
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-blue-200 via-white to-emerald-200">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400/25 to-emerald-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-blue-300/30 to-emerald-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <Card className="w-full max-w-lg shadow-2xl backdrop-blur-sm bg-white/95 border-0 animate-fade-in hover:shadow-3xl transition-all duration-500">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg relative animate-bounce-once group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-base">SMS</span>
              <div className="absolute -top-1 -right-1 w-4 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm transform rotate-12 shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-emerald-700 bg-clip-text text-transparent">SellMySeats</span>
              <span className="text-xs text-blue-500 -mt-1 font-medium tracking-wider">SELL YOUR TICKETS</span>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-emerald-700 bg-clip-text text-transparent mb-2">Get Started</CardTitle>
          <p className="text-slate-600 text-lg">Create your account to start selling</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                  className="h-12 px-4 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 hover:bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  required
                  className="h-12 px-4 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 hover:bg-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
                className="h-12 px-4 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 hover:bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                className="h-12 px-4 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 hover:bg-white"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="bg-red-50 border-red-200">
                <AlertDescription className="text-red-700">
                  {error}
                </AlertDescription>
              </Alert>
            )}
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Create Account
            </Button>
          </form>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium">Already have an account?</span>
            </div>
          </div>
          <div className="text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center w-full h-12 text-emerald-600 hover:text-emerald-700 font-semibold border-2 border-emerald-200 hover:border-emerald-300 rounded-md transition-all duration-300 hover:bg-emerald-50"
            >
              Sign In
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

export default Register;
