import React from 'react';
import './LandingPage.css';
import * as arrays from './arrays.js';
import Select from '../../Select.js';

function LandingPage() {

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
      <button>Pair Me</button>
    </div>
  )
}
export default LandingPage;
