import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const { recommendations } = useRecipeStore((state) => ({
    recommendations: state.recommendations,
  }));

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
