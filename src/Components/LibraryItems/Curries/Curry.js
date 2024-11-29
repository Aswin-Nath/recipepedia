import React, { useState, useEffect } from 'react';
import './Curry.css';
import { Link } from 'react-router-dom';

function Curry() {
    const [recipes, setRecipes] = useState([]);
    const [comments, setComments] = useState(Array(10).fill(0));
    const [likemap, setLikemap] = useState(new Map());
    const [addLikes, setAddLikes] = useState([]);
    const [removeLikes, setRemoveLikes] = useState([]);
    const [addLikesPostid, setAddLikesPostid] = useState([]);
    const [removeLikesPostid, setRemoveLikesPostid] = useState(-1);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/recipes'); // Correct URL for the backend
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched recipes:', data);

            // Parse ingredients and methodology fields into arrays
            const parsedData = data.map(recipe => ({
                ...recipe,
                ingredients: recipe.ingredients.split(', '), // Parse the ingredients into an array
                methodology: recipe.methodology.split('. ').filter(item => item), // Parse methodology into an array of steps
            }));

            setRecipes(parsedData);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const fetchLikes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/getlikes');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const tempLikeMap = new Map();

            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                if (!tempLikeMap.has(item.postid)) {
                    tempLikeMap.set(item.postid, []);
                }
                tempLikeMap.get(item.postid).push(item.userid);
            }
            setLikemap(tempLikeMap);
        } catch (error) {
            console.error('Error fetching likes:', error);
        }
    };

    const handleLikeClick = (recipeId) => {
        const userId = 101; // Replace with the actual logged-in user's ID
        const isLiked = likemap.get(recipeId)?.includes(userId);

        // Update the likemap state
        const updatedLikemap = new Map(likemap);
        if (isLiked) {
            updatedLikemap.set(recipeId, updatedLikemap.get(recipeId).filter(id => id !== userId));
            setRemoveLikesPostid(recipeId);
            setRemoveLikes([...removeLikes, { postid: recipeId, userid: userId }]);
        } else {
            updatedLikemap.set(recipeId, [...(updatedLikemap.get(recipeId) || []), userId]);
            setAddLikesPostid(recipeId);
            setAddLikes([...addLikes, { postid: recipeId, userid: userId }]);
        }

        setLikemap(updatedLikemap);
    };

    const updateLikesInDB = async () => {
        try {
            const requests = [];

            // For adding likes (List of UserLike objects)
            if (addLikes.length > 0) {
                console.log('Adding likes with UserLike...');
                const addLikesRequest = fetch('http://localhost:8080/api/addlikes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(addLikes),
                });
                requests.push(addLikesRequest);
            }

            if (addLikesPostid !== -1) {
                console.log('Adding likes by postid...');
                const addLikesPostidRequest = fetch('http://localhost:8080/api/addlikesB', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(addLikesPostid),  // This sends an object with postid
                });
                requests.push(addLikesPostidRequest);
            }

            // For removing likes (List of UserLike objects)
            if (removeLikes.length > 0) {
                console.log('Removing likes with UserLike...');
                const removeLikesRequest = fetch('http://localhost:8080/api/removelikes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(removeLikes),
                });
                requests.push(removeLikesRequest);
            }

            if (removeLikesPostid !== -1) {
                console.log('Removing likes by postid...');
                const removeLikesPostidRequest = fetch('http://localhost:8080/api/removelikesB', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(removeLikesPostid),  // This sends an object with postid
                });
                requests.push(removeLikesPostidRequest);
            }

            await Promise.all(requests);

            // Clear likes after successful update
            setAddLikes([]);
            setAddLikesPostid(-1);
            setRemoveLikes([]);
            setRemoveLikesPostid(-1);
        } catch (error) {
            console.error('Error updating likes in DB:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
        fetchLikes();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (addLikes.length || removeLikes.length) {
                updateLikesInDB();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [addLikes, removeLikes]);

    useEffect(() => {
        console.log('Add Likes updated:', addLikes);
    }, [addLikes]);

    useEffect(() => {
        console.log('Remove Likes updated:', removeLikes);
    }, [removeLikes]);

    return (
        <div className="Curry">
            <div className="Curry-Generator">
                <button>
                    <Link to="/ADD">
                        Click to add New Recipe
                    </Link>
                </button>
                
                <div className="Curry-items">
                    {recipes.map((recipe, index) => (
                        <div className="Curry-item" key={index}>
                            <div className="Curry-image">
                                <img
                                    style={{ width: '200px', height: '300px', paddingLeft: '10px' }}
                                    src={recipe.imageUrl}
                                    alt={recipe.name}
                                    border="0"
                                />
                                <h4>{recipe.name}</h4>
                            </div>
                            <div className="Curry-lower">
                                <div className="Ingredients">
                                    <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                                </div>
                                <div className="Methodology">
                                    <p><strong>Methodology:</strong> {recipe.methodology.join('. ')}</p>
                                </div>
                            </div>
                            <div className="Curry-upper">
                                <h4>Popularly Eaten With: {recipe.popularMeals}</h4>
                                <h4>Popular Regions: {recipe.popularRegions}</h4>
                                <h4>Estimated Calories: {recipe.estimatedCalories}</h4>
                            </div>
                            <div className="Curry-interactions">
                                <button
                                    className={`like-button ${likemap.get(recipe.postid)?.includes(101) ? 'liked' : ''}`}
                                    onClick={() => handleLikeClick(recipe.postid)}
                                >
                                    {likemap.get(recipe.postid)?.includes(101) ? 'Liked' : 'Like'} {recipe.likes}
                                </button>
                                <button className="comment-button">
                                    Comment {comments[index]}
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
