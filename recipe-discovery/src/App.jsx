import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Header } from "./components/Header";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetail } from "./components/RecipeDetail";
import { RecipeList } from "./components/RecipeList";


function AppWrapper() {
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const [recipes, setRecipes] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
				);
				const data = await response.json();
				setRecipes(data.meals || []);
			} catch (error) {
				console.error("Error fetching recipes:", error);
			}
		};

		fetchRecipes();

		const fetchCategories = async () => {
			try {
				const response = await fetch(
					"https://www.themealdb.com/api/json/v1/1/list.php?c=list"
				);
				const data = await response.json();
				setCategories(data.meals.map((meal) => meal.strCategory) || []);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchCategories();
	}, [searchTerm]);

	const handleRecipeClick = (recipe) => {
		setSelectedRecipe(recipe);
		navigate(`/recipe/${recipe.idMeal}`);
	};

	const handleGetStarted = () => {
		navigate("/recipes");
	};

	const handleBackToHome = () => {
		setSelectedRecipe(null);
		navigate("/");
	};

	const handleBackToList = () => {
		setSelectedRecipe(null);
		navigate("/recipes");
	};

	const handleSearchChange = (term) => {
		setSearchTerm(term);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	return (
		<>
			<Header onBackToHome={handleBackToHome} />
			<Routes>
				<Route
					path="/"
					element={
						<LandingPage onGetStarted={handleGetStarted} categories={categories} />
					}
				/>
				<Route
					path="/recipes"
					element={
						<div className="min-h-screen bg-background">
							<div className="container mx-auto px-4 py-8">
								<div className="text-center mb-8">
									<h1 className="mb-4">Browse Recipes</h1>
									<p className="text-muted-foreground max-w-2xl mx-auto">
										Discover delicious recipes from around the world. Search by
										name, browse by category, and find your next favorite meal.
									</p>
								</div>
								<RecipeList
									searchTerm={searchTerm}
									onSearchChange={handleSearchChange}
									selectedCategory={selectedCategory}
									onCategoryChange={handleCategoryChange}
									categories={categories}
								/>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
									{recipes.map((recipe) => (
										<RecipeCard
											key={recipe.idMeal}
											recipe={recipe}
											onClick={() => handleRecipeClick(recipe)}
										/>
									))}
								</div>

								{recipes.length === 0 && (
									<div className="text-center py-12">
										<p className="text-muted-foreground">
											No recipes found matching your criteria. Try adjusting
											your search or filters.
										</p>
									</div>
								)}
							</div>
						</div>
					}
				/>
				<Route
					path="/recipe/:id"
					element={
						selectedRecipe && (
							<RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
						)
					}
				/>
			</Routes>
		</>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<AppWrapper />
		</BrowserRouter>
	);
}
