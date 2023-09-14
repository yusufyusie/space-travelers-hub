import React from 'react';
import {
  Link, Routes, Route, BrowserRouter, useMatch,
} from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Rockets from '../Rocket/Rockets';
import Missions from '../Mission/Missions';
import Dragons from '../Dragon/Dragons';
import Profile from '../Profile/Profile';
import style from './Navbar.module.css';
import planetLogo from './planet.png';

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className={style.nav}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <img src={planetLogo} alt="planet-logo" className={style.logoImg} />
            <h1 className={style.title}>Space Travelers&apos; Hub</h1>
          </div>
          <div className={style.space}>
            <NavLink to="/" label="Rockets" />
            <NavLink to="/mission" label="Missions" />
            <NavLink to="/dragon" label="Dragons" />
            <NavLink to="/profile" label="My Profile" />
          </div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/mission" element={<Missions />} />
            <Route path="/dragon" element={<Dragons />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </nav>
    </BrowserRouter>
  );
}

function NavLink({ to, label }) {
  const isActive = useMatch(to);

  return (
    <Link to={to} className={`${style.navlink} ${isActive ? style.activelink : ''}`}>
      {label}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
