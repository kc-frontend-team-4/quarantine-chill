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
  const foodApiKey = 'apiKey=73bb985ab78b4740a1444004dfd60217'; //'apiKey=2fa1eb822ad241b381e2d9b65da08a0f'
  const [randomedMovie, setRandomedMovie] = useState({});
  const [filteredMovieList, setFilteredMovieList] = useState([]);
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
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    url: "",
    img: "",
    cooktime: ""
  })
  const onChangeGenre = (event) => {
    setFilter({ ...filter, Genre: event.target.value });
  }
  const onChangeDecade = (event) => {
    setFilter({ ...filter, Decade: event.target.value });
  }
  const onChangeLength = (event) => {
    setFilter({ ...filter, Length: event.target.value })
  }
  const onChangeCuisineType = (event) => {
    let cusineURL = event.target.value.toLowerCase().split(' ').join('%20');
    setFilter({ ...filter, 'Cuisine Type': cusineURL });
  }
  const onChangeMealTypes = (event) => {
    let mealTypeURL = event.target.value.toLowerCase().split(' ').join('%20');
    setFilter({ ...filter, 'Meal Type': mealTypeURL });
  }
  const onChangeFoodAllergies = (event) => {
    let foodAllergiesURL = event.target.value.toLowerCase().split(' ').join('%20');
    setFilter({ ...filter, 'Food Allergies': foodAllergiesURL });
  }
  // get filtered movies list
  function onClickSearchMovies() {
    let genreID;
    // given genre name, we need to search for its corresponding genre id
    for (const el of arrays.genres) {
      if (el.name === filter.Genre) {
        genreID = el.id;
      }
    }
    let filteredMovies = movies.filter(element => element.genre_ids.includes(genreID))
      .filter(element => filter.Decade === element.release_date.slice(0, 4));
    setFilteredMovieList(filteredMovies);
    console.log('filtered movie list', filteredMovieList);
  }

  async function getMovieRuntime(movie) {
    const movieData = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=0402eec8d6da4df59f8077842992a247`);
    const json = await movieData.json();
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
          setImdbID(imdb_id);
          setmovieOverview(overview);
        }
      } else if (desiredLength === "Average") {
        if (runtime >= 106 && runtime <= 135) {
          movieToSet = movie;
          setImdbID(imdb_id);
          setmovieOverview(overview);
        }
      } else if (desiredLength === "Long") {
        if (runtime > 135) {
          movieToSet = movie;
          setImdbID(imdb_id);
          setmovieOverview(overview);
        }
      }
    };
    setRandomedMovie(movieToSet);
  }
  const [movies, setMovies] = useState(null);

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


function resetRecipeInfo(){
  setRecipeInfo({...recipeInfo,
    name: "",
    url: "", 
    img: "",
    cooktime:""
  })
}

  const [recipeInfo, setRecipeInfo] =useState({
    name: "",
    url: "",
    img: "",
    cooktime: ""
  })

  function fetchRecipes() {
    console.log("fetching recipe data from API...");
    
    // Create list of filters from the filter state variable
    const recipeFilters = [
      filter['Cuisine Type'], 
      filter['Food Allergies'],
      filter['Meal Type']
    ]

    // Create empty list to hold the values that are not empty strings
    let tagList=[]
    
    // Add non-empty strings to list
    for (let filter of recipeFilters){
      if (filter !== "" && filter !== undefined){
        tagList.push(filter)
      }
    }
    console.log("here is the taglist", tagList)
    const tags = tagList.join()
    console.log("tags are", tags)
    const recipeApi =
      `https://api.spoonacular.com/recipes/random?${foodApiKey}` + "&tags=" +
       tags

    // Do the fetch
    console.log('here is the api', recipeApi)
    fetch(recipeApi)
      .then(response => response.json())
      .then(data => {

        console.log(recipeApi)
        // check if such recipe exists  
        if (data.recipes[0] !== undefined) {
          setRecipeInfo({
            name: data.recipes[0]['title'],
            url: data.recipes[0]['spoonacularSourceUrl'],
            img: data.recipes[0]['image'],
            cooktime: data.recipes[0]['readyInMinutes']
          })
        }
        console.log("and now the recipe info is", recipeInfo)
      })
    
  }
  function getPair() {
    fetchRecipes();
    onPairMeClick();
  }
  useEffect(fetchMovie, [])
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          {/* passing props to route*/}
          {/* https://reacttraining.com/react-router/web/api/Route/render-func */}
          <Route exact path='/' render={(...props) => <LandingPage {...props}
            onClick={getPair}//{onPairMeClick}
            onChangeGenre={onChangeGenre}
            onChangeDecade={onChangeDecade}
            onChangeLength={onChangeLength}
            onChangeCuisineType={onChangeCuisineType}
            onChangeMealTypes={onChangeMealTypes}
            onChangeFoodAllergies={onChangeFoodAllergies}
            onClickSearchMovies={onClickSearchMovies}
          />} />
          <Route exact path='/results' render={(...props) => <Results {...props}
            recipeInfo={recipeInfo}
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
