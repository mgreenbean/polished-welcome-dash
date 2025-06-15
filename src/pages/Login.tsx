
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye } from "lucide-react";

const VIDEO_SRC = "/concert-sports-bg.mp4"; // Place your video in /public folder

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay to darken and increase contrast for the form */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <Card className="bg-white/90 shadow-2xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#16264b] mb-1">Sign in to SellMySeats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
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
            <div className="text-center text-sm mt-4">
              <span>New to SellMySeats? </span>
              <Link className="text-[#3366ff] font-semibold hover:underline" to="/register">
                Register
              </Link>
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">
              <Link to="/" className="hover:underline">← Back to home</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
