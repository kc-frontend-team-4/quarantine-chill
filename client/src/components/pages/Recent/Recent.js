import React, { useState, useEffect } from 'react';
import './Recent.css';
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
        setPairings(data);
      });
  }

  useEffect(fetchPairings, [])

  return (
    <div>
      <main>
        <div className="movie-column">
          <div className="main-heading" style={{ right: "-50px" }}>Recent</div>
          {
            pairings.map((item) => (
              <div className="movie-selections-results">
                <div className="movie-image">
                  <img alt='Movie Poseter' src={`https://image.tmdb.org/t/p/w200${item.randomedMovie.poster_path}`}></img>
                </div>
                <div className="movie-information">
                  <p className="movie-name">{item.randomedMovie.title || item.randomedMovie.name}</p>
                  <div className="movie-link-container">
                    <div className="movie-link">
                      <a
                        className="imdb-text"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'https://www.imdb.com/title/' + item.imdbId}
                      >Check it out on <img alt='IMDB' className="imdb-img" src={imdb} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        </div>
        <div className="recipe-column">
          {
            pairings.map((item) => (
              <div className="recipe-selections-results">
                <div className="recipe-image">
                  <img className="recipe-image-item" alt='Food' src={item.recipeInfo.img} />
                </div>
                <div className="recipe-information">
                  <p className="recipe-name">{item.recipeInfo.name}</p>
                  <div className="recipe-link-container">
                    <div className="recipe-link">
                      <a
                        className="recipe-text"
                        target="_blank"
                        rel="noopener noreferrer"
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
