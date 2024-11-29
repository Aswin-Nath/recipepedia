import Navbar from "./Components/Navbar/Navbar";
import RecipeLibrary from "./Components/RecipeLibrary/RecipeLibrary";
import Curry from "./Components/LibraryItems/Curries/Curry";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChickenFoods from "./Components/LibraryItems/ChickenFoods/ChickenFoods";
import LatestRecipe from "./Components/LatestRecipe/LatestRecipe";
import AddRecipe from "./Components/Add_Recipe/AddRecipe";
function App() {
  return (
    <Router>
       <div>
        <Navbar/>
        <Routes>
          <Route path="/ADD" element={<AddRecipe/>}/>
          <Route path="/RecipeLibrary/" element={<RecipeLibrary />} />
          <Route path="/" element={<Navigate replace to='/RecipeLibrary' />} />
          <Route path="/RecipeLibrary/Curry/" element={<Curry/>}/>
          <Route path="/RecipeLibrary/ChickenFoods/" element={<ChickenFoods/>}/>
          <Route path="/LatestRecipe/" element={<LatestRecipe/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
