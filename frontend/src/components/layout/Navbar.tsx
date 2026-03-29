import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <Droplets className="w-8 h-8 text-primary-400 group-hover:animate-bounce" />
          <span className="text-2xl font-bold tracking-tighter text-white">
            SODASYSTEM
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link to="/business" className="text-slate-300 hover:text-white transition-colors">Business</Link>
          <Link to="/technology" className="text-slate-300 hover:text-white transition-colors">Technology</Link>
          <Link to="/recruit" className="text-slate-300 hover:text-white transition-colors">Recruit</Link>
          <button className="bg-primary-500 hover:bg-primary-600 px-6 py-2 rounded-full text-white font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary-500/20">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass animate-fade-in p-6 flex flex-col space-y-4 md:hidden">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Home</Link>
          <Link to="/business" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Business</Link>
          <Link to="/technology" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Technology</Link>
          <Link to="/recruit" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Recruit</Link>
          <button className="bg-primary-500 text-white px-6 py-3 rounded-xl font-medium">Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
