
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-blue-200">
            <CardHeader className="pb-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
                Analytics Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <TrendingUp className="h-24 w-24 text-blue-300" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-900">Coming Soon</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We're working hard to bring you detailed analytics about your ticket sales, 
                  market trends, and performance insights. This feature will be available soon!
                </p>
              </div>
              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 font-medium text-sm">In Development</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Analytics;
