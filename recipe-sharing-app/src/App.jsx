// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: 900, margin: '24px auto', padding: 16 }}>
        <header style={{ marginBottom: 20 }}>
          <h1>Recipe Sharing App</h1>
          <nav style={{ marginBottom: 12 }}>
            <Link to="/" style={{ marginRight: 12 }}>Home</Link>
            <Link to="/">Recipes</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          {/* optional fallback */}
          <Route path="*" element={<div>Not found — <Link to="/">Go home</Link></div>} />
        </Routes>
      </div>
    </Router>
  );
}
