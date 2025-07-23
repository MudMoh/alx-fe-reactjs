import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";
function App() {
	return (
		<>
			<SearchBar />
			<RecipeList />

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
					<Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
					<Route
						path="/delete-recipe/:recipeId"
						element={<DeleteRecipeButton />}
					/>
				</Routes>
			</BrowserRouter>
			<ErrorBoundary>
				<FavoritesList />
			</ErrorBoundary>
			<RecommendationsList />
		</>
	);
}

export default App;
