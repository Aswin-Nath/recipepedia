import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeLibrary.css';


function RecipeLibrary() {
  return (
    <div className="Library-main">

      <div className="RecipeLibrary">
        <Link to="/RecipeLibrary/Curry" className="Library-link">
          <div className="Library-items">
            <span>Curries</span>
          </div>
        </Link>
        <Link to="/RiceDishes" className="Library-link">
          <div className="Library-items">
            <span>Rice Dishes</span>
          </div>
        </Link>
        <Link to="/Soups" className="Library-link">
          <div className="Library-items">
            <span>Soups</span>
          </div>
        </Link>
        <Link to="/Salads" className="Library-link">
          <div className="Library-items">
            <span>Salads</span>
          </div>
        </Link>
        <Link to="/SideDishes" className="Library-link">
          <div className="Library-items">
            <span>Side Dishes</span>
          </div>
        </Link>
        <Link to="/Snacks" className="Library-link">
          <div className="Library-items">
            <span>Snacks</span>
          </div>
        </Link>
        <Link to="/RecipeLibrary/ChickenFoods" className="Library-link">
          <div className="Library-items">
            <span>Chicken Foods</span>
          </div>
        </Link>
        <Link to="/Western" className="Library-link">
          <div className="Library-items">
            <span>Western</span>
          </div>
        </Link>
        <Link to="/Briyani" className="Library-link">
          <div className="Library-items">
            <span>Briyani</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RecipeLibrary;
