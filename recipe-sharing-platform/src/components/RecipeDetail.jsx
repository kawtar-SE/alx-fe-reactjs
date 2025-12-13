import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="p-6 text-center text-red-500 text-lg font-semibold">Recipe not found ❌</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back link */}
      <Link
        to="/"
        className="text-orange-700 font-bold hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Recipe Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-extrabold mb-4 text-center text-orange-900">{recipe.title}</h1>
          <p className="text-gray-700 text-lg mb-8 text-center">{recipe.summary}</p>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-800">Ingredients:</h2>
            <ul className="flex flex-wrap gap-3">
              {recipe.ingredients.map((ing, index) => (
                <li key={index} className="bg-orange-200 text-orange-900 px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow">{ing}</li>
              ))}
            </ul>
          </div>

          {/* Cooking Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-800">Cooking Steps:</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-lg md:text-xl">
              {recipe.steps.map((step, index) => (
                <li key={index} className="bg-yellow-50 p-3 rounded shadow">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;



