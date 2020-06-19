import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import * as arrays from './arrays.js';
import NavBar from './components/NavBar/NavBar.js'
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';
import Results from './components/pages/Results/Results.js';
function App() {
  // https://developers.themoviedb.org/3/movies/get-movie-details
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
  const [imdbId, setImdbID] = useState('')
  const [movieOverview, setmovieOverview] = useState('');
  const [filter, setFilter] = useState({
    Genre: 'Action',
    Rating: 'Must Watch',
    Length: 'Short',
    'Cuisine Type': 'African',
    'Meal Type': 'Main Course',
    'Food Allergies': 'Dairy'
  })

  const onChangeGenre = (event) => {
    // console.log(event.target.value)
    setFilter({ ...filter, Genre: event.target.value })
    console.log(filter)
    // console.log(movies)
  }
  const onChangeRating = (event) => {
    // console.log(event.target.value)
    setFilter({ ...filter, Rating: event.target.value })
    console.log(filter)
  }
  const onChangeLength = (event) => {
    // console.log(event.target.value)
    setFilter({ ...filter, Length: event.target.value })
    console.log(filter)
  }
  const onChangeCuisineType = (event) => {
    // todo: update state with the selected options
    // console.log(event.target.value)
    setFilter({ ...filter, 'Cuisine Type': event.target.value })
    //console.log(filter)
  }
  const onChangeMealTypes = (event) => {
    // todo: update state with the selected options
    // console.log(event.target.value)
    setFilter({ ...filter, 'Meal Type': event.target.value })
    //console.log(filter)
  }
  const onChangeFoodAllergies = (event) => {
    // todo: update state with the selected options
    // console.log(event.target.value)
    setFilter({ ...filter, 'Food Allergies': event.target.value })
    //console.log(filter)
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
      // console.log('genreName', genreID);
    }
    // console.log('getting filtered movies list')

    const filteredMovies1 = movies
      .filter(element => element.genre_ids.includes(genreID));

    let filteredMovies = null;
    // console.log('kevin', filter.Rating, filter.Rating === 'Must Watch')
    if (filter.Rating === 'Must Watch') {
      filteredMovies = filteredMovies1.filter(element => element.vote_average >= 8);
    } else if (filter.Rating === 'Good') {
      filteredMovies = filteredMovies1.filter(element => element.vote_average < 8 && element.vote_average >= 7);
    } else if (filter.Rating === 'Decent') {
      filteredMovies = filteredMovies1.filter(element => element.vote_average < 7 && element.vote_average >= 6);
    } else {
      filteredMovies = filteredMovies1.filter(element => element.vote_average < 6);
    }

    setFilteredMovieList(filteredMovies);
    console.log('filtered movie list', filteredMovieList);
    // console.log(filter)
  }

  async function getMovieRuntime(movie) {
    const movieData = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=0402eec8d6da4df59f8077842992a247`);
    const json = await movieData.json();
    // console.log('kevin', json.imdb_id, 'wong', json.runtime)
    return [json.runtime, json.imdb_id, json.overview]
  }
  // show the random movie poster and title 
  async function onPairMeClick() {
    let movieToSet = undefined;
    const desiredLength = filter.Length;
    while (movieToSet === undefined) {
      let index = Math.floor((Math.random() * filteredMovieList.length));
      let movie = filteredMovieList[index];
      let [runtime, imdb_id, overview] = await getMovieRuntime(movie);
      if (desiredLength === "Short") {
        if (runtime >= 0 && runtime <= 105) {
          movieToSet = movie;
          setImdbID(imdb_id)
          setmovieOverview(overview)
        }
      } else if (desiredLength === "Average") {
        if (runtime >= 106 && runtime <= 135) {
          movieToSet = movie;
          setImdbID(imdb_id)
          setmovieOverview(overview)
        }
      } else if (desiredLength === "Long") {
        if (runtime > 135) {
          movieToSet = movie;
          setImdbID(imdb_id)
          setmovieOverview(overview)
        }
      }
    };

    setRandomedMovie(movieToSet);

  }
  const [movies, setMovies] = useState(null);
  useEffect(fetchMovie, [])
  function fetchMovie() {
    let listOfMovies = [];
    // popular end point has max of 500 pages 
    let numberOfPages = 500;
    let counter = 1;
    for (let i = 1; i < numberOfPages; i++) {
      fetch(`https://api.themoviedb.org/3/movie/popular?${movieApiKey}&page=${i}`)
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
    console.log("fetching recipe data from API...");

    const recipeApi =
      `https://api.spoonacular.com/recipes/random?${foodApiKey}` +
      "&cuisine=" + filter['Cuisine Type'] +
      "&intolerances=" + filter['Food Allergies'] +
      "&type=" + filter['Meal Type'] +
      "&diet="

    console.log('here is the api', recipeApi)
    fetch(recipeApi)
      .then(response => response.json())
      .then(data => {
        console.log("recipe is", data.recipes[0].title, data.recipes[0].image)
      }
      )
  }
  return (
    <div>
      <NavBar />
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

            onClickonClickFetchRecipes={fetchRecipes}
            onClickSearchMovies={onClickSearchMovies}
            imdbId={imdbId}
            movieOverview={movieOverview} />} />

          <Route exact path='/results' component={Results} />
          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
