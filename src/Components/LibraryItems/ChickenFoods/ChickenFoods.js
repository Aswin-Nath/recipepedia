import React, { useRef, useState } from 'react'
import "./ChickenFoods.css";
import image from "../../../images/Curry.png";
import like from "../../../images/Like.png"; 
import Love from "../../../images/love.png"; 
import Comments from "../../../images/Comments.png"; 
import start from "../../../images/start.png";
import { hover } from "@testing-library/user-event/dist/hover";
function ChickenFoods() {
    const ChickenRecipes = [
    {
        Name: "Chicken Curry",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "India, Southeast Asia",
        EstimatedCalories: "700 kcal",
        Ingredients: ["Chicken", "Onions", "Tomatoes", "Curry powder", "Coconut milk"],
        Methodology: [
            "Sauté onions until golden.",
            "Add chicken and cook until browned.",
            "Stir in tomatoes and curry powder.",
            "Pour in coconut milk and simmer until chicken is cooked through."
        ]
    },
    {
        Name: "Butter Chicken",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "India",
        EstimatedCalories: "650 kcal",
        Ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices"],
        Methodology: [
            "Marinate chicken in spices.",
            "Cook chicken in a pan, add tomatoes and simmer.",
            "Stir in butter and cream before serving."
        ]
    },
    {
        Name: "Chicken Biryani",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "India, Pakistan",
        EstimatedCalories: "700 kcal",
        Ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
        Methodology: [
            "Marinate chicken in yogurt and spices.",
            "Layer rice and chicken in a pot, cook until done."
        ]
    },
    {
        Name: "Chicken Alfredo Pasta",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "Worldwide",
        EstimatedCalories: "600 kcal",
        Ingredients: ["Chicken", "Pasta", "Cream", "Parmesan cheese", "Garlic"],
        Methodology: [
            "Cook pasta until al dente.",
            "Sauté garlic and chicken until cooked.",
            "Add cream and cheese, combine with pasta."
        ]
    },
    {
        Name: "Chicken Caesar Salad",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "USA",
        EstimatedCalories: "450 kcal",
        Ingredients: ["Chicken breast", "Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
        Methodology: [
            "Grill chicken until done and slice.",
            "Toss lettuce with croutons, cheese, and dressing.",
            "Top with grilled chicken."
        ]
    },
    {
        Name: "Chicken Tacos",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "Mexico, USA",
        EstimatedCalories: "300 kcal",
        Ingredients: ["Chicken", "Tortillas", "Lettuce", "Tomatoes", "Cheese", "Salsa"],
        Methodology: [
            "Cook chicken until browned.",
            "Fill tortillas with chicken and toppings of choice."
        ]
    },
    {
        Name: "Chicken Stir-Fry",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "China",
        EstimatedCalories: "500 kcal",
        Ingredients: ["Chicken", "Vegetables", "Soy sauce", "Garlic", "Ginger"],
        Methodology: [
            "Sauté garlic and ginger until fragrant.",
            "Add chicken and cook until browned.",
            "Add vegetables and soy sauce, stir-fry until done."
        ]
    },
    {
        Name: "Chicken Noodle Soup",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "Worldwide",
        EstimatedCalories: "350 kcal",
        Ingredients: ["Chicken", "Noodles", "Carrots", "Celery", "Broth"],
        Methodology: [
            "Simmer chicken in broth until cooked, then shred.",
            "Add carrots and celery, cook until tender.",
            "Add noodles and cook until done."
        ]
    },
    {
        Name: "Chicken Parmesan",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "Italy, USA",
        EstimatedCalories: "650 kcal",
        Ingredients: ["Chicken breast", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Breadcrumbs"],
        Methodology: [
            "Bread and fry chicken until golden.",
            "Top with tomato sauce and cheeses.",
            "Bake until cheese is melted and bubbly."
        ]
    },
    {
        Name: "Chicken Shawarma",
        PopularlyEaten: "Lunch, Dinner",
        PopularRegions: "Middle East",
        EstimatedCalories: "550 kcal",
        Ingredients: ["Chicken", "Pita bread", "Garlic sauce", "Tomatoes", "Lettuce"],
        Methodology: [
            "Marinate chicken in spices and grill until done.",
            "Slice chicken and serve in pita with garlic sauce and vegetables."
        ]
    }
];
const [hover,sethover]=useState(false);
const timeoutref=useRef(null);
const Leave=()=>{
    timeoutref.current=
        setTimeout(()=>{
            sethover(false);
        },2000);
}
const EnterInTab=()=>{
    if(timeoutref.current){
    clearTimeout(timeoutref.current);
    }
}
  return (
    <div className="ChickenFoods">
        <div className="ChickenFoods-Generator">
            <div className="chicken-items">
            {ChickenRecipes.map((i, index) => (
        <div className="chicken-item" key={index}>
            <div className="chicken-image">
                <img src={image}></img>
                <h4>{i.Name}</h4>
            </div>
            <div className="chicken-lower">
                <div className="Ingredients">
                    <h3 style={{color:"red"}}>Ingredients:</h3>
                    <ul>
                        {i.Ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="Methodology">
                    <h3 style={{color:"red"}}>Methodology:</h3>
                    <ol>
                        {i.Methodology.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="chicken-upper">
                <h4>Popularly Eaten With: {i.PopularlyEaten}</h4>
                <h4>Popular Regions: {i.PopularRegions}</h4>
                <h4>Estimated Calories: {i.EstimatedCalories}</h4>
            </div>
            <div className="hover-reactions">
                    <img onMouseEnter={()=>{
                        sethover(true);
                    }} 
                    onMouseLeave={Leave} 
                    src={start}>
                </img>
            </div>
                <div style={{display:hover?"block":"none"}} onMouseEnter={EnterInTab} 
                    onMouseLeave={Leave}   className="hover-display">
                    <img className="Like" src={like}></img>
                    <img className="Love" src={Love}></img>
                    <img className='Comments' src={Comments}></img>
                </div>
        </div>
    ))}
            </div>
        </div>
    </div>
  )
}

export default ChickenFoods