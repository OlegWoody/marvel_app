import './appHeader.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <NavLink to="/marvel_app" className={({ isActive }) => isActive ? 'app__logo active' : 'app__logo'}>
          <span><Logo /></span>
          <div className="app__logo-text">
            <div className="app__logo-title">Marvel</div>
            <div className="app__logo-sub">Wiki</div>
          </div>
        </NavLink>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink 
              to="/marvel_app" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink 
              to="/comics" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
