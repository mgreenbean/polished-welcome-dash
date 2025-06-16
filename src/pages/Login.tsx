
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Sorry, your password was incorrect. Please double-check your password.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 relative overflow-hidden bg-gradient-to-br from-blue-200 via-white to-emerald-200">
      {/* Animated splash-style blobs - match Register and Splash */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-60 h-60 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-60 h-60 bg-gradient-to-tr from-blue-400/25 to-emerald-400/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-300/30 to-emerald-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Card className="w-full max-w-xl shadow-2xl backdrop-blur-sm bg-white/95 border-0 transition-all duration-700 hover:shadow-3xl hover:scale-[1.02] animate-fade-in" style={{ 
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15)',
        animationDelay: '0.1s',
        animationFillMode: 'forwards'
      }}>
        <CardHeader className="text-center pb-4 pt-6">
          <div className="flex items-center justify-center space-x-2 mb-3 opacity-0 animate-scale-in" style={{
            animationDelay: '0.1s',
            animationFillMode: 'forwards'
          }}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md relative hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">SMS</span>
              <div className="absolute -top-1 -right-1 w-3 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm transform rotate-12 shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">SellMySeats</span>
              <span className="text-[10px] text-blue-500 -mt-1 font-medium tracking-wider">SELL YOUR TICKETS</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-blue-700 mb-1 opacity-0 animate-fade-in" style={{
            animationDelay: '0.1s',
            animationFillMode: 'forwards'
          }}>Welcome Back</CardTitle>
          <p className="text-base font-semibold text-slate-600 mt-1 mb-3 opacity-0 animate-fade-in" style={{
            animationDelay: '0.1s',
            animationFillMode: 'forwards'
          }}>
            Sign in to your account
          </p>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-4 pt-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1 opacity-0 animate-slide-fade-in" style={{
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}>
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm hover:bg-white focus:scale-[1.02]"
              />
            </div>
            <div className="space-y-1 opacity-0 animate-slide-fade-in" style={{
              animationDelay: '0.25s',
              animationFillMode: 'forwards'
            }}>
              <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm hover:bg-white focus:scale-[1.02]"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="bg-red-50 border-red-200 py-2 animate-fade-in">
                <AlertDescription className="text-red-700">
                  {error}
                </AlertDescription>
              </Alert>
            )}
            {error && (
              <div className="text-center animate-fade-in">
                <Link 
                  to="#" 
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-base opacity-0 animate-fade-in hover:shadow-blue-500/25" style={{
                animationDelay: '0.3s',
                animationFillMode: 'forwards'
              }}
            >
              Sign In
            </Button>
          </form>
          <div className="relative my-4 opacity-0 animate-fade-in" style={{
            animationDelay: '0.35s',
            animationFillMode: 'forwards'
          }}>
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium">New to SellMySeats?</span>
            </div>
          </div>
          <div className="text-center opacity-0 animate-slide-fade-in" style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center w-full h-10 text-emerald-600 hover:text-emerald-700 font-semibold border-2 border-emerald-200 hover:border-emerald-300 rounded-md transition-all duration-300 hover:bg-emerald-50 hover:scale-[1.02]"
            >
              Create Account
            </Link>
          </div>
          <div className="text-center pt-1 opacity-0 animate-fade-in" style={{
            animationDelay: '0.45s',
            animationFillMode: 'forwards'
          }}>
            <Link 
              to="/" 
              className="text-slate-400 hover:text-slate-700 text-xs font-medium transition-colors duration-200 inline-flex items-center hover:translate-x-1"
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
