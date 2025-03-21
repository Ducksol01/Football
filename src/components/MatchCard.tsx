import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { Match } from '../types';
import { Link } from 'react-router-dom';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Link to={`/match/${match.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-blue-600">{match.competition}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            match.status === 'live' ? 'bg-red-100 text-red-800' :
            match.status === 'upcoming' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {match.status.toUpperCase()}
          </span>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{match.homeTeam}</span>
            <span className="text-gray-400">vs</span>
            <span className="text-lg font-semibold">{match.awayTeam}</span>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <CalendarDays size={16} className="mr-1" />
              {match.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              {match.time}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};