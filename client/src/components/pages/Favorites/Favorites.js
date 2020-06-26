import React from 'react';

import './Favorites.css';

function Favorites() {
  return (
    <div >
      <main>
        <div className="movie-column">
          <div className="main-heading">Favorites</div>
          <div className="movie-selections">
            <div className="star-and-image">
              <div className="star">⭐<span className="count">108</span></div>
              <div className="movie-image">
              </div>
            </div>
            <div className="star-and-image">
              <div className="star">⭐<span className="count">86</span></div>
              <div className="movie-image">
              </div>
            </div>
            <div className="star-and-image">
              <div className="star">⭐<span className="count">45</span></div>
              <div className="movie-image">
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-column">
          <div className="recipe-selections">
            <div className="recipe-image"></div>
            <div className="recipe-image"></div>
            <div className="recipe-image"></div>
          </div>
        </div>
      </main>
      <div className="pagination">
        <div className="page-square"></div>
        <div className="page-square"></div>
        <div className="page-square"></div>
        <div className="page-square"></div>
        <div className="page-square"></div>
      </div>
    </div>
  );
}

export default Favorites;
