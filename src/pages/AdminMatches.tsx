import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Match } from '../types';

export const AdminMatches: React.FC = () => {
  const { matches, addMatch, updateMatch, deleteMatch, watchLinks, addWatchLink, updateWatchLink, deleteWatchLink } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [currentMatch, setCurrentMatch] = useState<Match | null>(null);
  const [showWatchLinks, setShowWatchLinks] = useState<string | null>(null);
  const [newWatchLink, setNewWatchLink] = useState({
    name: '',
    url: '',
    quality: 'HD',
    language: 'English'
  });
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  // Form state for new/edit match
  const [formData, setFormData] = useState<Omit<Match, 'id'>>({ 
    homeTeam: '',
    awayTeam: '',
    date: '',
    time: '',
    competition: '',
    status: 'upcoming'
  });

  // Show notification function
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWatchLinkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewWatchLink(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentMatch) {
      updateMatch({ ...formData, id: currentMatch.id });
      showNotification(`Match ${formData.homeTeam} vs ${formData.awayTeam} updated successfully!`);
    } else {
      addMatch(formData);
      showNotification(`New match ${formData.homeTeam} vs ${formData.awayTeam} added successfully!`);
    }
    
    resetForm();
  };

  const handleEdit = (match: Match) => {
    setIsEditing(true);
    setCurrentMatch(match);
    setFormData({
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      date: match.date,
      time: match.time,
      competition: match.competition,
      status: match.status
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this match?')) {
      const matchToDelete = matches.find(m => m.id === id);
      deleteMatch(id);
      if (matchToDelete) {
        showNotification(`Match ${matchToDelete.homeTeam} vs ${matchToDelete.awayTeam} deleted successfully!`);
      }
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentMatch(null);
    setFormData({ 
      homeTeam: '',
      awayTeam: '',
      date: '',
      time: '',
      competition: '',
      status: 'upcoming'
    });
  };

  const toggleWatchLinks = (matchId: string) => {
    setShowWatchLinks(prev => prev === matchId ? null : matchId);
    setNewWatchLink({
      name: '',
      url: '',
      quality: 'HD',
      language: 'English'
    });
  };

  const handleAddWatchLink = (matchId: string) => {
    if (!newWatchLink.name || !newWatchLink.url) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    
    addWatchLink(matchId, newWatchLink);
    showNotification(`Watch link "${newWatchLink.name}" added successfully!`);
    setNewWatchLink({
      name: '',
      url: '',
      quality: 'HD',
      language: 'English'
    });
  };

  const handleDeleteWatchLink = (matchId: string, linkId: string) => {
    if (window.confirm('Are you sure you want to delete this watch link?')) {
      const linkToDelete = watchLinks[matchId]?.find(link => link.id === linkId);
      deleteWatchLink(matchId, linkId);
      if (linkToDelete) {
        showNotification(`Watch link "${linkToDelete.name}" deleted successfully!`);
      }
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md ${notification.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} transition-opacity duration-300`}>
          <div className="flex items-center">
            {notification.type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {notification.message}
          </div>
        </div>
      )}

      {/* Add/Edit Match Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Match' : 'Add New Match'}</h2>
        
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Home Team</label>
              <input
                type="text"
                name="homeTeam"
                value={formData.homeTeam}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Away Team</label>
              <input
                type="text"
                name="awayTeam"
                value={formData.awayTeam}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Competition</label>
              <input
                type="text"
                name="competition"
                value={formData.competition}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="upcoming">Upcoming</option>
              <option value="live">Live</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              {isEditing ? 'Update Match' : 'Add Match'}
            </button>
            
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Matches List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Manage Matches</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teams</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competition</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Watch Links</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {matches.map((match) => (
                <tr key={match.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{match.homeTeam} vs {match.awayTeam}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{match.date}</div>
                    <div className="text-sm text-gray-500">{match.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{match.competition}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      match.status === 'live' ? 'bg-green-100 text-green-800' :
                      match.status === 'finished' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleWatchLinks(match.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {showWatchLinks === match.id ? 'Hide Links' : 'Show Links'}
                    </button>
                    {showWatchLinks === match.id && (
                      <div className="mt-2 space-y-2">
                        {watchLinks[match.id]?.map((link) => (
                          <div key={link.id} className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{link.name}</span>
                            <button
                              onClick={() => handleDeleteWatchLink(match.id, link.id)}
                              className="text-red-600 hover:text-red-900 text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Link Name"
                            value={newWatchLink.name}
                            onChange={(e) => handleWatchLinkChange(e)}
                            name="name"
                            className="text-sm px-2 py-1 border rounded"
                          />
                          <input
                            type="text"
                            placeholder="URL"
                            value={newWatchLink.url}
                            onChange={(e) => handleWatchLinkChange(e)}
                            name="url"
                            className="text-sm px-2 py-1 border rounded"
                          />
                          <select
                            value={newWatchLink.quality}
                            onChange={(e) => handleWatchLinkChange(e)}
                            name="quality"
                            className="text-sm px-2 py-1 border rounded"
                          >
                            <option value="HD">HD</option>
                            <option value="4K">4K</option>
                          </select>
                          <select
                            value={newWatchLink.language}
                            onChange={(e) => handleWatchLinkChange(e)}
                            name="language"
                            className="text-sm px-2 py-1 border rounded"
                          >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="German">German</option>
                          </select>
                          <button
                            onClick={() => handleAddWatchLink(match.id)}
                            className="col-span-2 bg-indigo-600 text-white text-sm px-4 py-1 rounded hover:bg-indigo-700"
                          >
                            Add Link
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(match)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(match.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
