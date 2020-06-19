import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg';


import './NavBar.css';

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <div className="logo">
            <div className="logo-svg">
              <Logo />
            </div>
          </div>
        </Link>
        <div className="right-menu">
          <span className="right-menu-links">
            <Link to="/favorites/">Favorites</Link> | <Link to="/recent/">Recent</Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
