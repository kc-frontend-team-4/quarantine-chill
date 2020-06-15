import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';
import Results from './components/pages/Results/Results.js';
function App() {
  // const [movies, setMovies] = useState({});
  const movieApiKey = 'api_key=0402eec8d6da4df59f8077842992a247';
  const foodApiKey = 'apiKey=73bb985ab78b4740a1444004dfd60217';

  // fetchRecipes()
  function fetchRecipes() {
    fetch(`https://api.spoonacular.com/recipes/random?${foodApiKey}&cuisine=&intolerances=&type=&diet=`)
      .then(response => response.json())
      .then(data => {
        console.log(data.recipes[0].title, data.recipes[0].image)
      }
      )
  }
  // fetchMovies()
  // generate trending movies object to random with
  // todo: fix async bug
  function fetchMovies() {
    // looping page number
    for (let i = 1; i < 11; i++) {
      // each page has 20 titles
      fetch(`https://api.themoviedb.org/3/trending/all/day?${movieApiKey}&page=${i}`)
        .then(response => response.json())
        .then(data => {
          // looping through all movies on page
          for (let j = 0; i < data.results.length; j++) {
            (data.results[j].title) ? console.log(data.results[j].title) : console.log(data.results[j].name)
            console.log(`https://image.tmdb.org/t/p/original${data.results[j].poster_path}`)
          }
        }
        )
    }
  }

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
