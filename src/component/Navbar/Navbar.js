import {
    NavLink,Routes, Route,BrowserRouter,
  } from 'react-router-dom';
import Rockets from '../Rocket/Rockets';
import Missions from '../Mission/Missions';
import Dragons from '../Dragon/Dragons';
import Profile from '../Profile/Profile';

  export default function Navbar() {
    return (
     <BrowserRouter>
      <nav>
        <div className="navbar">
          <div className="space">
            <h1>Space Travelers' Hub</h1>
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="mission">Missions</NavLink>
            <NavLink to="dragon">Dragons</NavLink>
            <NavLink to="profile">My Profile</NavLink>
          </div>
        </div>
        <main>
        <Routes>
          <Route index element={<Rockets />} />
          <Route path="mission" element={<Missions />} />
          <Route path="dragon" element={<Dragons />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
      </nav>
      </BrowserRouter>
    );
  }