import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
const infoPoints = ["No fees or commission – you get paid the full price.", "Fast Venmo, Zelle, or PayPal payouts.", "White-glove transfer handled end-to-end by our team.", "24/7 support and SMS updates for peace of mind."];
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    navigate("/dashboard");
  };
  return <div className="min-h-screen flex items-center justify-center p-2 relative overflow-hidden bg-gradient-to-br from-blue-200 via-white to-emerald-200">
      {/* Animated splash-style blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-60 h-60 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-60 h-60 bg-gradient-to-tr from-blue-400/25 to-emerald-400/25 rounded-full blur-2xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-300/30 to-emerald-300/30 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl">
        <Card className="flex flex-col md:flex-row items-stretch rounded-xl bg-white/95 border-4 border-blue-200/60 shadow-[0_0_60px_-12px_rgba(59,130,246,0.4),0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm animate-fade-in transition-all duration-500">
          {/* LEFT INFO SECTION */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-14 lg:p-16 gap-7">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4 leading-tight" style={{
            lineHeight: "1.1"
          }}>
              Sell your tickets quick, easy, and safe.
            </h2>
            <p className="text-lg md:text-xl text-slate-700 font-semibold mb-2">
              Let us handle the transfers, payouts, and customer support for you.
            </p>
            <ul className="space-y-4 text-base md:text-lg text-slate-700 mb-2">
              {infoPoints.map((pt, i) => <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">−</span>
                  <span>{pt}</span>
                </li>)}
            </ul>
            <div className="text-xs text-slate-400 mt-2">
              See why thousands trust SellMySeats for worry-free selling.
            </div>
          </div>
          
          {/* REFINED GRADIENT SEPARATOR - MORE VISIBLE */}
          <div className="min-h-screen flex items-center justify-center p-2 relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-emerald-100 py-0hidden md:block relative self-stretch flex items-center justify-center px-3">
            <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/70 to-transparent"></div>
            <div className="absolute w-[4px] h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent"></div>
            <div className="absolute w-[6px] h-full bg-gradient-to-b from-transparent via-emerald-300/20 to-transparent"></div>
          </div>
          <div className="md:hidden relative w-full flex items-center justify-center py-3">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></div>
            <div className="absolute h-[4px] w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
            <div className="absolute h-[6px] w-full bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent"></div>
          </div>
          
          {/* SIGN UP FORM (RIGHT) */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
            <div className="w-full max-w-[480px]">
              <CardHeader className="text-center pb-4 pt-6 px-0">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md relative">
                    <span className="text-white font-bold text-sm">SMS</span>
                    <div className="absolute -top-1 -right-1 w-3 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm transform rotate-12 shadow-sm"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-blue-900">SellMySeats</span>
                    <span className="text-[10px] text-blue-500 -mt-1 font-medium tracking-wider">SELL YOUR TICKETS</span>
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-600 mt-1 mb-3">
                  Join thousands of customers who trust us to sell their tickets quickly and securely.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 px-0 pb-4 pt-2">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name</Label>
                      <Input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" required className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name</Label>
                      <Input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Doe" required className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                    <Input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" required className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
                    <Input id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 123-4567" required className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                      <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Create a strong password" required className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required className="h-10 px-3 bg-white/80 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm" />
                    </div>
                  </div>
                  {error && <Alert variant="destructive" className="bg-red-50 border-red-200 py-2">
                      <AlertDescription className="text-red-700">
                        {error}
                      </AlertDescription>
                    </Alert>}
                  <Button type="submit" className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-base">
                    Create Account
                  </Button>
                </form>
                <div className="text-center text-xs text-slate-500 mt-1 mb-2">
                  Already have an account?{" "}
                  <Link to="/login" className="inline-flex items-center justify-center font-semibold text-emerald-600 hover:text-emerald-700 ml-1 transition-colors duration-200">
                    Sign In
                  </Link>
                </div>
                <div className="text-center pt-1">
                  <Link to="/" className="text-slate-400 hover:text-slate-700 text-xs font-medium transition-colors duration-200 inline-flex items-center">
                    ← Back to home
                  </Link>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default Register;