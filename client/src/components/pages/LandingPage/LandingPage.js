import React, { useState, useEffect } from 'react';
import './LandingPage.css';

function LandingPage() {
  // https://spoonacular.com/food-api/docs#Meal-Types
  let meal_types = [
    'Main Course',
    'Side Dish',
    'Dessert',
    'Appetizer',
    'Salad',
    'Bread',
    'Breakfast',
    'Soup',
    'Beverage',
    // 'Sauce',
    // 'Marinade',
    'Fingerfood',
    'Snack',
    'Drink'
  ];
  // https://spoonacular.com/food-api/docs#Intolerances
  let food_allergies = [
    'Dairy',
    'Egg',
    'Gluten',
    'Grain',
    'Peanut',
    'Seafood',
    'Sesame',
    'Shellfish',
    'Soy',
    'Sulfite',
    'Tree Nut',
    'Wheat'
  ];
  // https://spoonacular.com/food-api/docs#Cuisines
  let cuisines = [
    'African',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese'
  ];
  // from https://api.themoviedb.org/3/genre/movie/list?api_key=0402eec8d6da4df59f8077842992a247
  const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  return (
    <div>
      <div className="movie">
        <div className="movie-img"></div>
        {/* movie section */}
        <label for="Genre">Genre</label>
        <select name="Genre" id="Genre">
          {genres.map((element, index) => (
            <option value={element.name} >{element.name}</option>
          ))}
        </select>
        <br />
        <label for="Rating">Rating</label>
        <select name="Rating" id="Rating">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element) => (
            <option value={element} >{element}</option>
          ))}
        </select>
        <br />
        <label for="Length">Length</label>
        <select name="Length" id="Length">
          {['Short', 'Average', 'Long'].map((element) => (
            <option value={element} >{element}</option>
          ))}
        </select>
      </div>
      {/* food section */}
      <div className="food">
        <div className="food-img"></div>
        <label for="Cuisine Type">Cuisine Type</label>
        <select name="Cuisine Type" id="Cuisine Type">
          {cuisines.map((element) => (
            <option value={element} >{element}</option>
          ))}
        </select>
        <br />
        <label for="Meal Type">Meal Type</label>
        <select name="Meal Type" id="Meal Type">
          {meal_types.map((element) => (
            <option value={element} >{element}</option>
          ))}
        </select>
        <br />
        <label for="Food Allergies">Food Allergies</label>
        <select name="Food Allergies" id="Food Allergies">
          {food_allergies.map((element) => (
            <option value={element} >{element}</option>
          ))}
        </select>
      </div>
      <br />
      <button>Pair Me</button>
    </div>
  )
}
export default LandingPage;
