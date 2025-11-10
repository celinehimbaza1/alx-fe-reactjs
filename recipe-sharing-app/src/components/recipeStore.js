// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Recipe CRUD
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    })),
  deleteRecipe: (recipeId) =>
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== recipeId),
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  // Favorites
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId]
    })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Recommendations
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
