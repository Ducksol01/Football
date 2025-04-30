import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

export const AdminLink: React.FC = () => {
  return (
    <Link 
      to="/admin/login" 
      className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition-colors"
      title="Admin Panel"
    >
      <Settings size={16} className="mr-1" />
      Admin
    </Link>
  );
};