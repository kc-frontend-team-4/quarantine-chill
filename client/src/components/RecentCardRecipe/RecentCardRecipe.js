import React from 'react';
import './RecentCardRecipe.css';

function RecentCardRecipe(props) {
  return (
    <div className="RecentCardRecipe">
      <div className="RecentCardRecipe-body">
          <img className="RecentCardRecipe-image" src={props.recipeImg} />
        </div>
        <div className="recipe-information">
          <p className="recipe-name">{props.recipeName}</p>
            <div className="RecentCardRecipe-link-container">
              <div className="RecentCardRecipe-link">
                <a 
                  className="recipe-text" 
                  target="_blank" 
                  href={props.recipeUrl}
                  >See the full recipe
                </a>
              </div>
            </div>
          </div>
        </div>
      )
}

export default RecentCardRecipe;
