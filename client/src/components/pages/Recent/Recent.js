import React, { useState, useEffect } from 'react';
import './Recent.css';
import RecentCard from '../../RecentCard/RecentCard.js'
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
          <div className="recent-page"> 
            <div style={{marginTop:"120px"}}>
              {
                pairings.map((item) => (
                  <RecentCard
                    poster_path={item.randomedMovie.poster_path}
                    randomedMovieTitle={item.randomedMovie.title}
                    randomedMovieName={item.randomedMovie.name}
                    imdbId={item.imdbId}
                    recipeImg={item.recipeInfo.img}
                    recipeName={item.recipeInfo.name}
                    recipeUrl={item.recipeInfo.url}
                  /> 
                ))}
              </div>
            </div>
    </div>
  );
}

export default Recent;
