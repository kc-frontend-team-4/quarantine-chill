import React, { useState, useEffect } from 'react';
import './Results.css';
import { Link } from 'react-router-dom'
function Results(props) {
  useEffect(() => {
    console.log("recipe info found!")
  }, [props.recipeImg])

  return (
    <div>
      <main>
        <div className="movie-column">
          <div className="start-over">
            <Link to="/">Start Over</Link>
          </div>
          <div className="movie-selections">
            <div className="movie-image">
              <img src={`https://image.tmdb.org/t/p/w200${props.randomedMovie.poster_path}`}></img>

            </div>
            <p className="movie-name">{props.randomedMovie.title || props.randomedMovie.name}</p>
          </div>
        </div>
        <div className="recipe-column">
          <div className="recipe-selections">
            <div className="recipe-image">
              <img className="recipe-image-item" src={props.recipeImg} />
            </div>
            <p className="recipe-name">{props.recipeName}</p>
          </div>
        </div>
        <button style={{ alignSelf: "flex-start" }}>Love It!</button>
        <button className="gray-button" onClick={props.fetchRecipes} style={{ alignSelf: "flex-start" }}>Give Me Another </button>
      </main>
    </div>
  )
}
export default Results;
