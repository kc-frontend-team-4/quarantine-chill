import React from 'react';
import './LandingPage.css';
import * as arrays from './arrays.js';
import Select from '../../Select.js';

function LandingPage(props) {

  const imageSize = 'w200'
  //width in px accept values of w200,w300,w400,w500,original
  //poster proportion "1x width:1.5x height"

  // let didUserClickonPairMe = props.randomedMovie.poster_path ? true : false;
  // let doesTheRandomedMovieHaveATitle = props.randomedMovie.title ? props.randomedMovie.title : props.randomedMovie.name;

  return (
    <div>
      <main>
        {/* movie section */}
        <div className="movie-column">
          <div className="movie-selections">
            {/* beginning movie image */}
            <div className="movie-image"></div>
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
                <label htmlFor='Rating'>Rating</label>
                <select onChange={props.onChangeRating} name='Rating' id='Rating'>
                  {['Rating', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element, index) => (
                    < option value={element} key={index} > {element}</option>
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
            <div className="recipe-image"></div>
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
        {/* some movies have name but not title */}
        <div style={{ fontSize: '40px' }}>{props.randomedMovie.title || props.randomedMovie.name} </div>
        <div style={{ color: 'red', backgroundColor: 'black' }} onClick={props.onClickSearchMovies}>CLICK HERE BEFORE CLICKING PAIR ME TO GET NEW FILTERED MOVIE LIST </div>
        <img src={`https://image.tmdb.org/t/p/w200${props.randomedMovie.poster_path}`}></img>
        <div>
          {
            (props.imdbId) ? <a target="_blank" href={'https://www.imdb.com/title/' + props.imdbId}> https://www.imdb.com/title/{props.imdbId}</a >
              :
              <div></div>
          }
        </div>
        <button style={{ margin: "60px 0 0 0" }} onClick={props.onClick}>Pair Me</button>
      </main>
    </div>
  )
}
export default LandingPage;
