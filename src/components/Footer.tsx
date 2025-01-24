import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/about us/LOGO.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-2xl font-bold">SadhGuru Tiles</h3>
            <p className="text-gray-400">Premium quality tiles for your dream spaces.</p>
            <img src={logo} alt="Company Logo" className="w-40 mt-4 rounded-lg" />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>0980101989<br />7620870603<br />9011719000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>Sadgurutiles@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>
                  Sr. No. 1/3<br />
                  Yojana Nagar,<br />
                  near HP Petrol Pump,<br />
                  Wagholi-Lohagaon Road,<br />
                  (Lohagaon) Pune-411047 
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/p/DDCzPDQiGhS/?igsh=MWxnMDN6ajZyc3U2Zw==" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SadhGuru Tiles. All rights reserved.</p>
          <p className="text-sm mt-2">Developed by Digitecnosol</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;