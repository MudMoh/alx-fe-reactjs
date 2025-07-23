import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import "./App.css";
function App() {
	return (
		<>
			<h1>Recipe Sharing App</h1>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<AddRecipeForm />
								<RecipeList />
							</div>
						}
					/>
					<Route path="/recipes/:recipeId" element={<RecipeDetails />} />
					<Route path="/add-recipe" element={<AddRecipeForm />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
