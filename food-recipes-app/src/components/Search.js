import React, { useState } from 'react';
import { searchRecipes } from '../api/spoonacular';

const Search = ({ setRecipes }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for recipes..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
