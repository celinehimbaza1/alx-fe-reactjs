import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-2 my-2 rounded">
          <Link to={`/recipes/${recipe.id}`}>
            <h3 className="text-xl font-bold text-blue-600">{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)} className="text-red-600 mt-1">
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)} className="text-green-600 mt-1">
              Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
