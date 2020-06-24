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
              <p className="movie-name">{props.randomedMovie.title || props.randomedMovie.name}</p>
              <p>{props.movieOverview}</p>
            <div class="movie-link-container">
              <div class="movie-link">
                <a className="imdb-text" target="_blank" href={'https://www.imdb.com/title/' + props.imdbId}>Check it out on <img className="imdb-img"src={imdb} /></a>
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
              <div class="recipe-link-container">
                <div class="recipe-link">
                  <a className="recipe-text" target="_blank" href={'https://www.imdb.com/title/' + props.imdbId}>See the full recipe</a>
                </div>
            </div>           
            </div>
          </div>
        </div>
        {/* href={props.recipeInfo.url}> */}
        <button style={{ alignSelf: "flex-start" }}>Love It!</button>
        <button className="gray-button" onClick={props.fetchRecipes} style={{ alignSelf: "flex-start" }}>Give Me Another </button>
      </main>
    </div>
  )
}
export default Results;
