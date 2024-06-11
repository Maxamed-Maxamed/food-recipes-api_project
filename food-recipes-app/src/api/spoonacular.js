import axios from 'axios';
// import config from '../config';
import config from '../config/config';

const API_KEY = config.apiKey;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query) => {
  const response = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query: query,

    },
  });
  return response.data.results;
};

export const getRecipeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
  return response.data;
};
