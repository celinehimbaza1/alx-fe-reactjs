// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Recipe title"
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>
      <div>
        <textarea
          value={description}
          placeholder="Description / steps / ingredients"
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 12px' }}>
        Save Changes
      </button>
    </form>
  );
}
