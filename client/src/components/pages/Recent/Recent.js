import React from 'react';

import './Recent.css';

function Recent() {
  return (
    <div>
        <main>
            <div className="movie-column">
                <div className="main-heading" style={{right: "-50px"}}>Recent</div>
                <div className="movie-selections">
                    <div className="star-and-image">
                        <div className="star">⭐<span className="count">4</span></div>
                        <div className="movie-image">
                        </div>
                    </div>
                    <div className="star-and-image">
                        <div className="star">⭐<span className="count">6</span></div>
                        <div className="movie-image">
                        </div>
                    </div>
                    <div className="star-and-image">
                        <div className="star">⭐<span className="count">7</span></div>
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

export default Recent;
