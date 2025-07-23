// RecipeList component
import { Link } from "react-router-dom";
import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
	const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

	return (
		<ul>
			{filteredRecipes.map((recipe) => (
				<li key={recipe.id}>
					<h2>{recipe.title}</h2>
					<p>{recipe.description}</p>
				</li>
			))}
		</ul>
	);
};

export default RecipeList;
