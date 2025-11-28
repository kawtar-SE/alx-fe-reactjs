import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic route with recipe id */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
