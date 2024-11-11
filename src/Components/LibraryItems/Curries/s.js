import React, { useState, useEffect,useRef } from 'react';
import "./Curry.css";
import start from "../../../images/start.png";
import like_image from "../../../images/Like.png";
import Love from "../../../images/love.png";
import Comments from "../../../images/Comments.png";

function Curry() {
    const [recipes, setRecipes] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [ClickedIndex, setClickedIndex] = useState(null);
    const timeoutRefs = useRef([]);
    const [liked, setliked] = useState(false);
    const [commented, setcommented] = useState(false);
    const [loved, setloved] = useState(false);
    const [clicked, setclicked] = useState(false);
    const [Mainimage, setMainimage] = useState(start);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/recipes'); // Correct URL for the backend
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched recipes:", data);
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
    
    useEffect(() => {
        fetchRecipes();
    }, []);

    // ... (rest of your existing code)

    return (
        <div className="Curry">
            <div className="Curry-Generator">
                <div className="Curry-items">
                    {recipes.map((recipe, index) => (
                        <div className="Curry-item" key={index}>
                            <div className="Curry-image">
                                <img style={{ width: "200px", height: "300px", paddingLeft: "10px" }} 
                                    src={recipe.imageUrl} 
                                    alt={recipe.name} 
                                    border="0"
                                />
                                <h4>{recipe.name}</h4>
                            </div>
                            <div className="Curry-lower">
                                <div className="Ingredients">
                                    <p><strong>Ingredients:</strong> {JSON.parse(recipe.ingredients).join(', ')}</p>
                                </div>
                                <div className="Methodology">
                                    <p><strong>Methodology:</strong> {JSON.parse(recipe.methodology).join(', ')}</p>
                                </div>
                            </div>
                            <div className="Curry-upper">
                                <h4>Popularly Eaten With: {recipe.popularlyEaten}</h4>
                                <h4>Popular Regions: {recipe.popularRegions}</h4>
                                <h4>Estimated Calories: {recipe.estimatedCalories}</h4>
                            </div>
                            {/* The rest of your interaction code here... */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Curry;
