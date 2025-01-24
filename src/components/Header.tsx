import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import logo from '../../assets/about us/LOGO.jpg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className='h-8 w-8'>
              <img src={logo} alt="logo" />
            </div>
            <span className="text-xl font-bold text-black">SadhGuru Tiles</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:text-blue-400">Home</Link>
            <Link to="/aboutus" className="block text-black hover:text-blue-400">About Us</Link>
            <Link to="/products" className="text-black hover:text-blue-400">Products</Link>
            <Link to="/contact" className="text-black hover:text-blue-400">Contact</Link>
            <Link to="/careers" className="text-black hover:text-blue-400">Careers</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-black hover:text-blue-400">Home</Link>
            <Link to="/aboutus" className="block text-black hover:text-blue-400">About Us</Link>
            <Link to="/products" className="block text-black hover:text-blue-400">Products</Link>
            <Link to="/contact" className="block text-black hover:text-blue-400">Contact</Link>
            <Link to="/careers" className="block text-black hover:text-blue-400">Careers</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
