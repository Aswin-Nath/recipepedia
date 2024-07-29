import Navbar from "./Components/Navbar/Navbar";
import RecipeLibrary from "./Components/RecipeLibrary/RecipeLibrary";
import Curry from "./Components/LibraryItems/Curries/Curry";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChickenFoods from "./Components/LibraryItems/ChickenFoods/ChickenFoods";
import LatestRecipe from "./Components/LatestRecipe/LatestRecipe";
function App() {
  return (
    <Router>
       <div>
        <Navbar/>
        <Routes>
          <Route path="/RecipeLibrary" element={<RecipeLibrary />} />
          <Route path="/" element={<Navigate replace to='/RecipeLibrary' />} />
          <Route path="/Curry" element={<Curry/>}/>
          <Route path="/ChickenFoods" element={<ChickenFoods/>}/>
          <Route path="/LatestRecipe" element={<LatestRecipe/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
