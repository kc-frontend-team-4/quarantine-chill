import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css';
import * as arrays from './arrays.js';
import { ReactComponent as Movie } from '../../../movie.svg';
import { ReactComponent as Recipe } from '../../../recipe.svg';

function LandingPage(props) {

  const imageSize = 'w200'
  //width in px accept values of w200,w300,w400,w500,original
  //poster proportion "1x width:1.5x height"

  useEffect(props.resetRecipeInfo, [])

  return (
    <div>
      <main>
        {/* movie section */}
        <div className="movie-column">
          <div className="movie-selections">
            {/* beginning movie image */}
            <div className="landing-movie-image">
              <div className="movie-image-svg"><Movie /></div>
            </div>
            <div className="movie-options">
              <div className="labels">
                {/* Genre */}
                <label htmlFor='Genre'>Genre</label>
                <select onChange={props.onChangeGenre} name='Genre' id='Genre'>
                  {arrays.genres.map((element, index) => (
                    < option value={element.name} key={index} > {element.name}</option>
                  ))}
                </select>
              </div >
              <div className="labels">
                {/* Rating */}
                <label htmlFor='Decade'>Decade</label>
                <select onChange={props.onChangeDecade} name='Decade' id='Decade'>
                  {['Decade', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'].map((element, index) => (
                    < option value={element.slice(0, element.length - 1)} key={index} > {element}</option>
                  ))}
                </select>
              </div >
              <div className="labels">
                {/* Length */}
                <label htmlFor='Length'>Length</label>
                <select onChange={props.onChangeLength} name='Length' id='Length'>
                  {['Length', 'Short', 'Average', 'Long'].map((element, index) => (
                    < option value={element} key={index} > {element}</option>
                  ))}
                </select>
              </div >
            </div>
          </div>
        </div>
        {/* food section */}
        <div className="recipe-column">
          <div className="recipe-selections">
            <div className="landing-recipe-image">
              <div className="recipe-image-svg">
                <Recipe />
              </div>
            </div>
            <div className="recipe-options">
              <div className="labels">
                {/* Cuisine Type */}
                <label htmlFor='Cuisine Type'>Cuisine Type</label>
                <select onChange={props.onChangeCuisineType} name='Cuisine Type' id='Cuisine Type'>
                  {arrays.cuisines.map((element, index) => (
                    < option value={element} key={index} > {element}</option>
                  ))}
                </select>
              </div >
              <div className="labels">
                {/* meal types */}
                <label htmlFor='Meal Type'>Meal Type</label>
                <select onChange={props.onChangeMealTypes} name='Meal Type' id='Meal Type'>
                  {arrays.meal_types.map((element, index) => (
                    < option value={element} key={index} > {element}</option>
                  ))}
                </select>
              </div >
              <div className="labels">
                {/* Food Allergies */}
                <label htmlFor='Food Allergies' >Food Allergies</label>
                <select onChange={props.onChangeFoodAllergies} name='Food Allergies' id='Food Allergies' >
                  {arrays.food_allergies.map((element, index) => (
                    < option value={element} key={index} > {element}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div style={{ color: 'red', backgroundColor: 'black' }} onClick={props.onClickSearchMovies}>CLICK HERE BEFORE CLICKING PAIR ME TO GET NEW FILTERED MOVIE LIST </div>
        <button onClick={props.onClick}>
          <Link to="/results/">Pair Me</Link>
        </button>
      </main>
    </div>
  )
}
export default LandingPage;

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
