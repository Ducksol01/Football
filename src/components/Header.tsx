import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Percent as Soccer, Youtube, Instagram, Search } from 'lucide-react';
import { socialLinks } from '../types';
import { useState } from 'react';


export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-football-primary text-white py-6 backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Soccer size={32} />
            <h1 className="text-2xl font-bold">Football Live</h1>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-white/20 text-white placeholder-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300 relative z-10"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-300 hover:text-white transition-colors" />
              </button>
            </div>
          </form>
          
          <div className="flex items-center space-x-6">
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Youtube size={24} />
              <span className="font-medium">Kirdarbarcelona</span>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Instagram size={24} />
              <span className="font-medium">Kirdarbarcelona</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};