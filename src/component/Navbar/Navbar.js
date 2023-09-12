import {
  NavLink, Routes, Route, BrowserRouter,
} from 'react-router-dom';
import Rockets from '../Rocket/Rockets';
import Missions from '../Mission/Missions';
import Dragons from '../Dragon/Dragons';
import Profile from '../Profile/Profile';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/NavLink.css';

export default function Navbar() {
  const clickedStyle = ({ isActive }) => ({
    color: isActive ? 'black' : 'red',
  });
  return (
    <BrowserRouter>
      <nav className="Navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img className="logo" src={logo} alt="logo" />
            <h1>Space Traverlers&apos; Hub</h1>
          </NavLink>
          <div className="space">
            <NavLink to="/" onClick={clickedStyle} className="navlinks">Rockets</NavLink>
            <NavLink to="mission" onClick={clickedStyle} className="navlinks">Missions</NavLink>
            <NavLink to="dragon" onClick={clickedStyle} className="navlinks">Dragons</NavLink>
            <NavLink to="profile" onClick={clickedStyle} className="navlinks">My Profile</NavLink>
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
