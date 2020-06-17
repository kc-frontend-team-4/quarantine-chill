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
      <main>
      {/* movie section */}
        <div className="movie-column">
        <div className="movie-selections">
        <div className="movie-image"></div>
            <div className="movie-options">
            {/*props.randomedMovie.poster_path ?
              <div>{props.randomedMovie.title ? props.randomedMovie.title : props.randomedMovie.name}
                <br />
                <img src={`https://image.tmdb.org/t/p/${imageSize}${props.randomedMovie.poster_path}`}></img>
              </div>
              :
              <div></div>*/}
                <Select filter='Genre' array={arrays.genres} selectedOptions={props.selectedOptions} />
                <Select filter='Rating' array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} selectedOptions={props.selectedOptions} />
                <Select filter='Length' array={['Short', 'Average', 'Long']} selectedOptions={props.selectedOptions} />
            </div>
          </div>
        </div>
        {/* food section */}
        <div className="recipe-column">
          <div className="recipe-selections">
            <div className="recipe-image"></div>
            <div className="recipe-options">
              <Select filter='Cuisine Type' array={arrays.cuisines} selectedOptions={props.selectedOptions} />
              <Select filter='Meal Type' array={arrays.meal_types} selectedOptions={props.selectedOptions} />
              <Select filter='Food Allergies' array={arrays.food_allergies} selectedOptions={props.selectedOptions} />
            </div>          
          </div>
        </div>
        <button onClick={props.onClick}>Pair Me</button>
      </main>
    </div>
  )
}
export default LandingPage;
