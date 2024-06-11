import React, { useEffect, useState } from 'react';
import { getRecipeDetails } from '../api/spoonacular';

const RecipeDetails = ({ recipeId }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getRecipeDetails(recipeId);
      setDetails(data);
    };
    fetchDetails();
  }, [recipeId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.image} alt={details.title} />
      <p>{details.summary}</p>
    </div>
  );
};

export default RecipeDetails;