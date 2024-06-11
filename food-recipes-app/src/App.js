import React, { useState } from 'react';
import Search from './components/Search';
import RecipeList from './components/RecipeList';
import './App.css'; 

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <h1>Food Recipes App</h1>
      <Search setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />

      <p>Powered by Spoonacular</p>
      <a href="https://spoonacular.com/food-api">API Documentation</a>
      <a href="https://spoonacular.com/food-api/console">API Console</a>
      <a href="https://github.com/spoonacular/food-recipes-api">GitHub</a> 

    </div>
  );
};

export default App;
