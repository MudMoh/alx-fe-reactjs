import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/recipes/:recipeId" element={<RecipeDetails />} />
				<Route path="/recipes" element={<RecipeList />} />
				<Route path="/add-recipe" element={<AddRecipeForm />} />
				<Route
					index
					element={
						<div>
							<AddRecipeForm />
							<RecipeList />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
