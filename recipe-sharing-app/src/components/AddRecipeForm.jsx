// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newRecipe = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    // navigate to detail view of new recipe (optional)
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
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
          rows={4}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 12px' }}>
        Add Recipe
      </button>
    </form>
  );
}
