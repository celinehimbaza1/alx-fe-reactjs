// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    // optional sample recipe(s)
    // { id: 1, title: 'Sample Pancakes', description: 'Fluffy pancakes...' }
  ],

  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // update recipe by id
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // delete recipe by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // replace whole list (optional)
  setRecipes: (recipes) => set({ recipes }),
}));
