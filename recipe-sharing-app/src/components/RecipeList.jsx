// RecipeList component
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
	const recipes = useRecipeStore((state) => state.recipes);

	return (
		<div>
			<h1>Recipe List</h1>
			<ul>
				{recipes.map((recipe, index) => (
					<li key={index}>
						<Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecipeList;
