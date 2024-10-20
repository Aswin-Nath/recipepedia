import React, { useState, useEffect, useRef } from 'react';
import "./Curry.css";
import start from "../../../images/start.png";
import like_image from "../../../images/Like.png";
import Love from "../../../images/love.png";
import Comments from "../../../images/Comments.png";

function Curry() {
    const [recipes, setRecipes] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const timeoutRefs = useRef([]);
    const [likes, setLikes] = useState(Array(10).fill(false)); // Assume 10 recipes for initial state
    const [comments, setComments] = useState(Array(10).fill(0)); // Count of comments for each recipe

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/recipes'); // Correct URL for the backend
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched recipes:", data);
            setRecipes(data);
            setLikes(Array(data.length).fill(false)); // Initialize likes state based on fetched data length
            setComments(Array(data.length).fill(0)); // Initialize comments state based on fetched data length
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
    
    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleLike = (index) => {
        const updatedLikes = [...likes];
        updatedLikes[index] = !updatedLikes[index]; // Toggle like state
        setLikes(updatedLikes);
    };

    const handleComment = (index) => {
        const updatedComments = [...comments];
        updatedComments[index] += 1; // Increment comment count
        setComments(updatedComments);
    };

    return (
        <div className="Curry">
            <div className="Curry-Generator">
                <div className="Curry-items">
                    {recipes.map((recipe, index) => (
                        <div className="Curry-item" key={index}>
                            <div className="Curry-image">
                                <img
                                    style={{ width: "200px", height: "300px", paddingLeft: "10px" }} 
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
                            <div className="Curry-interactions">
                                <button 
                                    className={`like-button ${likes[index] ? 'liked' : ''}`}
                                    onClick={() => handleLike(index)}
                                >
                                    {likes[index] ? 'Liked' : 'Like'}
                                </button>
                                <button 
                                    className="comment-button" 
                                    onClick={() => handleComment(index)}
                                >
                                    Comment ({comments[index]})
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Curry;
