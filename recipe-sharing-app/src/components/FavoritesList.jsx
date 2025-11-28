import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
