export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  competition: string;
  status: 'upcoming' | 'live' | 'finished';
}

export interface WatchLink {
  id: string;
  name: string;
  url: string;
  quality: string;
  language: string;
}

export const socialLinks = {
  youtube: 'https://www.youtube.com/@Kirdarbarcelona',
  instagram: 'https://www.instagram.com/kirdarbarcelonayt/'
};

// Sample data - can be easily updated
export const matches: Match[] = [
  {
    id: '1',
    homeTeam: 'Uruguay',
    awayTeam: 'Argentina',
    date: '2025-03-20',
    time: '20:00',
    competition: 'Premier League',
    status: 'upcoming'
  },
  // {
  //   id: '2',
  //   homeTeam: 'Real Madrid',
  //   awayTeam: 'Barcelona',
  //   date: '2025-03-21',
  //   time: '21:00',
  //   competition: 'La Liga',
  //   status: 'upcoming'
  // },
  // {
  //   id: '3',
  //   homeTeam: 'Bayern Munich',
  //   awayTeam: 'Borussia Dortmund',
  //   date: '2025-03-22',
  //   time: '19:30',
  //   competition: 'Bundesliga',
  //   status: 'upcoming'
  // },{
  //   id: '4',
  //   homeTeam: 'Bayern Munich',
  //   awayTeam: 'Borussia Dortmund',
  //   date: '2025-03-22',
  //   time: '19:30',
  //   competition: 'Bundesliga',
  //   status: 'upcoming'
  // }
];

export const watchLinks: Record<string, WatchLink[]> = {
  '1': [
    {
      id: '0-0',
      name: 'Stream 1',
      url: 'https://euro.footem.in/p/world-cup-qualification.html',
      quality: 'HD',
      language: 'English'
    },
    {
      id: '0-0',
      name: 'Stream 2',
      url: 'https://live.epicsportss.com/p/matchday17.html',
      quality: '4K',
      language: 'English'
    }
//   ],
//   '2': [
//     {
//       id: '2-1',
//       name: 'Stream 1',
//       url: '#',
//       quality: 'HD',
//       language: 'Spanish'
//     }
//   ],
//   '3': [
//     {
//       id: '3-1',
//       name: 'Stream 1',
//       url: '#',
//       quality: 'HD',
//       language: 'German'
//     }
//   ]
// ,
//   '4': [
//     {
//       id: '3-1',
//       name: 'Stream 1',
//       url: '#',
//       quality: 'HD',
//       language: 'German'
//     }
  ]
};
