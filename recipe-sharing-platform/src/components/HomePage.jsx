import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		setRecipes(recipesData);
	}, []);

	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{recipes.map((recipe) => (
					<div
						key={recipe.id}
						className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
						<img
							src={recipe.image}
							alt={recipe.title}
							className="w-full h-32 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
							<p className="text-gray-700 text-sm">{recipe.summary}</p>
							<a
								href={`/recipe/${recipe.id}`}
								className="text-indigo-500 hover:text-indigo-600 mt-4 inline-block">
								View Recipe
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
