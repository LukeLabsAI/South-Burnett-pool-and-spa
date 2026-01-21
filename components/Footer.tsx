
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Droplets className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white tracking-tight">
                SB <span className="text-blue-500">Pool & Spa</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Family-owned and operated in Kingaroy. Providing top-tier pool maintenance, chemical supply, and equipment repairs across the South Burnett region.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span className="text-lg font-semibold text-white">0413 551 523</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span className="break-all">office@sbpoolspa.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span>6 Casuarina St,<br />Kingaroy QLD 4610</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <div className="text-sm">
                  <p className="font-bold text-white">Mon to Sat</p>
                  <p>7:00 AM to 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-slate-600" />
                <div className="text-sm text-slate-500">
                  <p className="font-bold">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services & Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Book a Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>© 2025 South Burnett Pool & Spa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
