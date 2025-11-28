import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
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

export default RecipeList;
