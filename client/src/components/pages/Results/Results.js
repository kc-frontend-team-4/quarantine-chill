import React, { useState, useEffect } from 'react';
import './Results.css';
import { Link } from 'react-router-dom';
import imdb from '../../../imdb.png'

function Results(props) {
  useEffect(() => {
    console.log("recipe info found!")
  }, [props.recipeInfo.recipeImg])

  return (
    <div>
      <main>
        <div className="movie-column">
          <div className="start-over">
            <Link to="/">Start Over</Link>
          </div>
          <div className="movie-selections-results">
            <div className="movie-image">
              <img src={`https://image.tmdb.org/t/p/w200${props.randomedMovie.poster_path}`}></img>
            </div>
            <div className="movie-information">
              <a target="_blank" href={'https://www.imdb.com/title/' + props.imdbId}> <p className="movie-name">{props.randomedMovie.title || props.randomedMovie.name}</p></a>
              <p>{props.movieOverview}</p>
            <div class="movie-link-container">
              <div class="movie-link">
                <a target="_blank" href={props.recipeInfo.url}>Check it out on <img src={imdb} /></a>
              </div>
            </div>
            </div>
          </div>
          

        </div>
        <div className="recipe-column">
          <div className="recipe-selections-results">
            <div className="recipe-image">
              <img className="recipe-image-item" src={props.recipeInfo.img} />
            </div>
            <div className="recipe-information">
              <p className="recipe-name">{props.recipeInfo.name}</p>
              <p>Cook time is {props.recipeInfo.cooktime} minutes.</p>
            </div>
          </div>
        </div>
        <button style={{ alignSelf: "flex-start" }}>Love It!</button>
        <button className="gray-button" onClick={props.fetchRecipes} style={{ alignSelf: "flex-start" }}>Give Me Another </button>
      </main>
    </div>
  )
}
export default Results;
