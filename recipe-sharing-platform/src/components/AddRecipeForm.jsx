import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields!");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please add at least 2 ingredients separated by commas.");
      return;
    }

    // Prepare recipe object
    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(".").map((s) => s.trim()).filter(Boolean),
    };

    console.log("New Recipe:", newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Steps (separate by periods)
          </label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

