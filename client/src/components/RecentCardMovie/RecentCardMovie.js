import React from 'react';
import './RecentCardMovie.css';
import imdb from '../../imdb.png'

function RecentCardMovie(props) {
  return (
    <div className="RecentCardMovie">
        <div className="RecentCardMovie-body">
          <div className="RecentCardMovie-image">
          <img src={`https://image.tmdb.org/t/p/w200${props.poster_path}`}></img>
          </div>
        </div>
        <div className="RecentCardMovie-information">
          <p className="RecentCardMovie-name">{props.randomedMovieTitle || props.randomedMovieName}</p>
          <div className="RecentCardMovie-link-container">
            <div className="RecentCardMovie-link">
              <a 
                className="RecentCardMovie-imdb-text" 
                target="_blank" 
                href={'https://www.imdb.com/title/' + props.imdbId}
              >Check it out on <img className="RecentCardMovie-imdb-img" src={imdb} />
              </a>
            </div>
          </div>
        </div>
    </div>
    )
}

export default RecentCardMovie;
