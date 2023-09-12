import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Missions from './component/Mission/Missions';
import Dragons from './component/Dragon/Dragons';
import

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
