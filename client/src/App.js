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
  const foodApiKey = 'apiKey=2fa1eb822ad241b381e2d9b65da08a0f' //'apiKey=73bb985ab78b4740a1444004dfd60217';
  const [randomedMovie, setRandomedMovie] = useState({
    // "id": 475430,
    // "video": false,
    // "vote_count": 128,
    // "vote_average": 5.3,
    // "title": "Artemis Fowl",
    // "release_date": "2020-06-12",
    // "original_language": "en",
    // "original_title": "Artemis Fowl",
    // "genre_ids": [
    //   12,
    //   14,
    //   878
    // ],
    // "backdrop_path": "/3CIae0GrhKTIzNS3FYYvT8P9D3w.jpg",
    // "adult": false,
    // "overview": "With the help of his loyal protector Butler, 12-year-old genius Artemis Fowl, descendant of a long line of criminal masterminds, seeks to find his mysteriously disappeared father, and in doing so, uncovers an ancient, underground civilization—the amazingly advanced world of fairies. Deducing that his father’s disappearance is somehow connected to the secretive, reclusive fairy world, cunning Artemis concocts a dangerous plan—so dangerous that he ultimately finds himself in a perilous war of wits with the all-powerful fairies.",
    // "poster_path": "/4cd08Le3PjCEd9EAOV71hR6r20R.jpg",
    // "popularity": 139.943,
    // "media_type": "movie"
  })
  const [filteredMovieList, setFilteredMovieList] = useState([])
  const [imdbId, setImdbID] = useState('');
  const [movieOverview, setmovieOverview] = useState('');
  const [filter, setFilter] = useState({
    Genre: '',
    Decade: '',
    Length: '',
    'Cuisine Type': '',
    'Meal Type': '',
    'Food Allergies': '',
  })

  const onChangeGenre = (event) => {
    // console.log(event.target.value)
    setFilter({ ...filter, Genre: event.target.value })
    console.log(filter)
    // console.log(movies)
  }
  const onChangeDecade = (event) => {
    // console.log(event.target.value)
    setFilter({ ...filter, Decade: event.target.value })
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
    let cusineURL = event.target.value.toLowerCase().split(' ').join('_')
    setFilter({ ...filter, 'Cuisine Type': cusineURL })
    console.log(filter)
  }
  const onChangeMealTypes = (event) => {
    // todo: update state with the selected options
    // console.log(event.target.value)
    let mealTypeURL = event.target.value.toLowerCase().split(' ').join('_')
    setFilter({ ...filter, 'Meal Type': mealTypeURL })
    console.log(filter)

  }
  const onChangeFoodAllergies = (event) => {
    // todo: update state with the selected options
    // console.log(event.target.value)
    let foodAllergiesURL = event.target.value.toLowerCase().split(' ').join('_')
    setFilter({ ...filter, 'Food Allergies': foodAllergiesURL })
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
    }
    const filteredMovies1 = movies.filter(element => element.genre_ids.includes(genreID));
    let filteredMovies = filteredMovies1.filter(element => filter.Decade === element.release_date.slice(0, 4))
    setFilteredMovieList(filteredMovies);
    console.log('filtered movie list', filteredMovieList);
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

  const [recipeName, setRecipeName] = useState("")
  const [recipeImg, setRecipeImg] = useState("")

  // fetchRecipes()
  function fetchRecipes() {
    console.log("fetching recipe data from API...");
    const recipeApi =
      `https://api.spoonacular.com/recipes/random?${foodApiKey}` + "&tags="
      + filter['Cuisine Type'] + ',' + filter['Food Allergies'] + ',' + filter['Meal Type'] + ',';
    console.log('here is the api', recipeApi)
    fetch(recipeApi)
      .then(response => response.json())
      .then(data => {
        console.log("recipe is", data.recipes[0].title, data.recipes[0].image)
        setRecipeName(data.recipes[0].title)
        setRecipeImg(data.recipes[0].image)
      })
  }

  function getPair() {
    fetchRecipes();
    onPairMeClick();
  }

  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          {/* passing props to route*/}
          {/* https://reacttraining.com/react-router/web/api/Route/render-func */}
          <Route exact path='/' render={(...props) => <LandingPage {...props}
            onClick={getPair}//{onPairMeClick}
            movies={movies}
            onChangeGenre={onChangeGenre}
            onChangeDecade={onChangeDecade}
            onChangeLength={onChangeLength}
            onChangeCuisineType={onChangeCuisineType}
            onChangeMealTypes={onChangeMealTypes}
            onChangeFoodAllergies={onChangeFoodAllergies}
            randomedMovie={randomedMovie}

            onClickonClickFetchRecipes={fetchRecipes}
            onClickSearchMovies={onClickSearchMovies}
            imdbId={imdbId}
          />} />
          <Route exact path='/results' render={(...props) => <Results {...props}
            recipeName={recipeName}
            recipeImg={recipeImg}
            fetchRecipes={fetchRecipes}
            movieOverview={movieOverview}
            randomedMovie={randomedMovie}
            imdbId={imdbId}
          />} />

          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;


// https://api.themoviedb.org/3/movie/popular endpoint sample
// {
//   "popularity": 9.753,
//   "vote_count": 325,
//   "video": false,
//   "poster_path": "/bz9717vMiTw2EGvGQUPRK4WLQ6G.jpg",
//   "id": 323027,
//   "adult": false,
//   "backdrop_path": "/kc0ufvlfl7H9G6BRhnBf8EbTpF5.jpg",
//   "original_language": "en",
//   "original_title": "Justice League: Gods and Monsters",
//   "genre_ids": [
//   28,
//   16,
//   14
//   ],
//   "title": "Justice League: Gods and Monsters",
//   "vote_average": 7,
//   "overview": "In an alternate universe, very different versions of DC's Trinity fight against the government after they are framed for an embassy bombing.",
//   "release_date": "2015-07-14"
//   }
