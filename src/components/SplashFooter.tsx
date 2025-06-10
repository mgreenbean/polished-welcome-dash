
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const SplashFooter = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center relative">
                <span className="text-blue-900 font-bold text-sm">SMS</span>
                <div className="absolute -top-1 -right-1 w-2 h-1.5 bg-amber-400 rounded-sm transform rotate-12"></div>
              </div>
              <span className="text-lg font-bold">SellMySeats</span>
            </div>
            <p className="text-blue-200 mb-6">Making ticket reselling simple and profitable.</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Let's Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Download Our App</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm">
                  📱 App Store
                </div>
                <div className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm">
                  🤖 Google Play
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Live Chat</a></li>
              <li><a href="#" className="hover:text-white">Seller Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Partnerships</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-blue-200 text-sm">
              <a href="#terms" className="hover:text-white">Terms of Service</a>
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <a href="#cookies" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
            <p className="text-blue-200 text-sm">&copy; 2024 SellMySeats. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SplashFooter;
