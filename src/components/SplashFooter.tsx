
import { Link } from "react-router-dom";

const SplashFooter = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center relative">
                <span className="text-blue-900 font-bold text-sm">SMS</span>
                <div className="absolute -top-1 -right-1 w-2 h-1.5 bg-amber-400 rounded-sm transform rotate-12"></div>
              </div>
              <span className="text-lg font-bold">SellMySeats</span>
            </div>
            <p className="text-blue-200">Making ticket reselling simple and profitable.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#cookies" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 SellMySeats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SplashFooter;
