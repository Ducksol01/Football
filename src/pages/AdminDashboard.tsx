import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

export const AdminDashboard: React.FC = () => {
  const { logout } = useAdmin();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Football Admin</h1>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              View Site
            </Link>
            <button 
              onClick={logout}
              className="hover:text-blue-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Admin Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="block px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/matches" 
                  className="block px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                >
                  Manage Matches
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/blogs" 
                  className="block px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                >
                  Manage Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6" style={{ position: 'relative', zIndex: 10 }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

// Default content for the dashboard home
export const DashboardHome: React.FC = () => {
  const { matches, blogs } = useAdmin();
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Matches</h3>
          <p className="text-3xl font-bold text-blue-600">{matches.length}</p>
          <Link 
            to="/admin/matches" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Manage Matches →
          </Link>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Blogs</h3>
          <p className="text-3xl font-bold text-green-600">{blogs.length}</p>
          <Link 
            to="/admin/blogs" 
            className="mt-4 inline-block text-green-600 hover:text-green-800"
          >
            Manage Blogs →
          </Link>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <p className="text-gray-600">
        Welcome to the admin dashboard. Use the sidebar to navigate to different sections.
      </p>
    </div>
  );
};