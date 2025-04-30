import React from 'react';
import { Link } from 'react-router-dom';
import { Percent as Soccer, Youtube, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-football-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Soccer size={28} />
              <h2 className="text-xl font-bold">Football Live</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Your ultimate destination for football news, match updates, and in-depth analysis.
            </p>
            <div className="flex space-x-4">
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Youtube size={20} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/search?q=latest" className="text-gray-300 hover:text-white transition-colors">Latest Matches</Link>
              </li>
              <li>
                <Link to="/search?q=news" className="text-gray-300 hover:text-white transition-colors">News & Analysis</Link>
              </li>
              <li>
                <Link to="/search?q=highlights" className="text-gray-300 hover:text-white transition-colors">Match Highlights</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">contact@footballlive.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">123 Sports Avenue, Football City</span>
              </li>
            </ul>
          </div>

          {/* Admin Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Administration</h3>
            <Link 
              to="/admin/verify" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md inline-flex items-center transition-colors"
            >
              Admin Panel
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Authorized personnel only. Manage matches, blogs, and website content.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Football Live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};