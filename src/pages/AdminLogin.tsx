import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

export const AdminLogin: React.FC = () => {
  const { isAuthenticated, login } = useAdmin();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Handle keyboard events for 'aa' detection
  React.useEffect(() => {
    let lastKeyTime = 0;
    let lastKey = '';

    const handleKeyPress = (e: KeyboardEvent) => {
      const currentTime = new Date().getTime();
      if (e.key === 'a' && lastKey === 'a' && currentTime - lastKeyTime < 500) {
        setShowAdminLogin(true);
      }
      lastKey = e.key;
      lastKeyTime = currentTime;
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!pin) {
      setError('Please enter the PIN');
      return;
    }
    
    const success = login(pin);
    if (!success) {
      setError('Invalid PIN');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="card-football rounded-lg shadow-md p-8 w-full max-w-md bg-white bg-opacity-90">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="pin" className="block text-gray-700 font-medium mb-2">
              PIN
            </label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-2xl tracking-widest"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        </div>
    </div>
  );
};