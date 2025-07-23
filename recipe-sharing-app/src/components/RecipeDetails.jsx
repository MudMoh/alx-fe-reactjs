import useRecipeStore from "./recipeStore";
import { useParams } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
	// Get the recipe ID from the URL parameters
	const { recipeId } = useParams();

	// Get the recipe from the store
	const recipe = useRecipeStore((state) =>
		state.recipes.find((recipe) => recipe.id === recipeId)
	);

	// Render the recipe details
	return (
		<div>
			<h1>{recipe.title}</h1>
			<p>{recipe.description}</p>
			<ul>
				{recipe.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
			<p>Instructions: {recipe.instructions}</p>
			<EditRecipeForm recipeId={recipeId} />
			<DeleteRecipeButton recipeId={recipeId} />
		</div>
	);
};

export default RecipeDetails;
