import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import * as arrays from './arrays.js';
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';
import Results from './components/pages/Results/Results.js';
function App() {
  // https://developers.themoviedb.org/3/movies/get-movie-details
  // need to use this to find movie length
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  const movieApiKey = 'api_key=0402eec8d6da4df59f8077842992a247';
  const foodApiKey = 'apiKey=73bb985ab78b4740a1444004dfd60217';
  const [randomedMovie, setRandomedMovie] = useState({
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
    "poster_path": "/4cd08Le3PjCEd9EAOV71hR6r20R.jpg",
    "popularity": 139.943,
    "media_type": "movie"
  })
  const [filteredMovieList, setFilteredMovieList] = useState([])
  const [randomedRecipe, setRandomedRecipe] = useState([])
  const [filter, setFilter] = useState({
    Genre: 'Action',
    Rating: 1,
    Length: 'Short',
    'Cuisine Type': 'African',
    'Meal Type': 'Main Course',
    'Food Allergies': 'Dairy'
  })

  const onChangeGenre = (event) => {
    // todo: update state with the selected options
    // console.log(event.target.value)
    setFilter({ ...filter, Genre: event.target.value })
    console.log(filter)
    // console.log(movies)
  }
  const onChangeRating = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, Rating: Number(event.target.value) })
    console.log(filter)
  }
  const onChangeLength = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, Length: event.target.value })
    console.log(filter)
  }
  const onChangeCuisineType = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, 'Cuisine Type': event.target.value })
    console.log(filter)
  }
  const onChangeMealTypes = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, 'Meal Type': event.target.value })
    console.log(filter)
  }
  const onChangeFoodAllergies = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, 'Food Allergies': event.target.value })
    console.log(filter)
  }
  // get filtered movies list
  function onClickSearchMovies() {
    let genreID;
    console.log(filter.Genre)
    // given genre name, we need to search for its corresponding genre id
    for (const el of arrays.genres) {
      if (el.name === filter.Genre) {
        genreID = el.id;
      }
      console.log('genreName', genreID)
    }
    console.log('getting filtered movies list')

    setFilteredMovieList(
      movies
        .filter(element =>
          element.genre_ids.includes(genreID)
        )
        .filter
        (element =>
          element.vote_average > filter.Rating
        )
    )
    console.log('filtered movie list', filteredMovieList)
  }
  function onPairMeClick() {
    // setMovies(fetchMovie(selectedOptions.Rating))
    let index = Math.floor((Math.random() * filteredMovieList.length))
    setRandomedMovie(filteredMovieList[index])
  }
  const [movies, setMovies] = useState(null);
  useEffect(fetchMovie, [])
  function fetchMovie() {
    let listOfMovies = [];
    let numberOfPages = 8;
    let counter = 1;
    for (let i = 1; i < 8; i++) {
      fetch(`https://api.themoviedb.org/3/trending/all/day?${movieApiKey}&page=${i}`)
        .then(response => response.json())
        .then(data => {
          // building array of movies
          // console.log(data.results)
          listOfMovies = [...listOfMovies, ...data.results]
          counter++;
          if (counter >= numberOfPages) {
            setMovies(listOfMovies)
          }
        })
    }
  }

  // fetchRecipes()
  function fetchRecipes() {
    fetch(`https://api.spoonacular.com/recipes/random?${foodApiKey}&cuisine=&intolerances=&type=&diet=`)
      .then(response => response.json())
      .then(data => {
        console.log(data.recipes[0].title, data.recipes[0].image)
      }
      )
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <span className="logo-text">
            <a href="/">Quarantine & Chill</a>
          </span>
        </div>
        <div className="right-menu">
          <span className="right-menu-links">
            <Link to="/favorites/">Favorites</Link> | <Link to="/recent/">Recent</Link>
          </span>
        </div>
      </nav>
      <div>
        <Switch>
          {/* passing props to route*/}
          {/* https://reacttraining.com/react-router/web/api/Route/render-func */}
          <Route exact path='/' render={(...props) => <LandingPage {...props}
            onClick={onPairMeClick}
            movies={movies}
            onChangeGenre={onChangeGenre}
            onChangeRating={onChangeRating}
            onChangeLength={onChangeLength}
            onChangeCuisineType={onChangeCuisineType}
            onChangeMealTypes={onChangeMealTypes}
            onChangeFoodAllergies={onChangeFoodAllergies}
            randomedMovie={randomedMovie}
            onClickSearchMovies={onClickSearchMovies} />} />     onClickSearchMovies={onClickSearchMovies} />} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
