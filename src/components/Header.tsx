import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-950 shadow-lg border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">SadhGuru Tiles</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400">Home</Link>
            <Link to="/aboutus" className="block text-white hover:text-blue-400">About Us</Link>
            <Link to="/products" className="text-white hover:text-blue-400">Products</Link>
            <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>
            <Link to="/careers" className="text-white hover:text-blue-400">Careers</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-white hover:text-blue-400">Home</Link>
            <Link to="/aboutus" className="block text-white hover:text-blue-400">About Us</Link>
            <Link to="/products" className="block text-white hover:text-blue-400">Products</Link>
            <Link to="/contact" className="block text-white hover:text-blue-400">Contact</Link>
            <Link to="/careers" className="block text-white hover:text-blue-400">Careers</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
