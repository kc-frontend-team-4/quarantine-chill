import React, { useState, useEffect } from 'react';
import './Recent.css';
import RecentCardMovie from '../../RecentCardMovie/RecentCardMovie.js'
import imdb from '../../../imdb.png'

function Recent() {

  const [pairings, setPairings] = useState([])

  // Fetch pairings from the database
  function fetchPairings() {
    console.log('Fetching parings data from API');
    fetch('/api/mongodb/quarantine-chill/test')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        setPairings(data.reverse());
      });
  }

  useEffect(fetchPairings, [])

  return (
    <div>
        <main> 
            <div className="movie-column">
                <div className="main-heading" style={{right: "-50px"}}>Recent</div>
            <div style={{marginTop:"120px"}}>
              {
                pairings.map((item) => (
                  <RecentCardMovie
                    poster_path={item.randomedMovie.poster_path}
                    randomedMovieTitle={item.randomedMovie.title}
                    randomedMovieName={item.randomedMovie.name}
                    imdbId={item.imdbId}
                  />                
              ))}
            </div>
            </div>
            <div className="recipe-column">
              {
                pairings.map((item) => (
                  <div className="recipe-selections-recent">
                    <div className="recipe-image">
                      <img className="recipe-image-item" src={item.recipeInfo.img} />
                    </div>
                    <div className="recipe-information">
                      <p className="recipe-name">{item.recipeInfo.name}</p>
                      <div className="recipe-link-container-recent">
                        <div className="recipe-link-recent">
                          <a 
                            className="recipe-text" 
                            target="_blank" 
                            href={item.recipeInfo.url}
                          >See the full recipe
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
        </main>
    </div>
  );
}

export default Recent;
