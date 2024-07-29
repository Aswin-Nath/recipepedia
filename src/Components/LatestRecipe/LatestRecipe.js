import React from 'react'
import image from "../../images/Latest.png";
import "./LatestRecipe.css";
function LatestRecipe() {
    const RecipeDetails = [
        {
            Name: "Chapathi Daal",
            cook: "Balaji",
            uploaded: "10 mins ago"
        },
        {
            Name: "Pizza Margherita",
            cook: "Balaji",
            uploaded: "10 mins ago"
        },
        {
            Name: "Spaghetti Carbonara",
            cook: "Balaji",
            uploaded: "10 mins ago"
        },
        {
            Name: "Chicken Biryani",
            cook: "Balaji",
            uploaded: "15 mins ago"
        },
        {
            Name: "Caesar Salad",
            cook: "Balaji",
            uploaded: "20 mins ago"
        },
        {
            Name: "Vegetable Stir Fry",
            cook: "Balaji",
            uploaded: "25 mins ago"
        },
        {
            Name: "Beef Tacos",
            cook: "Balaji",
            uploaded: "30 mins ago"
        },
        {
            Name: "Lemon Tart",
            cook: "Balaji",
            uploaded: "35 mins ago"
        },
        {
            Name: "Garlic Butter Shrimp",
            cook: "Balaji",
            uploaded: "40 mins ago"
        },
        {
            Name: "Greek Yogurt Parfait",
            cook: "Balaji",
            uploaded: "45 mins ago"
        }
    ];
    
    return (
    <div className="LatestRecipe">
        <div className="LatestRecipe-Generator">
            <div className="LatestRecipe-items">
            {RecipeDetails.map((i, index) => (
                <div className="LatestRecipe-item" key={index}>
                    <div className="LatestRecipe-image">
                        <img src={image}></img>
                        <h4>{i.Name}</h4>
                        <h4>Cook: {i.cook}</h4>
                        <h4>uploaded: {i.uploaded}</h4>
                    </div>
                   
                    
                </div>
    ))}
            </div>
        </div>
    </div>
  )
}

export default LatestRecipe