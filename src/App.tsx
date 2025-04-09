import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MatchDetails } from './pages/MatchDetails';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/video/videoplayback.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-overlay"></div>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;