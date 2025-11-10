// src/components/FavoritesList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(r => r.id === id))
  );
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id} className="border p-2 my-2 rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              className="text-red-600 mt-1"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
