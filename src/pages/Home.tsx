import React from 'react';
import { matches } from '../types';
import { MatchCard } from '../components/MatchCard';
import { Header } from '../components/Header';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </main>
    </div>
  );
};