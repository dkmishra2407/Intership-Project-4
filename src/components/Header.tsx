import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">SadhGuru Tiles</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <ScrollLink
              to="AboutUs"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-blue-600"
            >
              About Us
            </ScrollLink>
            <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/AboutUs" className="block text-gray-600 hover:text-blue-600">About Us</Link>
            <Link to="/products" className="block text-gray-600 hover:text-blue-600">Products</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/careers" className="block text-gray-600 hover:text-blue-600">Careers</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;