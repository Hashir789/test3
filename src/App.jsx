import React from 'react';
import Box from '@mui/material/Box';
import Gallery from './pages/Gallery';
import Authentication from './pages/Authentication';
import GennotateState from './gennotateContext/GennotateState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <GennotateState>
      <Box>
        <Router>
          <Routes>
            <Route path="/gallery" element={<Authentication />} />
            <Route path="/" element={<Gallery/> } />
          </Routes>
        </Router>
      </Box>
    </GennotateState>
  );
}

export default App;