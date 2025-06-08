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

export interface Blog {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
}

// Sample blog data
export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Barcelona\'s Tactical Evolution Under Xavi',
    summary: 'An analysis of how Barcelona\'s playing style has evolved since Xavi took over as manager.',
    content: 'Barcelona has undergone a significant tactical transformation since club legend Xavi Hernandez took over as manager. The team has returned to its roots of positional play, with an emphasis on dominating possession and creating numerical advantages across the pitch.\n\nXavi has implemented a 4-3-3 formation that allows Barcelona to control the midfield, with young talents like Pedri and Gavi embodying the technical excellence that defined Xavi\'s own playing career. The width is provided by dynamic wingers who stretch defenses, while the fullbacks offer additional attacking options.\n\nPerhaps most impressive has been Xavi\'s ability to balance the team\'s traditional possession-based approach with a more direct attacking style when needed. This flexibility has made Barcelona less predictable and more dangerous in transition moments.\n\nAs the squad continues to develop under Xavi\'s guidance, fans can expect to see further refinements to this tactical approach, especially as new signings are integrated into the team.',
    author: 'Carlos Puyol',
    date: '2023-09-15',
    imageUrl: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    slug: 'barcelona-tactical-evolution-under-xavi'
  },
  {
    id: '2',
    title: 'The Rise of Young Talent in European Football',
    summary: 'How a new generation of teenage superstars is reshaping the landscape of European football.',
    content: 'European football is experiencing a youth revolution unlike anything seen in recent decades. Teenagers are not just making first-team appearances but becoming central figures at some of the continent\'s biggest clubs.\n\nPlayers like Jude Bellingham, Jamal Musiala, and Lamine Yamal have shown that age is just a number, delivering performances that combine technical brilliance with surprising tactical maturity. These young stars are commanding transfer fees that would have been unthinkable for players of their age just a few years ago.\n\nWhat makes this generation different is their readiness for the highest level. Modern academy systems, advanced coaching methodologies, and improved physical development programs have created more complete players at younger ages.\n\nClubs that have invested heavily in youth development are now reaping the rewards, both on the pitch and financially. As transfer fees continue to inflate, having a pipeline of homegrown talent has become not just a sporting advantage but a crucial business strategy.',
    author: 'Frank Lampard',
    date: '2023-10-02',
    imageUrl: 'https://images.unsplash.com/photo-1493656000929-88b0d39584d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'rise-of-young-talent-in-european-football'
  },
  {
    id: '3',
    title: 'The Evolution of the Modern Goalkeeper',
    summary: 'How the role of goalkeepers has transformed from shot-stoppers to playmakers in modern football.',
    content: 'The goalkeeper position has undergone perhaps the most dramatic evolution in modern football. No longer just shot-stoppers, today\'s elite goalkeepers are expected to be the first playmakers in their team\'s build-up.\n\nEderson at Manchester City and Alisson at Liverpool have redefined what\'s possible from the position, with passing ranges that would impress even in midfield. Their ability to play under pressure and find teammates between the lines has allowed their teams to effectively play with 11 outfield players in possession.\n\nThis evolution has changed how goalkeepers are scouted, developed, and valued in the transfer market. Technical ability with the feet is now almost as important as traditional goalkeeping skills.\n\nHowever, this new style comes with risks, as highlighted by high-profile errors when playing out from the back. The best modern goalkeepers have found the right balance between risk and reward, knowing when to play short and when to go long.\n\nAs tactics continue to evolve, we can expect the goalkeeper position to develop further, with specialized coaching focusing increasingly on their role in possession.',
    author: 'Iker Casillas',
    date: '2023-10-18',
    imageUrl: 'https://images.unsplash.com/photo-1518087456675-1bc217c331b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'evolution-of-modern-goalkeeper'
  }
];

export const socialLinks = {
  youtube: 'https://www.youtube.com/@Kirdarbarcelona',
  instagram: 'https://www.instagram.com/kirdarbarcelonayt/'
};

// Sample data - can be easily updated
export const matches: Match[] = [
  {
    id: '1',
    homeTeam: 'Porntugal',
    awayTeam: 'Spain',
    date: '2025-03-20',
    time: '20:00',
    competition: 'UEFA',
    status: 'Live'
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
      url: 'https://ftmtime.blogspot.com/p/iframe3.html?r=aHR0cHM6Ly9sYTEyaGQuY29tL3Zpdm8vY2FuYWxlcy5waHA/c3RyZWFtPWVzcG4=',
      quality: 'HD',
      language: 'English'
    },
    {
      id: '0-0',
      name: 'Stream 2',
      url: 'https://edsssa.blogspot.com/p/1n.html',
      quality: '4K',
      language: 'English'
    },
     {
      id: '0-0',
      name: 'Stream 3',
      url: 'https://roxxxxlive.blogspot.com/p/volly-2.html',
      quality: '4K',
      language: 'Youtube'
    }
  ]
  /* Commented out additional watch links
  '2': [
    {
      id: '2-1',
      name: 'Stream 1',
      url: '#',
      quality: 'HD',
      language: 'Spanish'
    }
  ],
  '3': [
    {
      id: '3-1',
      name: 'Stream 1',
      url: '#',
      quality: 'HD',
      language: 'German'
    }
  ],
  '4': [
    {
      id: '3-1',
      name: 'Stream 1',
      url: '#',
      quality: 'HD',
      language: 'German'
    }
  ]
  */
};
