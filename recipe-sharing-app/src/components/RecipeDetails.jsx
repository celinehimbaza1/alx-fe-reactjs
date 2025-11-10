// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === id)
  );
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  const handleDelete = () => {
    // confirm delete
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipe.id);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${recipe.id}`} style={{ marginRight: 12 }}>
          Edit
        </Link>
        <button onClick={handleDelete} style={{ padding: '6px 10px' }}>
          Delete
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">Back to recipes</Link>
      </div>
    </div>
  );
}
