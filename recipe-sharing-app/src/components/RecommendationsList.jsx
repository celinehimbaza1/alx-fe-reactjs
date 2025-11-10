// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id} className="border p-2 my-2 rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add some favorites to see recommendations!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
