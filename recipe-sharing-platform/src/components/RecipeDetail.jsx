import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
		setRecipe(selectedRecipe);
	}, [id]);

	if (!recipe) {
		return <div>Recipe not found</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<img
					src={recipe.image}
					alt={recipe.title}
					className="w-full h-64 object-cover"
				/>
				<div className="p-6">
					<h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
					<p className="text-gray-700 mb-4">{recipe.summary}</p>
					<div className="mb-4">
						<h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
						<ul className="list-disc list-inside">
							{recipe.ingredients &&
								recipe.ingredients.map((ingredient, index) => (
									<li key={index}>{ingredient}</li>
								))}
						</ul>
					</div>
					<div>
						<h2 className="text-2xl font-semibold mb-2">Instructions</h2>
						<ol className="list-decimal list-inside">
							{recipe.instructions &&
								recipe.instructions.map((instruction, index) => (
									<li key={index}>{instruction}</li>
								))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
