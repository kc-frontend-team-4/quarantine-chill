import React from 'react';
import './LandingPage.css';
import * as arrays from './arrays.js';
import Select from '../../Select.js';

function LandingPage(props) {
  const imageSize = 'w200'
  //width in px accept values of w200,w300,w400,w500,original
  //poster proportion generally "1x width:1.5x height"
  return (
    <div>
      {/* movie section */}
      <div className="movie">
        {props.randomedMovie.poster_path ?
          <div>{props.randomedMovie.title ? props.randomedMovie.title : props.randomedMovie.name}
            <br />
            <img src={`https://image.tmdb.org/t/p/${imageSize}${props.randomedMovie.poster_path}`}></img>
          </div>
          :
          <div className="movie-img"></div>}
        <Select filter='Genre' array={arrays.genres} selectedOptions={props.selectedOptions} movies={props.movie} />
        <Select filter='Rating' array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} selectedOptions={props.selectedOptions} onChangee={props.onChangee} />
        <Select filter='Length' array={['Short', 'Average', 'Long']} selectedOptions={props.selectedOptions} />
      </div>
      {/* food section */}
      <div className="food">
        <div className="food-img"></div>
        <Select filter='Cuisine Type' array={arrays.cuisines} selectedOptions={props.selectedOptions} />
        <Select filter='Meal Type' array={arrays.meal_types} selectedOptions={props.selectedOptions} />
        <Select filter='Food Allergies' array={arrays.food_allergies} selectedOptions={props.selectedOptions} />
      </div>
      <button onClick={props.onClick}>Pair Me</button>
    </div>
  )
}
export default LandingPage;
