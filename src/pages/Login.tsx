
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation example
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate login validation
    if (password.length < 6) {
      setError("Sorry, your password was incorrect. Please double-check your password.");
      return;
    }
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7ff] px-3 py-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Promo section, branding, info */}
        <div className="hidden md:flex flex-col gap-8 pr-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#3366ff] rounded-xl flex items-center justify-center shadow-lg relative">
              <span className="text-white font-extrabold text-base tracking-tight">SMS</span>
              <div className="absolute -top-1 -right-1 w-4 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm rotate-12 shadow-sm"></div>
            </div>
            <span className="text-2xl font-bold text-[#283658]">SellMySeats</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#16264b] mb-2 leading-snug">
            Start Selling Your Tickets Today
          </h2>
          <p className="text-lg text-[#6A7890] mb-2">
            Join thousands of customers who trust us to sell their tickets quickly and securely.
          </p>
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3">
              <span className="bg-blue-50 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M4 4h16v10H4V4Zm0 11h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Zm4-6h8m-8 3h5" />
                </svg>
              </span>
              <span className="text-[#223358] font-medium">Email your tickets instantly</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-green-50 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M12 4v16m8-8H4" />
                  <path strokeWidth="2" d="M7 12l5 5 5-5" />
                </svg>
              </span>
              <span className="text-[#223358] font-medium">Upload manually through our portal</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-yellow-50 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M12 6v6l3 3" />
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                </svg>
              </span>
              <span className="text-[#223358] font-medium">Get paid within 24 hours of sale</span>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow border border-gray-200 p-6 flex flex-col gap-2 max-w-xs">
            <span className="font-bold text-base text-[#223358]">15% Commission Only</span>
            <span className="text-[#596076] text-sm">
              You keep 85% of the sale price. No upfront fees, no hidden costs.
            </span>
          </div>
        </div>

        {/* Right: Login card */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md shadow-lg rounded-2xl border border-slate-200 bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-[#16264b] mb-1">Welcome to SellMySeats</CardTitle>
              <p className="text-base text-[#616b7a] mb-2">Sign in to your account or create a new one to start selling tickets</p>
              {/* Tabs */}
              <div className="flex items-center w-full mt-2 mb-1 rounded overflow-hidden border border-gray-100 bg-gray-50">
                <button
                  className="w-1/2 py-2 font-semibold text-[#16264b] bg-white transition-all duration-200"
                  style={{ cursor: "default" }}
                >
                  Sign In
                </button>
                <Link
                  to="/register"
                  className="w-1/2 py-2 font-semibold text-[#646f8a] text-center hover:bg-slate-100 transition-all duration-200"
                  tabIndex={-1}
                  style={{ textDecoration: "none" }}
                >
                  Register
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#16264b] font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="h-12 px-4 bg-white border-gray-200 focus:border-[#3366ff] focus:ring-2 focus:ring-[#3366ff]/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#16264b] font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="h-12 px-4 bg-white border-gray-200 focus:border-[#3366ff] focus:ring-2 focus:ring-[#3366ff]/20 transition-all duration-300 pr-12"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      tabIndex={-1}
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
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
                  className="w-full h-12 bg-[#4c82f7] hover:bg-[#3664e3] text-white font-semibold rounded-md text-base mt-3 transition-all duration-300"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
