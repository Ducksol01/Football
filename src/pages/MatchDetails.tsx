import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { matches, watchLinks } from '../types';
import { Header } from '../components/Header';

export const MatchDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const match = matches.find(m => m.id === id);
  const links = watchLinks[id || ''] || [];

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Match not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft size={20} className="mr-1" />
          Back to matches
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-blue-600 mb-2">{match.competition}</p>
            <div className="text-2xl font-bold mb-2">
              {match.homeTeam} vs {match.awayTeam}
            </div>
            <p className="text-gray-600">
              {match.date} at {match.time}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Watch Links</h2>
          <div className="space-y-4">
            {links.map((link) => (
              <div key={link.id} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{link.name}</h3>
                    <div className="flex space-x-2 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        {link.quality}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                        {link.language}
                      </span>
                    </div>
                  </div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Watch
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};