import React, { useState, useEffect } from 'react';
import './Results.css';
import { Link } from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";

function Results(props) {
  useEffect(() => {
    console.log("recipe info found!")
  }, [props.recipeInfo.recipeImg])

  return (


    <div>
      {/* <div>
        <BounceLoader
          // css={override}
          size={50}
          color={'#000000'}
          loading={props.loader.loading}
        />
      </div> */}
      <main>
        <div className="movie-column">
          <div className="start-over">
            <Link to="/">Start Over</Link>
          </div>
          <div className="movie-selections">
            <div className="movie-image">
              <img src={`https://image.tmdb.org/t/p/w200${props.randomedMovie.poster_path}`}></img>
            </div>

            <a target="_blank" href={'https://www.imdb.com/title/' + props.imdbId}> <p className="movie-name">{props.randomedMovie.title || props.randomedMovie.name}</p></a>
          </div>
          <h2>{props.movieOverview}</h2>

        </div>
        <div className="recipe-column">
          <div className="recipe-selections">
            <div className="recipe-image">
              <img className="recipe-image-item" src={props.recipeInfo.img} />
            </div>
            <a target="_blank" href={props.recipeInfo.url}> <p className="recipe-name">{props.recipeInfo.name}</p></a>
            <p>Cook time is {props.recipeInfo.cooktime} minutes.</p>
          </div>
        </div>
        <button style={{ alignSelf: "flex-start" }}>Love It!</button>
        <button className="gray-button" onClick={props.fetchRecipes} style={{ alignSelf: "flex-start" }}>Give Me Another </button>
      </main>
    </div>
  )
}
export default Results;
