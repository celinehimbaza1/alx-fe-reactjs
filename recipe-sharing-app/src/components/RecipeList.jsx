// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — add one!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: 12,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <h3 style={{ margin: '0 0 6px 0' }}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p style={{ margin: 0 }}>
            {recipe.description?.slice(0, 120)}
            {recipe.description && recipe.description.length > 120 ? '...' : ''}
          </p>
          <div style={{ marginTop: 8 }}>
            <Link to={`/edit/${recipe.id}`} style={{ marginRight: 12 }}>
              Edit
            </Link>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
