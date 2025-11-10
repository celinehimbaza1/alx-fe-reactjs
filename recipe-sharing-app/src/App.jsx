import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
