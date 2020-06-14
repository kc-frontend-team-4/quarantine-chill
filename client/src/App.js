import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';
import Results from './components/pages/Results/Results.js';
function App() {
  return (
    <div>
      <nav>
        <h1>Quarantine & Chill</h1>
        <Link to="/">Welcome</Link>
        <br />
        <Link to="/results/">Results</Link>
        <br />
        <Link to="/favorites/">Favorites</Link>
        <br />
        <Link to="/recent/">Recent</Link>
      </nav>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
