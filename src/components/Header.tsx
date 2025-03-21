import React from 'react';
import { Link } from 'react-router-dom';
import { Percent as Soccer, Youtube, Instagram } from 'lucide-react';
import { socialLinks } from '../types';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Soccer size={32} />
            <h1 className="text-2xl font-bold">Football Live</h1>
          </Link>
          
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