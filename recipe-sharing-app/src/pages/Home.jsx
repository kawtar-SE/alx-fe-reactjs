import { Link } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import FavoritesList from "../components/FavoritesList";
import RecommendationsList from "../components/RecommendationsList";
import { useRecipeStore } from "../store/recipeStore";


const Home = () => {
    const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  return (
    <div>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}></div>
      <h1>Recipe Sharing App</h1>

      <Link to="/add">
        <button>Add New Recipe</button>
      </Link>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <button onClick={generateRecommendations}>Generate Recommendations</button>
      <RecommendationsList />
    </div>
  );
};

export default Home;
