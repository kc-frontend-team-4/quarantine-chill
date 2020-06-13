import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';

function App() {
  return (
    <div className="App">

      <nav className="App-navigation">
        <h1 className="App-title">Quarantine & Chill</h1>
        {/* <Link to="/">Welcome</Link> */}
        <Link to="/favorites/">Favorites</Link>
        <br />
        <Link to="/recent/">Recent</Link>
      </nav>

      <div className="App-mainContent">
        <Switch>
          {/* <Route exact path='/' component={LandingPage} /> */}
          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>
      <div className="movie-img"></div>

      <label for="Genre">Genre</label>
      <select name="Genre" id="Genre">
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
      </select>
      <br />
      <label for="Rating">Rating</label>
      <select name="Rating" id="Rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <br />
      <label for="Length">Length</label>
      <select name="Length" id="Length">
        <option value="60">60</option>
        <option value="90">90</option>
        <option value="120">120</option>
        <option value="150">150</option>
      </select>

      {/* @@@@@@@@@@@@@@@@@@@ */}

      <div className="food-img"></div>

      <label for="Cuisine Type">Cuisine Type</label>
      <select name="Cuisine Type" id="Cuisine Type">
        <option value="African">African</option>
        <option value="American">American</option>
        <option value="British">British</option>
        <option value="Caribbean">Caribbean</option>
      </select>
      <br />
      <label for="Meal Type">Meal Type</label>
      <select name="Meal Type" id="Meal Type">
        <option value="Dinner">Dinner</option>
        <option value="Breakfast">Breakfast</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label for="Food Allergies">Food Allergies</label>
      <select name="Food Allergies" id="Food Allergies">
        <option value="Gluten Free">Gluten Free</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
      <br />
      <button>Pair Me</button>
    </div>
  );
}

export default App;
