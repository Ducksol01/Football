import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Match, Blog, WatchLink, blogs as initialBlogs, matches as initialMatches, watchLinks as initialWatchLinks } from '../types';

interface AdminContextType {
  // Authentication
  isAuthenticated: boolean;
  login: (pin: string) => boolean;
  logout: () => void;
  
  // Matches management
  matches: Match[];
  addMatch: (match: Omit<Match, 'id'>) => void;
  updateMatch: (match: Match) => void;
  deleteMatch: (id: string) => void;
  
  // Blogs management
  blogs: Blog[];
  addBlog: (blog: Omit<Blog, 'id' | 'slug'>) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: string) => void;
  
  // Watch links management
  watchLinks: Record<string, WatchLink[]>;
  addWatchLink: (matchId: string, link: Omit<WatchLink, 'id'>) => void;
  updateWatchLink: (matchId: string, link: WatchLink) => void;
  deleteWatchLink: (matchId: string, linkId: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Simple admin credentials (in a real app, this would be handled securely)
const ADMIN_PIN = '0001';

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [watchLinks, setWatchLinks] = useState<Record<string, WatchLink[]>>(initialWatchLinks);

  // Authentication functions
  const login = (pin: string): boolean => {
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // Matches management functions
  const addMatch = (matchData: Omit<Match, 'id'>) => {
    const newMatch: Match = {
      ...matchData,
      id: Date.now().toString(), // Simple ID generation
    };
    setMatches([...matches, newMatch]);
  };

  const updateMatch = (updatedMatch: Match) => {
    setMatches(matches.map(match => 
      match.id === updatedMatch.id ? updatedMatch : match
    ));
  };

  const deleteMatch = (id: string) => {
    setMatches(matches.filter(match => match.id !== id));
    // Also delete associated watch links
    const newWatchLinks = { ...watchLinks };
    delete newWatchLinks[id];
    setWatchLinks(newWatchLinks);
  };

  // Blogs management functions
  const addBlog = (blogData: Omit<Blog, 'id' | 'slug'>) => {
    const id = Date.now().toString();
    // Create slug from title
    const slug = blogData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    const newBlog: Blog = {
      ...blogData,
      id,
      slug,
    };
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(blogs.map(blog => 
      blog.id === updatedBlog.id ? updatedBlog : blog
    ));
  };

  const deleteBlog = (id: string) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  // Watch links management functions
  const addWatchLink = (matchId: string, linkData: Omit<WatchLink, 'id'>) => {
    const newLink: WatchLink = {
      ...linkData,
      id: `${matchId}-${Date.now()}`,
    };
    
    const currentLinks = watchLinks[matchId] || [];
    setWatchLinks({
      ...watchLinks,
      [matchId]: [...currentLinks, newLink],
    });
  };

  const updateWatchLink = (matchId: string, updatedLink: WatchLink) => {
    const currentLinks = watchLinks[matchId] || [];
    setWatchLinks({
      ...watchLinks,
      [matchId]: currentLinks.map(link => 
        link.id === updatedLink.id ? updatedLink : link
      ),
    });
  };

  const deleteWatchLink = (matchId: string, linkId: string) => {
    const currentLinks = watchLinks[matchId] || [];
    setWatchLinks({
      ...watchLinks,
      [matchId]: currentLinks.filter(link => link.id !== linkId),
    });
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    matches,
    addMatch,
    updateMatch,
    deleteMatch,
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    watchLinks,
    addWatchLink,
    updateWatchLink,
    deleteWatchLink,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};