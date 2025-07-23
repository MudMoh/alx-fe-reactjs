import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
	const recipe = useRecipeStore((state) =>
		state.recipes.find((recipe) => recipe.id === recipeId)
	);

	const [title, setTitle] = useState(recipe.title);
	const [description, setDescription] = useState(recipe.description);

	const handleSubmit = (event) => {
		event.preventDefault();
		useRecipeStore
			.getState()
			.updateRecipe({ id: recipeId, title, description });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
					type="text"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</label>
			<label>
				Description:
				<textarea
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
			</label>
			<button type="submit">Save Changes</button>
		</form>
	);
};

export default EditRecipeForm;
