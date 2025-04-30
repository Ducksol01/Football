import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const SearchResults: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
        
        {/* Placeholder for search results */}
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            No results found for "{query}". Please try a different search term.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};