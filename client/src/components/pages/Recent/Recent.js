import React, { useState, useEffect } from 'react';
import './Recent.css';
import RecentCard from '../../RecentCard/RecentCard.js'
import imdb from '../../../imdb.png'

function Recent() {
  const [pairings, setPairings] = useState([])
  const [page, setPage] = useState(1);

  // Go to next page
  function goToNextPage() {
    const newPageValue = Math.min(page + 1, Math.ceil(pairings.length/8))
    console.log("new page value is", newPageValue)
    setPage(newPageValue)
    console.log("go to next page, page value is", page)
  }
  // Go to previous page
  function goToPreviousPage() {
    const newPageValue = Math.max(page - 1, 1)
    setPage(newPageValue)
    console.log("go to prev page, page value is", page)
  }

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
                pairings.slice(page*8-8, page*8-1)
                  .map((item) => (
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
             current page: {page}
                <button className="PageButton" onClick={goToPreviousPage}> Previous Page </button>
                <button className="PageButton" onClick={goToNextPage}>Next Page</button>
        </div>
    </div>
  );
}

export default Recent;
