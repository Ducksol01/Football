import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PasscodeVerification: React.FC = () => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!passcode) {
      setError('Please enter the passcode');
      return;
    }
    
    if (passcode === '0001') {
      setVerified(true);
    } else {
      setError('Invalid passcode');
      setPasscode('');
    }
  };

  if (verified) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="card-football rounded-lg shadow-md p-8 w-full max-w-md bg-white bg-opacity-90">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Access Verification</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="passcode" className="block text-gray-700 font-medium mb-2">
                Enter Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-2xl tracking-widest"
                autoComplete="off"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Verify
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};