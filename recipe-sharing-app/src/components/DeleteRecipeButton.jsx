import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
	const navigate = useNavigate();

	const handleDelete = () => {
		useRecipeStore.getState().deleteRecipe(recipeId);
		navigate("/recipes");
	};

	return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
