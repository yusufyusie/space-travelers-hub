import {
  NavLink, Routes, Route, BrowserRouter,
} from 'react-router-dom';
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
            <h1 className={style.title}>Space Travelers Hub</h1>
          </div>
          <div className={style.space}>
            <NavLink className={style.navlink} to="/">Rockets</NavLink>
            <NavLink className={style.navlink} to="mission">Missions</NavLink>
            <NavLink className={style.navlink} to="dragon">Dragons</NavLink>
            <NavLink className={style.navlink} to="profile">My Profile</NavLink>
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
