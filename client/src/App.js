import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';
import Results from './components/pages/Results/Results.js';
function App() {
  // todo: generate movies array
  const [movies, setMovies] = useState([
    {
      "id": 475430,
      "video": false,
      "vote_count": 128,
      "vote_average": 5.3,
      "title": "Artemis Fowl",
      "release_date": "2020-06-12",
      "original_language": "en",
      "original_title": "Artemis Fowl",
      "genre_ids": [
        12,
        14,
        878
      ],
      "backdrop_path": "/3CIae0GrhKTIzNS3FYYvT8P9D3w.jpg",
      "adult": false,
      "overview": "With the help of his loyal protector Butler, 12-year-old genius Artemis Fowl, descendant of a long line of criminal masterminds, seeks to find his mysteriously disappeared father, and in doing so, uncovers an ancient, underground civilization—the amazingly advanced world of fairies. Deducing that his father’s disappearance is somehow connected to the secretive, reclusive fairy world, cunning Artemis concocts a dangerous plan—so dangerous that he ultimately finds himself in a perilous war of wits with the all-powerful fairies.",
      "poster_path": "/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
      "popularity": 139.943,
      "media_type": "movie"
    },
    {
      "id": 581859,
      "video": false,
      "vote_count": 77,
      "vote_average": 7.2,
      "title": "Da 5 Bloods",
      "release_date": "2020-06-12",
      "original_language": "en",
      "original_title": "Da 5 Bloods",
      "genre_ids": [
        18,
        10752
      ],
      "backdrop_path": "/Aq5Zhj9iaTF6BEKNk05dlUxeHKa.jpg",
      "adult": false,
      "overview": "Four African-American Vietnam veterans return to Vietnam. They are in search of the remains of their fallen squad leader and the promise of buried treasure. These heroes battle forces of humanity and nature while confronted by the lasting ravages of the immorality of the Vietnam War.",
      "poster_path": "/yx4cp1ljJMDSFeEex0Zjv45b55E.jpg",
      "popularity": 113.292,
      "media_type": "movie"
    }]);
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
  fetchMovies()

  let listOfMovies = []
  function fetchMovies() {
    for (let i = 1; i < 3; i++) {

      fetch(`https://api.themoviedb.org/3/trending/all/day?${movieApiKey}&page=${i}`)
        .then(response => response.json())
        .then(data => {
          // console.log(data.results.filter(item => item.genre_ids.includes(12))
          //   .filter(item => item.vote_average > 6)
          // )
          // building array of filtered movies 
          listOfMovies = [...listOfMovies, ...data.results.filter(item => item.genre_ids.includes(12))
            .filter(item => item.vote_average > 6)]
        }
        )
    }
  }
  // todo: event handler functions need to change state 
  function onPairMeClick() {
    console.log(listOfMovies[Math.floor((Math.random() * listOfMovies.length))].title)
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


          {/* passing props to route*/}
          {/* https://reacttraining.com/react-router/web/api/Route/render-func */}
          <Route exact path='/' render={(...props) => <LandingPage {...props} myProp={onPairMeClick} movies={movies} />} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
