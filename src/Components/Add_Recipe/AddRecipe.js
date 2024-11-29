import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./AddRecipe.css";
import axios from "axios";

function AddRecipe() {
  const validateName = (RecipeName) => {
    return !/\d/.test(RecipeName); // Validate to ensure no numbers in name
  };

  const [recipename, setRecipename] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");
  const [calories, setCalories] = useState("");
  const [popularmeal, setPopularmeal] = useState("");
  const [popularregions, setPopularregions] = useState("");
  const [image, setImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(""); // For showing the uploaded image URL

  const upload = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (!recipename || !ingredients || !method || !calories || !popularmeal || !popularregions || !image) {
      alert("Please provide all the required parameters.");
      return;
    }

    if (!validateName(recipename)) {
      alert("Please enter a valid recipe name (no numbers).");
      return;
    }

    try {
      // Upload image to the image server
      const formData = new FormData();
      formData.append("image", image);
      formData.append("image_name", recipename);

      const imageResponse = await axios.post(
        "https://git-auto.onrender.com/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const uploadedUrl = imageResponse.data.url;
      setUploadedUrl(uploadedUrl); // Save the uploaded image URL in state


      const recipeData = {
        name: recipename,
        ingredients: ingredients,
        methodology: method,
        estimatedCalories: parseInt(calories),
        popularMeals: popularmeal,
        popularRegions: popularregions,
        imageUrl: uploadedUrl,
      };

      console.log(recipeData);
      // Send recipe data to the backend API
      await axios.post("http://localhost:8080/api/addrecipe", recipeData);

      alert("Recipe submitted successfully!");

      // Reset form fields
      setRecipename("");
      setIngredients("");
      setMethod("");
      setCalories("");
      setPopularmeal("");
      setPopularregions("");
      setImage(null);
      setUploadedUrl("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the recipe. Please try again.");
    }
  };

  return (
    <div className="Add-container">
      <div className="Add-contents">
        <form>
          <label>
            <TextField
              className="Text"
              label="Enter Recipe Name"
              value={recipename}
              onChange={(e) => setRecipename(e.target.value)}
            />
          </label>
          <br />
          <label>
            <TextField
              className="Text"
              label="Enter Ingredients (comma separated)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </label>
          <br />
          <label>
            <TextField
              className="Text"
              label="Enter Methodology (comma separated)"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />
          </label>
          <br />
          <label>
            <TextField
              className="Text"
              label="Estimated Calories"
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>
          <br />
          <label>
            <TextField
              className="Text"
              label="Popular Meals"
              value={popularmeal}
              onChange={(e) => setPopularmeal(e.target.value)}
            />
          </label>
          <br />
          <label>
            <TextField
              className="Text"
              label="Popular Regions"
              value={popularregions}
              onChange={(e) => setPopularregions(e.target.value)}
            />
          </label>
          <br />
          <label>
            Recipe Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <br />
          <button className="submit" onClick={upload}>
            Submit
          </button>
        </form>
      </div>
      {uploadedUrl && (
        <div className="Image-Container">
          <h3>Uploaded Image:</h3>
          <img src={uploadedUrl} alt="Uploaded Recipe" className="Uploaded-Image" />
        </div>
      )}
    </div>
  );
}

export default AddRecipe;
