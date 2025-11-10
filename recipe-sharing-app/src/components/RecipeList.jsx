// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Filter recipes whenever searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.length > 0 ? (
        displayRecipes.map(recipe => (
          <div key={recipe.id} className="border p-4 my-2 rounded shadow">
            <Link to={`/recipes/${recipe.id}`}>
              <h3 className="text-xl font-bold text-blue-600">{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
