import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState('Nav1');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-head">
        <Link
          onClick={() => handleLinkClick('Nav1')}
          style={{ color: activeLink === 'Nav1' ? 'red' : 'black' }}
          id='Nav1'
          to="/"
        >
          RecipeLibrary
        </Link>
        <Link
          onClick={() => handleLinkClick('Nav2')}
          style={{ color: activeLink === 'Nav2' ? 'red' : 'black' }}
          id='Nav2'
          to="/LatestRecipe"
        >
          LatestRecipes
        </Link>
        <Link
          onClick={() => handleLinkClick('Nav3')}
          style={{ color: activeLink === 'Nav3' ? 'red' : 'black' }}
          id='Nav3'
          to="/PopularRecipes"
        >
          PopularRecipes
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
