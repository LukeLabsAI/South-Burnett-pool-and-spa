
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-800 p-1.5 rounded-lg shadow-inner">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}`}>
              South Burnett <span className="text-blue-800">Pool & Spa</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold text-sm uppercase tracking-wider transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-800' 
                    : (scrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-blue-800' : 'text-white/90 hover:text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-800/30"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ${isOpen ? 'top-full opacity-100' : '-top-[400px] opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-lg font-bold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-blue-800 text-white py-4 rounded-xl font-bold text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
