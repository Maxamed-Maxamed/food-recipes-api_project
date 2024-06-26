import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;