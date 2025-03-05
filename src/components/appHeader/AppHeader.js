import './appHeader.scss';
import { NavLink } from 'react-router';

const AppHeader = () => {

  return (
      <header className="app__header">
        <h1 className="app__title">
            <NavLink to="/marvel_app">
                <span>Marvel </span>
                 information portal
            </NavLink>
        </h1>
        <nav className="app__menu">
            <ul>
                <li >
                    <NavLink to="/marvel_app">Characters</NavLink>
                </li>
                /
                <li >
                    <NavLink to="/comics">Comics</NavLink>
                </li>
            </ul>
        </nav>
      </header>
  );
}

export default AppHeader;
