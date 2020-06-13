import React from 'react';
import { Link } from 'react-router-dom'

import './Favorites.css';

function Favorites() {
  return (
    <div >
      <p>
        Placeholder Favorites
        </p>
      <Link to="/blog/">Blog</Link>
      <Link to="/write/">Write article</Link>
    </div>
  );
}

export default Favorites;
