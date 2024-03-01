import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Authentication from './pages/Authentication';
import './app.css';
import GennotateState from './gennotateContext/GennotateState';
import Gallery from './pages/Gallery';

function App() {
  return (
    <GennotateState>
      <Box sx={{ padding: 0, margin: 0 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </Box>
    </GennotateState>
  );
}

export default App;
