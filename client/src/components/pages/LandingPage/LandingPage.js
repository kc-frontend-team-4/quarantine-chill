import React from 'react';
import './LandingPage.css';
import * as arrays from './arrays.js';
import Select from '../../Select.js';

function LandingPage(props) {

  const imageSize = 'w200'
  //width in px accept values of w200,w300,w400,w500,original
  //poster proportion "1x width:1.5x height"
  return (
    <div>
      <div className="movie">
        <div className="movie-img"></div>
        {/* movie section */}
        <Select filter='Genre' array={arrays.genres} />
        <Select filter='Rating' array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Select filter='Length' array={['Short', 'Average', 'Long']} />
      </div>
      {/* food section */}
      <div className="food">
        <div className="food-img"></div>
        <Select filter='Cuisine Type' array={arrays.cuisines} />
        <Select filter='Meal Type' array={arrays.meal_types} />
        <Select filter='Food Allergies' array={arrays.food_allergies} />
      </div>
      <br />
      <button onClick={props.myProp}>Pair Me</button>
      <div>{props.movies[1].title}</div>

      <img src={`https://image.tmdb.org/t/p/${imageSize}${props.movies[1].poster_path}`}></img>
    </div>
  )
}
export default LandingPage;
