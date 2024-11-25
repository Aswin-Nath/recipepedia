import React, { useState, useEffect } from 'react';
import "./LatestRecipe.css";

function LatestRecipe() {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/recipeLibrary'); // Correct URL for the backend
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="LatestRecipe">
            <div className="LatestRecipe-Generator">
                <div className="LatestRecipe-items">
                    {recipes.map((recipe, index) => (
                        <div className="LatestRecipe-item" key={index}>
                            <div className="LatestRecipe-image">
                                <img src={recipe.imageUrl} />
                                <h4>{recipe.name}</h4>
                                <h4>Cook: {recipe.cook}</h4> {/* Assuming 'cook' data exists in your API */}
                                <h4>Uploaded: {recipe.upload} hrs ago</h4> {/* Placeholder for uploaded time */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LatestRecipe;
