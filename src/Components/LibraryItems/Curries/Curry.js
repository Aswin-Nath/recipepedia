import React, { useEffect, useState,useRef } from 'react'
import "./Curry.css";
import start from "../../../images/start.png";
import image from "../../../images/Curry.png";
import like_image from "../../../images/Like.png"
import Love from "../../../images/love.png"; 
import Comments from "../../../images/Comments.png"; 
function Curry() {
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
    const [like,setlike]=useState(false);
    const [love,setlove]=useState(false);
    const [comments,setcomments]=useState(false);
    
    const toggle=(par)=>{
        if(par=='like'){
            setlike(like^1);
        }
        else if(par=="love"){
            setlove(love^1);
        }
        else{
            setcomments(comments^1);
        }
    }
    const RecipeDetails = [
        {
            Name: "Chapathi Daal",
            PopularlyEaten: "Breakfast, Lunch",
            PopularRegions: "India, Nepal",
            EstimatedCalories: "500 kcal",
            Ingredients: ["Rice flour", "Water", "Salt"],
            Methodology: [
                "Mix rice flour with water until smooth.",
                "Cook on medium heat until firm."
            ]
        },
        {
            Name: "Pizza Margherita",
            PopularlyEaten: "Dinner, Snack",
            PopularRegions: "Worldwide",
            EstimatedCalories: "600 kcal",
            Ingredients: ["Tomato sauce", "Mozzarella cheese", "Basil leaves"],
            Methodology: [
                "Preheat oven to 180°C.",
                "Spread tomato sauce on dough, top with mozzarella and basil.",
                "Bake for 20 minutes."
            ]
        },
        {
            Name: "Spaghetti Carbonara",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Italy",
            EstimatedCalories: "400 kcal",
            Ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
            Methodology: [
                "Cook spaghetti until al dente.",
                "In a bowl, beat eggs and mix with cheese.",
                "Fry pancetta until crispy.",
                "Combine spaghetti, pancetta, and egg mixture."
            ]
        },
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
            Name: "Tacos",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Mexico, USA",
            EstimatedCalories: "300 kcal",
            Ingredients: ["Tortillas", "Ground beef", "Lettuce", "Tomatoes", "Cheese", "Salsa"],
            Methodology: [
                "Cook ground beef until browned.",
                "Fill tortillas with beef and toppings of choice."
            ]
        },
        {
            Name: "Sushi",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Japan",
            EstimatedCalories: "200 kcal",
            Ingredients: ["Sushi rice", "Nori", "Raw fish", "Vegetables"],
            Methodology: [
                "Cook sushi rice and season with vinegar.",
                "Place nori on bamboo mat, spread rice on nori.",
                "Add fish and vegetables, roll tightly, and slice."
            ]
        },
        {
            Name: "Caesar Salad",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "USA",
            EstimatedCalories: "250 kcal",
            Ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
            Methodology: [
                "Chop lettuce and place in a bowl.",
                "Add croutons, cheese, and dressing. Toss to combine."
            ]
        },
        {
            Name: "Pancakes",
            PopularlyEaten: "Breakfast",
            PopularRegions: "Worldwide",
            EstimatedCalories: "350 kcal",
            Ingredients: ["Flour", "Milk", "Eggs", "Baking powder", "Sugar", "Salt"],
            Methodology: [
                "Mix dry ingredients, then add milk and eggs.",
                "Pour batter onto a hot griddle and cook until bubbles form."
            ]
        },
        {
            Name: "Pad Thai",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Thailand",
            EstimatedCalories: "450 kcal",
            Ingredients: ["Rice noodles", "Shrimp", "Eggs", "Bean sprouts", "Peanuts", "Tamarind paste"],
            Methodology: [
                "Cook noodles and set aside.",
                "Sauté shrimp and set aside.",
                "Scramble eggs in the same pan, then add noodles, shrimp, and sauce.",
                "Garnish with bean sprouts and peanuts."
            ]
        },
        {
            Name: "Hamburger",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "USA, Worldwide",
            EstimatedCalories: "500 kcal",
            Ingredients: ["Ground beef", "Buns", "Lettuce", "Tomato", "Cheese"],
            Methodology: [
                "Form ground beef into patties and cook to desired doneness.",
                "Place patty on bun and add toppings."
            ]
        },
        {
            Name: "Falafel",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Middle East",
            EstimatedCalories: "350 kcal",
            Ingredients: ["Chickpeas", "Onions", "Garlic", "Parsley", "Spices"],
            Methodology: [
                "Blend chickpeas, onions, garlic, parsley, and spices.",
                "Form into balls and fry until golden."
            ]
        },
        {
            Name: "Ratatouille",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "France",
            EstimatedCalories: "150 kcal",
            Ingredients: ["Zucchini", "Eggplant", "Tomatoes", "Bell peppers", "Onions", "Herbs"],
            Methodology: [
                "Slice vegetables and arrange in a baking dish.",
                "Drizzle with olive oil and sprinkle with herbs.",
                "Bake until vegetables are tender."
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
            Name: "Bibimbap",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Korea",
            EstimatedCalories: "550 kcal",
            Ingredients: ["Rice", "Vegetables", "Egg", "Gochujang", "Beef"],
            Methodology: [
                "Cook rice and set aside.",
                "Sauté vegetables and beef.",
                "Top rice with vegetables, beef, and a fried egg. Add gochujang."
            ]
        },
        {
            Name: "Paella",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Spain",
            EstimatedCalories: "500 kcal",
            Ingredients: ["Rice", "Seafood", "Chicken", "Saffron", "Vegetables"],
            Methodology: [
                "Cook chicken until browned, add vegetables and rice.",
                "Stir in saffron and broth, simmer.",
                "Add seafood and cook until done."
            ]
        },
        {
            Name: "Shakshuka",
            PopularlyEaten: "Breakfast, Lunch",
            PopularRegions: "Middle East, North Africa",
            EstimatedCalories: "300 kcal",
            Ingredients: ["Tomatoes", "Eggs", "Onions", "Peppers", "Spices"],
            Methodology: [
                "Sauté onions and peppers, add tomatoes and spices.",
                "Simmer until sauce thickens, then poach eggs in the sauce."
            ]
        },
        {
            Name: "Gyros",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Greece",
            EstimatedCalories: "400 kcal",
            Ingredients: ["Pita bread", "Lamb", "Tomato", "Onion", "Tzatziki"],
            Methodology: [
                "Cook lamb until done.",
                "Fill pita with lamb, tomato, onion, and tzatziki."
            ]
        },
        {
            Name: "Biryani",
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
            Name: "Pho",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Vietnam",
            EstimatedCalories: "350 kcal",
            Ingredients: ["Rice noodles", "Beef", "Broth", "Herbs", "Spices"],
            Methodology: [
                "Cook broth with spices until flavorful.",
                "Add beef and noodles, serve with fresh herbs."
            ]
        },
        {
            Name: "Chow Mein",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "China",
            EstimatedCalories: "450 kcal",
            Ingredients: ["Noodles", "Chicken", "Vegetables", "Soy sauce"],
            Methodology: [
                "Cook noodles and set aside.",
                "Sauté chicken and vegetables, add noodles and soy sauce."
            ]
        },
        {
            Name: "Moussaka",
            PopularlyEaten: "Lunch, Dinner",
            PopularRegions: "Greece",
            EstimatedCalories: "500 kcal",
            Ingredients: ["Eggplant", "Ground beef", "Tomatoes", "Béchamel sauce"],
            Methodology: [
                "Layer eggplant and beef in a baking dish.",
                "Top with tomatoes and béchamel, bake until golden."
            ]
        }
    ];
    
  return (
    <div className="Curry">
            <div className="Curry-Generator">
                <div className="Curry-items">
                    {RecipeDetails.map((i, index) => (
                        <div className="Curry-item" key={index}>
                            <div className="Curry-image">
                                <img src={image}></img>
                                <h4>{i.Name}</h4>
                            </div>
                            <div className="Curry-lower">

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
                            <div className="Curry-upper">
                                    <h4>Popularly Eaten With:{i.PopularlyEaten}</h4>
                                    <h4>Popular Regions:{i.PopularRegions}</h4>
                                    <h4>Estimated Calories:{i.EstimatedCalories}</h4>
                            </div>            
                            <div className="hover-reactions">
                    <img onMouseEnter={()=>{
                        sethover(true);
                    }} 
                    onMouseLeave={Leave} 
                    src={start}></img>
            </div>
                <div style={{display:hover?"block":"none"}} onMouseEnter={EnterInTab} 
                    onMouseLeave={Leave}   className="hover-display">
                    <img className="Like" src={like_image}></img>
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
export default Curry;