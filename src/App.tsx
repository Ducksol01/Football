import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MatchDetails } from './pages/MatchDetails';
import { BlogDetail } from './pages/BlogDetail';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard, DashboardHome } from './pages/AdminDashboard';
import { AdminMatches } from './pages/AdminMatches';
import { AdminBlogs } from './pages/AdminBlogs';
import { SearchResults } from './pages/SearchResults';
import { PasscodeVerification } from './pages/PasscodeVerification';
import { AdminProvider } from './context/AdminContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import './styles.css';

function App() {
  return (
    <AdminProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* Public routes with video background */}
          <Route path="/" element={
            <>
              <div className="video-background">
                <video autoPlay loop muted playsInline>
                  <source src="/video/videoplayback.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overlay"></div>
              <div className="content-container">
                <Home />
              </div>
            </>
          } />
          <Route path="/match/:id" element={
            <>
              <div className="video-background">
                <video autoPlay loop muted playsInline>
                  <source src="/video/videoplayback.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overlay"></div>
              <div className="content-container">
                <MatchDetails />
              </div>
            </>
          } />
          <Route path="/blog/:slug" element={
            <>
              <div className="video-background">
                <video autoPlay loop muted playsInline>
                  <source src="/video/videoplayback.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overlay"></div>
              <div className="content-container">
                <BlogDetail />
              </div>
            </>
          } />
          <Route path="/search" element={
            <>
              <div className="video-background">
                <video autoPlay loop muted playsInline>
                  <source src="/video/videoplayback.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overlay"></div>
              <div className="content-container">
                <SearchResults />
              </div>
            </>
          } />
          
          {/* Admin routes without video background */}
          <Route path="/admin/verify" element={
            <>
              <div className="video-background">
                <video autoPlay loop muted playsInline>
                  <source src="/video/videoplayback.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-overlay"></div>
              <div className="content-container">
                <PasscodeVerification />
              </div>
            </>
          } />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="matches" element={<AdminMatches />} />
            <Route path="blogs" element={<AdminBlogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;